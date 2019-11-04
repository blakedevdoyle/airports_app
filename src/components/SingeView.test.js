import React from 'react';
import { shallow } from 'enzyme';
import { SingleView } from './SingleView';

describe("SingleView Component", () => {
  it("should render my component", () => {
    shallow(<SingleView />);
  });
});