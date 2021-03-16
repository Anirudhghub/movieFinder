import React  from 'react';
import { Row , Col , Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
const MovieDetails = props => {
   
        return (
            <div style={{height:"100vh"}}>
                <Row className="movie-details-main">
                    <Col xl={{span:4}} xs={{span:0}}></Col>
                    <Col xl={{span:16}} xs={{span:24}}>
                    <Row>
               <Col xl={{span:8}} sm={{span:24}} lg={{span:8}} xs={{span:16}} className="image-section">
                  <img width="100%" height="100%" src={props.selectedMovie.Poster == "N/A" ? "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg" : props.selectedMovie.Poster}/>
                   </Col>
               <Col xl={{span:14,offset:2}} xs={{span:24}}>
                   <p><b>IMDB Rating :</b>{props.selectedMovie.imdbRating}</p>
                   <p><b>Runtime :</b>{props.selectedMovie.Runtime}</p>
                   <p><b>Genre :</b>{props.selectedMovie.Genre}</p>
                   <p><b>Director :</b>{props.selectedMovie.Director}</p>
                   <p><b>Country :</b>{props.selectedMovie.Country}</p>
                   <p>{props.selectedMovie.Plot}</p>
                   </Col> 
            </Row>
            
                    </Col>
                    <Col xl={{span:4}} xs={{span:0}}></Col>
                </Row>
                <div className="view-similar">
            <Link exact to='/'><Button  onClick={props.viewSimilar} type="dashed">Dashed Button</Button></Link>
            </div>
            </div>
        );
    }
 
export default MovieDetails;