export default {
  mainNavHeader: {
    height: '61px',
  },

  /*
 * top nav
 */

  topNav: {
    position: 'relative',
    zIndex: '10',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '20px',

    borderBottom: '1px solid #e6eaea',
    background: '#f4f7f6',
  },

  mainNavTitle: {
    cursor: 'pointer',
    WebkitUserSelect: 'none' /* Chrome all / Safari all */,
    MozUserSelect: 'none' /* Firefox all */,
    MsUserSelect: 'none' /* IE 10+ */,
    userSelect: 'none' /* Likely future */,
  },

  /*
 * hamburger
 */
  hamburger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    minWidth: '100px',
    minHeight: '60px',
    borderRight: '1px solid #e6eaea',
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover': {
      background: '#fff',
    },
  },

  hamburgerTitle: {
    marginLeft: '10px',
    marginTop: '3px',
    fontWeight: '700',
  },

  /*
 * languages
 */
  languagesWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '15%',
  },

  languages: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60px',
  },

  /*
 * main nav
 */
  mainNav: {
    position: 'relative',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    borderBottom: '1px solid #e6eaea',
    background: '#f4f7f6',
    transform: 'translateY(-400px)',
    transition: 'all 0.8s',
  },

  mainNavOpened: {
    transform: 'translateY(0)',
  },

  /*
 * nav links
 */
  navLinks: {
    width: '50%',
    height: '50px',

    display: 'flex',
    alignItems: 'center',
  },

  navLink: {
    margin: '5px',
    color: '#212121',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  navLinkLogin: {
    marginRight: '20px',
  },

  navLinksAuth: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '60px',
  },

  navLinkAuth: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
    height: '100%',
    width: '120px',
    background: '#49c5b6',
    color: '#fff',
    fontWeight: '700',
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover': {
      background: '#42ab9e',
    },

    '& > a': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
  },

  navLinkLogout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    cursor: 'pointer',
    color: '#fff',
    fontWeight: '700',

    height: '60px !important',
    background: '#49c5b6',
    transition: '0.5s',
    border: '#49c5b6',
    borderRadius: '0',

    '&:hover': {
      background: '#7cc0b8 !important',
    },
  },

  /*
* logo
*/
  mainNavTitleWrapper: {
    width: '80%',
    minWidth: '100px',

    textAlign: 'center',
    fontSize: '30px',
    lineHeight: '1',

    '& > a': {
      textDecoration: 'none',
      color: '#212121',
    },
  },

  /*
 * media
 */
  '@media screen and (max-width: 640px)': {
    mainNav: { flexDirection: 'column', padding: '0' },

    navLinks: {
      flexDirection: 'column',
      width: '100%',
      height: 'auto',
    },

    navLinksAuth: {
      flexDirection: 'column',
      width: '100%',
      height: 'auto',
    },

    navLink: {
      fontSize: '12px',
      width: '100%',
      margin: '0',
      borderBottom: '1px solid #e6eaea',
      color: '#212121',
      transition: '0.5s',

      '&:hover': {
        background: '#fff',
      },

      '& a': {
        display: 'block',
        padding: '14px 0',
        width: '100%',
      },
    },

    navLinkLogout: {
      width: '100%',
    },

    dropDownBtn: {
      width: '100%',
      margin: '0',
      padding: '0',
      textAlign: 'center',

      '& > div': {
        width: '100%',
      },

      '& button': {
        width: '100%',
      },

      '& ul > li > a': {
        padding: '14px 0',
      },
    },
  },
};
