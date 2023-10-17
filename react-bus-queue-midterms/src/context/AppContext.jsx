import React, { useState, useEffect } from 'react';

import axios from 'axios'

export const AppContext = React.createContext({
    "passengers": [],
    "setPassengers": () => { },
    "destinations": [],
    "setDestinations": () => { },
    "fetchHandler": () => { },
    "addPassenger": () => { },
    "sales": 0,
    "setSales": () => { },
    "bus1": [],
    "setBus1": () => { },
    "bus2": [],
    "setBus2": () => { },
    "bus3": [],
    "setBus3": () => { },
    "deleteHandler": () => { }
});

export const AppContextProvider = (props) => {
    // States
    const [passengers, setPassengers] = useState([])
    const [destinations, setDestinations] = useState([])
    const [sales, setSales] = useState(0)
    const [destIsClicked, setDestIsClicked] = useState(false)

    // Bus states
    const [bus1, setBus1] = useState([])
    const [bus2, setBus2] = useState([])
    const [bus3, setBus3] = useState([])

    // URLs
    const passengerURL = "https://my-json-server.typicode.com/troy1129/jsonplaceholder/passengers"
    const destinationURL = "https://my-json-server.typicode.com/troy1129/jsonplaceholder/destinations"

    const fetchHandler = () => {
        fetch(passengerURL)
            .then((res) => res.json())
            .then((data) => setPassengers(data))
        fetch(destinationURL)
            .then((dest) => dest.json())
            .then((data) => setDestinations(data))
    }

    useEffect(() => {
        console.log(bus1)
        console.log(bus2)
        console.log(bus3)
    }, [destIsClicked])

    const addPassenger = (index, destination) => {
        setDestIsClicked(!destIsClicked)

        const passenger = passengers[index]
        
        // const passengerExists = contactList.some((contact) => contact.id.toString() === newContact.id.toString());
        let passengerExists = false
        let updatedPassengers

        // Checks which destination and only adds a passenger to each bus if it's not full
        if (destination === 0 && bus1.length >= 0 && bus1.length < 5){
            // passengerExists = bus1.some(pass => pass !== passenger[index])

            if (passengerExists){
                alert("Only one ticket / duplicates are not allowed for each passenger.")
            } else {
                setBus1(prevBus => ([...prevBus, passenger]))
                passenger.destination = destinations[destination].destination

                updatedPassengers = passengers.filter((item, idx) => idx !== index);
                setPassengers(prevPass => [...updatedPassengers])
                setSales(prevSales => prevSales + destinations[destination].price)
            }
        } else if (destination === 1 && bus1.length >= 0 && bus1.length < 5){

            // passengerExists = bus1.some(pass => pass !== passenger[index])

            if (passengerExists){
                alert("Only one ticket / duplicates are not allowed for each passenger.")
            } else {
                setBus1(prevBus => ([...prevBus, passenger]))
                passenger.destination = destinations[destination].destination

                updatedPassengers = passengers.filter((item, idx) => idx !== index);
                setPassengers(prevPass => [...updatedPassengers])
                setSales(prevSales => prevSales + destinations[destination].price)
            }

        } else if (destination === 2 && bus2.length >= 0 && bus2.length < 5){
            // passengerExists = bus2.some(pass => pass !== passenger[index])
            if (passengerExists){
                alert("Only one ticket / duplicates are not allowed for each passenger.")
            } else {
                setBus2(prevBus => ([...prevBus, passenger]))
                passenger.destination = destinations[destination].destination

                updatedPassengers = passengers.filter((item, idx) => idx !== index);
                setPassengers(prevPass => [...updatedPassengers])
                setSales(prevSales => prevSales + destinations[destination].price)
            }

        } else if (destination === 3 && bus2.length >= 0 && bus2.length < 5){
            // passengerExists = bus2.some(pass => pass !== passenger[index])
            if (passengerExists){
                alert("Only one ticket / duplicates are not allowed for each passenger.")
            } else {
                setBus2(prevBus => ([...prevBus, passenger]))
                passenger.destination = destinations[destination].destination

                updatedPassengers = passengers.filter((item, idx) => idx !== index);
                setPassengers(prevPass => [...updatedPassengers])
                setSales(prevSales => prevSales + destinations[destination].price)
            }

        } else if (destination === 4 && bus2.length >= 0 && bus2.length < 5){
            // passengerExists = bus3.some(pass => pass !== passenger[index])
            if (passengerExists){
                alert("Only one ticket / duplicates are not allowed for each passenger.")
            } else {
                setBus3(prevBus => ([...prevBus, passenger]))
                passenger.destination = destinations[destination].destination

                updatedPassengers = passengers.filter((item, idx) => idx !== index);
                setPassengers(prevPass => [...updatedPassengers])
                setSales(prevSales => prevSales + destinations[destination].price)
            }

        } else if (destination === 5 && bus2.length >= 0 && bus2.length < 5){
            // passengerExists = bus3.some(pass => pass !== passenger[index])
            if (passengerExists){
                alert("Only one ticket / duplicates are not allowed for each passenger.")
            } else {
                setBus3(prevBus => ([...prevBus, passenger]))
                passenger.destination = destinations[destination].destination

                updatedPassengers = passengers.filter((item, idx) => idx !== index);
                setPassengers(prevPass => [...updatedPassengers])
                setSales(prevSales => prevSales + destinations[destination].price)
            }
            
        }

        // Add ticket sales
        // setSales(prevSales => prevSales + destinations[destination].price)
         
    }

    const deleteHandler = (index, busType) => {
        let updatedPassengers = []

        if (busType === 0){

            updatedPassengers = bus1.filter((item, idx) => idx !== index);
            setBus1(updatedPassengers)

        } else if (busType === 1){

            updatedPassengers = bus2.filter((item, idx) => idx !== index);
            setBus2(updatedPassengers)

        } else {

            updatedPassengers = bus3.filter((item, idx) => idx !== index);
            setBus3(updatedPassengers)

        }
    }

    useEffect(() => {
        fetchHandler();
    }, []);

    return (
        <AppContext.Provider
            value={{
                passengers,
                setPassengers,
                destinations,
                setDestinations,
                fetchHandler,
                addPassenger, 
                sales,
                setSales,
                bus1,
                bus2,
                bus3,
                setBus1,
                setBus2,
                setBus3,
                deleteHandler
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}