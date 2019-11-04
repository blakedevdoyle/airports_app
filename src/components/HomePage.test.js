import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe("HomePage Component", () => {
  it("should render my component", () => {
    shallow(<HomePage />);
  });
});