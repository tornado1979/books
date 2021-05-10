import React from 'react';
import Header from '../containers/header/header';
import Footer from '../components/footer/footer';
import Books from '../containers/books-list';

import './home.scss';

const Homepage = () => {
  return(
    <>
      <div className="row header">
        <Header />
      </div>
      <main>
        <Books />
      </main>
      <div className="row footer">
        <Footer />
      </div>
    </>
  )
}

export default Homepage;
