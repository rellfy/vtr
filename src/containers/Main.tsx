import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {State} from "../store";
import {createAction as createLoginAction} from '../store/user/login';
import {getUsernameLength} from "../store/user/selectors";
import Main, {
    State as ComponentState, 
    Dispatch as ComponentDispatch
} from '../components/Main';

const mapStateToProps = (state: State): ComponentState => ({
    user: state.user,
    usernameLength: getUsernameLength(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ComponentDispatch => ({
    login: bindActionCreators(createLoginAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);