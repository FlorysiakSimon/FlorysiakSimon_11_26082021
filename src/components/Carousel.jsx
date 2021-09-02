import React, { Component } from 'react'
import "../styles/Carousel.scss"
import arrow from "../assets/arrow.svg"

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        arrayIndex: 0
        };
    }
    handleClick(){
        const arrayIndex = this.state.arrayIndex;
        this.setState({
            arrayIndex: arrayIndex++
          });
    }

    render() {
        const {carouselImg} = this.props;
        console.log(carouselImg.length)
        return (
            <section className="carousel">
                <img className="carouselImg" src={carouselImg[this.state.arrayIndex]} alt="appartement"/>
                
                {carouselImg.length > 1 
                ? (<div>
                  <img className="carouselArrowLeft" src={arrow} alt="arrow"/>
                  <img className="carouselArrowRight" onClick={this.handleClick} src={arrow} alt="arrow"/>
                  </div> )
                : ""
                }
                

            </section>
        )
    }
}
