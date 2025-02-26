import initialState from '../data'
import { useState } from 'react'

export default function List({ handleAdd }) {

    const [text, setTask] = useState('');

    return (
            <div>
                <input value={text} onChange={e => setTask(e.target.value)} />
                <button onClick={() => {
                    console.log(text)
                    handleAdd(text)
                }}>add task</button>
                <ul>
                    {initialState.map(test => (
                        <li>
                            <label><input type='checkbox' /></label>
                            {test.title}
                            <button>Delete</button>
                            <button>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
    )
}
