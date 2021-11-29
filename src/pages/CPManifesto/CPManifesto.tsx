import { Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import { useLayoutContext } from 'hooks/useLayoutContext';

import PageTitle from 'components/PageTitle';

import useStyles from './useStyles';

const CPManifesto: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Overview', path: 'overview' },
      { name: 'The 11 Principles of CP', path: 'principles' },
      { name: 'Traditional QA vs. Continuous Previews', path: 'qa-vs-cp' },
      { name: 'Definition', path: 'definition' },
      { name: 'CP In Practice', path: 'practice' },
      { name: 'Software Delivery Pls improved by CP', path: 'software-delivery' },
      { name: 'Background', path: 'background' },
      { name: 'Who should read this', path: 'who-should-read' },
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <section className={classes.section} id="overview">
        <PageTitle>Overview</PageTitle>
        <Typography>
          Over the past two decades since the Agile Manifesto was published, the concepts and technologies that support
          Continuous Integration, Continuous Delivery, Cloud Native development, Containerization, Microservices, and
          Container Orchestration have greatly improved the Agility with which software can be built, tested, and
          delivered These concepts and technologies have ushered in the now ubiquitous concept of DevOps and have helped
          break down the silos within the multi-disciplinary teams that must continuously collaborate to build great
          software.
          <br />
          <br />
          Despite these advances, twenty years after the advent of Agile our community still lacks a common lexicon,
          understanding, and capability for efficiently previewing in-progress development for full-stack applications.
          <br />
          <br />
          Over the past 2+ years we have listened to the challenges of team software development through interviews with
          over 150 Developers, DevOps, and Cross-functional team members across a variety of industries and at various
          levels of business maturity.
          <br />
          <br />
          These are our observations:
          <br />
          <br />
          -The benefits of Previewing are primarily confined to software teams that have the time, resources, and
          expertise to build and maintain their own internal preview capability - often referred to as an internal
          Platform as a Service.
          <br />
          -It&apos;s universally beneficial to bring QA/testing into the Development process, to catch issues early,
          iterate quickly, and to merge clean code into Develop or Main.
          <br />
          -Virtually all teams from can benefit from a Full-Stack Preview capability and industry defined best practices
          for Previewing i.e. Continuous Previews.
          <br />
          -For most teams a Preview Tool is on their wish list but there&apos;s no clear choices or guidelines provided
          by either the Open Source Community, the CNCF, or the industry as a whole.
          <br />
          -As a community we are not actively collaborating or innovating towards a well-defined Preview process and
          technical capability.
          <br />
          -The market is awash in open source and commercially available Continuous Integration, Continuous Delivery,
          and Deployment tools, but these tools, while useful, are fundamentally lacking for the task of Previewing and
          facilitating the requisite collaborative teamwork across cross-functional teams to produce quality working
          software
        </Typography>
      </section>

      <section className={classes.section} id="principles">
        <PageTitle>The 11 Principles of CP</PageTitle>
        <Typography>
          1. Significantly Easier to Fix issues Pre-merge vice Post-merge
          <br />
          2. Bring QA into the Develpment Process (CP = Continuous Collaboration between Devolopment and Product)
          <br />
          3. Confirm Functionality Prior to Integration
          <br />
          4. Isolated Feature Testing (Separation of Concerns) over batch testing
          <br />
          5. Tight integration between Ticketing, Repositories, Infrastructure
          <br />
          6. No additional burdens on the Development Team
          <br />
          7. Limit Context Switching
          <br />
          8. Reliance on Automation
          <br />
          9. Reduce reliance on Critical Sinale Points of Failure (i.e. persistent QA environment)
          <br />
          10. Empower Developers with Feature-level Test Environments
          <br />
          11. Support for Full-stack (Front ends, Back Ends, Microservices, APls, backing services . . .)
          <br />
        </Typography>
      </section>

      <section className={classes.section} id="qa-vs-cp">
        <PageTitle>Traditional QA vs. Continuous Previews</PageTitle>
        <Typography>?</Typography>
      </section>

      <section className={classes.section} id="definition">
        <PageTitle>Definition</PageTitle>
        <Typography>
          Continuous Preview(s) are an automation-enabled method by which in-progress development branches -known as
          topic branches -are continuously deployed in a dynamic production-like environment and are available for
          collaborative review and testing at a secure URL. By this method iterative feedback is accelerated and testing
          is conducted in a logical sequence where topic branch functionality testing is completed prior to integration
          testing and delivery (CP, then Cl / CD).
        </Typography>
      </section>

      <section className={classes.section} id="practice">
        <PageTitle>CP In Practice</PageTitle>
        <Typography>?</Typography>
      </section>

      <section className={classes.section} id="software-delivery">
        <PageTitle>Software Delivery Pls improved by CP</PageTitle>
        <Typography>
          <b>Leac/flime</b> - the time between when a task is created and the solution is delvered
          <br />
          <br />
          <b>Cycle Time</b> - how quickly an issue can be reviewed, feedback provided, and adjustments made.
          <br />
          <br />
          <b>Team Velocity</b> - the number of tasks completed over a given period of time
          <br />
          <br />
          <b>Code Stability</b> - how often topic branch integrations create unintended breakage
        </Typography>
      </section>

      <section className={classes.section} id="background">
        <PageTitle>Background</PageTitle>
        <Typography>
          The initial contributors to the CP Manifesto come from diverse backgrounds including being directly or
          indirectly involved in the design, development, deployment, and scaling of applications from Startups to the
          Fortune 500; leading Machine Learning Research Teams; and leading high performance Navy SEAL teams into
          combat.
          <br />
          <br />
          We seek to pioneer and promote better ways of developing software by leveraging technology and automation to
          push the bounds of Agile Software Development.
          <br />
          <br />
          We are advocating for organizations to adopt Continuous Previews as an Agile-supporting method to improve and
          expedite how they build and test software.
        </Typography>
      </section>

      <section className={classes.section} id="who-should-read">
        <PageTitle>Who should read this?</PageTitle>
        <Typography>
          The initial contributors to the CP Manifesto come from diverse backgrounds including being directly or
          indirectly involved in the design, development, deployment, and scaling of applications from Startups to the
          Fortune 500; leading Machine I earning Research Teams: and leading high nerformance Naw SEAl teams into
          comhat.
        </Typography>
      </section>
    </>
  );
};

export default CPManifesto;
