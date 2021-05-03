import React from 'react';
import {connect} from 'react-redux';

class Bank extends React.Component {

    render() {
        return (
            <div className="bank">
                <h2>Bank</h2>

                {/* Deposit Input */}
                <label>
                    Make a deposit:
                    <br/>
                    <input
                        type="number"
                        className="textfield"
                        onChange={e => this.setState({number: e.target.value})}/>
                </label>

                <button
                    className="mainbtn"
                    onClick={(amount) => this.props.deposit(parseInt(this.state.number, 10))}>Confirm
                </button>
                <div>
                    <label>
                        Make a withdrawal:
                        <br/>
                        <input
                            type="number"
                            className="textfield"
                            onChange={e => this.setState({number: e.target.value})}/>
                    </label>

                    <button
                        className="mainbtn"
                        onClick={(amount) => this.props.withdraw(parseInt(this.state.number, 10))}>Confirm
                    </button>
                </div>
            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        balance: state.balance,
        transactionHistory: state.transactionHistory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deposit: (amount) => dispatch({type: 'deposit', value: amount}),
        withdraw: (amount) => dispatch({type: 'withdraw', value: amount}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bank);

