import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const {
        idCategory: id,
        strCategory: title,
        strCategoryThumb: img,
        strCategoryDescription: description,
    } = props;

    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={img} alt={title} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{title}</span>
                <p className=''>{description.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${title}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
