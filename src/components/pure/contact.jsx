import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contacto }) => {

    const [estado, setestado] = useState(contacto.connect);

    const cambiarestado = () => {
        setestado(!estado);
    }

    return (
        <div>
            <h1>Nombre y apellido: {contacto.name} {contacto.surname}</h1>
            <h4>Email: {contacto.email}</h4>
            <button onClick={cambiarestado}> Cambiar estado </button>
            <h5>Disponible: {estado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
        </div>
    );
};


ContactComponent.propTypes = {
    estado:PropTypes.instanceOf(Contact),
};


export default ContactComponent;
