import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Container from '../UI/Container'
import Card from './Card'

const Passengers = () => {
    const ctx = useContext(AppContext)
    return (
        <Container>
            {ctx.passengers.map((passenger, index) => (
                <Card key={index}>

                    <h2>{passenger.name}</h2>
                    <h2>Ticket ID: {passenger.id}</h2>
                    <h2>{passenger.destination}</h2>
                    
                    <button onClick={() => ctx.addPassenger(index, 0)}>Cebu</button>

                    <button onClick={() => ctx.addPassenger(index, 1)}>Mandaue</button>

                    <button onClick={() => ctx.addPassenger(index, 2)}>Lilo-an</button>

                    <button onClick={() => ctx.addPassenger(index, 3)}>Lapu-Lapu</button>

                    <button onClick={() => ctx.addPassenger(index, 4)}>Consolacion</button>

                    <button onClick={() => ctx.addPassenger(index, 5)}>Talisay</button>

                </Card>
            ))}
        </Container>


    )
}

export default Passengers