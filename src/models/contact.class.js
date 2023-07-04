export class Contact {
    name = '';
    surname = '';
    email = '';
    connect = false;

    constructor(name, surname, email, connect){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.connect = connect;
    }
}