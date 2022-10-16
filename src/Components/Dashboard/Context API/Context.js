import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const UserContext = createContext;

//initial state
const initialState = {
      users: [
            { id: 1, name: "JEBA", address: "Mirpur", phone: "0142424353", gender: "Female", dob: "05-11-2000" },
            { id: 2, name: "Fawjia", address: "Banani", phone: "0142424353", gender: "Female", dob: "05-11-2000" },
            { id: 3, name: "Rina", address: "Mirpur", phone: "0142424353", gender: "Female", dob: "05-11-2000" }
      ]
};
//create context
export const GlobalContext = createContext(initialState);
//provider component
export const GlobalProvider = ({ children }) => {
      const [state, dispatch] = useReducer(AppReducer, initialState);

      ///action create patient

      const addUser = (user) => {

            dispatch({
                  type: 'ADD_USER',
                  payload: user
            })

      }


      return (
            <GlobalContext.Provider value={{
                  users: state.users,
                  addUser
            }}>
                  {children}

            </GlobalContext.Provider>
      )

}

