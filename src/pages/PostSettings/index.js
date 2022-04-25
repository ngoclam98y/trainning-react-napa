import { Col, Row } from "antd";
import PostTable from "./PostTable";

export default function () {
  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <h1>投稿の設定</h1>
      </Col>
      <PostTable />
      <Col span={16} offset={1}>
        a
      </Col>
    </Row>
  );
}
