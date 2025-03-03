import { React, Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './Post.css';
import rehypeRaw from 'rehype-raw';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = { terms: null }
  }

async componentWillMount() {
    const file = await import(`../../assets/posts/${this.props.id}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    this.setState({ terms: text })
  }

  render() {
    return (
      <div className="post-section">
        {/* <ReactMarkdown className="markdown" children={this.state.terms} /> */}
        <ReactMarkdown className="markdown" children={this.state.terms} rehypePlugins={[rehypeRaw]} />
      </div>
    )
  }
}

export default Post;