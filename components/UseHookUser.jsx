'use client'

import useLocalStorage from './useHookUser/useLocalStorage'
import useUpdateLogger from './useHookUser/useUpdateLogger'

const UseHookUser = () => {
    const [name, setName] = useLocalStorage('name', '')
    useUpdateLogger(name)
    return (
        <div>
            <input 
                value={name} 
                type="text" 
                onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default UseHookUser