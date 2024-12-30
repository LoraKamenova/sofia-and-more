import './Card.css'

const Card = (props) => {
    return (
        <article className="card">

            <div className="card-image-wrapper">
                <img className="card-image" src={props.url} alt=""/>
            </div>

            <div className="card-text-wrapper">

                <div className="card-title-wrapper">
                    <h3 className="card-title">{props.title}</h3>
                </div>

                <div className="card-content-wrapper">
                    <h3 className="card-content">{props.content}</h3>
                </div>
                <div className="card-button-wrapper">
                    <div className="fake-button">Прочети</div>
                </div>
            </div>

        </article>
    );
};

export default Card;