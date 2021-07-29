import React, {useState} from 'react'
import './banner.scss'
import Carousel from 'react-bootstrap/Carousel'
import brand1 from '../../img/brand/brand1.png'
import brand2 from '../../img/brand/brand2.png'
import brand3 from '../../img/brand/brand3.png'


export const Banner = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='img-container' interval={2000}>
          <img
            className="d-block w-100"
            src={brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='img-container' interval={2000}>
          <img
            className="d-block w-100"
            src={brand2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='img-container' interval={2000}>
          <img
            className="d-block w-100"
            src={brand3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }

