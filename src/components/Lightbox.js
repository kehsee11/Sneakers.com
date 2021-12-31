import React from 'react';
import ICON_CLOSE from '../images/close-lightbox.svg';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '../contextAPI/context';

const Lightbox = () => {
  const data = useGlobalContext();
  const {
    productsData,
    thumbnails,
    lightBox,
    closeLightBox,
    setLimit,
    value,
    setValue,
  } = data;

  return (
    <div className={`${lightBox ? 'lightbox show-lightbox' : 'lightbox'}`}>
      <div className='lb-gallery'>
        <button className='close-lb' onClick={() => closeLightBox()}>
          <img src={ICON_CLOSE} alt='icon close' />
        </button>
        <div className='lb-carousel'>
          <div className='lb-slider'>
            {productsData.map((product, index) => {
              let position;
              if (index === value) {
                position = 'active';
              }
              const { id, image } = product;
              return (
                <div className={`lb-slide ${position}`} key={id}>
                  <img src={image} alt='sneakers' />
                </div>
              );
            })}
          </div>
          {/* slider btn */}
          <div className='slide_btns'>
            {/* prev btn */}
            <button
              className='slide-btn prev lb-prev'
              onClick={() => setValue(setLimit(value - 1))}
            >
              <span>
                <FaAngleLeft />
              </span>
            </button>
            <button
              className='slide-btn next lb-next'
              onClick={() => setValue(setLimit(value + 1))}
            >
              <span>
                <FaAngleRight />
              </span>
            </button>
          </div>
          {/* thumnails */}
          <div className='lb-thumbnails'>
            {thumbnails.map((thumbnail, index) => {
              const { id, image } = thumbnail;

              let position;
              if (value === index) {
                position = 'thumbnail-active';
              }
              return (
                <div
                  className={`lb-thumbnail ${position}`}
                  key={id}
                  onClick={() => setValue(setLimit(index))}
                >
                  <img
                    src={image}
                    alt='sneakers thumnail'
                    width='80px'
                    height='80px'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
