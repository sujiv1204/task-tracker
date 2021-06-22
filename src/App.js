import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Today",
            remainder: true,
        },
        {
            id: 2,
            text: "Teachers Appointment",
            day: "Tomorrow",
            remainder: true,
        },
        {
            id: 3,
            text: "Food Appointment",
            day: "Not Today",
            remainder: false,
        },
    ]);

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;

        console.log(id);
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    //Toggle Remainder
    const toggleRemainder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, remainder: !task.remainder } : task
            )
        );
    };
    return (
        <div className="container">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleRemainder}
                />
            ) : (
                "No Tasks to show"
            )}
        </div>
    );
}

export default App;
