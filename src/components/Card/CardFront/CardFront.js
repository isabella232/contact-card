import classes from './CardFront.module.scss'
const cardFront = (props) => {
    let cardClasses = [ classes.Card, classes.CardFront ].join(" ");

    return (
    <div className={cardClasses}>           
        <img alt='profilepic' width='100px' height='auto' src={props.picture}/>
        <p>{props.name}</p>
        <p>{props.title}</p>
        <p>{props.phone}</p>
    </div>
);}

export default cardFront;