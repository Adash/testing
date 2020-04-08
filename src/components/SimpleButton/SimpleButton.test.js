import React from 'react';
import SimpleButton from './SimpleButton';
import { mount } from 'enzyme';

const jsCallback = () => {
  return 'called';
};

describe('Simple Button', () => {
  test('test of the tests runner', () => {
    expect(true).toBeTruthy();
  });

  // it('tests the button onClick handler', () => {
  //   const Button = mount(<SimpleButton handleClick={jsCallback} />);
  //   expect(Button.find(jsCallback).length).toEqual(1);
  // });
});
