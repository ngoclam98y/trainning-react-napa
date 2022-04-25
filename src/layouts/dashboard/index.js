import { Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BACKGROUND } from "../../constants/css";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
const { Content } = Layout;

const stylesLayout = { width: "100%", height: "100%" };
const styleContent = {
  backgroundColor: BACKGROUND.COLOR,
  paddingLeft: "120px",
};

export default function LayoutDashboard() {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={stylesLayout}>
      <DashboardSidebar collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout" style={styleContent}>
        <DashboardHeader />
        <Content className="site-layout-background">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
