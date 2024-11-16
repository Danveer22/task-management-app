import styled from "styled-components";
import { useTasks } from "../context/UserContext";
import { AiOutlineCheckCircle } from "react-icons/ai";

const TaskItemWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(--task-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, opacity 0.3s ease;

  div {
    h3 {
      width: 25rem;
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 8px;
    }

    p {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
  div h3::-webkit-scrollbar {
    height: 4px;
  }

  /* div h3::-webkit-scrollbar-thumb {
    border-radius: 4px;
    min-width: 10px;
    height: 6px;
  } */
  &.task-transition {
    transform: translateY(10px);
    opacity: 0.7;
  }
`;

const ButtonCompleted = styled.button`
  background-color: var(--primary-color);
  padding: 1.2rem;
  color: var(--card-bg-color);
  border-radius: 1rem;
  width: 8rem;
  cursor: pointer;
`;

const ButtonSuccess = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 3rem;
    color: var(--success-color);
  }
`;

const ButtonRemove = styled.button`
  background-color: var(--error-color);

  padding: 1.2rem;
  color: var(--card-bg-color);
  border-radius: 1rem;
  width: 8rem;
  cursor: pointer;
`;

const Priority = styled.p`
  padding: 1rem;
  font-size: 8px;
  text-transform: uppercase;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.low {
    background-color: var(--primary-hover);
  }

  &.medium {
    background-color: var(--accent-color);
  }

  &.high {
    background-color: var(--error-color);
  }
`;

function Item({ taskItem }) {
  const { id, name, priority, completed, createdAt } = taskItem;
  const { toggleTaskComplete, deleteTask } = useTasks();

  return (
    <TaskItemWrapper className={completed ? "task-transition" : ""}>
      <div>
        <h3>{name}</h3>
        <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
      </div>
      <Priority className={priority}>{priority}</Priority>
      <ButtonSuccess>
        <ButtonCompleted onClick={() => toggleTaskComplete(id)}>
          {completed ? "Undo" : "Complete"}{" "}
        </ButtonCompleted>
        {completed ? <AiOutlineCheckCircle /> : ""}
      </ButtonSuccess>

      <ButtonRemove onClick={() => deleteTask(id)}>Remove</ButtonRemove>
    </TaskItemWrapper>
  );
}

export default Item;
