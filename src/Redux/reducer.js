const initialState = {
  tasks: [
    { name: "eat", status: "pending" },
    { name: "code", status: "pending" },
    { name: "sleep", status: "done" },
  ],
  alert: { text: "", classes: "alert invisible" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { name: action.payload.newTask, status: "pending" },
        ],
      };

    case "MarkAsDone":
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => {
          if (task.name === action.payload.currentTaskName) {
            return (task.status = "done");
          }
          return task;
        }),
      };

    case "MarkAsUndo":
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => {
          if (task.name === action.payload.currentTaskName) {
            return (task.status = "pending");
          }
          return task;
        }),
      };

    case "MarkAsDelete":
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => {
          if (task.name === action.payload.currentTaskName) {
            return (task.status = "delete");
          }
          return task;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
