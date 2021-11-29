import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppLayout from 'layouts/AppLayout';

import CPManifesto from 'pages/CPManifesto';
import DevStories from 'pages/DevStories';
import LessonsLearned from 'pages/LessonsLearned';

const App: FC = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/" component={CPManifesto} />
      <Route exact path="/lessons-learned" component={LessonsLearned} />
      <Route exact path="/dev-stories" component={DevStories} />
      <Redirect to="/" />
    </Switch>
  </AppLayout>
);

export default App;
