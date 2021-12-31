import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../contextAPI/context';

const Carousel = () => {
  const data = useGlobalContext();
  const { productsData, thumbnails, value, setValue, setLimit, openLightBox } =
    data;

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setValue(setLimit(value + 1));
  //   }, 5000);
  //   return () => clearInterval(slider);
  // }, [value]);
  return (
    <div className='carousel'>
      <div className='slider'>
        {productsData.map((product, index) => {
          const { id, image } = product;
          let position;
          if (index === value) {
            position = 'active';
          }
          return (
            <div
              className={`slide ${position}`}
              key={id}
              onClick={() => openLightBox()}
            >
              <img src={image} alt='sneakers' />
            </div>
          );
        })}
      </div>
      {/* carousel nav btn */}
      <div className='slide-btns'>
        {/* prev btn */}
        <button
          className='slide-btn prev'
          onClick={() => setValue(setLimit(value - 1))}
        >
          <span>
            <FaAngleLeft />
          </span>
        </button>
        <button
          className='slide-btn next'
          onClick={() => setValue(setLimit(value + 1))}
        >
          <span>
            <FaAngleRight />
          </span>
        </button>
      </div>
      {/* thumbnails */}
      <div className='carousel-thumbnails'>
        <div className='lb-thumbnails'>
          {thumbnails.map((thumbnail, index) => {
            let position;
            if (value === index) {
              position = 'thumbnail-active';
            }
            const { id, image } = thumbnail;
            return (
              <div
                className={`lb-thumbnail ${position}`}
                key={id}
                onClick={() => setValue(setLimit(index))}
              >
                <img
                  src={image}
                  alt='sneakers thumbnail'
                  width='100px'
                  height='100px'
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
