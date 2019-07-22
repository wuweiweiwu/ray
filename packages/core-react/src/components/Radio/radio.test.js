import React from 'react';
import { mount } from 'enzyme';

import Radio from '.';

describe('Radio', () => {
  test('it ', () => {
    expect(() => {
      mount(<Radio />);
    }).toThrow();
  });
});
