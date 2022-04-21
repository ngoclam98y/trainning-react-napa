import { Col, Row } from "antd";
import Table from "./table";
import Upload from "./upload";

export default function () {
  return (
    <Row>
      <Col span={16}>
        <Table />
      </Col>
      <Col span={6} offset={1}>
        <Upload />
      </Col>
    </Row>
  );
}
