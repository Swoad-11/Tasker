export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "addEditTask": {
      const updatedTasks = action.isAdd
        ? [...tasks, action.newTask]
        : tasks.map((task) =>
            task.id === action.newTask.id ? action.newTask : task
          );
      return updatedTasks;
    }
    case "deleteTask":
      return tasks.filter((task) => task.id !== action.taskId);
    case "deleteAllTasks":
      if (tasks.length > 0) {
        alert("Are you sure you want to delete all items?");
      }
      return [];
    case "toggleFavorite":
      return tasks.map((task) =>
        task.id === action.taskId
          ? { ...task, isFavorite: !task.isFavorite }
          : task
      );
    default:
      return tasks;
  }
};
