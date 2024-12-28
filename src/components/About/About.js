// import React from 'react';
// import { Component } from 'react';
// import './About.css';

// class About extends Component {

//     render() {
//         return (
//             <section className='main-section'>
//                 <p>Добре дошли!</p>
//             </section>
//         )
//     }
// }
// export default About;


// import React from 'react';
// import { Component } from 'react';
// import './About.css';

// class About extends Component {

//     render() {
//         return (
//             <section className='main-section'>
//                 <p>Добре дошли!</p>
//             </section>
//         )
//     }
// }
// export default About;


import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import termsFrPath from '../../assets/posts/post.md'
import './About.css';


class About extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(termsFrPath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="post-section">
        <ReactMarkdown className="markdown" children={this.state.terms} />
      </div>
    )
  }
}

export default About