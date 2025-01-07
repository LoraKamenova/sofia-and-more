import { React, Component } from 'react';
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
                                <FindCard title={x.title}
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
export default Finds;