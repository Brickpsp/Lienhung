import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import Main from '/client/views/main.jsx';
import Test from '/client/views/test.jsx';
FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      content:
      <Main />
    });
  } 
});
