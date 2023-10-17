import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './Buses.css'

const Bus2 = (props) => {

    const ctx = useContext(AppContext)

    return (
        <>
            <div className="wrapper">

                <h1>Bus 2</h1>
                <label>Lilo-an / Lapu-Lapu</label>

                <div className="table">

                    <div className="row header">
                        <div className="cell">
                            Ticket ID
                        </div>
                        <div className="cell">
                            Name
                        </div>
                        <div className="cell">
                            Action
                        </div>
                    </div>


                    {ctx.bus2.length > 0 && ctx.bus2.map((passenger, index) => (
                        <div className="row">
                            <div className="cell" data-title="ID">
                                {passenger.id}
                            </div>
                            <div className="cell" data-title="Name">
                                {passenger.name}
                            </div>
                            <div className="cell" data-title="Action">
                                <button onClick={() => ctx.deleteHandler(index, 1)}>Delete</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Bus2