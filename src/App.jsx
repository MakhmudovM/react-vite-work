import { useState } from "react";

function App() {
  const [todos , setTodos] = useState([]);
  const [title , setTitle] = useState("")
  const [body , setBody] = useState("")
  

  const handlSubmit = (e) => {
    e.preventDefault();
    //setTodos((prev) => {
     // return[...prev]
   // })

   const newTodo = {
    id: Math.random(),
    title,
    body,
   }

   setTodos((prev) => {
    return[...prev , newTodo];

   });
   const music = new Audio("./add-sound.mp3"); //Add
   music.play();
  }
  
  const deleteTodo = (id) => {
   // const filteredTodo = todos.filter((todo) => {
   //   return todo.id !==id;
   // })

   setTodos((prev) => {
     return prev.filter((todo) => {
       return todo.id !==id;
     })
   })

   const music = new Audio("./delete-sound.mp3") //delete
   music.play();
  }

  return(

  <div className="content__wrapper">
    <h1 className="main__title">To do list</h1>
   <form className="form" onSubmit={handlSubmit}>
    <span className="input__up-title">title:</span>
   <input className="input" type="text" onChange={(e) => setTitle(e.target.value)} />
   <span className="input__bt-title">your text:</span>
    <input className="input" type="text" onChange={(e) => setBody(e.target.value)} />

    <button className="btn">Add</button>
   </form>

   <ul className="list">
    {todos.map((todo) => {
      return(
        <li className="list__item" key={todo.id}>
          <h3 className="item__title">{todo.title}</h3>
          <p className="item__text">{todo.body}</p>
          <button className="del__btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      )
    })}
   </ul>
  </div>
  );
}

export default App;