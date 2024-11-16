import { useState } from "react";
import { useTasks } from "../context/UserContext";
import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(20rem, 2fr) minmax(20rem, auto) 1fr;
  gap: 1rem;
`;

const InputGroup = styled.div`
  input {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.6rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-color);
    background-color: var(--background-color);

    &:focus {
      border-color: var(--primary-color);
      outline: none;
    }
  }
`;

const PriorityGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  label {
    font-size: 1.4rem;
    color: var(--text-light-color);
  }

  select {
    padding: 0.8rem;
    font-size: 1.6rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background-color: var(--background-color);
    color: var(--text-color);

    &:focus {
      border-color: var(--primary-color);
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.2rem;
  font-size: 1.6rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-hover);
  }

  svg {
    font-size: 2rem;
  }
`;

function Form() {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");
  const { createTask } = useTasks();

  function handleCreateTask(e) {
    e.preventDefault();
    if (!taskName) return;

    const task = {
      id: Date.now(),
      name: taskName,
      priority,
      completed: false,
      createdAt: new Date().getTime(),
    };
    createTask(task);
    setTaskName("");
    setPriority("low");
  }

  return (
    <StyledForm onSubmit={handleCreateTask}>
      <InputGroup>
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </InputGroup>
      <PriorityGroup>
        <label>Priority: </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </PriorityGroup>
      <SubmitButton type="submit">
        <FaPlusCircle /> Add Task
      </SubmitButton>
    </StyledForm>
  );
}

export default Form;
