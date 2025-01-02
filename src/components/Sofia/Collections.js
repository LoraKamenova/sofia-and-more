import { React, Component } from 'react';
import PostCard from '../Card/PostCard';
import data from '../../assets/data.json';
import '../Sofia/PostPages.css';

class Collections extends Component {

    render() {

        let searchedValue = "колекции";
        let posts = data.reverse().filter(temp => temp.subcategory.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className='category-page-section'>
                <section className="category-cards-section">
                    <h1 className='category-cards-heading'>Колекции</h1>
                    <div className='category-cards-container'>
                        {posts.map((x) => (
                            <PostCard title={x.title}
                            content={x.content}
                            url={x.url}
                            />
                            )
                        )}
                    </div>
                </section>
            </section>
        )
    }
}
export default Collections;