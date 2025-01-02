import './PostCard.css'

const PostCard = (props) => { 

    return (
        <div className='post-card-wrapper'>
            <div className='post-card' style={{ backgroundImage: "url('" + props.url + "')" }}>
                <div className="post-card-title-wrapper">
                    <h3 className="post-card-title">{props.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default PostCard;