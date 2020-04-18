const initialState = {
  data: [],
  multiData: [],
  inputCityValue: "",
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_CURRENT_WEATHER":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case "FETCH_FIVE_DAYS_WEATHER":
      return {
        ...state,
        multiData: action.payload,
        loading: false,
        error: false,
      };

    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "ON_CHANGE_INPUT_CITY":
      return {
        ...state,
        inputCityValue: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
