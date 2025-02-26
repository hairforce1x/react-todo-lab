import initialState from '../data'

export default function List() {
    console.log(initialState)
    return (
        <>
            <div>
                <input />
                <button>add task</button>
            </div>
            <div>
                <ul>
                    {initialState.map(test => (
                        <li>
                            {test.title}
                        </li>
                    ))}
                </ul>
            </div>
            
        </>
    )
}
