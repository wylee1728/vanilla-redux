import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store";

const Detail = ({ toDos, deleteToDo }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const toDo = toDos.find((toDo) => toDo.id == id);
  const onClick = () => {
    deleteToDo(toDo.id);
    navigate("/");
  };
  return (
    <div>
      <h1>{toDo.id}</h1>
      <h1>{toDo.text}</h1>
      <button onClick={onClick}>DEL</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    toDos: state,
  };
};

const maptDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: (id) => {
      dispatch(actionCreators.deleteToDo(id));
    },
  };
};
export default connect(mapStateToProps, maptDispatchToProps)(Detail);
