import { Link, Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import externalLinks from 'routes/externalLinks';

import { useLayoutContext } from 'hooks/useLayoutContext';

import Section from 'components/Section';

import useStyles from './useStyles';

const LessonsLearned: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Lessons Learned', path: 'header' },
      { name: 'Share your lessons learned', path: 'how-to-add' },
      { name: 'Story 1', path: 'story1' },
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <Section path="header" title="Lessons Learned">
        <Typography>
          Learn from our community about best practice and lessons learned while implementing continuous previews
          methodology into their organizations.
        </Typography>
      </Section>

      <Section path="how-to-add" title="Share your lessons learned">
        <Typography>
          Submisisons are welcome! Share your lessons learned to help others implement continuous previews.
        </Typography>
        <Link
          className={classes.link}
          href={externalLinks.uffizziGitHubManifesto}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit your lessons learned
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

export default LessonsLearned;
