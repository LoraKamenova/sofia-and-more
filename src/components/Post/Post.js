import { React, Component } from 'react';
// import ReactMarkdown from 'react-markdown';
import './Post.css';
// import rehypeRaw from 'rehype-raw';

class Post extends Component {
  constructor(props) {
    super(props)
    // this.state = { terms: null }
  }

  render() {

    var data = require(`../../assets/posts/${this.props.id}.json`);
    // var data = require(`../../assets/posts/1.json`);
    return (
      <div className='post-page'>
      <div className='post-section'>
        <h1 className='post-heading'>{data.title}</h1>
        <section className='right'>
          <img className='float-right portrait' src={data.paragraphRight.url}></img>
          <div>{data.paragraphRight.content.map((paragraph => (
                  <p>{paragraph}</p>
                )))}
          </div>
        </section>

      </div>
      </div>
    )
  }
}

export default Post;