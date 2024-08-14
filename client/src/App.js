import Todo from './components/Todo';
import { useState } from 'react';
import { AddTodo } from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id:1,
      title:'first mytodo1',
      done:false,
    },
    {
      id:2,
      title:'second mytodo2',
      done:false,
    },
    {
      id:3,
      title:'third mytodo3',
      done:true,
    },
  ]);

  const addItem = ( newItem )=>{
    newItem.id = todoItems.length + 1;  
    newItem.done =false;
    setTodoItems([...todoItems, newItem]);
  }

  const deletedItem = (targetItem)=>{
    console.log('targetItem >>>>>>>',targetItem);
    
    const newTodoItems = todoItems.filter((e)=>e.id !== targetItem.id );
    setTodoItems(newTodoItems);
  }

  return (
    <div className="App">
      <AddTodo addItem={addItem}/>
      {todoItems.map((item)=>{
        return<Todo key={item.id} item={item} deleteItem={deletedItem}/>
      })}
    </div>
  );
}

export default App;
