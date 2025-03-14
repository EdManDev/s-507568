import React from 'react'
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div>
      <div>Landing Page</div>
      <Link to="dashboard">Dashboard Link</Link>
    </div>
  )
}

export default Index