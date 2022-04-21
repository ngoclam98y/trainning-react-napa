import { Col, Row, Select } from "antd";
import { Header } from "antd/lib/layout/layout";
import { BACKGROUND } from "../../constants/css";

const { Option } = Select;

const styleHeader = {
  padding: 0,
  height: "100px",
  backgroundColor: BACKGROUND.COLOR,
};

export default function () {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Header className="site-layout-background" style={styleHeader}>
      <Row>
        <Col xs={10} xl={2}>
          <h2> テナント名</h2>
        </Col>
        <Col xs={10} xl={4}>
          <Select
            defaultValue="テナント①"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <Option value="テナント①">テナント①</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
      </Row>
    </Header>
  );
}
