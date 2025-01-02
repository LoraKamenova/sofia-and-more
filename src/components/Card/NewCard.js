import './NewCard.css'

const NewCard = (props) => {
    return (
        <article className="new-card">

            <div className="new-card-image-wrapper">
                <img className="card-image" src={props.url} alt=""/>
            </div>

            <div className="new-card-text-wrapper">
                <div className="new-card-category-wrapper">
                    <p className="new-card-category">{props.category}</p>
                </div>
                <div className="new-card-date-wrapper">
                    <p className="new-card-date">{props.date}</p>
                </div>
                <div className="new-card-title-wrapper">
                    <h3 className="new-card-title">{props.title}</h3>
                </div>

                <div className="new-card-content-wrapper">
                    <h3 className="new-card-content">{props.content}</h3>
                </div>
                <div className="new-card-button-wrapper">
                    <div className="new-fake-button">Прочети<i class="fa fa-angle-double-right"></i></div>
                </div>
            </div>

        </article>
    );
};

export default NewCard;