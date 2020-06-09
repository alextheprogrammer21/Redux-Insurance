import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Insurance.module.css';
import { createStore, combineReducers } from 'redux'; 
import { findAllByAltText } from '@testing-library/react';

export function Insurance() {
  const dispatch = useDispatch();
  const [bagOfMoney, setBagOfMoney] = useState(1000);
  const [oldListOfClaims, setOldListOfClaims] = useState([]);
  const [listOfPolicies, setListOfPolicies] = useState([]);

//   React.useEffect(() => {
//       setListOfPolicies(['Test']);
//       setOldListOfClaims(['Test']);
//   }, [])

  const createClaim = (name, CollectionAmount) => {
    setBagOfMoney(bagOfMoney-50)
    setOldListOfClaims([...oldListOfClaims, 'Alex: 50 '])
    return {
        //The form
        type: 'CREATE_CLAIM', 
        payload: {
            name: name,
            CollectionAmount: CollectionAmount
        }
    }
};

const createPolicy = (name) => {
    console.log("heres the bag of money. SHould increase by 20", bagOfMoney)

    setBagOfMoney(bagOfMoney+20)
    setListOfPolicies([...listOfPolicies, 'Alex, '])
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: 20
        }
    }
};

const deletePolicy = (name) => {
    setListOfPolicies(    listOfPolicies.filter(policy => policy != 'Alex, ')
    )

    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Create Claim"
          onClick={() => dispatch(createClaim('Alex', 100))}
        >
          Create Claim
        </button>

        <button 
          className={styles.button}
          aria-label="Create Policy"
          onClick={() => dispatch(createPolicy('Alex'))}
        >
          Create Policy
        </button>
        
        <button 
          className={styles.button}
          aria-label="Delete Policy"
          onClick={() => dispatch(deletePolicy('Alex'))}
        >
          Delete Policy
        </button> 
        </div>

        <div className={styles.value}>{bagOfMoney}</div>
        <div className={styles.value}>{oldListOfClaims}</div>
        <div className={styles.value}>{listOfPolicies}</div>

    </div>
  );
}
