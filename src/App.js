import React , {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';
import Header from './cotainers/header';
import { Row , Col } from 'antd';
import { intialThemeCheck } from './actions';
import { store } from './store';


function App() {
  useEffect(() => {
    intialThemeCheck()
  }, [])
  let theme = useSelector(state =>state.themeStyling)
  return (
   
    <div className="App" style={theme}>
      <Row style={theme}>
        <Col span={1} style={theme}></Col>
        <Col span={22} style={theme}>
        <Header/>
        <Routes/>
        </Col>
        <Col span={1} style={theme}></Col>
      </Row>
      
    </div>
    
  );
}

export default App;
