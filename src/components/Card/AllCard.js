import './AllCard.css'

const AllCard = (props) => {
    return (
        <article className="all-card">
            <div className="all-card-image-wrapper">
                <img className="all-card-image" src={props.url} alt=""/>
            </div>
            <div className="all-card-content-wrapper">
                <div className="all-card-date-wrapper">
                    <p className="all-card-date">{props.date}</p>
                </div>
                <div className="all-card-title-wrapper">
                    <h3 className="all-card-title">{props.title}</h3>
                </div>
                <div className="all-card-text-wrapper">
                    <h3 className="all-card-text">{props.content.substring(0, 300) + "..."}</h3>
                </div>
                <div className="all-card-button-wrapper">
                    <div className="all-card-fake-button">Прочети</div>
                </div>
            </div>
        </article>
    );
};

export default AllCard;