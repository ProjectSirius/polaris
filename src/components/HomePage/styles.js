export default {
  '@global html ,body, #root, .App': {
    height: '100vh',
    fontSize: '75%',
  },
  '@global body': {
    padding: '0',
  },
  //-----Main section-----
  //top
  topSection: {
    minHeight: '60rem',
    background:
      'url(http://hdwallpapersbackgrounds.us/backgrounds-image/wallpapers-hd-3s-1600x900/hd-wallpapers-39089d881-3s-1600x900.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: '#9cc4e2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > h1': {
      fontSize: '9rem',
      lineHeight: '9rem',
      color: '#fff',
    },
  },
  //main 2 section
  textBlock: {
    background: '#fcf5ec',
    textAlign: 'center',
    padding: '10rem 0',
  },
  textBlockInner: {
    '& > h2': {
      color: '#000',
      fontSize: '4rem',
      lineHeight: '4.5rem',
      margin: '0 auto 3rem auto',
    },
    '& > p': {
      fontSize: '3rem',
      lineHeight: '3.5rem',
      width: '90%',
      maxWidth: '1200px',
      color: '#808080',
      margin: 'auto',
    },
  },
  //main 3 section
  blockTeaser: {
    backgroundColor: '#f69979',
    height: '100%',
  },

  wrap: {
    display: 'flex',
    color: '#000',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    position: 'relative',
  },

  leftText: {
    width: '50%',
    padding: '4rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  leftTextInner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '75%',
    paddingRight: '20%',
    alignItems: 'center',
    color: '#000',
    '& > h3': {
      fontWeight: 'bold',
      fontSize: '4rem',
      lineHeight: '4.5rem',
      marginBottom: '2rem',
      maxWidth: '50rem',
    },
    '& > p': {
      fontFamily: 'gt-walsheim-regular , sans-serif',
      fontWeight: 'normal',
      fontSize: '2rem',
      lineHeight: '2.5rem',
      marginBottom: '3rem',
    },
  },

  rightImg: {
    backgroundImage: 'url(https://wallpapercave.com/wp/bPTxuKj.jpg)',
    width: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    paddingBottom: '36.15%',
    minHeight: '50vw',
  },
  //main 4 section
  yellowSection: {
    backgroundColor: '#fac450',
    backgroundImage:
      'url(https://rec.uoregon.edu/sites/rec1.uoregon.edu/files/envelope-backgrounds/bg-yellow-3.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    width: '100%',
    padding: '15rem 0',
    overflow: 'hidden',
    position: 'relative',
    '& >  h3': {
      fontFamily: 'gt-walsheim-bold, sans-serif',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '3.5rem',
      lineHeight: '4rem',
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto 0 auto',
      color: '#000',
      zIndex: '5',
      position: 'relative',
    },
    '& >  p': {
      textAlign: 'center',
      fontFamily: 'gt-walsheim-regular, sans-serif',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '2rem',
      lineHeight: '2.5rem',
      color: '#000',
      margin: '2rem auto 0 auto',
      zIndex: '5',
      position: 'relative',
      width: '90%',
      maxWidth: '1200px',
    },
  },
  //main 5 section
  section5: {
    background: '#fcf5ec',
    padding: '15rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  wrapper: {
    maxWidth: '1000px',
    width: '90%',
    margin: 'auto',
  },
  introduction: {
    textAlign: 'center',
    marginBottom: '10rem',
    '& >  h2': {
      fontSize: '4rem',
      lineHeight: '4.5rem',
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto 2rem auto',
      color: '#000',
    },
    '& >  p': {
      fontSize: '2.25rem',
      lineHeight: '3rem',
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto ',
      color: '#808080',
    },
  },
  teaser: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10rem',
    color: '#000',
    '&:nth-of-type(odd) .teaser-Img': {
      order: '1',
    },
    '&:nth-of-type(even) .teaser-Img': {
      order: '2',
    },
    '&:nth-of-type(odd) .teaser-info ': {
      order: '2',
      color: 'red',
    },
    '&:nth-of-type(even) .teaser-info ': {
      order: '1',
    },
  },
  teaserImage: {
    width: '25vw',
    height: '25vw',
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '6px solid #fac450',
    fontSize: '200px',
    color: '#065075',
  },

  teaserCopy: {
    width: '50%',
    '& > h3': {
      fontSize: '4rem',
      lineHeight: '4.5rem',
      marginBottom: '2rem',
      color: '#f69979',
    },
    '& > p': {
      fontSize: '2rem',
      lineHeight: '3rem',
      marginBottom: '0',
      color: 'gray',
      maxWidth: '45rem',
    },
  },
  leftRight: {
    background: '#fcf5ec',
    padding: '0 0 15rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  leftRightInner: {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    zIndex: '10',
    position: 'relative',
    '& > h3': {
      fontSize: '4rem',
      lineHeight: '4.5rem',
      width: '50%',
      color: '#f69979',
      backgroundImage:
        'url(http://www.emilyhirsh.com/wp-content/uploads/2016/07/gray-arrow.png) ',
      backgroundSize: '20%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 10rem',
      paddingRight: '2rem',
    },
  },
  leftRightList: {
    width: '50%',
    border: '6px solid #f69979',
    padding: '2.5rem 5rem 1rem 5rem',
    '& > ul': {
      paddingLeft: '2rem',
      fontSize: '1.6666666667rem',
      lineHeight: '2.25rem',
      color: 'gray',
      marginBottom: '2rem',
      '& li': {
        marginBottom: '.5rem',
      },
    },
    '& p': {
      fontSize: '1.6666666667rem',
      lineHeight: '2.25rem',
      color: 'gray',
      marginBottom: '2rem',
    },
  },
  //section6
  callToAction: {
    background:
      '#91b35c  url(https://www.noknok.com/demo/m/img/bg/bg_tri_bot.png) no-repeat center bottom',
    padding: '15rem 0 30rem 0',
    backgroundSize: '80%',
  },
  callWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    maxWidth: '1500px',
    zIndex: '10',
    position: 'relative',
  },
  colA: {
    width: '33%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& > h4': {
      fontSize: '3rem',
      lineHeight: '4rem',
      marginBottom: '2rem',
    },
    '& > p': {
      fontSize: '1.6rem',
      lineHeight: '2.25rem',
      marginBottom: '2.5rem',
      maxWidth: '30rem',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& > a': {
      marginTop: 'auto',
      alignSelf: 'center',
      transition: 'all 450ms cubic-bezier(0.19, 1, 0.22, 1)',
      border: 'none',
      outline: 'none',
      minWidth: '20rem',
      background: '#272c30',
      fontSize: '1.333rem',
      lineHeight: '1.5rem',
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'inline-block',
      textAlign: 'center',
      padding: '1.75rem 4rem',
      cursor: 'pointer',
      borderRadius: 0,
    },
  },
  //Footer
  mainFooter: {
    padding: '9rem 0',
    background: '#272c30',
  },
  fwrap: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    maxWidth: '1500px',
    zIndex: '10',
    position: 'relative',
  },
  footerBrand: {
    width: '50%',
    '& > h3': {
      color: '#fff',
      fontSize: '4.5rem',
      lineHeight: '5.5rem',
      margin: '0',
    },
  },
  footerNav: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '1rem',
  },
  col: {
    '& >h4': {
      color: 'rgba(255,255,255,0.5)',
      fontSize: '1.333rem',
      lineHeight: '1.5rem',
      margin: '0 0 2rem 0',
      textTransform: 'uppercase',
    },
    '& > ul': {
      margin: '0',
      padding: '0',
      listStyleType: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      '& li': {
        marginBottom: '1rem',
        '& a': {
          color: '#fff',
          textDecoration: 'none',
        },
      },
    },
  },

  //@MEDIA
  '@media (min-width: 2000px)': {
    topSection: {
      minHeight: '75rem',
      '& > div > h1': {
        fontSize: '14rem',
        lineHeight: '14rem',
      },
    },
  },
  '@media (max-width: 1440px)': {
    // media section1
    topSection: {
      minHeight: '50rem',
      '& > h1': {
        fontSize: '9rem',
        lineHeight: '9rem',
      },
    },
    //media section2
    textBlock: {
      padding: '10rem 0',
    },
    textBlockInner: {
      '& > h2': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      '& > p': {
        fontSize: '2.25rem',
        lineHeight: '3rem',
        maxWidth: '1000px',
      },
    },
    leftRight: {
      padding: '0 0 10rem 0',
    },
    leftTextInner: {
      width: '90%',
      paddingRight: '10%',

      '& > h3': {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
      '& > p': {
        fontSize: '1.75rem',
        lineHeight: '2.25rem',
      },
    },
    rightImg: {
      minHeight: '40vw',
    },
    // media section 5
    section5: {
      padding: '10rem 0',
    },
    wrapper: {
      maxWidth: '900px',
    },
    introduction: {
      '& >  h2': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      '& >  p': {
        fontSize: '2rem',
        lineHeight: '3rem',
      },
    },
    teaserCopy: {
      '& > h3': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
        marginBottom: '1rem',
      },
      '& > p': {
        fontSize: '1.75rem',
        lineHeight: '2em',
        maxWidth: '100%',
      },
    },
    leftRightInner: {
      maxWidth: '1000px',
      '& > h3': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
    },
    //section 6
    callToAction: {
      padding: '10rem 0 30rem 0',
    },
    colA: {
      '& > h4': {
        fontSize: '2.5rem',
        lineHeight: '3.5rem',
        marginBottom: '1rem',
      },
      '& > a': {
        minWidth: '15rem',
      },
    },
  },
  '@media (max-width: 1300px)': {
    rightImg: {
      minHeight: '45vw',
    },
  },
  '@media (max-width: 1200px)': {
    rightImg: {
      minHeight: '55vw',
    },
  },
  '@media (max-width: 1024px)': {
    topSection: {
      minHeight: '40rem',
      backgroundSize: '115%',
      '& > h1': {
        fontSize: '7rem',
        lineHeight: '7rem',
      },
    },
    textBlock: {
      padding: '5rem 0',
    },
    textBlockInner: {
      '& > h2': {
        fontSize: '2.5rem',
        lineHeight: '2.5rem',
        margin: '0 auto 1rem auto',
        width: '80%',
      },
      '& > p': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        maxWidth: '1000px',
      },
    },
    leftRight: {
      padding: '0 0 5rem 0',
    },
    leftTextInner: {
      '& > h3': {
        fontSize: '2.5rem',
        lineHeight: '2.5rem',
      },
      '& > p': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        marginBottom: '2rem',
      },
    },
    rightImg: {
      minHeight: '50vw',
      paddingBottom: '50%',
    },
    //section 5
    section5: {
      padding: '5rem 0',
    },
    wrapper: {
      maxWidth: '800px',
    },
    introduction: {
      marginBottom: '5rem',
      '& >  h2': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      '& >  p': {
        fontSize: '2rem',
        lineHeight: '3rem',
      },
    },
    teaserCopy: {
      '& > h3': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
        marginBottom: '1rem',
      },
      '& > p': {
        fontSize: '1.75rem',
        lineHeight: '2rem',
        maxWidth: '100%',
      },
    },
    leftRightInner: {
      maxWidth: '1000px',
      '& > h3': {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
    },
    leftRightList: {
      '& > ul': {
        paddingLeft: '2rem',
        fontSize: '1.2rem',
        lineHeight: '2rem',
      },
      '& p': {
        fontSize: '1.2rem',
        lineHeight: '2rem',
        marginBottom: '1rem',
      },
    },

    //section 6
    callToAction: {
      padding: '5rem 0 25rem 0',
      backgroundSize: 'contain',
    },
    colA: {
      '& > h4': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        marginBottom: '1rem',
      },
      '& > p': {
        width: '100%',
        maxWidth: '100%',
        margin: '0 0 2rem 0',
      },
      '& > a': {
        minWidth: '10rem',
        padding: '1.5rem 2rem',
      },
    },
    //footer
    mainFooter: {
      padding: '5rem 0 0 0',
    },
    footerBrand: {
      width: '40%',
      '& > h3': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
    },
    footerNav: {
      width: '60%',
    },
    col: {
      '& > ul': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        '& li': {
          margin: '0rem',
          '& a': {
            color: '#fff',
            textDecoration: 'none',
          },
        },
      },
    },
  },
  '@media (max-width: 767px)': {
    topSection: {
      minHeight: '25rem',
      backgroundPosition: 'bottom',
      '& > h1': {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
    },
    textBlockInner: {
      '& > h2': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        margin: '0 auto 1rem auto',
        '& > br': {
          display: 'none',
        },
      },
      '& > p': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        maxWidth: '80%',
      },
    },

    wrap: {
      flexDirection: 'column',
    },
    leftText: {
      width: '80%',
      order: '2',
    },
    leftTextInner: {
      width: '100%',
      paddingRight: '0',
      textAlign: 'center',
      '& > h3': {
        marginBottom: '1rem',
        fontSize: '2rem',
      },
    },
    rightImg: {
      minHeight: '50vw',
      paddingBottom: '50%',
      order: '1',
      width: '100%',
    },
    //media section 5
    introduction: {
      '& >  h2': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
      '& >  p': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
    },
    teaser: {
      flexDirection: 'column',
      textAlign: 'center',

      '&:nth-of-type(odd) .teaser-Img': {
        order: '1',
      },
      '&:nth-of-type(even) .teaser-Img': {
        order: '1',
      },
      '&:nth-of-type(odd) .teaser-info ': {
        order: '1',
      },
      '&:nth-of-type(even) .teaser-info ': {
        order: '1',
      },
    },
    teaserImage: {
      width: '50vw',
      height: '50vw',
    },
    teaserCopy: {
      marginTop: '3rem',
      '& > h3': {
        fontSize: '2rem',
        lineHeight: '2rem',
        marginBottom: '1rem',
      },
      '& > p': {
        fontSize: '1.5rem',
        lineHeight: '1.5em',
        maxWidth: '100%',
      },
    },
    leftRightInner: {
      '& > h3': {
        width: '100%',
        marginBottom: '3rem',
        background: 'none',
        textAlign: 'center',
      },
    },
    leftRightList: {
      width: '100%',
      padding: '2.5rem 2.5rem 1rem 2.5rem',
    },
    //section 6
    callToAction: {
      padding: '5rem 0 6rem 0;',
    },
    callWrap: {
      width: '80%',
    },
    colA: {
      width: '80%',
      textAlign: 'left',
      marginBottom: '5rem',
      '& > h4': {
        textAlign: 'center',
      },
      '& > p': {
        textAlign: 'center',
      },
      '& > a': {
        width: '100%',
      },
    },
    //footer
    mainFooter: {
      padding: '3rem 0',
    },
    fwrap: {
      paddingBottom: '3rem',
    },
    footerBrand: {
      display: 'none',
    },
    footerNav: {
      width: '100%',
      flexDirection: 'column',
      paddingTop: '0',
    },
    col: {
      padding: '0 0 2rem 0',
      '& > h4': {
        margin: '0 0 1rem 0',
      },
      '& > ul': {
        '& li': {
          margin: '0rem',
        },
      },
    },
  },
};
