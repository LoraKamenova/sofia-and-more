import './CategoryCard.css'

const CategoryCard = (props) => { 

    return (

        <div className='category-card' style={{ backgroundImage: "url('" + props.url + "')" }}>
            <div className="category-card-title-wrapper">
                <h3 className="category-card-title">{props.title}</h3>
             </div>
        </div>
    );
};

export default CategoryCard;