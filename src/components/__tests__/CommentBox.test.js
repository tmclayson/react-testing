import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

// a describe block wraps tests to provide a place for common setup, and limits the scope of beforeEach() etc
describe('the text area', () => {
  beforeEach(() => {
    // 1. simulate the change event, force an update of the component, and test that it changed
    //    (although, since that functionality is tested separately, we don't need explicitly need this)
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    // get a handle to the element simulate a change event
    // note the the event is called 'change' NOT 'onChange'
    // the mock object we pass is merged with the actual event object that is passed to the handler
    // // wrapped.find('textarea').simulate('change', {
    // //   target: { value: 'new comment' },
    // // });
    // the handler calls setState, which triggers a re-render. However, this might not happen immediately.
    // so for testing purposes, we need to force it to re-render
    // // wrapped.update();
    // we now want o verify that the textarea recieved the value from state
    // but rather than reach into the element and get the value, we pull off the props passed to the textarea element
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears the textarea after the form is submitted', () => {
    // 2. simulate the submit event and force an update
    wrapped.find('form').simulate('submit');
    wrapped.update();
    // 3. perform our assertion
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
