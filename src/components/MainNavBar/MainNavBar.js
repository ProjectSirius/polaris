import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import {
  Menu,
  Icon,
  Label,
  Dropdown,
  Grid,
  Responsive,
} from 'semantic-ui-react';

const messages = defineMessages({
  audience: {
    id: 'audience',
    defaultMessage: 'Audience',
  },

  content: {
    id: 'content',
    defaultMessage: 'Content',
  },

  closeMessage: {
    id: 'close-message',
    defaultMessage: 'CLOSE',
  },

  menu: {
    id: 'menu',
    defaultMessage: 'MENU',
  },

  langRu: {
    id: 'ru',
    defaultMessage: 'Русский',
  },

  langEn: {
    id: 'en',
    defaultMessage: 'English',
  },

  logOut: {
    id: 'log-out',
    defaultMessage: 'Log out',
  },

  projectTitle: {
    id: 'project-title',
    defaultMessage: 'Polaris',
  },
});

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: '',
      width: window.width,
      height: window.height,
    };

    this.menuToggler = this.menuToggler.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.navItemChecker = this.navItemChecker.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  navItemChecker(e, { name }) {
    this.setState({ activeItem: name });
  }

  menuToggler() {
    const { toggleMenu, isOpen } = this.props;

    toggleMenu(!isOpen);
  }

  handleLogOut(name) {
    const { logOut } = this.props;

    this.setState({ activeItem: name });
    logOut();
  }

  render() {
    const {
      isOpen,
      isAuth,
      classes,
      intl: { formatMessage },
      currentUser,
    } = this.props;
    const { activeItem, width } = this.state;

    return (
      <React.Fragment>
        {width < 768 && (
          <Menu
            className={classes.smallScreenMenu}
            pointing
            secondary
            size="huge"
            fixed="true"
            stackable
          >
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column floated="left">
                  <Menu.Item
                    name=""
                    onClick={this.navItemChecker}
                    as={Link}
                    to="/"
                    className={classes.mainTitle}
                  >
                    <Icon name="home" />
                    {formatMessage(messages.projectTitle)}
                  </Menu.Item>
                </Grid.Column>
                <Grid.Column floated="right" textAlign="right">
                  <Menu.Item position="right">
                    <Grid.Column floated="right" textAlign="right">
                      <Icon
                        name="bars"
                        className={classes.hamburger}
                        onClick={this.menuToggler}
                      />
                    </Grid.Column>
                  </Menu.Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Menu>
        )}{' '}
        {(isOpen || width > 768) && (
          <Menu
            className={classes.mainNavBar}
            pointing
            secondary
            size="huge"
            fixed="true"
            stackable
          >
            <Responsive minWidth="768">
              <Menu.Item
                as={Link}
                to="/"
                name=""
                onClick={this.navItemChecker}
                className={classes.mainTitle}
              >
                <Icon name="home" />
                {formatMessage(messages.projectTitle)}
              </Menu.Item>
            </Responsive>
            <Menu.Item
              as={Link}
              to="/audience"
              active={activeItem === formatMessage(messages.audience)}
              onClick={this.navItemChecker}
              name={formatMessage(messages.audience)}
              className={classes.menuItem}
            >
              {formatMessage(messages.audience)}
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/contentowner"
              active={activeItem === formatMessage(messages.content)}
              onClick={this.navItemChecker}
              className={classes.menuItem}
              name={formatMessage(messages.content)}
            >
              {formatMessage(messages.content)}
            </Menu.Item>
            {isAuth && (
              <Menu.Item
                as={Link}
                to="/"
                active={activeItem === 'notifications'}
                onClick={this.navItemChecker}
                className={classes.menuItem}
                name="notifications"
              >
                <Icon name="bell outline" />
                Notifications{' '}
                <Label color="teal" size="mini">
                  22
                </Label>
              </Menu.Item>
            )}

            {isAuth ? (
              <Menu.Menu position="right">
                <Menu.Item className={classes.menuItem} name="settings">
                  <Dropdown
                    pointing="top right"
                    trigger={
                      <span>
                        <Icon name="user" />{' '}
                        <strong>Hello, {currentUser.username}!</strong>
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        disabled
                        text={`Signed in as ${currentUser.username}`}
                        className={classes.dropLink}
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as={Link}
                        to="/profile"
                        text="Profile"
                        className={classes.dropLink}
                      />
                      <Dropdown.Item text="Help" className={classes.dropLink} />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={this.handleLogOut}
                        text="Log Out"
                        className={classes.dropLink}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu.Menu>
            ) : (
              <Menu.Menu position="right">
                <Menu.Item
                  name="login"
                  as={Link}
                  to="/login"
                  active={activeItem === 'login'}
                  className={classes.menuItem}
                  onClick={this.navItemChecker}
                />
                <Menu.Item className={classes.signUp}>
                  <Dropdown text="Sign Up" floating error>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as={Link}
                        to="/audience-sign-up"
                        text="as DJ"
                        className={classes.dropLink}
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as={Link}
                        to="/content-sign-up"
                        text="as Composer"
                        className={classes.dropLink}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu.Menu>
            )}
          </Menu>
        )}
      </React.Fragment>
    );
  }
}

MainNavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

MainNavBar.defaultProps = {};

export default injectIntl(MainNavBar);
