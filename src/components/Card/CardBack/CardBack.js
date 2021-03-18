import classes from './CardBack.module.scss';

const cardBack = (props) => {
    
    let cardClasses = [ classes.Card,classes.CardBack, props.flipped ? classes.show : ""].join(" ");

    return (
    <div className={cardClasses} onClick={props.click}>
        <div className={classes.leftCol}>
            Developer for 8 years+ with experience in front and back-end. Specialize in front-end and frameworks such as Angular or React. Loves burgers.
        </div>
        <div className={classes.rightCol}>
            <ul className="highlights">
                <li> Front-end </li>
                <li> REACT </li>
                <li> Angular </li>
            </ul>
        </div>
    </div>
)};

export default cardBack;