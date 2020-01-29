const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      let id = state.length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, title: action.title, body: action.body }];
    case "DELETE_EVENT":
      return state;
    case "DELETE_ALL_EVENT":
      return [];
    default:
      return state;
  }
};

export default events;
