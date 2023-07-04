import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

    const defaultContact = new Contact('Michael', 'Myers', 'halloween@gmail.com', true);

    return (
        <div>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactList;
