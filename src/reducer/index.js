const initialState = {
    searchResults:[],
    selectedMovie:{},
    darkTheme:false,
    themeStyling:{}
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "theme_change":
      return {};
    case "SEARCH_RESULTS_FOUND":
      let rawData=action.payload.filter(element=> element.Type == "movie" )
      return { ...state , searchResults:rawData }
    case "SELECTED_MOVIE_DETAILS":
      return { ...state , selectedMovie:action.payload }
    case "CHANGE_THEME":
      console.log(action.payload)
      return { ...state , darkTheme:action.payload.darkTheme , themeStyling:action.payload.themeData }
    default:
        return state;
}
};
