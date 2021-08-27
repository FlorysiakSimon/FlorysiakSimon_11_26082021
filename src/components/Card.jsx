import React, { Component } from 'react'
import data from '../assets/data.json'
import '../styles/Card.scss';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    render() {
        return (
            <section className='appartement'>
                {data.map((data,index) => {
                   return  <article className='appartementCard' key={index}>
                            <Link className='appartementLink'  to='/'>
                                <img className='appartementImg' src={data.cover} alt={data.title} />
                                <h2 className='appartementTitle'>{data.title}</h2>
                            </Link>
                            </article>
                })}
            </section>
        )
    }
}
