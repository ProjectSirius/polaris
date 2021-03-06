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
import imgPath from '../../assets/emptyCart.jpg';
import SuccessAlert from '../../containers/SuccessAlertContainer';

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
}) => {
  const path = type === 'content_owner' ? '/audience' : '/contentowner';
  const { from } = location.state || { from: { pathname: path } };

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
            <SuccessAlert from={from} />
          ) : (
            <List divided verticalAlign="middle">
              {cart.map(item => (
                <List.Item key={item.id}>
                  <List.Content floated="right">
                    <Button
                      className={classes.btn}
                      onClick={() => sendOffer(item)}
                    >
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
