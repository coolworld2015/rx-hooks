import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "./actions";

class Page extends PureComponent {
    render() {
        const { value, increment, decrement } = this.props;
        return (
            <div style={{textAlign: 'center'}}>
                <hr />
                <h1>{value}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
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
    { increment, decrement }
)(Page);
