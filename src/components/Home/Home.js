import React from 'react';
import { Component } from 'react';
import './Home.css';

class Home extends Component {
    // constructor (props) {
    //     super(props)
    // }
    render() {

        function RandomImage() {

            let arr = ["1.jpg", "2.jpg", "3.jpg"];
            let num = Math.floor(Math.random() * arr.length);
            let path = arr[num];
           return path;
        }
        
        let imagePath = RandomImage();
    
        return (
            <section className="main-section">
                    <section className='left-section sections'>
                        <div className="image-container">
                        {/* <img className="image" src={require("../../assets/images/1.jpg")} alt=""/> */}
                        <img className="image" src={require("../../assets/images/" + RandomImage())} alt=""/>
                        </div>
                    </section>
                    <section className='right-section sections'>
                        <h1 className="heading">Sofia & more</h1>
                    </section>
            </section>
        )
    }
}
export default Home;