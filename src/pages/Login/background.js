import { Col } from "antd";
import BackgroundLogin from "../../assets/login.png";

const styles = {
  background: `url(${BackgroundLogin}) no-repeat`,
  height: "100%",
  backgroundSize: "cover",
};

export default function () {
  return <Col span={16} style={styles}></Col>;
}
