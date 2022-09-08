import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import List from "../pages/List";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/list/:type" element={<List />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
