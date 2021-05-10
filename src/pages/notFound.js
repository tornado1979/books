import React from 'react';
import Header from '../containers/header/header';
import Footer from '../components/footer/footer';
import NotFound from '../components/notFound/notFound';

import './home.scss';

const NotFoundPage = () => {
  return(
    <>
      <div className="row header">
      <Header />
      </div>
      <main>
        <NotFound />
      </main>
      <div className="row footer">
        <Footer />
      </div>
    </>
  )
}

export default NotFoundPage;
