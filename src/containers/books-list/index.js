import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import Table from 'react-bootstrap/Table'
import {
  getBooks,
  getIsLoading,
  getNumberOfPages,
  getActivePage,
  getSearchString,
} from './selectors';
import {
  dataFetch,
  updateActivePage,
} from './actions';
import Loader from '../../components/spinner';
import Pagination from '../../containers/pagination/pagination';
import NoResultsFound from '../../components/noResults';

import store from '../../store';

class Books extends Component {
  componentDidMount(){
    let pageIndex = this.props.pathname.split('/')[2];
    pageIndex = isNaN(pageIndex)
     ? 1 : pageIndex;

    // action: update URL
    store.dispatch(this.props.push(`/books/${pageIndex}`));

    // action: update active page in global state
    this.props.setActivePage(pageIndex);

    // action: request for books data
    this.props.requestData(pageIndex);
  }

  componentDidUpdate(prevProps, prevState){
    const {
      activePage,
      searchString,
    } = this.props;

    if(prevProps.activePage !== this.props.activePage){
      // action: request for books data
      this.props.requestData(activePage, searchString);
    }
  }

  loading(){
    return <Loader />
  }

  publishBooks(){
    const { books } = this.props;

    return books.map((book, idx) => {
      return(
        <tr key={book.id}>
          <td>{idx+1}</td>
          <td>{book.id}</td>
          <td>{book.book_author}</td>
          <td>{book.book_title}</td>
          <td>{book.book_publication_year}</td>
          <td>{book.book_publication_country}</td>
          <td>{book.book_publication_city}</td>
          <td>{book.book_pages}</td>
        </tr>
      )
    })

  }

  render() {
    const {
      books,
      numberOfPages,
      isLoading,
    } = this.props;

    return(
      <>
         {isLoading && this.loading()}
         {!isLoading && books.length === 0 && (<NoResultsFound />)}
         {!isLoading && books.length > 0 && (
           <Table striped bordered hover>
           <thead>
             <tr>
               <th>#</th>
               <th>id</th>
               <th>book author</th>
               <th>title</th>
               <th>year</th>
               <th>country</th>
               <th>city</th>
               <th>pages</th>
             </tr>
           </thead>
           <tbody>
            {this.publishBooks()}
           </tbody>
          </Table>
         )}
         <Pagination
          numberOfPages={numberOfPages} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
    books: getBooks(state),
    numberOfPages: getNumberOfPages(state),
    isLoading: getIsLoading(state),
    activePage: getActivePage(state),
    searchString: getSearchString(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestData: (pageIndex, searchString) => dispatch(dataFetch(pageIndex, searchString)),
    setActivePage: (value) => dispatch(updateActivePage(value)),
    push,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Books)
