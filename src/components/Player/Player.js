import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

const format2Number = num => {
  let str = num + '';
  if (str.length === 1) {
    return '0' + str;
  }
  if (str.length === 0) {
    return '00';
  }
  return str;
};

const formatTime = s => {
  if (!s && s !== 0) {
    return '??:??';
  }

  let total_seconds = Math.floor(s);
  let hours = Math.floor(total_seconds / 3600);
  let minutes = Math.floor(total_seconds / 60) - hours * 60;
  let seconds = total_seconds - minutes * 60 - hours * 3600;

  if (hours) {
    return hours + ':' + format2Number(minutes) + ':' + format2Number(seconds);
  }

  return format2Number(minutes) + ':' + format2Number(seconds);
};

const offsetLeft = el => {
  let left = 0;
  while (el && el !== document) {
    left += el.offsetLeft;
    el = el.offsetParent;
  }
  return left;
};

const classnames = obj => {
  let css = [];
  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      css.push(key);
    }
  });
  return css.join(' ');
};

class Player extends Component {
  constructor() {
    super();

    this.state = {
      is_playing: false,
      progress: 0,
      in_set_progress_mode: false,
    };

    this.is_progress_dirty = false;
    this.interval_id = setInterval(this.onUpdate.bind(this), 250);
  }
  onUpdate() {
    if (this._player) {
      if (!this.is_progress_dirty) {
        this.setState({
          progress: this._player.currentTime / this._player.duration,
        });
      }

      if (this._player.ended && this.props.onDone) {
        this.props.onDone(this.props.src);
      }
    }
  }
  togglePlay() {
    this.setState({ is_playing: !this.state.is_playing });
  }
  startSetProgress(evt) {
    this.setState({
      in_set_progress_mode: true,
    });
    this.setProgress(evt);
  }
  stopSetProgress(evt) {
    this.setState({
      in_set_progress_mode: false,
    });
    this.setProgress(evt);
  }
  setProgress(evt) {
    if (this.state.in_set_progress_mode) {
      let progress =
        (evt.clientX - offsetLeft(this._progress_bar)) /
        this._progress_bar.clientWidth;
      this.setState({
        progress: progress,
      });
      this.is_progress_dirty = true;
    }
  }
  render() {
    let currentTime = 0;
    let totalTime = 0;

    if (this._player) {
      if (this._player.currentSrc !== this.props.src) {
        this._player.src = this.props.src;
      }

      if (this._player.paused && !this._player.ended) {
        if (this.state.is_playing) {
          this._player.play();
        }
      } else if (!this.state.is_playing) {
        this._player.pause();
      }

      if (this.is_progress_dirty) {
        this.is_progress_dirty = false;

        this._player.currentTime = this._player.duration * this.state.progress;
      }

      currentTime = this._player.currentTime;
      totalTime = this._player.duration;
    }

    let playerClsName = {
      play: true,
      play: !this.state.is_playing,
      pause: this.state.is_playing,
    };
    const { classes } = this.props;

    return (
      <div className={classes.player}>
        <div className={classes.controls}>
          <a onClick={this.togglePlay.bind(this)}>
            <Icon name={classnames(playerClsName)} />
          </a>
        </div>
        <div
          onMouseDown={this.startSetProgress.bind(this)}
          onMouseMove={this.setProgress.bind(this)}
          onMouseLeave={this.stopSetProgress.bind(this)}
          onMouseUp={this.stopSetProgress.bind(this)}
          className={classes.progress}
        >
          <div ref={ref => (this._progress_bar = ref)} className={classes.bar}>
            <div style={{ width: this.state.progress * 100 + '%' }} />
          </div>
        </div>
        <div className={classes.time}>
          {formatTime(currentTime)} / {formatTime(totalTime)}
        </div>
        <audio
          ref={ref => {
            return (this._player = ref);
          }}
          autoPlay={this.state.is_playing}
        >
          <source src={this.props.src} />
          <source />
        </audio>
      </div>
    );
  }
}

export default Player;
