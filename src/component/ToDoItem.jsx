export default function ToDoItem({ taskData, completeTask }) {
    const { value, isCompleted } = taskData;
    return (
        <li onClick={completeTask} className="to-do-item">
            <span
                style={{
                    textDecoration: isCompleted ? "line-through" : "none",
                }}
            >
                {value}
            </span>
        </li>
    );
}
