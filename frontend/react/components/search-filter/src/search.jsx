import { useState } from 'react';
import SearchInput from './search-input.jsx';
import UserList from './user-list.jsx';
import { useUsers } from './use-users.js';

const Search = () => {
  const { users } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState(users); // State for filtered users

  return (
    <div className="main">
      {/* Pass users and setFilteredUsers to SearchInput */}
      <SearchInput users={users} setFilteredUsers={setFilteredUsers} />
      {/* Pass filteredUsers to UserList */}
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Search;
