import "./styles.css";
import Header from "./component/Header";
import ToDoList from "./component/ToDoList";

export default function App() {
  return (
    <div className="Application">
      <Header />
      <ToDoList />
    </div>
  );
}
