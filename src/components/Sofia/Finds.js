import { React, Component } from 'react';
import { Link } from "react-router-dom";
import FindCard from '../Card/FindCard';
import data from '../../assets/data_finds.json';
import '../Sofia/PostPages.css';

class Finds extends Component {

    render() {

        let reversedData = data.reverse();
        let finds = reversedData.map(({_id, url, title, caption}) => ({_id, url, title, caption}));
        
        return (
            <section className='category-page-section'>
                <section className="category-cards-section">
                    <h1 className='category-cards-heading'>Hаходки</h1>
                    <div className='find-cards-container'>
                        {finds.map((x) => (
                            <Link className='sofia-link' key={x._id} {...x} to={`/all/${x._id}`}>
                                <FindCard title={x.title}
                                caption={x.caption}
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
export default Finds;