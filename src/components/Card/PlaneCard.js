import './PlaneCard.css'

const PlaneCard = (props) => {
    return (
    <figure className='plane-card'>
        <img className='plane-image' src={props.url} />
        <figcaption className='plane-caption'>
            <h3>{props.title}</h3>
            <p>{props.caption}</p>
            </figcaption>
    </figure>
    );
};

export default PlaneCard;