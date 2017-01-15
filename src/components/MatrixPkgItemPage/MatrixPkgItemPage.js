/**
 * Created by qeesung on 2017/1/15.
 */
import React from 'react'
import './MatrixPkgItemPage.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MatrixPkgItem from '../MatrixPkgItem';

class MatrixPkgItemPage extends React.Component {
  constructor(props) {
    super(props);
  }

  generatePkgItem(pkgInfo){
     return (
       <span className="pkgItem">
        <MatrixPkgItem pkgName={pkgInfo.pkgName} 
                       pkgVersions={pkgInfo.pkgVersions} 
                       pkgDes={pkgInfo.pkgDes}>
        </MatrixPkgItem> 
       </span>
     )
  }
  
  generatePkgRow(pkgItems){
    return(
      <div className="pkgItemRow">
        {pkgItems}      
      </div>
    )
  }
  render(){
    let {pkgList} = this.props;
    let row1 = [];
    let row2 = [];
    let row3 = [];
    for(let i = 0 ; i < pkgList.length && i < 9; ++i) {
      let target = row1;
      if(i<=2)
        target = row1;
      else if(i<=5)
        target = row2;
      else 
        target = row3;
      target.push(this.generatePkgItem(pkgList[i]));
    }
    return(
      <div>
        {this.generatePkgRow(row1)}
        {this.generatePkgRow(row2)}
        {this.generatePkgRow(row3)} 
      </div> 
    ) 
  }
}

export default MatrixPkgItemPage;
