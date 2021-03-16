import React from 'react';
import { Card } from 'antd';
import './index.css';
import { useSelector } from 'react-redux';
export const Cardcomponent = props => {
    let theme = useSelector(state =>state.themeStyling)
        return (
            <div className="card-main" onClick={()=>props.onCardClick(props.movie_data.imdbID)} style={theme}>
               
               <Card
                hoverable
                style={{ width: 240  ,...theme,border:"none"}}
                cover={<img width="100%" height="100%" alt={props.movie_data.Title} src={props.movie_data.Poster == "N/A" ? "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg" : props.movie_data.Poster } />}
                
                >
                {props.movie_data.Title}
                </Card>
            </div>
        );
    }
 
