import { React, Component } from 'react';
import { Link } from "react-router-dom";
import ArticleCardPortrait from '../Card/ArticleCardPortrait';
import data from '../../assets/data.json';
import '../Sofia/PostPages.css';

class Collections extends Component {

    render() {

        let searchedValue = "колекции";
        let reversedData = data.reverse();
        let posts = reversedData.filter(temp => temp.subcategory.includes(searchedValue)).map(({_id, title, url, content}) => ({_id, title, url, content}));
    
        return (
            <section className='category-page-section'>
                <section className="category-cards-section">
                    <h1 className='category-cards-heading'>Колекции</h1>
                    <div className='category-cards-container'>
                        {posts.map((x) => (
                            <Link className='sofia-link' key={x._id} {...x} to={`/all/${x._id}`}>
                                <ArticleCardPortrait title={x.title}
                                content={x.content}
                                url={x.url}
                                />
                            </Link>
                            )
                        )}
                    </div>
                </section>
            </section>
        )
    }
}
export default Collections;