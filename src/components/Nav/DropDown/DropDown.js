import React from 'react';
import { DropDownData, DropDownData2, Brand, hashTag } from './DropDownData';
import './DropDown.scss';

const DropDown = ({ navRender }) => {
  const dropLeave = () => {
    navRender(false);
    document.getElementsByClassName('common')[0].style.backgroundColor =
      'unset';
  };

  return (
    <div className="DropDownTop">
      <div className="DropDown" onMouseLeave={dropLeave}>
        <div className="dropDownLeft">
          <ul className="style">
            <div className="menuTop">스타일</div>
            {DropDownData.map(menuList => {
              return (
                <li className="styleList" key={menuList.id}>
                  {menuList.dropDownMenu}
                </li>
              );
            })}
          </ul>
          <ul>
            <div className="menuDetail" />
            {DropDownData2.map(menuList => {
              return (
                <li className="styleList2" key={menuList.id}>
                  {menuList.dropDownMenu2}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="brand">
          <div className="menuTop">브랜드</div>
          {Brand.map(menuList => {
            return (
              <li className="styleList3" key={menuList.id}>
                {menuList.brandList}
              </li>
            );
          })}
        </ul>

        <ul className="hashTagList">
          <div className="menuTop">키워드</div>
          {hashTag.map(hashTagList => {
            return (
              <button className="hashTagStyle" key={hashTagList.id}>
                {hashTagList.hashTagList}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
