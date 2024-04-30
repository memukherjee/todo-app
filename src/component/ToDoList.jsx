import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ClearButton from "./ClearButton";

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
                        taskData={task}
                        completeTask={() => completeTask(index)}
                    />
                ))}
            </ul>
            <ClearButton tasks={tasks} setTasks={setTasks} />
        </>
    );
}
