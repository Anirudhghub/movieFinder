import axios from 'axios';
import { apiKey } from './constants';
import { lighTheme , darkTheme } from '../theme';
export const searchMovies = (value) => {
    
    return (dispatch) =>{
      
    axios.get(`http://www.omdbapi.com/?s=${value}&apikey=${apiKey}`).then((response)=>{
            dispatch({
                type: 'SEARCH_RESULTS_FOUND',
                payload: response.data && response.data.Search && response.data.Search
              });
    }).catch((error)=>{
        dispatch({
            type: 'SEARCH_RESULTS_FOUND',
            payload: []
          });
    })
}
    }
    
    export const getDetails = (value) => {
        return (dispatch) =>{
        axios.get(`http://www.omdbapi.com/?i=${value}&apikey=${apiKey}`).then((response)=>{
                dispatch({
                    type: 'SELECTED_MOVIE_DETAILS',
                    payload: response.data && response.data
                  });
        }).catch((error)=>{
            dispatch({
                type: 'SELECTED_MOVIE_DETAILS',
                payload: {}
              });
        })
    }
        }

        export const switchTheme = (value) => {
            console.log(lighTheme,darkTheme)
            localStorage.setItem("theme",value)
            return (dispatch) =>{
                dispatch({
                    type: 'CHANGE_THEME',
                    payload: {darkTheme : value,themeData:value == true ? darkTheme : lighTheme}
                  });
            }
        }
        export const intialThemeCheck = () => {
            console.log(lighTheme,darkTheme)
           let value = localStorage.getItem("theme")
            return (dispatch) =>{
                dispatch({
                    type: 'CHANGE_THEME',
                    payload : {darkTheme : value,themeData:value == true ? darkTheme : lighTheme}
                  });
            }
        }