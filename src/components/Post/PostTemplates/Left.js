import '../Post.css'

const Left = (props) => {
    return (
      <section className='left'>
        <img className='post-image float-left portrait float' src={props.section.url}></img>
        <div>{props.section.content.map((paragraph => (<p className='post-paragraph'>{paragraph}</p>)))}</div>
      </section>
    );
};

export default Left;