/**
 * Created by qeesung on 2017/1/15.
 */
import React from 'react'
import './MatrixPkgMultiPage.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MatrixPkgItemPage from '../MatrixPkgItemPage';
import ReactPaginate from 'react-paginate';

// generate fake data here
const pkgServerData = Array.apply(null, {length: 200}).map((item, index)=>{
  return {
    pkgName:'package'+index,
    pkgDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, iste, distinctio inventore voluptates corporis iusto molestiae aperiam cupiditate mollitia eos dolorum sed sequi accusamus alias vitae. Natus, iusto doloribus aut deserunt doloremque quam laudantium veritatis repellat reprehenderit nemo fuga odio rerum eum accusamus ipsum obcaecati ducimus aspernatur sed ullam omnis modi similique eligendi maxime? Iure, eius quam quo quasi incidunt omnis cum atque dolores labore minus quos error quibusdam commodi tempore blanditiis! Eos, maiores, quis repellendus sed expedita molestias est recusandae tenetur vero facilis corporis neque pariatur laudantium quaerat ab. Temporibus, debitis nobis ea eveniet consectetur vel amet est eaque!",
    pkgVersions: Array.apply(null, {lengthL:5}).map((item, index)=>{
      return 'version'+index
    })
  };
});

class MatrixPkgMultiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0
    };
  }

  loadAvailablePkgFromServer(){
    let perPage = 9;
    let page = this.state.offset;
    let startIndex = page*perPage;
    let endIndex = startIndex+perPage;
    this.setState({
      data: pkgServerData.slice(startIndex, endIndex),
      pageCount: Math.ceil(pkgServerData.length/perPage)
    })
  }

  componentDidMount() {
    this.loadAvailablePkgFromServer();
  }

  handlePageClick = (data) => {
    let offset = data.selected;

    this.setState({offset: offset}, () => {
      this.loadAvailablePkgFromServer();
    });
  };

  render() {
    return (
      <div>
        <MatrixPkgItemPage pkgList={this.state.data} />
        <div className="pkg-pagination">
          <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         pageCount={this.state.pageCount}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         onPageChange={this.handlePageClick}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
        </div>
      </div>
    );
  }

}

export default MatrixPkgMultiPage;
