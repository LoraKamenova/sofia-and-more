import React from 'react';
import { Component } from 'react';
import '../Sofia/PostPages.css';
import data from '../../assets/data.json';
import CategoryCard from '../Card/CategoryCard'

class Bulgaria extends Component {

    render() {

        let searchedValue = "българия";
        let posts = data.reverse().filter(temp => temp.category.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className='page-section'>
                <section className="main-category-card-section">
                    {/* <h1 className='category-card-heading'>Статии</h1> */}
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
            </section>
        )
    }
}
export default Bulgaria;