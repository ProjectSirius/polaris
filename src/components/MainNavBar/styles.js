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

  mainLogo: {
    height: '35px',
  },

  mainNavTitle: {
    cursor: 'pointer',
    WebkitUserSelect: 'none' /* Chrome all / Safari all */,
    MozUserSelect: 'none' /* Firefox all */,
    MsUserSelect: 'none' /* IE 10+ */,
    userSelect: 'none' /* Likely future */,
    '& > a': {
      textDecoration: 'none',
    },
  },

  /*
 * hamburger
 */
  hamburger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '120px',
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
  },

  /*
 * languages
 */
  languagesWrapper: {
    display: 'flex',
    width: '100px',
    justifyContent: 'flex-end',
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
    zIndex: 3,
  },

  mainNavRight: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
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
    display: 'flex',
    width: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#000',
    fontWeight: '700',

    height: '60px !important',

    '&:hover': {
      borderBottom: '2px solid #d9534f !important',
      marginTop: '2px',
    },
  },

  navLinkLogin: {
    marginRight: '20px',
  },

  authSmall: {
    display: 'none',
  },

  navLinksAuth: {
    width: '120px',
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
    background: '#FF5A5F',
    color: '#fff',
    fontWeight: '700',
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover': {
      background: '#d9534f',
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
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#000',
    fontWeight: '700',

    height: '60px !important',

    '&:hover': {
      borderBottom: '2px solid #d9534f !important',
      marginTop: '2px',
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
    mainNav: {
      flexDirection: 'column',
      padding: '0',
    },

    mainNavRight: {
      width: '100%',
      justifyContent: 'center',
    },

    languagesWrapper: {
      width: '100%',
      '& > div': {
        width: '100%',
        height: '100%',
        '& > div': {
          width: '100%',
          height: '100%',
          '& > button, & > ul': {
            width: '100%',
            height: '100%',
          },
        },
      },
    },

    navLinks: {
      flexDirection: 'column',
      width: '100%',
      height: 'auto',
    },

    navLinksAuth: {
      flexDirection: 'column',
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

  '@media screen and (max-width: 500px)': {
    authBig: {
      display: 'none',
    },

    authSmall: {
      display: 'block',
      width: '100%',
    },

    navLinkLogout: {
      width: '100%',
    },

    navLinksAuth: {
      width: '100%',
    },

    mainNav: {
      flexDirection: 'column',
      padding: '0',
    },

    mainLogo: {
      textAlign: 'right',
      height: '30px',
    },

    mainNavTitleWrapper: {
      width: 'auto',
      marginRight: '10px',
    },

    topNav: { padding: 0 },
  },
};
