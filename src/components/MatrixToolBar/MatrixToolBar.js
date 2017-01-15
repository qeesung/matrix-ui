/**
 * Created by qeesung on 2017/1/15.
 */
import React from 'react'
import './MatrixToolBar.scss'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

export const MatrixToolBar = () => (
  <AppBar
    title={<span style={styles.title}></span>}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
)

export default MatrixToolBar
