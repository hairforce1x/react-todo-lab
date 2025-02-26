import initialState from '../data'
import { useState } from 'react'

export default function List() {
    const [task, setTask] = useState('');
    return (
            <div>
                <input value={task} onChange={e => setTask(e.target.value)} />
                console.log(task)
                <button onClick={() => {
                    setTask('')
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
