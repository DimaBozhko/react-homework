import "./Card.css";

const Card = (props) => {

    const 
    {urlCard, 
     urlAuthorImg, 
     urlRating, 
     urlStudents, 
     urlModules, 
     urlDuration, 
     title, 
     author, 
     rating,
     students, 
     level, 
     modules,
     duration, 
     } = props;

    return (
        <div className="card">
            <img className="card-img" src={urlCard} alt="img" width= "294" height= "150"></img>
            <h2 className="card-headline">{title}</h2>
            <div className="card-item author">
                <img src={urlAuthorImg} alt="img-author" width= "30" height= "30"/>
                <span className="author-name">{author}</span>
            </div>
            <div className="card-item rating">
                <img src={urlRating} alt="img-rating" width= "15" height= "15"/>
                <span className="author-name">{rating}</span>
            </div>
            <div className="card-item students">
                <img src={urlStudents} alt="img-students" width= "16" height= "16"/>
                <span className="author-name">{students}</span>
            </div>
            <div className="card-item modules">
                <img src={urlModules} alt="img-modules" width= "16" height= "16"/>
                <span className="author-name">{modules}</span>
            </div>
            <div className="card-item duration">
                <img src={urlDuration} alt="img-duration" width= "16" height= "16"/>
                <span className="author-name">{duration}</span>
            </div>
            <div className="level">
                <span className="author-name">{level}</span>
            </div>
        </div>
    )

}

export default Card;