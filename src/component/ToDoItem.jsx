export default function ToDoItem({ data }) {
    return (
        <li className="to-do-item">
            <span>{data}</span>
            <input type="checkbox" />
        </li>
    );
}
