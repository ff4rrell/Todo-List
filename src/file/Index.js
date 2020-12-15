import React, {useState} from 'react';
import './extra/Styles.css';
import Input from './companent/Input';


const Index = () => {
    
    const [todoList, setTodo] = useState([]);
    const [todo, createTodo] = useState({
        title: '',
        completed: false,
        key: Math.random()
    });
    const [choice, setChoice] = useState('all');

    
    
    const addTodo = () => {
        setTodo([...todoList, todo])
        createTodo({
            title: '',
            completed: false,
            key: Math.random()
        })
        console.log(todoList)
    }

    const activeChoice = () => {
        setChoice('active');
        console.log(choice);
    }

    const completedChoice = () => {
        setChoice('completed');
        console.log(choice)
    }

    const allChoice = () => {
        setChoice('all');
        console.log(choice)
    }
    
    const [toyota, camry] = useState('50')
    

    return(
    <div className='index'>
        <Input function={createTodo} object={todo} todo={todo.title}/>

        <button onClick={addTodo}>add</button>
        <br/>
        <button onClick={activeChoice}>Active</button>
        <button onClick={completedChoice}> Completed</button>
        <button onClick={allChoice}>All</button>
        <br/>
        <strong >{choice}</strong>
        

        {todoList.filter( it => {
            if(choice === 'active'){
                return !it.completed
            }else if(choice === 'completed'){
                return it.completed
            }else if(choice === 'all'){
                return true
            }
        }).map(it => {
            return <div>{it.title} <button onClick={()=> {setTodo(todoList.map(item =>{
                if(item === it){
                    return {
                        ...item,
                        completed: !it.completed
                    }
                }else{
                    return item
                }
            }))}}> {it.completed ? 'isDone' : 'notDone'} </button></div>
        })
        }
        
    </div>
)}

export default Index;