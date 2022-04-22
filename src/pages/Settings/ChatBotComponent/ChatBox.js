import { Col, Input, Row } from "antd";

export default function () {
  return (
    <Col span={24}>
      <h1>チャットボックス</h1>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row>
            <Col span={2}>背景</Col>
            <Col span={2}>
              <Input type="color" value={"#919191"} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={2}>本文</Col>
            <Col span={2}>
              <Input type="color" value={"#F3F3F3"} />
            </Col>
            <Col span={8}>
              お問い合わせ内容を入力していただくか、以下から選んでください。
            </Col>
            <Col span={2}>
              <Input type="number" value={14} />
            </Col>
            <Col span={2}>
              <Input type="color" value={"#000000"} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={2}>シナリオ</Col>
            <Col span={2}>
              <Input type="color" value={"#000000"} />
            </Col>
            <Col span={2}>
              <Input type="color" value={"#F3F3F3"} />
            </Col>

            <Col span={2}>
              <Input type="number" value={14} />
            </Col>
            <Col span={2}>
              <Input type="color" value={"#000000"} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={2}>シナリオ</Col>
            <Col span={2}>
              <Input type="color" value={"#000000"} />
            </Col>
            <Col span={2}>
              <Input type="color" value={"#F3F3F3"} />
            </Col>
            <Col span={8}>
              <Input placeholder="お問い合わせ内容を入力ください。" />
            </Col>
            <Col span={2}>
              <Input type="number" value={14} />
            </Col>
            <Col span={2}>
              <Input type="color" value={"#000000"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
