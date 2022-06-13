import { Routes, Route } from "react-router-dom";
import {ContentProvider} from '../../context/ContentProvider';

import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

import './Dashboard.css';

const Dashboard = () => {

  return (
    <ContentProvider>
      <main className="dashboard-container">
          <Sidebar />
          <Routes>
            <Route path="content" element={<Content />}/>
          </Routes>
      </main>
    </ContentProvider>
  )
}

export default Dashboard