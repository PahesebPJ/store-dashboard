import { Routes, Route } from "react-router-dom"

import Sidebar from "../Sidebar/Sidebar"
import Content from "../Content/Content"

import './Dashboard.css'

const Dashboard = () => {
  return (
      <main className="dashboard-container">
          <Sidebar />
          <Routes>
            <Route path="product" element={<Content />}/>
          </Routes>
      </main>
  )
}

export default Dashboard