import React from 'react';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Icon,
  Label,
  Feed,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Notifications = ({ notifs, classes }) => (
  <Dropdown
    scrolling
    pointing="top"
    compact
    icon={null}
    trigger={
      <React.Fragment>
        <Icon name="bell outline" />
        Notifications{' '}
        <Label color="teal" size="mini">
          {notifs.length}
        </Label>
      </React.Fragment>
    }
    className={classes.dropdownParent}
  >
    <Dropdown.Menu className={classes.dropdownMenu}>
      {notifs.map(({ body, id }) => (
        <DropdownItem key={id} id={id}>
          <Feed>
            <Feed.Event
              as={Link}
              to={`/users/${id}`}
              className={classes.notifWrapper}
              icon="pencil"
              date="today"
              summary={body}
            />
            <DropdownDivider />
          </Feed>
        </DropdownItem>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default Notifications;
