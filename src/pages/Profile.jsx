import React, {useEffect, useState} from 'react';
import UserCard from '../components/UserCard';
import "../styles/Profile.css";
import axios from "axios";


const fetchUsers = async () => {
  const res = await axios.get("http://localhost:4000/users");

  const data = res.data;

  console.log(data);

  return data;
}


const Profile = () => {
  const[userData, setUserData] = useState([]);

  const assignData = async () => {
    const fetchedUserData = await fetchUsers();

    setUserData(fetchedUserData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div className="user">
      {
        userData.map((user) => {
          return (
            <UserCard
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.emailId} 
            />
          )
        })
      }
    </div>
  )
}

export default Profile;