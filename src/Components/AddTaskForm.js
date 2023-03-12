import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function AddTaskForm() {
  const [taskName, setTaskName] = useState('');
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();

  const onChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <form className="d-flex flex-column  form w-75"
      onSubmit={(event) => {
        event.preventDefault();
        if(taskName.trim() === ''){
          console.log('Empty')
          return
        }
        if(tasks.filter(task => task.name === taskName.trim()).length > 0){
          console.log('Duplicate')
          return
        }
        dispatch({ type: "AddTask", payload: { newTask: taskName } });
        setTaskName('')
      }}
    >
      <label htmlFor="taskName" className="label">Task Name:</label>
      <input
        className="form-control mb-3"
        name="taskName"
        type="text"
        placeholder="Enter Task:"
        value={taskName}
        onChange={(e) => onChangeTaskName(e)}
      ></input>
      <button type="submit" className="btn btn-primary">Add new task</button>
    </form>
  );
}

export default AddTaskForm;
