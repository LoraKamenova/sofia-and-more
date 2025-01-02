import { React, Component } from 'react';
import PostCard from '../Card/PostCard';
import data from '../../assets/data.json';
import '../Sofia/PostPages.css';

class World extends Component {

    render() {

        let searchedValue = "по света";
        let posts = data.reverse().filter(temp => temp.category.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className='category-page-section'>
                <section className="category-cards-section">
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
export default World;