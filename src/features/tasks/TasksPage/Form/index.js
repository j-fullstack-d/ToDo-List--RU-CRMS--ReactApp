import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Button, StyledForm } from './styled';
import { addTask } from "../../tasksSlice";
import Input from '../../Input';


const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {

    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text" 
        placeholder="Что нужно сделать?" 
        onChange={({ target }) => setNewTaskContent(target.value)}
        required 
      />
      <Button>Добавить новое задание</Button>
    </StyledForm>
  )
};

export default Form;