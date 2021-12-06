import { Link, Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import externalLinks from 'routes/externalLinks';

import { useLayoutContext } from 'hooks/useLayoutContext';

import Section from 'components/Section';

import useStyles from './useStyles';

const DevStories: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Developer Stories', path: 'header' },
      { name: 'Submit your story', path: 'how-to-add' },
      { name: 'Story 1', path: 'story1' },
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <Section path="header" title="Developer Stories">
        <Typography>See how teams in our community are implementing continuous previews.</Typography>
      </Section>

      <Section path="how-to-add" title="Submit your story">
        <Typography>Submisisons are welcome! Share your continuous previews story. </Typography>
        <Link
          className={classes.link}
          href={externalLinks.uffizziGitHubManifesto}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit your story
        </Link>
      </Section>

      <Section path="story1" title="Story 1">
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni explicabo doloremque
          veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia officiis eaque
          deserunt dolor sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni
          explicabo doloremque veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia
          officiis eaque deserunt dolor sed.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni explicabo doloremque
          veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia officiis eaque
          deserunt dolor sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse. Odit magni
          explicabo doloremque veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea mollitia
          officiis eaque deserunt dolor sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse.
          Odit magni explicabo doloremque veritatis modi asperiores quam praesentium quae laboriosam, pariatur optio, ea
          mollitia officiis eaque deserunt dolor sed.
        </Typography>
      </Section>
    </>
  );
};

export default DevStories;
