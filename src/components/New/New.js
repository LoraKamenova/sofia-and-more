import React from 'react';
import { Component } from 'react';
import './New.css';
import data from '../../assets/data.json';
import NewCard from '../Card/NewCard'
import { Link } from "react-router-dom";

class New extends Component {

    render() {

        let recommendedUrl = "https://res.cloudinary.com/dyhmxus4n/image/upload/v1735389087/1/1-1_gowii1.jpg";
        let recommendedCategory = "София";
        let recommendedContent = "В софийския квартал Лозенец има една кула, която сякаш е излязла от приказките. Многократно я бях виждала на снимки и всеки път видът й ме очароваше.";
        let recommendedTitle = "Водната кула в Лозенец";
        let recommendedDate = "01/01/2010";

        let latestPosts = data.reverse().slice(-5);
        let posts = latestPosts.map(({_id, title, url, content, date, category}) => ({_id, title, url, content, date, category}));
    
        return (
            <section className="new-main-section">
                <section className='new-cards-container'>
                <div className='new-cards-container-wrapper'>
                    <h1 className='new-card-heading'>Нови статии</h1>
                </div>
                {posts.map((x) => (
                    <Link className='link' key={x._id} {...x} to={`/all/${x._id}`}>
                        <NewCard title={x.title}
                        content={x.content}
                        url={x.url}
                        date={x.date}
                        category={x.category}
                        />
                    </Link>
                     )
                )}
                </section >

                <section className='recommended-section'>
                    <div className='new-recommended-heading-wrapper'>
                        <h1 className='new-recommended-heading'>Препоръчано</h1>
                    </div>
                    <div className="new-recommended-image-wrapper">
                        <img className="recommended-card-image" src={recommendedUrl} alt=""/>
                    </div>
                    <div className='new-recommended-wrapper'>
                    <div className="new-recommended-category-wrapper">
                        <p className="new-recommended-category">{recommendedCategory}</p>
                    </div>
                    <div className="new-recommended-date-wrapper">
                        <p className="new-recommended-date">{recommendedDate}</p>
                    </div>
                    <div className="new-recommended-title-wrapper">
                        <h3 className="new-recommended-title">{recommendedTitle}</h3>
                    </div>
                    <div className="new-recommended-content-wrapper">
                        <h3 className="new-recommended-content">{recommendedContent}</h3>
                    </div>
                    <Link className='rec-link' to={`/all/${1}`}>
                    <div className="new-recommended-button-wrapper">
                        <div className="new-recommended-fake-button">Прочети<i class="fa fa-angle-double-right"></i>
                    </div>
                    </div>
                    </Link>
                    </div>
                </section>

            </section>
        )
    }
}
export default New;