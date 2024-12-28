import React from 'react';
import { Component } from 'react';
import './All.css';
import data from '../../assets/data.json';
import Card from '../Card/Card'

class All extends Component {

    render() {

        // let searchedValue = "София";
        // let posts = data.filter(temp => temp.category.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
        let posts = data.map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className="main-card-section">
                <section className='card-container'>
                <h1 className='card-heading'>Всички статии</h1>
                {posts.map((x) => (
                    <Card title={x.title}
                    content={x.content}
                    url={x.url}
                    />
                     )
                )}
                </section>
            </section>
        )
    }
}
export default All;