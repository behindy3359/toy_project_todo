import Todo from './components/Todo';
import { useEffect, useState } from 'react';
import { AddTodo } from './components/AddTodo';
import axios from 'axios';
import './styles/App.scss';
import { API_BASE_URL } from './app-config';


function App() {
  const [todoItems, setTodoItems] = useState([]);
  // { 백엔드, 프론트, api 연결, }
  // - readAPI
  useEffect(( )=> {
    // console.log('렌더링 완료!');
    // console.log('process.env.REACT_APP_DB_HOST : ',process.env.REACT_APP_DB_HOST);

    const getTodos = async ()=>{
      await axios({
        method : 'get',
        url : `${API_BASE_URL}/api/todos`,
      }).then((res)=>{
        setTodoItems(res.data.todos);
      }).catch((err)=>{
        console.error(err);
      });
    }
    getTodos();
  },[]);

  const addItem = async ( newItem )=>{
    
    await axios({
      method : 'post',
      url : `${API_BASE_URL}/api/todo`,
      data:{
        title : newItem.title
      }
    }).then((res)=>{
      if(res.status === 200){
        console.log(res.data.newTodo);
        const newInsertItem ={
          id : res.data.newTodo.id,
          title : res.data.newTodo.title,
          done : res.data.newTodo.done
        }
        
        setTodoItems([...todoItems, newInsertItem]);
      }
    }).catch((err)=>{
      console.error(err);
    });
  }

  const deletedItem = async(targetItem)=>{
    // console.log('targetItem >>>>>>> ',targetItem);

    const newTodoItems = todoItems.filter((e) => e.id !== targetItem.id );
    // console.log(...newTodoItems);
    
    
    await axios({
      method : 'delete',
      url : `${API_BASE_URL}/api/todo/${targetItem.id}`
    }).then((res)=>{
      setTodoItems([...newTodoItems]);
    }).catch((err)=>{
      console.error(err);
    });
  }
  const updateItem = async (targetItem)=>{
    await axios({
      method : 'patch',
      url : `${API_BASE_URL}/api/todo/${targetItem.id}`,
      data:{
        title : targetItem.title,
        done : targetItem.done
      }
    }).then((res)=>{
      
    }).catch((err)=>{
      console.error(err);
    });
  }

  return (
    <div className="App">
      <AddTodo addItem={addItem}/>
      <div className='left-todos'> ✔️{todoItems.length} 개의 할일이 남아있습니다.</div>
      { todoItems.length > 0 ? todoItems.map((item)=>{
        return <Todo key={item.id} item={item} deleteItem={deletedItem} updateItem={updateItem}/>
      }) : <p className='empty-todos'> 🛏️ 아직 할일이 추가되지 않았습니다. </p>}
    </div>
  );
}
export default App;