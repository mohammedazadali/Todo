import { Delete } from '@mui/icons-material';
import { Button, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';

const Tododata = ({ data,setData }) => {
  const [completedItems, setCompletedItems] = useState({});
  const [boolean,setBoolean] =useState(false)

  const toggleComplete = (index) => {
    setCompletedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setBoolean(!boolean)
  };


  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setCompletedItems({})
  };
  

  return (
    <section className="flex justify-center w-full mt-[20px]">
      <List className="w-[575px]">
        {data?.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center ${
              completedItems[index] ? 'line-through' : ''
            }`}
            
          >
            <div className='cursor-pointer' onClick={() => toggleComplete(index)}>
            <Checkbox checked={completedItems[index] || false} sx={{borderRadius:'50%'}} />{item.title}
            </div>
            <Button onClick={()=>{handleDelete(index)}} ><Delete /></Button>
          </li>
        ))}
      </List>
    </section>
  );
};

export default Tododata;
