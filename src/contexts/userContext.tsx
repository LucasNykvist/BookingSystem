import React, { useState, useContext, createContext } from "react"
import { User } from "../models/UserModel";

export interface IuserContext {
    user: User
    users: User[]
    create: (e: React.FormEvent) => void
    getAll: () => void
}

export const userContext = React.createContext<IuserContext | null>(null);

export const useUserContex = () => {
    return useContext(userContext)
}

const userProvider = ({ children }: any) => {
    const baseUrl = "http.//localhost:3000/users"
    const userDefault: User = { email: "", phone: "", company: "", password: "" }


    const [user, setUser] = useState<User>(userDefault)
    const [users, setUsers] = useState<User[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (res.status === 201) {
            setUser(userDefault)
        }

    }

    const getAll = async () => {
        const res = await fetch(`${baseUrl}`)

        if (res.status === 200) {
            setUsers(await res.json())
        }
    }

    return (
        <userContext.Provider value={{ getAll, user, users, create }}>
            {children}
        </userContext.Provider>
    )

}

export default userContext