import React from 'react';
import { Component } from 'react';
import '../Sofia/PostPages.css';
import data from '../../assets/data2.json';
import AsideNav from '../Navbar/AsideNav';
import FindCard from '../Card/FindCard';

class Finds extends Component {

    render() {

        let finds = data.map(({_id, url, title, caption}) => ({_id, url, title, caption}));
        
        return (
            <section className='page-section'>
                <AsideNav></AsideNav>
                <section className="main-category-card-section">
                    <h1 className='category-card-heading'>Hаходки</h1>
                    <section className='find-card-container'>
                    {finds.map((x) => (
                        <FindCard title={x.title}
                        caption={x.caption}
                        url={x.url}
                        />
                        )
                    )}
                    </section>
                </section>
            </section>
        )
    }
}
export default Finds;