import React ,{useState, useRef}from 'react';
import '../styles/AddTodo.scss';

export const AddTodo = ({addItem}) => {
  
  const refTodo = useRef();

  const [todoItem, setTodoItem] = useState({
    title:'',
  })

  const onButtonClick = ()=>{
    if(todoItem.title.length === 0){
      return refTodo.current.focus();
    }
    addItem(todoItem);
    todoItem.title ='';
  };

  const enterkeyAddTodo = (e)=>{
    if(e.nativeEvent.isComposing) return;
    
    if(e.key === 'Enter'){
      onButtonClick();
    }
  }

  return (
    <>
      <div className='AddTodo'>
        <input 
          type='text' 
          placeholder='Add your own todo'
          value={todoItem.title}
          ref={refTodo}
          onChange={(e)=>{ setTodoItem({ title : e.target.value })}}
          onKeyDown={ enterkeyAddTodo }
        ></input>
        <button onClick={ onButtonClick }>ADD</button>
      </div>
    </>
  )
}
