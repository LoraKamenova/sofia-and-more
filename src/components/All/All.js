import React from 'react';
import { Component } from 'react';
import './All.css';
import data from '../../assets/data.json';
import Card from '../Card/Card'
import { Link } from "react-router-dom";

class All extends Component {

    render() {

        // let searchedValue = "София";
        // let posts = data.filter(temp => temp.category.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
        let posts = data.reverse().map(({_id, title, url, content, date}) => ({_id, title, url, content, date}));
    
        return (
            <section className="main-card-section">
                <section className='card-container'>
                <h1 className='card-heading'>Всички статии</h1>
                {posts.map((x) => (
                    <Link className='link' key={x._id} {...x} to={`/all/${x._id}`}>
                        <Card title={x.title}
                        content={x.content}
                        url={x.url}
                        date={x.date}
                        />
                    </Link>
                     )
                )}
                </section>
            </section>
        )
    }
}
export default All;