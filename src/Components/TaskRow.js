import { useDispatch } from "react-redux";

function TaskRow({ name, status, index }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        {index + 1}. {name}
      </td>
      <td>
        {status === "pending" && (
          <button className="btn btn-primary"
            onClick={() =>
              dispatch({
                type: "MarkAsDone",
                payload: { currentTaskName: name },
              })
            }
          >
            Mark as Done
          </button>
        )}
        {status === "done" && (
          <div>
            <button className="btn btn-warning"
              onClick={() =>
                dispatch({
                  type: "MarkAsUndo",
                  payload: { currentTaskName: name },
                })
              }
            >
              Undo
            </button>
            <button className="btn btn-danger"
              onClick={() =>
                dispatch({
                  type: "MarkAsDelete",
                  payload: { currentTaskName: name },
                })
              }
            >
              Delete
            </button>
          </div>
        )}
        {status === "delete" && (
          <button className="btn btn-warning"
            onClick={() =>
              dispatch({
                type: "MarkAsUndo",
                payload: { currentTaskName: name },
              })
            }
          >
            Restore
          </button>
        )}
      </td>
    </tr>
  );
}

export default TaskRow;
