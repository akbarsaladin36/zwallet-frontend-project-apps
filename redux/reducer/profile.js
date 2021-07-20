const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "UPDATE_PROFILE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }

    case "UPDATE_PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }

    default:
      return state;
  }
};

export default profile;
