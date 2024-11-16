import { useTasks } from "../context/UserContext";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const StyledSearchBar = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.5rem;
  background-color: var(--background-color);
  position: relative;

  input {
    flex: 1;
    padding: 1rem;
    font-size: 1.6rem;
    border: none;
    background-color: transparent;
    color: var(--text-color);

    &:focus {
      outline: none;
    }
  }

  .search-icon {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: var(--primary-color);
  }
`;

function SearchBar() {
  const { searchTask, searchQuery } = useTasks();

  const handleSearch = (e) => {
    searchTask(e.target.value);
  };

  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <FaSearch className="search-icon" />
    </StyledSearchBar>
  );
}

export default SearchBar;
