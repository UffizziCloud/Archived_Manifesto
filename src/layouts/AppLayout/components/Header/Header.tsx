import { AppBar, Toolbar, Link } from '@material-ui/core';
import clsx from 'clsx';
import { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { appRoutes } from 'routes/appRoutes';

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
              key={path}
              className={clsx(classes.link, isMatchPath({ path, exact: true }) && classes.linkActive)}
              href={path}
            >
              {name}
            </Link>
          ))}
          <Link className={clsx(classes.link, classes.linkButton)} href="https://google.com">
            <img src={githubLogo} alt="github logo" className={classes.btnLogo} />
            Contribute
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
