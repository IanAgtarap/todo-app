import { useSelector } from "react-redux";
import AddTaskForm from "../Components/AddTaskForm";

function HomePage() {
  return (
    <main className="App-header">
      <AddTaskForm />
    </main>
  );
}

export default HomePage;
