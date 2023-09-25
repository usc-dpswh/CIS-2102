import '../App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HomeLink = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>

            <Link to="/input-student">
                <button className='button--link'>First Reactivity</button>
            </Link>

            <Link to="/form-validate">
                <button className='button--link'>Second Reactivity</button>
            </Link>

        </div>
    )
}

export default HomeLink