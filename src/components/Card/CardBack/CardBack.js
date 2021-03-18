import classes from './CardBack.module.scss';

const cardBack = (props) => {
    
    let cardClasses = [ classes.Card,classes.CardBack].join(" ");

    return (
    <div className={cardClasses}>
        <div className={classes.leftCol}>
            {props.bio}
        </div>


        <div className={classes.rightCol}>
            <ul className={classes.Highlight}>
                {props.highlights.map(highlight => {
                    return (
                        <li> {highlight} </li>
                    )               
                })}
            </ul>
        </div>
    </div>
)};

export default cardBack;