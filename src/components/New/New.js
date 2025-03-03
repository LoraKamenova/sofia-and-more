import { React, Component } from 'react';
import { Link } from "react-router-dom";
import NewCard from '../Card/NewCard'
import data from '../../assets/data.json';
import './New.css';

class New extends Component {

    render() {

        let recommendedPosts = data.filter(temp => temp.recommended.includes("yes")).map(({_id, title, url, content, date, category}) => ({_id, title, url, content, date, category}));

        let reversedData = data.reverse();
        let latestPosts = reversedData.slice(-3);
        let posts = latestPosts.map(({_id, title, url, content, date, category}) => ({_id, title, url, content, date, category}));
    
        return (
            <section className="new-main-section">
                <div className='new-cards-container'>
                    <div className='new-card-heading-wrapper'>
                        <h1 className='new-card-heading'>Последни статии</h1>
                    </div>
                    {posts.map((x) => (
                        <Link className='new-link' key={x._id} {...x} to={`/all/${x._id}`}>
                            <NewCard title={x.title}
                                content={x.content.substring(0, 200) + "..."}
                                url={x.url}
                                date={x.date}
                                category={x.category}
                            />
                        </Link>
                         )
                    )}
                </div >

                <section className='recommended-section'>
                    <div className='new-recommended-heading-wrapper'>
                        <h1 className='new-recommended-heading'>Препоръчано</h1>
                    </div>
                    <div className="new-recommended-image-wrapper">
                        <img className="new-recommended-card-image" src={recommendedPosts[0].url} alt=""/>
                    </div>
                    <div className='new-recommended-content-wrapper'>
                        <div className="new-recommended-category-wrapper">
                            <p className="new-recommended-category">{recommendedPosts[0].category}</p>
                        </div>
                        <div className="new-recommended-date-wrapper">
                            <p className="new-recommended-date">{recommendedPosts[0].date}</p>
                        </div>
                        <div className="new-recommended-title-wrapper">
                            <h3 className="new-recommended-title">{recommendedPosts[0].title}</h3>
                        </div>
                        <div className="new-recommended-text-wrapper">
                            <h3 className="new-recommended-text">{recommendedPosts[0].content.substring(0, 200) + "..."}</h3>
                        </div>
                        <Link className='recommended-link' to={`/all/${1}`}>
                            <div className="new-recommended-button-wrapper">
                                <div className="new-recommended-button">Прочети<i class="fa fa-angle-double-right"></i></div>
                            </div>
                        </Link>
                    </div>
                </section>
            </section>
        )
    }
}
export default New;