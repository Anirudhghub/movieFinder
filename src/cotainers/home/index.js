import { Col, Row } from 'antd';
import React , { useSelector }from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions';
import { Cardcomponent } from '../../components/card';
import { Link } from 'react-router-dom';
import data from './data.json';
import './index.css';

class Home extends React.Component {

    onCardClick = (value) => {
        this.props.getDetails(value)
    }

    
    render() { 
        return (
            <div>
                <Row>
                {this.props.state.searchResults.length > 0 ? 
                this.props.state.searchResults.map(movie => <Col lg={{span:6}} sm={{span:24}} xs={{span:24}} xl={{span:6}} ><Link to={'/' + movie.imdbID}><Cardcomponent movie_data={movie} onCardClick={this.onCardClick}/></Link></Col>) : 
                <div style={this.props.state.themeStyling} className="default-messsage-section">{data.defaultMesage}</div>}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetails: value => dispatch(getDetails(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);