import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { SIDEBAR, SIDEBAR_BOTTOM } from "../../_mocks_/sidebar";
const { Sider } = Layout;

export default function ({ collapsed, toggle }) {
  const location = useLocation();
  const navigation = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("isLogin");
    navigation("/login");
  };

  const renderMenuItem = (sidebars) => {
    if (!sidebars && !sidebars.length) return null;
    return (
      <Menu
        theme="white"
        mode="inline"
        defaultSelectedKeys={[
          (
            sidebars.findIndex((x) => x.link === location.pathname) + 1
          ).toString(),
        ]}
      >
        {sidebars.map((v) => (
          <Menu.Item key={v.id} icon={v.icon}>
            {v.link === "/logout" ? (
              <span onClick={handleLogout}>{v.title}</span>
            ) : (
              <Link to={v.link}>{v.title}</Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      style={{
        background: "white",
        position: "fixed",
        height: "100%",
        zIndex: 9999,
      }}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      trigger={null}
    >
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "85%",
        }}
      >
        {renderMenuItem(SIDEBAR)}
        {renderMenuItem(SIDEBAR_BOTTOM)}
      </div>
    </Sider>
  );
}
