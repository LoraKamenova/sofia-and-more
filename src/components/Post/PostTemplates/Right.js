import '../Post.css'

const Right = (props) => {
    return (
      <section className='right'>
        <img className='post-image float-right portrait' src={props.section.url}></img>
        <div>{props.section.content.map((paragraph => (<p className='post-paragraph'>{paragraph}</p>)))}</div>
      </section>
    );
};

export default Right;