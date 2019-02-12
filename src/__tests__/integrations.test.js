import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});
it('can fetch a list of comments and display them', done => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // introduce a TINY pause, so that moxios has time to intercept the request and return the fake data
  // setTimeout(() => {
  // we don't know exactly how long it is going to take though, so rather than a
  // specific wait, moxios exposes a method to wait on it to return.
  moxios.wait(() => {
    // have to force an update for the component to actually show the lis
    wrapped.update();
    // expect to find a list of comments.
    expect(wrapped.find('li').length).toEqual(2);
    // if we make use of the optional 'done' parameter in the callback, we can
    // force Jest to wait until we the timeout has completed, before it decides
    // whether or not it encountered any errors and/or the test has failed.
    done();
  });
});
