import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectData,
  selectIsRequesting,
  selectIsAuth,
  selectCurrentUser,
  selectFilteringPageFilterBar,
} from '../selectors';

import { getData } from '../actions';

import Cards from '../components/Cards';

class FilterBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const { isAuth, currentUser } = this.props;

    const dataType = isAuth
      ? currentUser.userType === 'content_owner'
        ? 'channels'
        : 'contents'
      : '';

    this.props.getData(dataType, '');
    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      const { isAuth, currentUser } = this.props;

      const dataType = isAuth
        ? currentUser.userType === 'content_owner'
          ? 'channels'
          : 'contents'
        : '';

      this.props.getData(dataType, '');
    }
  }

  render() {
    const { data, isRequesting, view } = this.props;

    return (
      <div>
        <Cards data={data} isRequesting={isRequesting} view={view} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectData,
  isRequesting: selectIsRequesting,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  view: selectFilteringPageFilterBar,
});

const mapDispatchToProps = dispatch => ({
  getData: dataType => dispatch(getData(dataType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBarContainer);
