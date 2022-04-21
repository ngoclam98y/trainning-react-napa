import {
  BarChartOutlined,
  DashboardOutlined,
  LinkOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Avatar from "../assets/avatar.png";

const styles = {
  background: `url(${Avatar}) no-repeat`,
  height: "30px",
  backgroundSize: "cover",
  width: "30px",
};
export const SIDEBAR = [
  {
    id: "1",
    title: "プロファイル",
    icon: <UserOutlined />,
    link: "/dashboard/user",
  },
  {
    id: "2",
    title: "添付",
    icon: <LinkOutlined />,
    link: "/dashboard/file",
  },
  {
    id: "3",
    title: "チャットボットUIの設定",
    icon: <DashboardOutlined />,
    link: "/dashboard/setting",
  },
  {
    id: "4",
    title: "投稿の設定",
    icon: <MenuFoldOutlined />,
    link: "/dashboard/update-setting",
  },
  {
    id: "5",
    title: "シナリオの設定",
    icon: <MenuUnfoldOutlined />,
    link: "/dashboard/setting-script",
  },
  {
    id: "6",
    title: "集計",
    icon: <BarChartOutlined />,
    link: "/dashboard/charts",
  },
];

export const SIDEBAR_BOTTOM = [
  {
    id: "7",
    title: "プロファイル",
    icon: <div className="img" style={styles}></div>,
    link: "/dashboard/user",
  },
  {
    id: "8",
    title: "",
    icon: <LoginOutlined />,
    link: "/dashboard/file",
  },
];
