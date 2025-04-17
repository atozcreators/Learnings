import { memo } from "react" //using memo it will render only have any changes

const Todos = ({todos}) => {
    console.log("Child Render")

    return (<div className="MyTodo">
        <h2>My Todo</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
    </div>)
}

export default memo(Todos);