import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Insurance.module.css';

export function Insurance() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const createClaim = (name, CollectionAmount) => {
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
    console.log("TEST")

    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: 20
        }
    }
};

const deletePolicy = (name) => {
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

        <div className={styles.value}>INSERT VALUE</div>

    </div>
  );
}
