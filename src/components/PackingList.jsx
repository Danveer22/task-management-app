import styled from "styled-components";
import { RiFileList2Line, RiEmotionSadLine } from "react-icons/ri";
import { useTasks } from "../context/UserContext";
import Item from "../components/Item";

const Container = styled.div`
  width: 100%;
  align-self: flex-start;
  /* height: 100%; */

  div {
    display: flex;
    justify-content: space-between;
    h2 {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;

      svg {
        color: var(--accent-color);
        font-size: 3rem;
      }
    }
  }
`;

const TaskContainer = styled.div`
  width: 100%;
  height: 20rem;

  overflow-y: auto;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    svg {
      font-size: 2rem;
    }
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 4px;
  }
`;

const StyledForm = styled.form`
  select {
    padding: 1rem;
    border-radius: 5px;
    color: var(--primary-color);
    border-color: var(--primary-hover);

    &:focus {
      outline: none;
    }
  }
`;

function PackingList() {
  const { task, sortTask, sortOption } = useTasks();

  function handleSortChange(e) {
    sortTask(e.target.value);
  }

  return (
    <Container>
      <div>
        <h2>
          <RiFileList2Line /> Task Lists
        </h2>
        <StyledForm>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">Select option</option>
            <option value="completed">Sort by Completed</option>
            <option value="date">Sort by Date</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </StyledForm>
      </div>
      <TaskContainer>
        {task.length !== 0 ? (
          task.map((taskItem) => <Item taskItem={taskItem} key={taskItem.id} />)
        ) : (
          <p>
            <RiEmotionSadLine />
            No tasks yet. Add a task to get started!
          </p>
        )}
      </TaskContainer>
    </Container>
  );
}

export default PackingList;
