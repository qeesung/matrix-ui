/**
 * Created by qeesung on 2017/1/15.
 */
import React from 'react'
import './SiderBar.scss'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export const SiderBar = () => (
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
      <RaisedButton className='tool-store' label="ToolStore" fullWidth={true} />
    </Drawer>
  </div>
)

export default SiderBar 
