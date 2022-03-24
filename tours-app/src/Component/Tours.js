import React from 'react'
import TourData from './TourData'
import '../App.css'

function Tours({tours, removeTour}){
    return(
        <section>
            <div className="title">
                <h2>Our Tours </h2>
                <div className="underline" ></div>
            </div>
            {
                tours.map((tour)=>(<TourData key={tour.id} {...tour}  removeTour={removeTour}/>))
            }
        </section>
    )
}

export default Tours