import React, { useReducer } from "react";
// import axios from "axios";
import { v4 as uuid } from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "sam",
        email: "samatha@gmail.com",
        phone: "9989678422",
        type: "professional",
      },
      {
        id: 2,
        name: "sara",
        email: "sara@gmail.com",
        phone: "9989652422",
        type: "personal",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState); //  pull sate and disptach objs to reducer

  // Get Contacts

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid(); // to generate random id
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        // anything we need to use in other componenets state and actions in value
        contacts: state.contacts, // state got from usereducer hook
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
