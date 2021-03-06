import React from 'react';
import { Link } from 'react-router';
import injectSheet from '../utils/injectSheet';
import { jssSheet } from '../utils/propTypes';

const styles = {
  wrapper: {
    padding: '.2em 1em',
    overflow: 'hidden',
    background: '#000',
    color: '#fff',
  },
  list: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },
  item: {
    display: 'inline-block',
    margin: '.2em .4em',
  },
  anchor: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: 'lightblue',
    },
  },
};

const menuItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/subpage',
    label: 'Subpage',
  },
  {
    path: '/otherpage',
    label: 'Other page',
  },
];

const SimpleNavigation = ({ sheet: { classes } }) => (
  <nav className={classes.wrapper}>
    <ul className={classes.list}>
      {
          menuItems.map(({ path, label }) => (
            <li className={classes.item}>
              <Link
                className={classes.anchor}
                to={path}
              >
                { label }
              </Link>
            </li>
          ))
        }
    </ul>
  </nav>
);

SimpleNavigation.propTypes = {
  sheet: jssSheet,
};

export default injectSheet(styles)(SimpleNavigation);
