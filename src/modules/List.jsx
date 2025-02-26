import initialState from '../data'
import { useState } from 'react'
let clickCount = 0;
export default function List() {
    const [task, setTask] = useState('');
    {console.log('test:' + task)}
    return (
            <div>
                <input value={task} onChange={e => setTask(e.target.value)} />
                <button onClick={() => {
                    clickCount++;
                    let task = setTask(clickCount)
                    console.log('clicked: ' + task)
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
