import React from 'react';
import {
  Button,
  List,
  Container,
  Loader,
  Checkbox,
  Image,
} from 'semantic-ui-react';
/*import GroupOffer from '../../containers/GroupOfferContainer';*/
import { withRouter } from 'react-router-dom';
import imgPath from '../../assets/emptyCart.jpg';
import './style.css';

const Cart = ({
  isRequesting,
  cart,
  type,
  isGroupOffering,
  createGroupOffer,
  addToGroupOffer,
  removeFromGroupOffer,
  classes,
  groupOffer,
  messages,
  formatMessage,
  sendOffer,
  successMessage,
  location,
  lastOfferedId,
  removeFromCart,
}) => {
  let svgString =
    '                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
    '\t viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">\n' +
    '            <style type="text/css">\n' +
    '             </style>\n' +
    '            <path class="check" d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314\n' +
    '              c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042\n' +
    '              c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578"/>\n' +
    '          </svg>';
  const path = type === 'content_owner' ? '/audience' : '/contentowner';
  const { from } = location.state || { from: { pathname: path } };
  const Success = withRouter(({ history }) => (
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
  ));
  return isRequesting ? (
    <Loader active inline="centered" size="huge" className={classes.loading}>
      {formatMessage(messages.loading)}
    </Loader>
  ) : (
    <div>
      {cart.length === 0 ? (
        <div className={classes.emptyCartMessage}>
          <Image src={imgPath} />
          <span>{formatMessage(messages.emptyCartMessage)}</span>
          <span className={classes.emptyCartSubMessage}>
            {formatMessage(messages.emptyCartSubMessage)}
          </span>
        </div>
      ) : (
        <Container>
          {successMessage !== '' ? (
            <Success />
          ) : (
            <List divided verticalAlign="middle">
              {cart.map(item => (
                <List.Item key={item.id}>
                  <List.Content floated="right">
                    <Button color="twitter" onClick={() => sendOffer(item)}>
                      {formatMessage(messages.makeSingleOffer)}
                    </Button>
                    {/*                  <Modal
                    className={classes.modal}
                    centered
                    dimmer
                    trigger={
                      <Button color="twitter">
                        {formatMessage(messages.makeSingleOffer)}
                      </Button>
                    }
                  >
                    <GroupOffer singleOffer={true} />
                  </Modal>*/}
                  </List.Content>
                  {/*                <Link
                  to={`/${type === 'audience_owner' ? 'channel' : 'content'}/${
                    item.id
                  }`}
                >*/}
                  <List.Content>
                    {isGroupOffering ? (
                      <Checkbox
                        label={item.title}
                        onChange={(e, data) =>
                          data.checked
                            ? addToGroupOffer(item.id)
                            : removeFromGroupOffer(item.id)
                        }
                      />
                    ) : (
                      item.title
                    )}
                  </List.Content>
                  {/*                </Link>*/}
                </List.Item>
              ))}
            </List>
          )}
        </Container>
      )}
    </div>
  );
};

export default Cart;
