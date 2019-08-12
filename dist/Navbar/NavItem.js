import React from 'react';
import styles from './navbarItem.module.css';

const NavItem = ({
  lesson,
  index,
  navigate,
  end
}) => {
  const {
    title,
    comp
  } = lesson;
  let className = styles.navItem;
  if (comp) className = styles.navItemComp;
  return React.createElement("div", {
    className: className,
    onClick: () => navigate(index)
  }, React.createElement("p", null, title));
};

export default NavItem;