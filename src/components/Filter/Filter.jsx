import React from 'react';
import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilter } from "redux/contacts/contacts-selectors";


const Filter = () => {

  
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const handleFilterChange = event => {
    dispatch(actions.changeFilter(event.currentTarget.value));
  };
  
  return (
    
    <div className={style.filter}>
    <p>Filter</p>
    <input
      type="name"
      value={filterValue}
      onChange={handleFilterChange}
      />
  </div>
      )
      
}
      
export default Filter;