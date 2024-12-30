import './FindCard.css'

const FindCard = (props) => {
    return (
    <figure className='find-card'>
        <img className='find-image' src={props.url} />
        <figcaption className='find-caption'>
            <h3>{props.title}</h3>
            <p>{props.caption}</p>
            </figcaption>
    </figure>
    );
};

export default FindCard;