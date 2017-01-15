/**
 * Created by qeesung on 2017/1/15.
 */
import React from 'react'
import './MatrixSiderBar.scss'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { IndexLink, Link } from 'react-router'

export const MatrixSiderBar = () => (
  <div>
    <Drawer
      docked={true}
      width={300}
      open={true}
    >
      <AppBar
        title="Code Matrix"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Link to='/' activeClassName='route--active'>
        <RaisedButton className='tool-store' label="ToolStore" fullWidth={true} />
      </Link>
    </Drawer>
  </div>
)

export default MatrixSiderBar
