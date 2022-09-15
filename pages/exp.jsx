import React from 'react'
import Navbar from '../components/Navbar'

export default function exp() {
  return (
    <div>
        <Navbar />
        <div
        className="border border-2 rounded-3 p-2 my-4 bg-white shadow"
        style={{ marginLeft: "10rem", marginRight: "10rem" }}
        >
        <h2 className="text-center mt-2 mb-4">My Experience</h2>
        <div className="d-flex flex-row gap-3 mx-auto mb-3" style={{maxWidth: "36rem"}}>
            <div className="card shadow" style={{width: "18rem"}}>
            <img src="images01/hotel.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Hotel Reservation</h5>
                <p className="card-text">
                A project from 261102. My group choose Online Hotel Reservation
                that develop by using C++.
                </p>
            </div>
            </div>

            <div className="card shadow" style={{width: "18rem"}}>
            <img src="images01/scratch.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Scratch Game</h5>
                <p className="card-text">
                A project from 261103. I am a part of group that develop game by
                using Scratch platform.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
