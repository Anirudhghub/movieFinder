import React from 'react';
import { connect } from 'react-redux';
 
class demo extends React.Component {
    render() { 
        return (
            <div>
                demo
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}


export default connect(mapStateToProps)(demo);