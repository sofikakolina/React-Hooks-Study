'use client'
import { useState, useRef, useEffect } from "react"
const UseRef = () => {
    const [name, setName] = useState("")
    const inputRef = useRef() // при изменении useRef они не приводят к дополнительному рендерингу компонента
    const renderCount = useRef(0) // при изменении useRef они не приводят к дополнительному рендерингу компонента
    const prevName = useRef("") // можно сохранить прошлое значение name, так как не перерндерирывается

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
    useEffect(() => {
        prevName.current = name
    },[name])
    function focus(){
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef} value={name} type="text" onChange={(e) => setName(e.target.value)}/>
            <h3>my name is {name} and early he was a {prevName.current}</h3>
            <h4>Count render is {renderCount.current}</h4>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default UseRef