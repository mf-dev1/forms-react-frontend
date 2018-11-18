import { connect } from 'react-redux';
import Hello from '../components/Hello';
import '../styles/Hello.css';
import * as actions from '../actions';

// Map Redux state to component props
function mapStateToProps(state: any) {
  return {
    enthusiasmLevel: state.enthusiasmLevel,
    name: 'Redux',
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    onIncrement: () => dispatch(actions.increaseEnthusiasm()),
    onDecrement: () => dispatch(actions.decreaseEnthusiasm()),
  };
}

// Connected Component
const ReduxHello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);

export default ReduxHello;
