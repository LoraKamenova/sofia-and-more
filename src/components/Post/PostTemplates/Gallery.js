import '../Post.css'

const Gallery = (props) => {
    return (
      <section className='post-gallery'>
        {props.section.pics.map((pic => (<img className='gallery portrait' src={pic}></img>)))}
      </section>
    );
};

export default Gallery;