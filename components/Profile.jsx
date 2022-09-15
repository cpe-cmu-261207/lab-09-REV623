import React from 'react'
import Navbar from './Navbar'

export default function Profile() {
  return (
    <div>
    <Navbar />
    <div
      className="border border-2 rounded-3 p-2 my-4 bg-white shadow"
      style={{ marginLeft: "10rem", marginRight: "10rem" }}
    >
      <div
        className="border-start border-5 border-primary p-2 mx-auto my-3 shadow-sm"
        style={{ maxWidth: "50rem", backgroundColor: "rgb(94, 182, 220)" }}
      >
        <div className="d-flex flex-row align-items-center">
          <img
            src="images01/profile.jpg"
            style={{objectFit: "cover"}}
            className="rounded-circle"
            width="150"
            height="150"
          />
          <div className="ms-3">
            <h3>Jedsadakorn Kritsadakul</h3>
            <span>
              Hello, My name is Jedsadakorn kritsadakul. My nickname is F. Now,
              I study at Chiang Mai University. Studied Computer Engineering. I
              love programming and solve the problem.
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-center">My Skills</h2>
      <div className="card mt-3 mx-auto shadow" style={{maxWidth: "40rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images01/prog.jpg" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Programming</h5>
              <p className="card-text">
                I like and love to coding. I learned about C++, java.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3 mx-auto shadow" style={{maxWidth: "40rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images01/math.jpg" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mathematics</h5>
              <p className="card-text">
                I like and love Math. I learned about Calculus, Vector, Logical,
                ,Function, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card my-3 mx-auto shadow" style={{maxWidth: "40rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="images01/game.png" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Gaming</h5>
              <p className="card-text">I like to play a game in free time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
