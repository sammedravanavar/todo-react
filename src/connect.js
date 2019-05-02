import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as allactions from './actions/actionCreator';
import Root from "./components/Router";
function mapStateToProps(store){
    return {
        users: store.users,
        todos: store.todos,
        userDetails: store.userDetails
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators(allactions,dispatcher);
}

export var Main = connect(mapStateToProps,mapDispatchToProps)(Root);