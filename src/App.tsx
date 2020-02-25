import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage, PostPage, VideoPage, SearchPage } from "pages";
import Header from "components/Header";
import Footer from "components/Footer";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/video">
          <VideoPage />
        </Route>
        <Route path="/post">
          <PostPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
