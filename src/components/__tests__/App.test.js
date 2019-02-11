import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
// JSDOM simulates a browswer envieronemtn for Jest to run our React code in.

// ! have to declare variables outside of the function so that the tests can see it
let wrapped;
// put shared code for the tests here
// the function is run every single test
beforeEach(() => {
  wrapped = shallow(<App />); // a better name might be 'component'
});

it('shows a comment box', () => {
  // ! after each initial test run, try to make it break, so as to avoid arroneous passes
  expect(wrapped.find(CommentBox).length).toEqual(1); // find() returns an array
  // const div = document.createElement('div');
  // render the jsx into html and inject into the div within JSDOM environment
  // ReactDOM.render(<App />, div);
  // here, we actually do our tests.
  // the 'toContain' part of the statement is known as a matcher
  // this is not a good way test - the test can be broken by changes to CommentBox.
  // it's okay for the App component to know the CommentBox component exists - but that's it.
  // expect(div.innerHTML).toContain('Comment Box');
  // a bit of cleanup to destroy any objects that are no longer needed
  // ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
  // ! after each initial test run, try to make it break, so as to avoid arroneous passes
  expect(wrapped.find(CommentList).length).toEqual(1); // find() returns an array
});
