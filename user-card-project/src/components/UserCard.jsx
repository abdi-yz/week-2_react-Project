import "./UserCard.css"; // Importing the CSS file

const UserCard = ({ name, email, age, bgColor }) => {
  return (
    <div className="user-card" style={{ backgroundColor: bgColor || "#f4f4f4" }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
