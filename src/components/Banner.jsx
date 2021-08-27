import React, { Component } from 'react'
import banner from '../assets/banner_home.png'
import '../styles/Banner.scss';

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img className="bannerImg" src={banner} alt='banniere'/>
                <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
            </div>
        )
    }
}
