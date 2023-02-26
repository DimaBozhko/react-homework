import {useState} from "react";
import "./ToDoList.css";
import uniqid from 'uniqid';

const ToDoList = ({textLable}) => {
    const [taskName, setTaskName] = useState("");
    const [taskItem, setTaskItem] = useState([]);

    const task = {
        name: taskName,
        chanchet: false,
        id: uniqid(),
    }

    const addTask = (task) => {
        setTaskItem(prevState => [...prevState, task])
        console.log(taskItem);
    }

    const deleteTask = (taskId) => {
        setTaskItem(prevState => prevState.filter(item => item.id !== taskId));
    }

    return (
        <div className="To-do-list">
            <form 
                className="form-task"
                onSubmit={ (e) => { 
                        e.preventDefault(); 
                        addTask(task);
                    }
                }>
                <label htmlFor="task">{textLable}</label>
                <input className="form-task__input" 
                        type="text" 
                        id="task"
                        value={taskName} 
                        onChange={(e) => setTaskName(e.target.value)}/>
                <button className="form-task__btn">click</button>
            </form>
            {
                taskItem.map((item, i) => 
                    <div className="task-list" key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => deleteTask(item.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
} 

export default ToDoList;
