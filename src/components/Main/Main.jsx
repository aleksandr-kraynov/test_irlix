import React, { useState } from 'react';
import './Main.scss';

const Main = (props) => {     
    const[note, setNote] = useState(props.state);  
    const[number, setNumber]  = useState('');
    const[text, setText] = useState('');

    
    const inputNumber = (e) => {             
        setNumber(e.target.value)
    }
    
    const inputText = (e) => {             
        setText(e.target.value)
    }
    
    const addNote = () => {        
        if (number != '' && text != '') {
            setNote([...note, {number: Number(number), text: text}])  
        } else {
            alert('Заполните поля')
        }
        setNumber('')  
        setText('')     
    } 

    note.sort((a, b) => a.number > b.number ? 1 : -1)
       
    return (
        <main>
            <section>
                <div className='list'>
                    <div className='list__welcome'>
                        <h1>Приветствую!</h1>
                        <p>Давай обновим список и начнём обучение</p>
                    </div>
                    <div className='list_block'>
                        <p>Список:</p>
                        {note.map(item => (                            
                            <p key={item.number}>{item.number}) {item.text}</p>                                                      
                        ))}                        
                    </div>                
                </div>
                <div className='block-add'>
                    <label className='block-add__number'>Номер записи
                        <input type='number' value={number} onChange={inputNumber}></input>
                    </label>
                    <label className='block-add__name'>Название записи
                        <input type='text' value={text} onChange={inputText}></input>                        
                    </label>
                    <button onClick={addNote}>Добавить в список</button>
                </div>
            </section>               
        </main>
    );
}

export default Main;