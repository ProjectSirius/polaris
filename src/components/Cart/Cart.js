import React from 'react';
import {
  Button,
  List,
  Container,
  Loader,
  Checkbox,
  Modal,
} from 'semantic-ui-react';
import GroupOffer from '../../containers/GroupOfferContainer';

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
}) => {
  return isRequesting ? (
    <Loader active inline="centered" size="huge" className={classes.loading}>
      Loading
    </Loader>
  ) : (
    <div>
      {cart.length === 0 ? (
        <span className={classes.emptyCartMessage}>Your cart is empty</span>
      ) : (
        <Container>
          {isGroupOffering ? (
            <Modal
              className={classes.modal}
              centered
              dimmer
              trigger={
                <Button
                  color="twitter"
                  disabled={!!!groupOffer.selectedIds.length}
                >
                  Make group offer
                </Button>
              }
            >
              <GroupOffer singleOffer={false} />
            </Modal>
          ) : (
            <Button color="twitter" onClick={createGroupOffer}>
              Create group offer
            </Button>
          )}
          <List divided verticalAlign="middle">
            {cart.map(item => (
              <List.Item key={item.id}>
                <List.Content floated="right">
                  <Modal
                    className={classes.modal}
                    centered
                    dimmer
                    trigger={<Button color="twitter">Make single offer</Button>}
                  >
                    <GroupOffer singleOffer={true} />
                  </Modal>
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
        </Container>
      )}
    </div>
  );
};

export default Cart;
