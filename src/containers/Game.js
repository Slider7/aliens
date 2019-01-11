import {connect} from 'react-redux';
import App from '../App';
import {moveObjects} from '../Actions/index';

//нужно сопоставить action (экшн) moveObjects с props (свойствами) компонента App.
//Это осуществляется в данном контейнере Game.


const mapStateToProps = state => ({
	angle: state.angle,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
});

const Game = connect(	mapStateToProps, mapDispatchToProps )(App);

export default Game;