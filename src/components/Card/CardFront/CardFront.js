import classes from './CardFront.module.scss'
const cardFront = (props) => {
    let cardClasses = [ classes.Card, classes.CardFront, props.flipped ? classes.show : ""].join(" ");

    return (
    <div className={cardClasses} onClick={props.click}>           
        <img alt='profilepic' width='100px' height='auto' src={props.picture}/>
        <p>{props.name}</p>
        <p>{props.title}</p>
        <p>{props.phone}</p>
    </div>
);}

export default cardFront;