import { React, Component } from 'react';
import Sections from './PostTemplates/Sections';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var data = require(`../../assets/posts/${this.props.id}.json`);
    
    return (
      <div className='post-page'>
        <section className='post-section'>
          <h1 className='post-heading'>{data.title}</h1>
          <div>{data.sections.map((section => (<Sections data={section} />)))}</div>
        </section>
      </div>
    )
  }
}

export default Post;