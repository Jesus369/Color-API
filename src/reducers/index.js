// Defining the default state
let defaultState = {
  color: "red"
};

// Main reducer so there is no change
const mainReducer = (state = defaultState, action) => {
  if (action.type === "CHANGE_COLOR") {
    return {
      // Unpacking then setting the state
      ...state,
      color: action.color
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
