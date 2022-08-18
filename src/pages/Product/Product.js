import React, { useState } from 'react';
import { image } from '../../Function';
import BycleInfo from './BycleInfo';
import './Product.scss';
import ProductCheackList from './ProductCheackList';

const Product = () => {
  const [showImage, setShowImage] = useState(false);
  const [name, setName] = useState('closeProductImg');
  const imageChange = () => {
    setShowImage(!showImage);
    setName(name === 'closeProductImg' ? 'showProductImg' : 'closeProductImg');
  };

  return (
    <div className="Product">
      <div className="productImgBox">
        <img className={name} src={image('testImg')} alt="productImg" />
        {showImage && (
          <div className="productText">
            <h3>전기자전거</h3>
            <p>
              전기모터의 힘을 더하여, 적은 힘으로도 편하게 주행할 수 있는 자전거
            </p>
            <button> 제품 더보기 </button>
          </div>
        )}
      </div>
      <div className="productBody">
        <div className="imageSeemore" onClick={imageChange}>
          더보기
        </div>
        <ProductCheackList />
        <div className="bycleContainer">
          <div className="bycleTitle">
            <h2> Title </h2>
            <div className="line" />
          </div>
          <div className="bycleList">
            <BycleInfo />
            <BycleInfo />
            <BycleInfo />
            <BycleInfo />
            <BycleInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
