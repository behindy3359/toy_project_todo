import React ,{useState}from 'react'

export const AddTodo = ({addItem}) => {
  const [todoItem, setTodoItem] = useState({
    title:'',
  })

  const onButtonClick = ()=>{
    addItem(todoItem);
    setTodoItem({
      title:'', //상태 초기화
    });
  };
  const enterkeyAddTodo = (e)=>{
    console.log('2123');
    
    if(e.key==='Enter'){
      console.log('2');
      onButtonClick();
    }
  }

  return (
    <>
      <div className='add-todo'>
        <input 
          type='text' 
          placeholder='Add your own todo'
          value={todoItem.title}
          onChange={(e)=>{ setTodoItem({ title : e.target.value })}}
          onKeyDown={enterkeyAddTodo}
        ></input>
        <button onClick={ onButtonClick }>ADD</button>
      </div>
    </>
  )
}
