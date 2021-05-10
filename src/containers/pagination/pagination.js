import React, { Component } from 'react'
import { connect } from 'react-redux';
import Pag from 'react-bootstrap/Pagination'
import { push } from 'connected-react-router'
import {
  updateActivePage,
} from '../../containers/books-list/actions';
import {
  getActivePage,
  getIsLoading,
  getNumberOfPages,
} from '../../containers/books-list/selectors';
import PaginationService from './pagination.service';
import { ITEMS_PER_PAGE } from '../../global/constants/constants';

import store from '../../store';

export class Pagination extends Component{
  handle(idx){
    const {
      itemsCount,
    } = this.props;
  
    const pagesCount = Math.floor(itemsCount/ITEMS_PER_PAGE)+1;

    if(idx >=1 && idx <= pagesCount){
      // action: update URL
      store.dispatch(this.props.push(`/books/${idx}`));

      // action: update active page in global state
      this.props.setActivePage(idx);
    }
  }

  render(){
    const {
      activePage,
      isLoading,
      itemsCount,
    } = this.props;

    const Pagenums = PaginationService
      .calculatePagesNumbers(activePage, itemsCount);
    const pagesCount = Math.floor(itemsCount/ITEMS_PER_PAGE)+1;
    return(
      <>
      {!isLoading && itemsCount > 0 && (<div className="pagination-wrapper">
        <Pag bg-primary>
          <Pag.First onClick={() => this.handle(1)}/>
          <Pag.Prev onClick={() => this.handle(Number(activePage)-1 < 1 ? 1 : Number(activePage)-1)}/>
          {Pagenums.map(num => {
            if(Number(activePage) === num){
              return <Pag.Item key={num} active>{activePage}</Pag.Item>
            }else if(num > pagesCount){
              return <Pag.Item key={num} disabled>{num}</Pag.Item>
            }else {
              return <Pag.Item key={num} onClick={() => this.handle(num)}>{num}</Pag.Item>
            }
          })}
          <Pag.Next onClick={() => this.handle(Number(activePage)+1 > pagesCount ? activePage : Number(activePage)+1)}/>
          <Pag.Last onClick={() => this.handle(pagesCount)}/>
          <Pag.Item>Pages: {pagesCount}</Pag.Item>
        </Pag>
      </div>)}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePage: getActivePage(state),
    isLoading: getIsLoading(state),
    itemsCount: getNumberOfPages(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePage: (value) => dispatch(updateActivePage(value)),
    push,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
