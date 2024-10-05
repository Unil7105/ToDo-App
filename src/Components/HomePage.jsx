import React from "react";

import { useState } from "react";

function HomePage() {
  let task_list = [];
  function add_item() {
    let tasks = document.getElementById("task--name").value;
    tasks = tasks.trim();
    if (tasks === "") {
      alert("Please enter a task");
    } else {
      task_list.push(tasks);
      console.log(task_list);
      document.getElementById("list").innerText = " ";

      for (let i = 0; i < task_list.length; i++) {
        console.log(task_list[i]);
        let new_list_item = document.createElement("li");
        new_list_item.textContent = task_list[i];
        document.getElementById("list").appendChild(new_list_item);
      }
      document.getElementById("task--name").value = "";
    }
    function delete_item(){

    }
  }

  return (
    <>
      <input type="text" placeholder="Enter task" id="task--name" />
      <button onClick={add_item} type="submit">
        Add
      </button>
      <div className="tasks">
        <ul id="list">Add Task</ul>
      </div>
    </>
  );
}

export default HomePage;
