import React, { Component } from 'react'
import starRed from '../assets/star-red.svg'
import starGray from '../assets/star-gray.svg'
export default class Rating extends Component {
    render() {
        const {rating} = this.props
        return (
            <div className="apartmentHostRating">
                {rating}
                <img src={starRed} alt="etoile rouge"/>
                <img src={starGray} alt="etoile grise"/>
            </div>
        )
    }
}
