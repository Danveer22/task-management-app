import { createContext, useContext, useEffect, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
  task: [],
  isLoading: false,
  searchQuery: "",
  sortOption: "",
};

function taskFromLocalStorage() {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "task/create":
      return { ...state, task: [...state.task, action.payload] };

    case "task/delete":
      return {
        ...state,
        task: state.task.filter((task) => task.id !== action.payload),
      };

    case "task/toggle-complete":
      return {
        ...state,
        task: state.task.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "task/toggle-priority":
      return {
        ...state,
        task: state.task.map((task) =>
          task.id === action.payload
            ? { ...task, priority: action.payload.priority }
            : task
        ),
      };

    case "task/search":
      return { ...state, searchQuery: action.payload.toLowerCase() };

    case "task/sort": {
      const sortedTasks = [...state.task].sort((a, b) => {
        if (action.payload === "date") return b.createdAt - a.createdAt;
        if (action.payload === "priority") {
          const priorityOrder = { high: 1, medium: 2, low: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        if (action.payload === "completed") return b.completed - a.completed;
        return 0;
      });

      return {
        ...state,
        task: sortedTasks,
        sortOption: action.payload,
      };
    }

    default:
      return state;
  }
}

function TaskProvider({ children }) {
  const [{ task, isLoading, searchQuery, sortOption }, dispatch] = useReducer(
    reducer,
    { ...initialState, task: taskFromLocalStorage() }
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  function createTask(newTask) {
    dispatch({ type: "task/create", payload: newTask });
  }

  function deleteTask(taskId) {
    dispatch({ type: "task/delete", payload: taskId });
  }
  function toggleTaskComplete(taskId) {
    dispatch({
      type: "task/toggle-complete",
      payload: taskId,
    });
  }

  function searchTask(query) {
    dispatch({ type: "task/search", payload: query.toLowerCase() });
  }

  const filteredTasks = searchQuery
    ? task.filter((t) =>
        t.name?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : task;

  function sortTask(option) {
    dispatch({ type: "task/sort", payload: option });
  }
  return (
    <TaskContext.Provider
      value={{
        task: filteredTasks,
        isLoading,
        searchQuery,
        sortOption,
        createTask,
        deleteTask,
        toggleTaskComplete,
        searchTask,
        sortTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

export { TaskProvider, useTasks };
