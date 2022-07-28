const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";

const initialState = {
  isOpened: false,
};

export const overlayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_VISIBILITY:
      return {
        ...state,
        isOpened: payload,
      };

    default:
      return state;
  }
};
