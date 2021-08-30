import React, { Component } from 'react'
import '../styles/AboutPage.scss';
import Banner_About from '../assets/banner_about.png'
import Banner from '../components/Banner';
export default class AboutPage extends Component {
    render() {
        return (
            <main>
                <Banner imgSrc={Banner_About} imgAlt='bannière' />
            </main>
        )
    }
}
