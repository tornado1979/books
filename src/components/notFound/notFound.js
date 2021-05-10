import React from 'react'
import Image from 'react-bootstrap/Image'
import notFound from '../../assets/imgs/not-found.jpg';
import './notFound.scss';

const NotFound = () => {
  return(
    <Image src={notFound} className="image" />
  )
}

export default NotFound;
