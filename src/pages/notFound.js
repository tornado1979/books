import React from 'react';
import Header from '../containers/header/header';
import Footer from '../components/footer/footer';
import NotFound from '../components/notFound/notFound';

import './home.scss';

const NotFoundPage = () => {
  return(
    <>
      <header><Header /></header>
      <main>
        <NotFound />
      </main>
      <footer><Footer /></footer>
    </>
  )
}

export default NotFoundPage;
