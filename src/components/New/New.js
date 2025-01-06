import { React, Component } from 'react';
import { Link } from "react-router-dom";
import NewCard from '../Card/NewCard'
import data from '../../assets/data.json';
import './New.css';

class New extends Component {

    render() {

        let rec_Url = "https://res.cloudinary.com/dyhmxus4n/image/upload/v1736170116/1/4-1_nlaqjg.jpg";
        let rec_Category = "София";
        let rec_Content = "Така и не отидох до София Ленд докато все още беше отворен. Неочакван шанс да посетя някогашния увеселителен парк ми предостави едно изложение";
        let rec_Title = "Разходка из някогашния София Ленд";
        let rec_Date = "01/01/2010";

        let reversedData = data.reverse();
        let latestPosts = reversedData.slice(-5);
        let posts = latestPosts.map(({_id, title, url, content, date, category}) => ({_id, title, url, content, date, category}));
    
        return (
            <section className="new-main-section">
                <div className='new-cards-container'>
                    <div className='new-card-heading-wrapper'>
                        <h1 className='new-card-heading'>Нови статии</h1>
                    </div>
                    {posts.map((x) => (
                        <Link className='new-link' key={x._id} {...x} to={`/all/${x._id}`}>
                            <NewCard title={x.title}
                                content={x.content}
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
                        <img className="new-recommended-card-image" src={rec_Url} alt=""/>
                    </div>
                    <div className='new-recommended-content-wrapper'>
                        <div className="new-recommended-category-wrapper">
                            <p className="new-recommended-category">{rec_Category}</p>
                        </div>
                        <div className="new-recommended-date-wrapper">
                            <p className="new-recommended-date">{rec_Date}</p>
                        </div>
                        <div className="new-recommended-title-wrapper">
                            <h3 className="new-recommended-title">{rec_Title}</h3>
                        </div>
                        <div className="new-recommended-text-wrapper">
                            <h3 className="new-recommended-text">{rec_Content}</h3>
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