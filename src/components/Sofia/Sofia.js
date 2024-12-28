import React from 'react';
import { Component } from 'react';
import './Sofia.css';
import data from '../../assets/data.json';
import CategoryCard from '../CategoryCard/CategoryCard'

class Sofia extends Component {

    render() {

        let searchedValue = "София";
        let posts = data.filter(temp => temp.category.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className="main-category-card-section">
                <h1 className='category-card-heading'>Всички статии от категория: {searchedValue}</h1>
                <section className='category-card-container'>
                {posts.map((x) => (
                    <CategoryCard title={x.title}
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
export default Sofia;