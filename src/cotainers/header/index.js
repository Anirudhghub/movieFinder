import React from 'react';
import { connect } from 'react-redux';
import { Row, Col , Switch } from 'antd';
import SearchBar from '../../components/searchbar';
import './index.css';
import { searchMovies , switchTheme } from '../../actions';


class Header extends React.Component {

onSearch = (value) => {
   this.setState({search_value:value})
    
}
onChange = () =>{
    this.props.searchMovies(this.state.search_value)
}
onThemeChange = (value) => {
    this.props.switchTheme(value)

}
    render() { 
        return (
            <div className="header-main">
              <Row>
                  <Col span={2} >logo</Col>
                  <Col span={20}><SearchBar placeholder="Find my movie" onChange={this.onChange} onSearch={this.onSearch}/></Col>
                  <Col span={2}><Switch  onChange={(value)=>this.onThemeChange(value)} /></Col>
              </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: value => dispatch(searchMovies(value)),
        switchTheme: value => dispatch(switchTheme(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);