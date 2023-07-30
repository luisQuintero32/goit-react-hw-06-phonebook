import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contacts/Add', (name, number) => ({
    payload: {
        id: shortid(0),
        name,
        number,
    },
}));

const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/Filter');

export default { addContact, deleteContact, changeFilter };
