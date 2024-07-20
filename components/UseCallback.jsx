'use client'
import { useState, useCallback } from "react"
import List from "./useCallback/List"

const UseCallback = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback(() => {
        return [number, number+1, number+2]
    }, [number])

    return (
        <div className="flex flex-col">
            <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prev => !prev)} className={`${dark ? 'text-white bg-black' : 'text-black bg-white'}`}>theme</button>
            <List getItems={getItems}/>
        </div>
    )
}

export default UseCallback