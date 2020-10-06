import React from "react";
import Contacts from "../conatcts/Contacts";
import ContactForm from "../conatcts/ContactForm";
import ContactFilter from "../conatcts/ContactFilter";

const Home = () => {
  return (
    //for grid ui
    <div className="grid-2">
      <ContactForm />
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
