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
    const initialTasksData = initialTasks.map((task) => ({
        value: task,
        isCompleted: false,
    }));
    const [tasks, setTasks] = useState(initialTasksData);
    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
    };
    const clearCompletedTasks = () => {
        const incompleteTasks = tasks.filter((task) => !task.isCompleted);
        setTasks(incompleteTasks);
    };
    const clearToDoList = () => {
        setTasks([]);
    };
    const isAnyTaskCompleted = tasks.some((task) => task.isCompleted);
    return (
        <>
            <ul className="to-do-list">
                {tasks.length === 0 && (
                    <li className="empty-list-item">
                        Nothing to do buddy. Sleep!
                    </li>
                )}
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={index}
                        data={task}
                        completeTask={() => completeTask(index)}
                    />
                ))}
            </ul>
            <button
                type="button"
                className="clear-button"
                onClick={
                    isAnyTaskCompleted ? clearCompletedTasks : clearToDoList
                }
                disabled={tasks.length === 0}
            >
                {isAnyTaskCompleted ? "Remove Completed" : "Empty"}
            </button>
        </>
    );
}
