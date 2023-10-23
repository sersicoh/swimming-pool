import { useRef, useState } from "react";
import { InputButton, InputContainer, InputStyled } from "./input.styles";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTaskByQuery } from "../../services/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { laneVariable, swimmerVariable } from "../../variables";

export const Input = () => {

    const [value, setValue] = useState('');

    const tasks = useSelector(state => selectTaskByQuery(state));

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const checkConditions = () => {
        if (value.startsWith(laneVariable)) {
            if (tasks.filter(task => task.content === value).length === 0) {
                dispatch(addTask({
                    content: value,
                    done: false,
                    id: nanoid(),
                }));
            } else {
                alert('Taki tor już istnieje');
            }
        } else if (value.startsWith(swimmerVariable)) {
            if (tasks.filter(task => task.content === value).length === 0) {
                dispatch(addTask({
                    content: value,
                    done: false,
                    id: nanoid(),
                }));
            } else {
                alert('Taki zawodnik już został przypisany');
            }
        } else {
            alert('Nieprawidłowa wartość');
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        checkConditions();
        setValue("");
    }

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.focus();
    };

    return (
        <InputContainer onSubmit={onFormSubmit}>
            <InputStyled value={value} onChange={handleChange} placeholder="Skanuj tutaj..." ref={ref} />
            <InputButton onClick={handleClick}>Enter</InputButton>
        </InputContainer>
    );
};