import React ,{useState} from 'react'

export default function Todo({item, deleteItem}) {
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);
  
  const onDeleteButtonClick = ()=>{
    deleteItem(todoItem);
  }
  //title 클릭시 실행될 함수
  const offReadOnlyMode = ()=>{
    setReadOnly(false);
  }
  const enterkeyEventHandler = (e)=>{

    if(e.keycode==='13'){
      setReadOnly(true);
    }
  }

  const editEventHandler = (e)=>{
    const {title, ...rest} = todoItem;

    setTodoItem({
      title : e.target.value,
      ...rest,
    })
  }

  const checkboxEventHandler = (e)=>{
    const {done, ...rest} = todoItem; 
    
    setTodoItem({
      done : e.target.checked,
      ...rest,
    });
  }
  
  return (
    <>
      <div className='Todo'>
        <input 
          type='checkbox' 
          id={`todo${todoItem.id}`} 
          name={`todo${todoItem.id}`} 
          value={`todo${todoItem.id}`} 
          defaultChecked={todoItem.done}
          onChange={checkboxEventHandler}
        />
        <input
          type='text'
          value={todoItem.title}
          readOnly={readOnly}
          onClick={offReadOnlyMode}
          onChange={editEventHandler}
          onKeyDown={enterkeyEventHandler}
        />
        {/* <label htmlFor={`todo${item.id}`}>{`${item.title}`}</label> */}
        <button onClick={onDeleteButtonClick}>Delete</button>
      </div>
    </>
  )
}
