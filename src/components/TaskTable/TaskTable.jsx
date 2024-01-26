import { useReducer, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import TaskModal from "./TaskModal";
import EmptyList from "./EmptyList";
import { TaskContext, TaskDispatchContext } from "../../contexts/TaskContext";
import { taskReducer } from "../../reducers/taskReducer";
import { defaultTask } from "../../assets/data";

export default function TaskTable() {
  const [tasks, dispatch] = useReducer(taskReducer, defaultTask);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <section className="mb-20">
          {showAddModal && (
            <TaskModal
              taskToUpdate={taskToUpdate}
              onCloseClick={handleCloseClick}
            />
          )}
          <div className="container mx-auto">
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              <Header onAddClick={() => setShowAddModal(true)} />

              {tasks.length > 0 ? (
                <Table tasks={tasks} onEdit={handleEditTask} />
              ) : (
                <EmptyList />
              )}
            </div>
          </div>
        </section>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
