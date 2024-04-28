import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [searchUser ,setSearchUser] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await axios.get('http://localhost:3456/users');
        if (response.status === 201) {
          setUsers(response.data.users);
          setFilteredUsers(response.data.users); // Initialize filtered users with all users

        }
      } catch (error) {
        console.error(error);
      }
    };

    getUsersData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3456/users/${userId}`);
      if (response.status === 201) {
        console.log(response.data.successMessage);
        // After deletion, fetch users data again to update the UI
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers);
        // setFilteredUsers(updatedUsers); // Update filtered users as well

      } else {
        console.log(response.data.errorMessage);
      }
    } catch (e) {
      console.log(e);
    }
  }

  

  const handleSearchChange = (e) =>{
    setSearchUser(e.target.value);
  }

  const handleSearchClick = () => {
    if (searchUser !== "") {
      const usersFiltered = users.filter((user) => {
        return user.username.toLowerCase().includes(searchUser.toLowerCase()) || user.email.toLowerCase().includes(searchUser.toLowerCase());
      });
      setFilteredUsers(usersFiltered);
    } else {
      setFilteredUsers(users); // Reset filtered users to all users when search input is empty
    }
  }



  const TABLE_HEAD = ["Username", "Email", "Created At", "Delete"];
  return (
    <>
    
    <div className="p-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchUser}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
        className='px-4 py-2 ml-2 border border-gray-300 bg-blue-600 text-white rounded-md focus:outline-none '
        onClick={handleSearchClick}>
          Search
        </button>
      </div>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={index}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
  {filteredUsers.map((user, index) => {
    const isLast = index === filteredUsers.length - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={index}>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {user.username}
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {user.email}
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {user.createdAt}
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            as="a"
            href="#"
            onClick={() => deleteUser(user._id)}
            variant="small"
            color="blue-gray"
            className="font-medium border-2 border-black rounded-l p-2 bg-black text-white cursor-pointer"
          >
            Delete
          </Typography>
        </td>
      </tr>
    );
  })}
</tbody>
      </table>
    </Card>

    </>
  );
}

export default AdminDashboard ;
