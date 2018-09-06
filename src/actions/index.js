import signUp from './signUp';
import changeLang from './lang';
import login from './login';
import logOut from './logOut';
import filterBar from './filter-bar';
import rating from './rating';
import toggleMenu from './main-menu';
import getData from './data';
import { addTags, removeTags } from './tags';
import sendData from './sendData';
import setFilters from './filters';
import filterMenu from './filter-menu';
import getNotif from './notif';
import getTransactions from './getTransactions';
import getDetails from './details';
import {
  addToGroupOffer,
  removeFromGroupOffer,
  createGroupOffer,
} from './groupOffer';
import getGenres, { toggleGenre } from './genres';
import getOffers from './getOffers';
import { cart, addToCart, removeFromCart } from './cart';
import { editRequest } from './edit';
import delData from './delData';
import addAddress from './newDataAddress';
import sendOffer from './sendOffer';
import { acceptOffer, declineOffer } from './offer';

export {
  signUp,
  changeLang,
  login,
  toggleMenu,
  logOut,
  filterBar,
  rating,
  getData,
  addTags,
  removeTags,
  sendData,
  setFilters,
  filterMenu,
  getNotif,
  getTransactions,
  getDetails,
  editRequest,
  addToGroupOffer,
  removeFromGroupOffer,
  getGenres,
  toggleGenre,
  getOffers,
  cart,
  createGroupOffer,
  addToCart,
  removeFromCart,
  delData,
  addAddress,
  sendOffer,
  acceptOffer,
  declineOffer,
};
