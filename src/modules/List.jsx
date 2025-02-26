import initialState from '../data'
import { useState } from 'react'

export default function List({ handleAdd, handleDelete, handleEdit }) {

    const [text, setTask] = useState('');

    return (
        <div>
            <input value={text} onChange={e => setTask(e.target.value)} />
            <button onClick={() => {
                handleAdd(text)
                setTask('')
            }}>add task</button>
            <ul>
                {initialState.map(test => (
                    <li>
                        <label><input type='checkbox' /></label>
                        {test.title}
                        <button onClick={() => {
                            handleDelete(text)
                        }}>Delete</button>
                        <button onClick={() => {
                            handleEdit(text)
                        }}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
