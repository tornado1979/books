import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return(
    <div className="spinner">
      <Spinner animation="grow" />
    </div>
  )
}

export default Loader;
