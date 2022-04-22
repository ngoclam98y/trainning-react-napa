import { Col, Row } from "antd";
import Table from "./table";
import Upload from "./upload";

export default function () {
  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <h1>添付</h1>
      </Col>
      <Col span={16}>
        <Table />
      </Col>
      <Col span={6} offset={1}>
        <Upload />
      </Col>
    </Row>
  );
}
