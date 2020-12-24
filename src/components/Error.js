import React from 'react';
import { connect } from 'react-redux';

const Error = (props) => {
    return (
        <div className="errorMsg">
            <p>{props.error}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps)(Error);