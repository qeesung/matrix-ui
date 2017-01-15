import React from 'react'
import MatrixSiderBar from '../../components/MatrixSiderBar'
import MatrixToolBar from '../../components/MatrixToolBar'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <MatrixSiderBar></MatrixSiderBar>
    <MatrixToolBar></MatrixToolBar>
    <div className='core-layout__viewport matrix-content'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
