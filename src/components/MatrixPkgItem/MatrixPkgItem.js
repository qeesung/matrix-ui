/**
 * Created by qeesung on 2017/1/15.
 */
import React from 'react'
import './MatrixPkgItem.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import pkgIcon from './asserts/pkgIcon.png';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class MatrixPkgItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      version: ""
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleChange = (event, index, value) => {
    event.preventDefault();
    this.setState({version: value});
  };

  render() {
    let {
      pkgName,
      pkgVersions,
      pkgDes,
    } = this.props;

    pkgVersions = [1,2,3,4,5];
    let pkgVersionItems = pkgVersions.map((version, index)=>{
      return (<MenuItem value={version} key={index} primaryText={version} />);
    });

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={pkgName || 'None'}
          subtitle="software"
          avatar={pkgIcon}
          actAsExpander={false}
          showExpandableButton={false}
        >
          <div className="version-selector">
            <SelectField
              floatingLabelText="version"
              value={this.state.version}
              onChange={this.handleChange.bind(this)}
              maxHeight={200}
            >
              {pkgVersionItems}
            </SelectField>
          </div>
        </CardHeader>
        <CardText>
          <p className="matrix-des">
            {pkgDes || "There is no package description"}
          </p>
        </CardText>
        <CardActions>
          <div className="matrix-button-group">
            <FlatButton label="More" onTouchTap={this.handleExpand} />
            <RaisedButton label="Install" primary={true} onTouchTap={this.handleReduce} />
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default MatrixPkgItem
