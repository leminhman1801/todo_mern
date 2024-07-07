/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";
import { NewIcon } from "./Icons";
import ContentEditable from "react-contenteditable";

function Todo() {
  const contentEditable = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [html, setHtml] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isClickedNew, setIsClickedNew] = useState({
    high: false,
    medium: false,
    low: false,
  });
  const [newTask, setNewTask] = useState({
    high: [],
    medium: [],
    low: [],
    title: "",
  });

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  const handleBlurTask = () => {
    setIsEditable(true);
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5050/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching the tasks:", error);
      }
    };
    getTasks();
  }, [tasks.length]);

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5050/${id}`, {
      method: "DELETE",
    });
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  useEffect(() => {
    if (isClickedNew && contentEditable.current) {
      contentEditable.current.focus();
    }
  }, [isClickedNew]);

  const renderTasksByPriority = (priority) => {
    return (
      <>
        {tasks
          .filter((task) => task.priority === priority)
          .map((task) => (
            <Task title={task.title} id={task.id} key={task._id} />
          ))}
        {isClickedNew[priority] && (
          <div>
            <ContentEditable
              className="text-white"
              innerRef={contentEditable}
              html={html}
              onChange={handleChange}
              disabled={isEditable}
              onBlur={handleBlurTask}
            />
          </div>
        )}
        <div className="new-task" onClick={() => handleAddNewTask(priority)}>
          <NewIcon />
          New
        </div>
      </>
    );
  };

  const handleAddNewTask = async (priority) => {
    console.log("add" + isEditable);
    setIsEditable(false);
    const newTask = await createTask({ title: "", priority });
    setNewTask((prevNewTasks) => ({
      ...prevNewTasks,
      [priority]: [...(prevNewTasks[priority] || []), { content: "" }],
    }));
    setIsClickedNew((prev) => ({
      ...prev,
      [priority]: true,
    }));
    setHtml("");
  };

  const createTask = async (taskData) => {
    const response = await fetch("http://localhost:5050/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    return response.json();
  };
  return (
    <div>
      <div className="p-24 h-screen">
        <div className="flex">
          <h1>Simple To Do List</h1>
        </div>
        <div className="pt-[5px]">
          <div className="flex border border-solid border-[#ffffff21]">
            <div className="">
              <i className="fa-regular fa-lightbulb"></i>
            </div>
            <div className="p-4 ps-3 ">
              <ul>
                <h5>How to use</h5>
                <li className="mt-3">
                  1. Create tasks by clicking “+ New” and move them to
                  prioritize them.
                </li>
                <li className="mt-3">
                  2. When it’s time to plan the tasks, drag and drop them into
                  the calendar.
                </li>
                <li className="mt-3">
                  3. After the task is complete, check off the tasks and it goes
                  into the Finished tasks database.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3>To Do</h3>
        </div>
        <div className="flex mb-[3px]">
          <div className="lable-priority">
            <div className="max-w-[110px] ">
              <div className="inline-flex max-w-full rounded font-medium pl-[6px] pr-[6px] leading-5 h-5 text-white bg-[#5a5a5a]">
                <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  Add to Calendar
                </span>
              </div>
            </div>
            <span className="py-1 px-2 text-sm">1</span>
          </div>
          <div className="lable-priority">
            <div className="max-w-[110px] ">
              <div className="inline-flex max-w-full rounded font-medium pl-[6px] pr-[6px] leading-5 h-5 text-white bg-[#6e3630]">
                <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  High Priority
                </span>
              </div>
            </div>
            <span className="py-1 px-2 text-sm">1</span>
          </div>
          <div className="lable-priority">
            <div className="max-w-[110px]">
              <div className="inline-flex max-w-full rounded font-medium pl-[6px] pr-[6px] leading-5 h-5 text-white bg-[#89632a]">
                <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  Medium Priority
                </span>
              </div>
            </div>
            <span className="py-1 px-2 text-sm">1</span>
          </div>
          <div className="lable-priority">
            <div className="max-w-[110px] ">
              <div className="inline-flex max-w-full rounded font-medium pl-[6px] pr-[6px] leading-5 h-5 text-white bg-[#2b593f]">
                <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  Low Priority
                </span>
              </div>
            </div>
            <span className="py-1 px-2 text-sm">1</span>
          </div>
        </div>

        <div className="inline-flex">
          <div className="task-group">{renderTasksByPriority("")}</div>
          <div className="task-group">{renderTasksByPriority("high")}</div>
          <div className="task-group">{renderTasksByPriority("medium")}</div>
          <div className="task-group">{renderTasksByPriority("low")}</div>
        </div>
      </div>
      {/* <AddTaskModal /> */}
    </div>
  );
}

export default Todo;
