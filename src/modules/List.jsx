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
                    <li></li>
                </ul>
            </div>
            
        </>
    )
}
