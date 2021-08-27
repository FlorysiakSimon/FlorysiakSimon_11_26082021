import React, { Component } from 'react'
import '../styles/HomePage.scss';
import Card from '../components/Card'
import Banner from '../components/Banner'

export default class HomePage extends Component {
    
    render() {
        return (
            <main>
                <Banner/>
                <Card/>
            </main>
        )
    }
}
