import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { incrementThunk, decrementThunk } from "./actions";

class PageClass extends PureComponent {
    render() {
        const { value, incrementThunk, decrementThunk } = this.props;
        return (
            <div style={{textAlign: 'center'}}>
                <hr />
                <h1>{value}</h1>
                <button onClick={incrementThunk}>+</button>
                <button onClick={decrementThunk}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.value
});

/*const mapDispatchToProps = dispatch => ({
    incrementAction: () => dispatch(incrementAction()),
    decreaseAction: () => dispatch(decreaseAction()),
    testAction: () => testAction()(dispatch)
});*/

export default connect(
    mapStateToProps,
    { incrementThunk, decrementThunk }
)(PageClass);
