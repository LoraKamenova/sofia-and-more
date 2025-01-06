import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import AllCard from '../Card/AllCard'
import './All.css';

class All extends Component {

    render() {

        let reversedData = data.reverse();
        let posts = reversedData.map(({_id, title, url, content, date}) => ({_id, title, url, content, date}));
    
        return (
            <section className="all-cards-section">
                <div className='all-cards-container'>
                    <h1 className='all-cards-heading'>Всички статии</h1>
                    {posts.map((x) => (
                        <Link className='all-cards-link' key={x._id} {...x} to={`/all/${x._id}`}>
                            <AllCard title={x.title}
                            content={x.content}
                            url={x.url}
                            date={x.date}
                            />
                        </Link>
                        )
                    )}
                </div>
            </section>
        )
    }
}
export default All;