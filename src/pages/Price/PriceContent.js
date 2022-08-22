import React from 'react';
import './PriceContent.scss';

const PriceContent = ({
  prices: { name, src, price, id },
  onCheckedElement,
  deleteContent,
  checked,
}) => {
  return (
    <div className="priceContent">
      <input
        type="checkbox"
        onClick={onCheckedElement}
        value={price}
        checked={checked}
        onChange={e => {
          onCheckedElement(e);
        }}
      />
      <img src={src} alt="priceContent" />
      <div className="contentInfo">
        <div className="contentName">{name}</div>
        <div className="contentPrice">{price}원</div>
      </div>
      <div className="deleteContent" onClick={deleteContent}>
        x
      </div>
    </div>
  );
};

export default PriceContent;
