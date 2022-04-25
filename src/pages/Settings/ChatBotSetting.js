import { Card, Col, Row } from "antd";
import ChangeIcon from "./ChatBotComponent/ChangeIcon";
import ChatBox from "./ChatBotComponent/ChatBox";
import ChatBoxUI from "./ChatBotComponent/ChatBoxUI";
import Header from "./ChatBotComponent/Header";

export default function ChatBotSettings() {
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Card>
          <Row>
            <Col span={13}>
              <Row gutter={[32, 32]}>
                <Header />
                <ChatBox />
                <ChangeIcon />
              </Row>
            </Col>
            <Col span={11}>
              <ChatBoxUI />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
