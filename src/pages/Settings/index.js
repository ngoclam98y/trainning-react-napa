import { Col, Row } from "antd";
import ChatBotSetting from "./ChatBotSetting";
import EmbeddedLink from "./EmbeddedLink";

export default function Settings() {
  return (
    <Row gutter={[0, 32]}>
      <Col span={23}>
        <h1>埋め込みリンク</h1>
        <EmbeddedLink />
      </Col>
      <Col span={23}>
        <h1>チャットボットUIの設定</h1>
        <ChatBotSetting />
      </Col>
    </Row>
  );
}
