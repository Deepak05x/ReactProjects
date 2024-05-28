import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './SearchFilter.css'

const SearchFilter = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')
    const [drop, setDrop] = useState(false)
    const [filtered, setFiltered] = useState([])

    const fetchUsers = async ()=>{
        try{
            const response = await axios.get('http://dummyjson.com/users')
            const data = response.data
            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem) => userItem.firstName))
                setError(false)
            }
        }catch(e){
            setError(e.message)
        }
    }

    const handleChange = (e)=>{
        const query = e.target.value.toLowerCase()
        setInput(query)
        if(query.length > 1){
            const filteredData = users && users.length 
            ? users.filter((item)=>item.toLowerCase().indexOf(query) > -1)
            : []
            setFiltered(filteredData)
            setDrop(true)
        }else{
            setDrop(false)
        }
        
        
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    const handleClick = (e)=>{
        setDrop(false)
        setInput(e.target.innerText)
    }

    console.log(users)


  return (
    <div className='react__search'>
        <h1>Search AutoComplete</h1>
        <input type="text" onChange={handleChange} value={input}/>
        {error && <h1 className='react__search-error'>There is something Wrong</h1>}
        {drop && ( 
            <div className='react__search-list_container'>
                {filtered.map((item,index)=> <li onClick={handleClick} key={index}  className='react__search-list'>{item}</li>)}
            </div>
            
        )}
        <div className='react__search-hints'>
            <h1>The API containers user names starting with (hints) : </h1>
            <ul>
                <li>Charlotte</li>
                <li>Emily</li>
                <li>Alexander</li>
            </ul>
        </div>
    </div>
  )
}

export default SearchFilter
