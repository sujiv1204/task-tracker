import { useState } from "react";
function AddTask({ onAdd }) {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [remainder, setRemainder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Please Add a Task");
            return;
        }
        onAdd({ text, day, remainder });

        setText("");
        setDay("");
        setRemainder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add Task"
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Add Day & Time"
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Remainder</label>
                <input
                    type="checkbox"
                    checked={remainder}
                    value={remainder}
                    onChange={(e) => setRemainder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}

export default AddTask;
