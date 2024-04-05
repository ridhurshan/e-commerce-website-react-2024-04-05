// import React, {createContext,useContext,useReducer} from "react";

// //prepares the data layer
// export const StateContext = createContext();

// //wrap our app and provide the data layer
// export const StateProvider = ({reducer,initialState,children}) => {
//     <StateContext.Provider value={useReducer(reducer,initialState)}>
//         {children}
//     </StateContext.Provider>
    
// //Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);

// }
  import React, { createContext, useContext, useReducer } from "react";

// Creates the data context
export const StateContext = createContext();

// Wraps the application and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
// Destructure the return value of useReducer to access state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  // Provide both the state and dispatch function to context
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Consumes information from the data layer
export const useStateValue = () => {
  // Use useContext to retrieve the context value (destructured as needed)
  const context = useContext(StateContext);
  return [context.state, context.dispatch];
};
