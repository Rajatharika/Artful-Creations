import React, {useState} from 'react';
function Deletion(){
    const [items,setItems] = useState([
        'Paris',
        'Swizterland',
        'America',
        'Goa',
        'Himalayas'
    ]);
    const handleDelete=(index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };
    return(
        <div>
           <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}</ul>   
        </div>
    );
}
export default Deletion;