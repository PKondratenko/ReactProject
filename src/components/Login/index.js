import Login from "./Login";
import { connect } from "react-redux";
import * as actions from "../../store/login/actions";

const mapStateToProps = state => ({
  ...state.login
});

const mapActionsCreated = {
  ...actions
};

export default connect(mapStateToProps, mapActionsCreated)(Login);
