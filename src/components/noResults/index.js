import React from 'react'
import Alert from 'react-bootstrap/Alert'

const NoResultsFound = () => {
  return(
    <div className="noresults-found">
      <Alert variant="danger">
        We are sorry, no results found!
        Please try again.
      </Alert>
    </div>
  )
}

export default NoResultsFound;
