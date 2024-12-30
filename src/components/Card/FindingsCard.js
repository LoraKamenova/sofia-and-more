import './FindingsCard.css'

const FindingsCard = (props) => {
    return (
    <figure className='findings-card'>
        <img className='findings-image' src={props.url} />
        <figcaption className='findings-caption'>
            <h3>{props.title}</h3>
            <p>{props.caption}</p>
            </figcaption>
    </figure>
    );
};

export default FindingsCard;