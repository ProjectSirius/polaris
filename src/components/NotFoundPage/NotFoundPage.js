import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div id="clouds">
        <div className={`${classes.cloud} ${classes.x1}`} />
        <div className={`${classes.cloud} ${classes.x5}`} />
        <div className={`${classes.cloud} ${classes.x2}`} />
        <div className={`${classes.cloud} ${classes.x3}`} />
        <div className={`${classes.cloud} ${classes.x4}`} />
        <div className={`${classes.cloud} ${classes.x5}`} />
      </div>
      <div className={classes.c}>
        <div className={classes._404}> 404 </div>
        <hr className={classes.hr} />
        <div className={classes._1}>THE PAGE</div>
        <div className={classes._2}>WAS NOT FOUND</div>
        <Link to="/" className={classes.btn}>
          BACK TO POLARIS
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
