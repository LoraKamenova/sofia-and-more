import '../Post.css'

// Right 
// Upper 
// Left 
// Upper 

const Template1 = (props) => {
    return (
<       div className='post-section'>
          <h1 className='post-heading'>{props.data.title}</h1>
          <section className='right'>
            <img className='float-right portrait' src={props.data.sectionRightPic.url}></img>
            <div>{props.data.sectionRightPic.content.map((paragraph => (<p>{paragraph}</p>)))}</div>
          </section>
          <section className='upper'>
            <img className='landscape' src={props.data.sectionUpperPic.url}></img>
            <div>{props.data.sectionUpperPic.content.map((paragraph => (<p>{paragraph}</p>)))}</div>
          </section>
          <section className='left'>
            <img className='float-left portrait float' src={props.data.sectionLeftPic.url}></img>
            <div>{props.data.sectionLeftPic.content.map((paragraph => (<p>{paragraph}</p>)))}</div>
          </section>
          <section className='upper'>
            <img className='landscape' src={props.data.sectionUpperPic2.url}></img>
            <div>{props.data.sectionUpperPic2.content.map((paragraph => (<p>{paragraph}</p>)))}</div>
          </section>
          {/* <section className='gallery'>
            <div>{props.data.gallery.map((picUrl => (<img className='landscape' src={picUrl}></img>)))}</div>
          </section> */}
        </div>
    );
};

export default Template1;