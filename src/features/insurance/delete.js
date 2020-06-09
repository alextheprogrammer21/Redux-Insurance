// import { createStore, combineReducers } from 'redux'; 
// import React, { useState } from 'react';

// export function Insurance () {
//     // People dropping off forms (Action Creators)
// const createClaim = (name, CollectionAmount) => {
//     return {
//         //The form
//         type: 'CREATE_CLAIM', 
//         payload: {
//             name: name,
//             CollectionAmount: CollectionAmount
//         }
//     }
// };

// const createPolicy = (name) => {
//     return {
//         type: 'CREATE_POLICY',
//         payload: {
//             name: name,
//             amount: 20
//         }
//     }
// };

// const deletePolicy = (name) => {
//     return {
//         type: 'DELETE_POLICY',
//         payload: {
//             name: name
//         }
//     }
// }

// //Departments (reducers)
// const claimsHistory = (oldListOfClaims = [], form) => {
//     if (form.type === 'CREATE_CLAIM') {
//         return [...oldListOfClaims, form.payload];
//     } 

//     return oldListOfClaims;
// }

// const accounting = (bagOfMoney = 1000, form) => {
//     if (form.type === 'CREATE_CLAIM') {
//         return bagOfMoney - form.payload.CollectionAmount
//     } else if (form.type === 'CREATE_POLICY') {
//         return bagOfMoney + form.payload.amount;
//     }

//     return bagOfMoney;
// }

// const policies = (listOfPolices = [], form) => {
//     if (form.type === 'CREATE_POLICY') {
//         return [...listOfPolices, form.payload.name];
//     } else if (form.type === 'DELETE_POLICY') {
//         return listOfPolices.filter(policy => policy != form.payload.name)
//     }
//         return listOfPolices;
//     }


//     //Company Setup
//     const ourDepartments = combineReducers({
//         accounting: accounting, 
//         claimsHistory: claimsHistory,
//         policies: policies
//     });

//     const store = createStore(ourDepartments);

//     store.dispatch(createPolicy('Alex'));
//     console.log(store.getState());
// }
