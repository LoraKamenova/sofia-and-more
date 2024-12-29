import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
// import files from '../../assets/posts'
// import termsFrPath from '../../assets/posts/1.md'

import './Post.css';


class Post extends Component {
  constructor(props) {
    super(props)
    // const id = props.id;
    // console.log(id)
    this.state = { terms: null }
  }



//   componentWillMount() {

//     const termsFrPath = import(`../../assets/posts/1.md`);
    
//     fetch(termsFrPath)
//     .then((response) => response.text())
//     .then((text) => {
//       this.setState({ terms: text })
//     })
//   }

async componentWillMount() {
    // const postId = props.params.id;
    // const { id } = useParams()
   
    // const { id } = this.props.match.params;
    const file = await import(`../../assets/posts/${this.props.id}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    this.setState({ terms: text })
  }


  render() {
    return (
      <div className="post-section">
        <ReactMarkdown className="markdown" children={this.state.terms} />
      </div>
    )
  }
}

export default Post