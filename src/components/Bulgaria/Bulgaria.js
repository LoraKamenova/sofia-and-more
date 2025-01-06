import { React, Component } from 'react';
import ArticleCardPortrait from '../Card/ArticleCardPortrait';
import data from '../../assets/data.json';
import '../Sofia/PostPages.css';

class Bulgaria extends Component {

    render() {

        let searchedValue = "България";
        let posts = data.reverse().filter(temp => temp.category.includes(searchedValue)).map(({id, title, url, content}) => ({id, title, url, content}));
    
        return (
            <section className='category-page-section'>
                <section className="category-cards-section">
                    <div className='category-cards-container'>
                    {posts.map((x) => (
                        <ArticleCardPortrait title={x.title}
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
export default Bulgaria;