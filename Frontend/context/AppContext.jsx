"use client";
const { createContext, useContext, useState, useEffect } = require("react");

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);

  const store = {
    data,
    setData,
    events,
    setEvents,
  };

  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetch(
        "https://invictus-2025-16ei.vercel.app/api/events",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setData(data.events);
      setEvents(data.events);
    };

    fetchEventsData();
  }, []);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useStore = () => {
  return useContext(AppContext);
};
