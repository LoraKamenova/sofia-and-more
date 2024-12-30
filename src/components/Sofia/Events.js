import React from 'react';
import { Component } from 'react';
import '../Sofia/PostPages.css';
import data from '../../assets/data.json';
import CategoryCard from '../Card/CategoryCard'
import AsideNav from '../Navbar/AsideNav';

class Articles extends Component {

    render() {

        let searchedValue = "събитие";
        let posts = data.filter(temp => temp.subcategory.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className='page-section'>
                <AsideNav></AsideNav>
                <section className="main-category-card-section">
                    <h1 className='category-card-heading'>Събития</h1>
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
export default Articles;