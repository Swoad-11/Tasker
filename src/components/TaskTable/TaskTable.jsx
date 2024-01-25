import { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import { defaultTask } from "../../assets/data";
import TaskModal from "./TaskModal";
import EmptyList from "./EmptyList";

export default function TaskTable() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    handleCloseClick();
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleDeleteAllClick() {
    if (tasks.length > 0) {
      alert("Are you sure you want to delete all items?");
    }
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFavorite(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <>
      <section className="mb-20">
        {showAddModal && (
          <TaskModal
            onSave={handleAddEditTask}
            onCloseClick={handleCloseClick}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container mx-auto">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <Header
              onAddClick={() => setShowAddModal(true)}
              onDeleteAllClick={handleDeleteAllClick}
            />
            {tasks.length > 0 ? (
              <Table
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavorite}
              />
            ) : (
              <EmptyList />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
