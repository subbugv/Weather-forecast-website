
import React from 'react'

export default function Chart({city}) {
    console.log(city)
    return (
        <div>
            <h2>{city}  and API Key = {process.env.REACT_APP_API_KEY}</h2>
        </div>
    )
}
