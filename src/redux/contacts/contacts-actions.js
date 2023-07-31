import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit'

export const addContact = createAction('contacts/Add', (name, number) => ({
    payload: {
        id: shortid(0),
        name,
        number,
    },
}));

export const deleteContact = createAction('contacts/Delete');
export const changeFilter = createAction('contacts/Filter');

// export { addContact, changeFilter, deleteContact };
