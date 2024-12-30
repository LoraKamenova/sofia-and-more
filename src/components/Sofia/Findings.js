import React from 'react';
import { Component } from 'react';
import './Findings.css';
import data from '../../assets/data2.json';
import FindingsCard from '../Card/FindingsCard'
import AsideNav from '../Navbar/AsideNav';

class Findings extends Component {

    render() {

        let findings = data.map(({_id, url, title, caption}) => ({_id, url, title, caption}));
    
        return (
            <section className='page'>
            <AsideNav></AsideNav>
            </section>

            // <section className="findings-page-section">
            //     <AsideNav></AsideNav>
            //     {/* <p>test</p> */}
            //     <section className='findings-card-section'>
            //         <h1 className='findings-card-heading'>Находки</h1>
            //         {/* <section className='findings-card-container'>
            //             {findings.map((x) => (
            //                 <FindingsCard title={x.title}
            //                 caption={x.caption}
            //                 url={x.url}
            //                 />
            //             )
            //         )}
            //         </section> */}
            //         <p>test</p>
            //     </section>
            // </section>
        )
    }
}
export default Findings;