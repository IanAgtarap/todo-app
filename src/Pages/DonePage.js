import TaskRow from "../Components/TaskRow";
import { useSelector } from "react-redux";
function DonePage() {
    const tasks = useSelector((state) => state.tasks);
  return (
    <main className="App-header">
      <h2>Done Task:</h2>
      <table className="table table-primary w-75">
        <thead>
          <tr>
            <td>Task</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {tasks.filter(task => task.status === 'done').map((item, index) => {
            return (
              <TaskRow
                key={`${index} ${item.name}`}
                name={item.name}
                status={item.status}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default DonePage;