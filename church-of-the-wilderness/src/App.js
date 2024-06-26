import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sanctuary from './components/Sanctuary';
import LiveStreaming from './components/LiveStreaming';
import CommunityForum from './components/CommunityForum';
import PrayerRequests from './components/PrayerRequests';
import Events from './components/Events';
import Giving from './components/Giving';
import Music from './components/Music';
import BibleStudy from './components/BibleStudy';
import ContentRequest from './components/ContentRequest';
import LiveStreamComment from './components/LiveStreamComment';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/sanctuary" component={Sanctuary} />
      <Route path="/live-streaming" component={LiveStreaming} />
      <Route path="/community-forum" component={CommunityForum} />
      <Route path="/prayer-requests" component={PrayerRequests} />
      <Route path="/events" component={Events} />
      <Route path="/giving" component={Giving} />
      <Route path="/music" component={Music} />
      <Route path="/bible-study" component={BibleStudy} />
      <Route path="/content-request" component={ContentRequest} />
      <Route path="/live-stream-comment" component={LiveStreamComment} />
    </Switch>
    <Footer />
  </div>
);

export default App;
