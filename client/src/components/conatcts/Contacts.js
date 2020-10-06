// bring contact state iterate thogh some map and get each contact item

import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/Contact/ContactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext); // We can use state in here now

  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null // will return ui according to filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
