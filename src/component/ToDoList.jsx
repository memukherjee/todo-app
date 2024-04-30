import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    const initialTasks = [
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower",
    ];
    const [tasks, setTasks] = useState(initialTasks);
    const clearToDoList = () => {
        setTasks([]);
    };
    return (
        <>
            <ul className="to-do-list">
                {tasks.length === 0 && (
                    <li className="empty-list-item">
                        Nothing to do buddy. Sleep!
                    </li>
                )}
                {tasks.map((task, index) => (
                    <ToDoItem key={index} data={task} />
                ))}
            </ul>
            <button
                type="button"
                className="empty-button"
                onClick={clearToDoList}
                disabled={tasks.length === 0}
            >
                Empty
            </button>
        </>
    );
}
