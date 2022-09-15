import React from 'react'
import Navbar from '../components/Navbar'

export default function contact() {
  return (
  <div>
    <Navbar />
    <div
      className="border border-2 rounded-3 p-2 my-4 bg-white shadow"
      style={{ marginLeft: "10rem", marginRight: "10rem" }}
    >
      
      <h2 className="text-center mt-2 mb-4">Contact Me</h2>
      <div className="p-2 mx-auto mb-4" style={{ maxWidth: "50rem"}}>
        <div className="d-flex flex-row align-items-center">
          <img
            src="/images01/profile.jpg"
            style={{ objectFit: "cover" }}
            className="rounded-circle shadow"
            width="150"
            height="150"
          />
          <div className="ms-3">
            <div className="container">
              <div className="row row-cols-2">
                <div className="col fw-bold">Name</div>
                <div className="col">Jedsadakorn Kritsadakul</div>
                <div className="col fw-bold">Nickname</div>
                <div className="col">F</div>
                <div className="col fw-bold">Address</div>
                <div className="col">4 Chome Minato Tokyo 1050011</div>
                <div className="col fw-bold">Facebook</div>
                <a target="_blank">
                  <div className="col">https://www.facebook.com/con12EV</div>
                </a>
                <div className="col fw-bold">Email</div>
                <a href="mailto:jedsadakorn_k@cmu.ac.th">
                  <div className="col">jedsadakorn_k@cmu.ac.th</div>
                </a>
                <div className="col fw-bold">Phone</div>
                <div className="col">093-245-2585</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
