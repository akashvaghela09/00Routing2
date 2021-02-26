import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserCard } from '../Components/UserCard';

function User() {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const params = useParams();

    const getUser = (params) => {
        if( !params ){
            setIsError(true)
            return
        }

        const baseUrl = process.env.REACT_APP_REQUEST_BASE_URL

        axios.get(`${baseUrl}/api/users/${params.id}`)
        .then((res) => {
            setUser(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
            setIsLoading(false);
        })

        console.log(user);
    }
    
    useEffect(()=> {
        getUser(params);
    }, [])


    return (
        isLoading? <div>...Loading</div> : isError? <div>...error</div> :
        <div>
            <UserCard {...user.data} showLink={false}/><br />
            <Link to="/user">Go Back</Link>
        </div>
    )
}

export { User };