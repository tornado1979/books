import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

const setUp = (props = {}) => {
const component = shallow(<Footer />);
  return component;
};

describe('Footer Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  describe('Should render without errors', () => {
    it('Should render Navbar element', () => {
      const elem = component.find('Navbar');
      expect(elem.length).toBe(1);
    });

    it('Should have <a> element with value "theodoreme@gmail.com"', () => {
      const elem = component.find('a');
      expect(elem.length).toBe(1);
      expect(elem.text()).toBe('theodoreme@gmail.com');
    });
  });
});
