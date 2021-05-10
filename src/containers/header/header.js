import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import {
  dataFetch,
  updateSearchString,
} from '../books-list/actions';
import store from '../../store';

import './header.scss';

export const Header = (props) => {
  function handleClick(event){
    // action: update URL to page 1, because its a new search
    store.dispatch(props.push(`/books/1`));

    // action: request for books data
    const value = document.getElementsByTagName('input')[0].value;
    props.requestData(value);
  }

  function handleKeyUp(event){
    // action save queryString on store
    props.updateSearchString(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      handleClick(event);
    }
  };

  return(
    <Navbar bg="light">
      <Navbar.Brand href="#home">Simpe Book list with pagination</Navbar.Brand>
      <Form inline onKeyDown={e => { handleKeyDown(e) }}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyUp={handleKeyUp}/>
        <Button variant="primary" onClick={handleClick}>Search</Button>
      </Form>
    </Navbar>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestData: (searchString) => dispatch(dataFetch(1, searchString)),
    updateSearchString: (searchString) => dispatch(updateSearchString(searchString)),
    push,
  }
};

export default connect(null, mapDispatchToProps)(Header);
