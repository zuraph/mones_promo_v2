
import './Card.scss';

function Card({image, name, play}) {
    //const handleCardClick = () => {
    //    eval(play); // Be cautious with eval, ensure play values are safe
    //};
    return (
        <a href={`javascript:window.top.${play}`} className="card-wrapper">
            {/*<img src={image} alt="Book"/>*/}
            <div
                className="card-image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
            </div>
            <div className="card-name">
                <span>{name}</span>
            </div>

        </a>
    );
}

export default Card;
