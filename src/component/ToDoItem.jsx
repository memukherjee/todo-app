export default function ToDoItem({ data, completeTask }) {
    return (
        <li onClick={completeTask} className="to-do-item">
            <span
                style={{
                    textDecoration: data.isCompleted ? "line-through" : "none",
                }}
            >
                {data.value}
            </span>
        </li>
    );
}
