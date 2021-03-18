import {Component} from 'react';
import CardFront from '../../components/Card/CardFront/CardFront';
import CardBack from '../../components/Card/CardBack/CardBack';
import Aux from '../../hoc/Auxil/Auxil'
// import classes from './Card.module.scss';
import pic from '../../assets/avataaars.png'

class Card extends Component {

    state = { flipped: false, picture: '' };
    flipHandler = () => {
        console.log("state: " + this.state.flipped);
        const oldState = {...this.state};
        console.log(oldState);
        this.setState({flipped: !oldState.flipped});
    };

    render(){        
        return (
        <Aux>
            <CardFront 
                name="Jimmy Quach"
                title="Developer"
                phone="+467777777"
                picture={pic}
                flipped={!this.state.flipped}
                click={this.flipHandler}
            />

            <CardBack
                flipped= {this.state.flipped}
                click={this.flipHandler}
            />
        </Aux>
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