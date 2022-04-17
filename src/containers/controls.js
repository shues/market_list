import { connect } from "react-redux";
import { Controls } from "../components/controls";
import { initList, approveList, compliteList } from "../actions";

const mapStateToProps = (state, ownState) => {
  return { active: state.controls.active };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initList: () => dispatch(initList()),
    approveList: () => dispatch(approveList()),
    compliteList: () => dispatch(compliteList()),
  };
};

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;
