import { React, Component } from 'react';
import './Home.css';

class Home extends Component {

    render() {

        function RandomImage() {
            let arr = [
                "1.jpg", 
                "2.jpg", 
                "3.jpg",
                "4.jpg",
                "5.jpg",
                "6.jpg",
                "7.jpg",
                "8.jpg",
                "9.jpg",
                "10.jpg",
                "11.jpg",
                "12.jpg",
                "13.jpg",
                "14.jpg",
                "15.jpg",
            ];
            let num = Math.floor(Math.random() * arr.length);
            let path = arr[num];
           return path;
        }
    
        return (
            <section className="main-home-section">
                 <section className='left-home-section home-sections'>
                    <div className="home-image-container">
                        <img className="home-image" src={require("../../assets/images/" + RandomImage())} alt=""/>
                        <div className='home-greeting-wrapper'>
                            <p className='home-greeting'>Поздрав от София</p>
                        </div>
                    </div>
                </section>
                <section className='right-home-section home-sections'>
                    <h1 className="home-heading">Sofia & more</h1>
                </section>
            </section>
        )
    }
}
export default Home;