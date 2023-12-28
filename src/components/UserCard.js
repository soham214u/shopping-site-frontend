import React from 'react';
import "../styles/UserCard.css";

const UserCard = ({userImg, firstName, lastName, phone, email}) => {
  return (
    <div className="user-card">
        <section>
            <img src={userImg} alt="" />
        </section>
        <section className="user-name">
            <p>{firstName}</p>
            <p>{lastName}</p>
        </section>
        <p>{phone}</p>
        <p>{email}</p>
    </div>
  )
}

export default UserCard