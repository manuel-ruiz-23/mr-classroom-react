import React from 'react';
import NavItem from './NavItem';

const Navbar = ({
  lessons,
  navigate
}) => {
  console.log('lessons from nav', lessons.length);
  return React.createElement("div", {
    className: "cr-navbar"
  }, lessons.map((lesson, index) => React.createElement(NavItem, {
    key: index,
    lesson: lesson,
    index: index,
    end: index === lessons.length - 1,
    navigate: navigate
  })));
};

export default Navbar;