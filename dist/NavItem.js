import React from 'react';

const NavItem = ({
  lesson,
  index,
  navigate,
  end
}) => {
  // console.log('navItem props', lesson, start, end, comp);
  const {
    title,
    comp
  } = lesson;
  let className = 'cr-nav-item';
  if (index === 0) className += ' start';
  if (end) className += ' end';
  if (comp) className += ' comp';
  return React.createElement("div", {
    className: className,
    onClick: () => navigate(index)
  }, React.createElement("p", null, title));
};

export default NavItem;