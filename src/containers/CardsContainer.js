import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectData,
  selectIsRequesting,
  selectIsAuth,
  selectCurrentUser,
} from '../selectors';

import { getData } from '../actions';

import Cards from '../components/Cards';

class FilterBarContainer extends React.Component {
  componentDidMount() {
    const { isAuth, currentUser } = this.props;

    const dataType = isAuth
      ? currentUser.userType === 'content_owner'
        ? 'channels'
        : 'contents'
      : '';

    this.props.getData(dataType, '');
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
    const { data, isRequesting } = this.props;
    return (
      <div>
        <Cards data={data} isRequesting={isRequesting} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectData,
  isRequesting: selectIsRequesting,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  getData: dataType => dispatch(getData(dataType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBarContainer);
