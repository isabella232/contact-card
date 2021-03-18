import {Component} from 'react';
import CardFront from '../../components/Card/CardFront/CardFront';
import CardBack from '../../components/Card/CardBack/CardBack';
import classes from './Card.module.scss';
import pic from '../../assets/avataaars.png'

class Card extends Component {

    state = { flipped: false, picture: '' };
    cardClasses = [classes.Card].join(" ");

    flipHandler = () => {
        const oldState = {...this.state};
        this.setState({flipped: !oldState.flipped});
    };

    render(){        
        return (
            <div className={classes.CardFlip} onClick={this.flipHandler}>
                <div className={[classes.Card, this.state.flipped ? classes.Flip : ""].join(" ")}>
                    <CardFront 
                        name="Jimmy Quach"
                        title="Developer"
                        phone="+467777777"
                        picture={pic}
                    />

                    <CardBack
                    />
                </div>
            </div>
        );
    };
}

export default Card;

// boilerplate
// import {Component} from 'react'

// class Card extends Component {
//     render(){
//         return (null);
//     };
// }

// export default Card;