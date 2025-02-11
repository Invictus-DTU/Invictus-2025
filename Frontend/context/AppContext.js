"use client"

import { BASEURL } from "@/lib/BASE_URL";
import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {


    const [data, setData] = useState([]);
    const [user, setUser] = useState(null)
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        setLoading(true)
        const response = await fetch(BASEURL + "/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            credentials: 'include'
        });

        const data = await response.json();
        setLoading(false)
        
        if (data.success) {
            setUser(data.user)
        }
    }
    const fetchAll= async () => {
        setLoading(true)
        const r1 = await fetch(BASEURL + "/api/events", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const d1 = await r1.json();
        setData(d1.events);
        setEvents(d1.events);

        const response = await fetch(BASEURL + "/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            credentials: 'include'
        });

        const d2 = await response.json();
        setLoading(false)
        
        if (d2.success) {
            setUser(d2.user)
        }
    };


    const store = {
        user, setUser,
        events, setEvents,
        data, setData,
        loading, setLoading,
        fetchUser
    }
    useEffect(() => {
        fetchAll()
        // console.log("lol")
    }, [])

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}


export const useStore = () => useContext(AppContext)