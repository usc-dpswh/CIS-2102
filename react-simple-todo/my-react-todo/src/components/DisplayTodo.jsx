import React from 'react';

const DisplayTodo = (props) => {
    return (
        <div>
            {props.data.map((item, index) => (
                <div key={index}>
                    <h3
                        id={index}
                        onClick={() => props.delete(index)}
                        style={{
                            cursor: 'pointer'
                        }}
                    >{item}</h3>
                </div>
            ))}
        </div>
    )
}

export default DisplayTodo