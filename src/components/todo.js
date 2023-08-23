import React , { useState } from 'react'
import todoo from '../images/todoo.png';
// import "./App.css";
const Todo = () => {

    const[inputData, setInputData]= useState('');
    const[items, setItems]= useState([]);
    // add items 
    const addItems = () => {
        if(!inputData){

        }
        else{
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    // delete items
    const deleteItem = (id) => {
        const updatedItems= items.filter((element, index)=>{
            return index !== id;
        });
        setItems(updatedItems);
    }

    // remove all 
    const removeAll=()=>{
        setItems([]);
    }

  return (
    <>
        <div className="main-div">
            <div className="child-div">
               <figure className="image">
                    <img src={todoo} alt="todoologo" />
                <figcaption>Add Your List Here 🗒️🖊️</figcaption>
               </figure>
               <div className='addItems'>
                    <input type="text" placeholder='✍️ Add Items'
                        value= {inputData}
                        onChange={(e)=> setInputData(e.target.value)}
                     />
                    <i class="fa fa-plus add-btn" title='Add Item' onClick={addItems}></i>
               </div>

                <div className='showItems'>
                    {
                        items.map((element, index)=>{
                            return(
                                <div className='eachItem' key={index}>
                                    <h3>{element}</h3>
                                    <i class="far fa-trash-alt add-btn" title='Delete Item' onClick={()=> deleteItem(index)}></i>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
                {/* Remove all button */}
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="REMOVE ALL" onClick={removeAll}> <span>CHECK LIST</span> </button>

                </div>
                
            </div>

        </div>
    </>
  )
}

export default Todo