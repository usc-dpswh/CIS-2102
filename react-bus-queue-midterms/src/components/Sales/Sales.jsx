import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Sales = () => {

    const ctx = useContext(AppContext)

    return (
        <div>
            <h1>Sales: PHP {ctx.sales}</h1>

        </div>
    )
}

export default Sales