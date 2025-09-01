import { React, Component } from 'react';
import PlaneCard from '../Card/PlaneCard';
import data from '../../assets/data_planes.json';
import '../Sofia/PostPages.css';

class Above extends Component {

    render() {

        let reversedData = data.reverse();
        let planes = reversedData.map(({_id, url, title, caption}) => ({_id, url, title, caption}));
        
        return (
            <section className='category-page-section'>
                <section className="category-cards-section">
                    <h1 className='category-cards-heading'>Над София</h1>
                    <div className='plane-cards-container'>
                        {planes.map((x) => (
                                <PlaneCard title={x.title}
                                caption={x.caption}
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
export default Above;