import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { selectSelectedGroupLength } from '../selectors';

import GroupOffer from '../components/GroupOffer';

import groupOfferValidate from '../helpers/groupOfferValidate';

const GroupOfferForm = reduxForm({
  form: 'GroupOffer_form',
  validate: groupOfferValidate,
})(GroupOffer);

const mapStateToProps = createStructuredSelector({
  groupLength: selectSelectedGroupLength,
});

export default connect(mapStateToProps)(GroupOfferForm);
