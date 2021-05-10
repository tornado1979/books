import React from 'react';
import { shallow } from 'enzyme';
import {Header} from './header';

const setUp = (props = {}) => {
const component = shallow(<Header />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  describe('Should render without errors', () => {
    it('Should render Navbar element', () => {
      const elem = component.find('Navbar');
      expect(elem.length).toBe(1);
    });

    it('Should render Form element', () => {
      const elem = component.find('Form');
      expect(elem.length).toBe(1);
    });

    it('Should render FormControl element', () => {
      const elem = component.find('FormControl');
      expect(elem.length).toBe(1);
    });

    it('Should render Button element', () => {
      const elem = component.find('Button');
      expect(elem.length).toBe(1);
    });
  });
});
