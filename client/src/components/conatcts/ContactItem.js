// componenet for each contact item

import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/Contact/ContactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, phone, email, type } = contact; // prop from contacts

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary") // giving badge color based on type
          }
        >
          {
            type.charAt(0).toUpperCase() + type.slice(1) // giving first letter capital
          }
        </span>
      </h3>
      <ul className="list">
        {email && ( // checking if email exists as it is optional
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
