import React, { useState } from 'react';
import "./AddTask.css";
import Task from "./Task";
import Button from './Button';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { CgClose, CgInfo } from "react-icons/cg";

const AddTask = ({ handleTaskAddition, tasks, task,  setTasks, handleTaskClick, handleTaskDeletion}) => {
    const [inputData, setInputData] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const onSelectOption = (e) => {
        setInputData(e);
    };

    const renderSuggestions = () => {
        
        if (suggestions.length === 0){
            setSuggestions(tasks.map(z => z.title));
            return null;
        }
        
        console.log(suggestions);
        return (
          <div className="taskscroll">
            
            {Array.isArray(suggestions)
                ? suggestions.map((sug, id) => (
                
                <div onClick={() => onSelectOption(sug)}>  
                    <div className='task-container'>
                        <a key={id}>{sug}</a>
                    </div>
                </div>
                )): null}
          </div>
        )  
    };
    

    let handleInputChange = (e) => {

        setInputData(e.target.value);

        const value = e.target.value;
        const nom =  tasks.map(z => z.title);
       
        setSuggestions(nom);
        if (value.length > 0) {
          const regex = new RegExp(`^${value}`, 'i');
          setSuggestions(nom.filter(v => regex.test(v)));
        }
    };


    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };


    return ( 
        <>
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                // onChange={onTextChanged}
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            <div>
            </div>
            <div className="add-task-button-container">
                 <Button onClick={handleAddTaskClick}>Ajouter</Button>
            </div>
        </div>
        <div>
        {renderSuggestions()}
        </div>
        
        </>
        

        );
    
}
 
export default AddTask;