export default function ClearButton({ tasks, setTasks }) {
    const clearCompletedTasks = () => {
        const incompleteTasks = tasks.filter((task) => !task.isCompleted);
        setTasks(incompleteTasks);
    };
    const clearToDoList = () => {
        setTasks([]);
    };
    const isAnyTaskCompleted = tasks.some((task) => task.isCompleted);
    const onClickHandler = isAnyTaskCompleted
        ? clearCompletedTasks
        : clearToDoList;
    const buttonText = isAnyTaskCompleted ? "Remove Completed" : "Empty";
    const isDisabled = tasks.length === 0;
    return (
        <button
            type="button"
            className="clear-button"
            onClick={onClickHandler}
            disabled={isDisabled}
        >
            {buttonText}
        </button>
    );
}
