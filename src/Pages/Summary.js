import React, {Component} from 'react';
import "./Bank.css";

import {connect} from 'react-redux';

class Summary extends Component {

    render() {

        let transactionHistory = (
            <div>
                {this.props.transactionHistory.map((log) => {
                    return <li>{log.transactionType} ${log.amount} | closing balance:
                        ${log.newBalance} | {log.date} </li>
                })}
            </div>
        )

        return (
            <div className="App">

                <header className="App-header">

                </header>

                <h1>Balance: {this.props.balance}</h1>


                <div>
                    <h2>Transaction History</h2>
                    {transactionHistory}
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


export default connect(
    mapStateToProps,
)(Summary);