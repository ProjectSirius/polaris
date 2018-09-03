import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { selectCartLength } from '../selectors';

import GroupOffer from '../components/GroupOffer';

import groupOfferValidate from '../helpers/groupOfferValidate';

const GroupOfferForm = reduxForm({
  form: 'GroupOffer_form',
  validate: groupOfferValidate,
})(GroupOffer);

const mapStateToProps = createStructuredSelector({
  groupLength: selectCartLength,
});

export default connect(mapStateToProps)(GroupOfferForm);
