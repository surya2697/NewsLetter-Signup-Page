import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Signup from '../Components/Signup'
import Thankyou from '../Components/Thankyou'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/thankyou' element={<Thankyou/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
