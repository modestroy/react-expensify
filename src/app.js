import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
//
// store.dispatch(addExpense({
//     description: "Water Bill",
//     amount: 500,
// }));
// store.dispatch(addExpense({
//     description: "Gas Bill",
//     createdAt: 1000,
// }));
// store.dispatch(addExpense({
//     description: "Rent",
//     amount: 109500,
// }));
//
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
// // store.dispatch(setTextFilter("water"));
// // setTimeout(()=>{
// //     store.dispatch(setTextFilter("bill"));
// // },3000);
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
// console.log('test');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));