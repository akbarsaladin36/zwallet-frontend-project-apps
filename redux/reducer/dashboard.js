const initialState = {
  dataBalance: {},
  dataUser: {},
  isLoading: false,
  isError: false,
  msg: "",
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "GET_USERS_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataUser: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    }

    case "GET_USERS_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        dataUser: {},
        msg: action.payload.response.data.msg,
      };
    }

    case "GET_BALANCE_DATA_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "GET_BALANCE_DATA_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataBalance: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    }

    case "GET_BALANCE_DATA_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        dataBalance: {},
        msg: action.payload.response.data.msg,
      };
    }

    default:
      return state;
  }
};

export default dashboard;
