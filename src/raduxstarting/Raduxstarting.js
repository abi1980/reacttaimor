import { createStore, combineReducers } from 'redux';
/* https://www.youtube.com/watch?v=3sjMRS1gJys */
console.clear();

//const { createStore, combineReducers } = Redux;
//import { createStore, combineReducers } from Redux;

const initialState = {
    startingBalance: 1000
}

//People droping off forms
//Here we created Actions
const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amount: amountOfMoneyToCollect
        }
    };
};

const createPolicy = (name) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: 20
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    };
};

//Department (Reducer)
//in reducer we can use switch insted of if else ns we are using in this exa
//We set the oldlistofclaims = array, as we assume that as default
//we have no list of claims
const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
};

//we set for bag of money to 1000 as in start we set that
//we have 1000 $ of budget
const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
};

//We set the listofpolicies = array, as we assume that as default
//we have no list of policies
const policies = (listOfPolicies = [], action) => {
    if (action.type == 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]

    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(policy => policy != action.payload.name)
    }
    return listOfPolicies;
};

//Company Setup (CombineReducer)
const ourDepartments = combineReducers({
    //anyname : reducername
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies,
});

//const store = createStore(CombineReducer);
const store = createStore(ourDepartments);

//store.dispatch(action);
store.dispatch(createPolicy('Khawaja'));
store.dispatch(createClaim('khawaja', 250));
store.dispatch(deletePolicy('khawaja'));
console.log(store.getState());

export default store;

//mapdispatchtoprop
//change the prop
//mapstatetoprop
//convert state to prop