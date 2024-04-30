import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    const tasks = [
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower",
    ];
    return (
        <ul className="to-do-list">
            {tasks.map((task, index) => (
                <ToDoItem key={index} data={task} />
            ))}
        </ul>
    );
}
