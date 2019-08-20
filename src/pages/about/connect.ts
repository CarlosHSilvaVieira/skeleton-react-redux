import { Dispatch } from 'redux'
import { IState } from './../../redux/reducers/index'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const MapStateToProps = (state: IState) => {

    return {
    }
}

const MapDispatchToProps = (dispatch: Dispatch) => ({

    redirect: (route: any) => dispatch(push(route)),
})

export default (componentClass: any) => connect(MapStateToProps, MapDispatchToProps)(componentClass)
