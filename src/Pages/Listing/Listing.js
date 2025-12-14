import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'

const Listing = () => {
  return (
    <>
    <section className="listing-section">
      <div className="container">
        <div className='row'>
          <div className='col-4'>
            <Sidebar />
          </div>
           <div className='col-8'>
            <h2>Listing Component</h2>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Listing