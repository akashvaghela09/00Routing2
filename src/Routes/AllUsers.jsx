import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserCard } from '../Components/UserCard';

const AllUsers = () => {
    
    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const getUsers = (page = 1) => {
        setIsLoading(true)

        const baseUrl = process.env.REACT_APP_REQUEST_BASE_URL
        axios.get(`${baseUrl}/api/users?page=${page}`)
        .then((res) => {
            setIsLoading(false)
            setResponse(res.data)
        })
        .catch((err) => {
            setIsError(true)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    const {data} = response;
    return isLoading? <div>...Loading</div> 
        : isError? <div>something went wrong</div> 
        : (
        <div>
            {
                data?.map((item) => (
                    <UserCard {...item} key={item.id} />
                ))
            }
        </div>
    )
}

export {AllUsers}