import React, { Component } from 'react'
import '../styles/Banner.scss';

export default class Banner extends Component {

    render() {

        const {imgContent, imgSrc, imgAlt} = this.props;

        return (
            <div className="banner">
                <img className="bannerImg" src={imgSrc} alt={imgAlt}/>
                <h1 className="bannerTitle">{imgContent}</h1>
            </div>
        )
    }
}
