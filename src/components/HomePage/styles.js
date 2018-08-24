export default {
  '@global html ,body, #root, .App': {
    height: '100%',
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
    backgroundImage:
      'url(https://3o69gd4d4mqa1l7ar9qgm7xh-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/mebe-home-2560x1105.jpg)',
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
    backgroundImage:
      'url(https://3o69gd4d4mqa1l7ar9qgm7xh-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Stocksy_txp382ce464N72200_Small_1723990.jpg)',
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
    display: 'block',
    backgroundImage:
      'url(https://3o69gd4d4mqa1l7ar9qgm7xh-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Stocksy_txp382ce464N72200_Small_1336475.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    border: '6px solid #fac450',
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
  },
};
