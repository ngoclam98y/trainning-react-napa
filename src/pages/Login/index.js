import { Layout } from "antd";
import Background from "./background";
import FormLogin from "./form";

const { Content } = Layout;

const styles = { height: "100%", display: "flex" };

export default function Login() {
  return (
    <Content style={styles}>
      <Background />
      <FormLogin />
    </Content>
  );
}
