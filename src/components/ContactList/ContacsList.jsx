import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions'
import { getItems, getFilter } from "redux/contacts/contacts-selectors";
import style from '../ContactList/ContacsList.module.css';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);
  
  const dispatch = useDispatch();
  const hndlDeleteContact = (contactId) => {
    dispatch(actions.deleteContact(contactId));
};
  
    return(
      
    <ul className={style.list}>
      {contacts.filter(({name}) => name.toLowerCase().includes(filterValue.trim())).map(({id, name, number}) => (
        <li key={id} className={style.item}>
          <div className={style.contDetail}>
            <p className={style.name}>{name}</p>
            <p className={style.number}>{number}</p>
          </div>
          <button
            className={style.btn}
            type="submit"
            onClick={() => hndlDeleteContact(id)}
            >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList;