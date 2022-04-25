import { Col, Input, Row } from "antd";

export default function Header() {
  return (
    <Col span={24}>
      <h1>ヘッダ</h1>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Row>
            <Col span={2}>背景</Col>
            <Col span={2}>
              <Input type="color" value={"#F96262"} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Row gutter={[8, 8]}>
                    <Col span={2}>文書</Col>
                    <Col span={6}>
                      <Input value="チャットボット" />
                    </Col>
                    <Col span={2}>
                      <Input type="number" value={14} />
                    </Col>
                    <Col span={2}>
                      <Input type="color" value={"#ffffff"} />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[8, 8]}>
                    <Col span={6} offset={2}>
                      <Input value={"24時間受け付けてます！"} />
                    </Col>
                    <Col span={2}>
                      <Input type="number" value={14} />
                    </Col>
                    <Col span={2}>
                      <Input type="color" value="#B3B3B3" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={2}>アイコン</Col>
            <Col span={2}>
              <Input type="color" value={"#000000"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
