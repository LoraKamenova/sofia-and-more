import '../Post.css'

const Upper = (props) => {
    return (
      <section className='upper'>
        <img className='post-image landscape' src={props.section.url}></img>
        <div>{props.section.content.map((paragraph => (<p className='post-paragraph'>{paragraph}</p>)))}</div>
      </section>
    );
};

export default Upper;