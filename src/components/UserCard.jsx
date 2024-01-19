import React from 'react';
import "../styles/UserCard.css";

const UserCard = ({firstName, lastName, password, email}) => {
  return (
    <div className="user-card">
        <section className="user-name">
            <p>{firstName}</p>
            <p>{lastName}</p>
        </section>
        <p>{email}</p>
        <p>{password}</p>
    </div>
  )
}

export default UserCard;