import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import { Menu, Icon, Dropdown, Grid, Responsive } from 'semantic-ui-react';
import Notifications from '../../containers/NotifsContainer';

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
  dashboard: {
    id: 'dashboard',
    defaultMessage: 'Dashboard',
  },
  asDj: {
    id: 'asDj',
    defaultMessage: 'as DJ',
  },

  asComposer: {
    id: 'asComposer',
    defaultMessage: 'as Composer',
  },
  signUp: {
    id: 'signUp',
    defaultMessage: 'Sign Up',
  },
  logIn: {
    id: 'logIn',
    defaultMessage: 'Log In',
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
            fixed="top"
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
                  <Menu.Item position="right" className={classes.burgerWrapper}>
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
            fixed="top"
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
            {currentUser &&
              currentUser.type === 'content_owner' && (
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
              )}
            {currentUser &&
              currentUser.type === 'audience_owner' && (
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
              )}
            {/* {isAuth && (
              <Menu.Item
                as={Notifications}
                active={activeItem === 'notifications'}
                onClick={this.navItemChecker}
                name="notifications"
                className={classes.menuItem}
              />
            )} */}
            <Menu.Item
              as={Link}
              to="/dashboard"
              active={activeItem === 'Dashboard'}
              onClick={this.navItemChecker}
              className={classes.menuItem}
              name="Dashboard"
            >
              {formatMessage(messages.dashboard)}
            </Menu.Item>

            {isAuth ? (
              <Menu.Menu position="right">
                <Menu.Item
                  as={Notifications}
                  active={activeItem === 'notifications'}
                  onClick={this.navItemChecker}
                  name="notifications"
                  className={classes.menuItem}
                />
                <Menu.Item className={classes.menuItemSettings} name="settings">
                  <Dropdown
                    pointing="top right"
                    trigger={
                      <span>
                        <Icon name="user" />{' '}
                        <strong>
                          {formatMessage(messages.hello)},{' '}
                          {currentUser.username}!
                        </strong>
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        disabled
                        text={`${formatMessage(messages.signedInAs)} ${
                          currentUser.username
                        }`}
                        className={classes.dropLink}
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as={Link}
                        to="/profile"
                        text={formatMessage(messages.profile)}
                        className={classes.dropLink}
                      />
                      <Dropdown.Item
                        text={formatMessage(messages.help)}
                        className={classes.dropLink}
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={this.handleLogOut}
                        text={formatMessage(messages.logOut)}
                        className={classes.dropLink}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu.Menu>
            ) : (
              <Menu.Menu position="right">
                <Menu.Item
                  name={formatMessage(messages.logIn)}
                  as={Link}
                  to="/login"
                  active={activeItem === 'login'}
                  className={classes.menuItem}
                  onClick={this.navItemChecker}
                />
                <Menu.Item className={classes.signUp}>
                  <Dropdown
                    text={formatMessage(messages.signUp)}
                    floating
                    error
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as={Link}
                        to="/audience-sign-up"
                        text={formatMessage(messages.asDj)}
                        className={classes.dropLink}
                      />
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as={Link}
                        to="/content-sign-up"
                        text={formatMessage(messages.asComposer)}
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
