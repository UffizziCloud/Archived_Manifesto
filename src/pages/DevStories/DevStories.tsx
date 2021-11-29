import { Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import { useLayoutContext } from 'hooks/useLayoutContext';

import PageTitle from 'components/PageTitle';

import useStyles from './useStyles';

const DevStories: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Story 1', path: 'story1' },
      { name: 'Story 2', path: 'story2' },
      { name: 'Story 3', path: 'story3' },
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <section className={classes.section} id="story1">
        <PageTitle>Story 1</PageTitle>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni explicabo doloremque
          veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia officiis eaque
          deserunt dolor sed.
        </Typography>
      </section>

      <section className={classes.section} id="story2">
        <PageTitle>Story 2</PageTitle>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni explicabo doloremque
          veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia officiis eaque
          deserunt dolor sed.
        </Typography>
      </section>

      <section className={classes.section} id="story3">
        <PageTitle>Story 3</PageTitle>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni explicabo doloremque
          veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia officiis eaque
          deserunt dolor sed.
        </Typography>
      </section>
    </>
  );
};

export default DevStories;
