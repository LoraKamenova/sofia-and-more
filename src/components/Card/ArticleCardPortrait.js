import './ArticleCard.css'

const ArticleCardPortrait = (props) => { 

    return (
        <div className='article-card-wrapper'>
            <div className='article-card portrait-card' style={{ backgroundImage: "url('" + props.url + "')" }}>
                <div className="article-card-title-wrapper">
                    <h3 className="article-card-title">{props.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default ArticleCardPortrait;