import { AppBar, Toolbar, Link } from '@material-ui/core';
import clsx from 'clsx';
import { FC } from 'react';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';

import { appRoutes } from 'routes/appRoutes';
import externalLinks from 'routes/externalLinks';

import githubLogo from 'assets/githubLogo.svg';

import Logo from '../Logo';

import useStyles from './useStyles';

const Header: FC = () => {
  const classes = useStyles();
  const isMatchPath = useRouteMatch;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <Logo />
        </div>
        <div className={classes.links}>
          {appRoutes.map(({ path, name }) => (
            <Link
              component={RouterLink}
              key={path}
              className={clsx(classes.link, isMatchPath({ path, exact: true }) && classes.linkActive)}
              to={path}
            >
              {name}
            </Link>
          ))}
          <Link className={clsx(classes.link, classes.linkButton)} href={externalLinks.uffizziGitHub}>
            <img src={githubLogo} alt="github logo" className={classes.btnLogo} />
            Contribute
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
