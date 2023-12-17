import React from 'react'
import Navbar from '../components/Navbar'
import { IuserContext, userContext } from '../contexts/userContext'

const TempAllUsers = () => {

    const { getAll, users } = React.useContext(userContext) as IuserContext

    return (
        <>
            <Navbar></Navbar>

            <div className="temp">
                <div className="container d-flex justify-content-start">
                    <h1>ALL USERS IN DB</h1>
                </div>
            </div>

        </>
    )
}

export default TempAllUsers