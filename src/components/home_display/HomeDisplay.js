import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeDisplay.css'
import item_test from './TEST.jpg'

export default class HomeDisplay extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      cssEase: "linear"
    };
    return (
      <div class="container">
      <div class="carousel">
        <Slider {...settings}> 
          <div>
            <img style={{height: 200}} src={item_test} alt="test"/>
          </div>
          <div>
            <img style={{height: 200}} src={item_test} alt="test"/>
          </div>
          <div>
            <img style={{height: 200}} src={item_test} alt="test"/>
          </div>
          <div>
            <img style={{height: 200}} src={item_test} alt="test"/>
          </div>
          <div>
            <img style={{height: 200}} src={item_test} alt="test"/>
          </div>
          <div>
            <Link to={{pathname: "/results"}}>
              <img style={{height: 200}} src="https://images-na.ssl-images-amazon.com/images/I/51uuWGQyLSL._SX330_BO1,204,203,200_.jpg" alt="result"/>
            </Link>
          </div>
          <div>
            <Link to={{pathname: "/results"}}>
              <img style={{height: 200}} src="https://m.media-amazon.com/images/I/51tiK-eB3JL.jpg" alt="result"/>
            </Link>   
          </div>
          <div>
            <Link to={{pathname: "/results"}}>
              <img style={{height: 200}} src="https://images-na.ssl-images-amazon.com/images/I/71lgBdNFjyL.jpg" alt="result"/>
            </Link>
          </div>
          <div>
            <Link to={{pathname: "/results"}}>
              <img style={{height: 200}} src="https://coverart.oclc.org/ImageWebSvc/oclc/+-+3597429966_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA" alt="result"/>
            </Link>
          </div>
          <div>
            <Link to={{pathname: "/results"}}>
              <img style={{height: 200}} src="https://coverart.oclc.org/ImageWebSvc/oclc/+-+242672384_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA" alt="result"/>
            </Link>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}