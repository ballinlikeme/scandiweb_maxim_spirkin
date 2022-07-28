const CHANGE_CATEGORY = "CHANGE_CATEGORY";

const initialState = {
  currentCategory: "all",
};
export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CATEGORY:
      return { ...state, currentCategory: payload };

    default:
      return state;
  }
};
