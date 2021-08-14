function Card(props) {
    return (
        <div className="card" style={ {"width": "20rem"} }>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonLink} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
};

export default Card;