'use client'
import { useState, useMemo } from "react"
const UseMemo = () => {
    const [dark, setDark] = useState(true)
    const [number, setNumber] = useState(2)
    const dublle = useMemo(() => {return slow(number)}, [number]) // запоминает в памяти объект и обновляет в том случае если поменялись параметры
    
    return (
        <div>
            <button onClick={() => setDark(!dark)}>change theme</button>
            <h4 className={`${dark ? "text-white bg-black" : "text-black bg-white"}`}>Theme</h4>
            <button onClick={() => setNumber(prev => prev+1)}>{number}</button>
        </div>
    )
}

export default UseMemo

function slow (number) {
    for (let i=0; i<1000000000; i++){}
    return number*2
}
