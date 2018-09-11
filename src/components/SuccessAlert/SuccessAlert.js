import React from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';

const svgString =
  '                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
  '\t viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">\n' +
  '            <style type="text/css">\n' +
  '             </style>\n' +
  '            <path class="check" d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314\n' +
  '              c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042\n' +
  '              c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578"/>\n' +
  '          </svg>';

const SuccessAlert = withRouter(
  ({ history, removeFromCart, lastOfferedId, from }) => (
    <div
      onClick={() => {
        removeFromCart(lastOfferedId);
        history.push(from);
      }}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <div className="smaller">
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
      </div>
    </div>
  )
);

export default SuccessAlert;
