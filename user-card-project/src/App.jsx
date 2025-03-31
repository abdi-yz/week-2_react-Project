import UserCard from "./components/UserCard";
import "./App.css";
const App=() =>{
  return (
    <div className="app-container">
      <h1 className="title">User List</h1>
      <div className="user-list">
      <UserCard name = "wengelawit girma" email="wengelawitgirma799@gmail.com" age={21} bgColor="#a8dadc"/>
      <UserCard name="Helen Zelalem" email="helenzelalem1996@gmail.com" age={25} bgColor="#f1faee" />
      <UserCard name="estifanos zinabu" email="estifanoszinabuabebe@gmail.com" age={30}/>
     </div>
     </div>
    
  )
}

export default App;