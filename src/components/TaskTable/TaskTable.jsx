import { useReducer, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import { defaultTask } from "../../assets/data";
import { taskReducer } from "../../reducers/taskReducer";
import TaskModal from "./TaskModal";
import EmptyList from "./EmptyList";

export default function TaskTable() {
  const [tasks, dispatch] = useReducer(taskReducer, defaultTask);

  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    dispatch({ type: "addEditTask", newTask, isAdd });
    handleCloseClick();
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: "deleteTask", taskId });
  }

  function handleDeleteAllClick() {
    dispatch({ type: "deleteAllTasks" });
  }

  function handleFavorite(taskId) {
    dispatch({ type: "toggleFavorite", taskId });
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
