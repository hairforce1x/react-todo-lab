import initialState from '../data'

export default function List() {
    console.log(initialState)
    return (
            <div>
                <input />
                <button>add task</button>
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
