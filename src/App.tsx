import React from "react";
import { Route } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import { HomePage, LoginPage, PostPage, VideoPage, SearchPage } from "pages";
import Header from "components/Header";
import Footer from "components/Footer";

export default () => {
  return (
    <>
      <Header />
      <CacheSwitch>
        <CacheRoute path="/search">
          <SearchPage />
        </CacheRoute>
        <Route path="/video">
          <VideoPage />
        </Route>
        <CacheRoute path="/post">
          <PostPage />
        </CacheRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <CacheRoute path="/">
          <HomePage />
        </CacheRoute>
      </CacheSwitch>
      <Footer />
    </>
  );
};
