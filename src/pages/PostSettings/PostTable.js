import { Button, Col, Row, Table, Tag, Typography } from "antd";
import EmptyImg from "../../assets/empty.png";
const { Text } = Typography;

const columns = [
  {
    title: "投稿一覧",
    dataIndex: "postList",
    key: "postList",
  },
  {
    title: "スターテス",
    dataIndex: "start",
    key: "start",
    render: (boolean) => (
      <Tag color={!boolean ? "#FFEFCC" : "#ECFFE6"}>
        {!boolean ? (
          <Text style={{ color: "#FFA544" }}>無効</Text>
        ) : (
          <Text style={{ color: "#45D313" }}>有効</Text>
        )}
      </Tag>
    ),
  },
  {
    title: "作成日",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const DATA_TABLE = [
  {
    postList: "テーマ①",
    start: false,
    createdAt: "2022/01/25",
    key: 1,
  },
  {
    postList: "テーマ②",
    start: true,
    createdAt: "2022/01/25",
    key: 2,
  },
  ,
  {
    postList: "テーマ③",
    start: false,
    createdAt: "2022/01/25",
    key: 3,
  },
  {
    postList: "テーマ④",
    start: false,
    createdAt: "2022/01/25",
    key: 4,
  },
  {
    postList: "テーマ⑤",
    start: false,
    createdAt: "2022/01/25",
    key: 5,
  },
  {
    postList: "テーマ⑥",
    start: false,
    createdAt: "2022/01/25",
    key: 6,
  },
];

export default function () {
  const renderEmpty = (dataTables) => {
    return (
      dataTables &&
      !dataTables.length && (
        <Col span={24} style={{ minHeight: "600px" }}>
          <img src={EmptyImg} alt="" />
          <Col span={20} offset={2} style={{ textAlign: "center" }}>
            まだ投稿はありません。 今すぐ投稿を作成しましょう！
          </Col>
        </Col>
      )
    );
  };
  const renderTableData = (dataTables) => {
    return (
      dataTables &&
      dataTables.length && (
        <Col span={24} style={{ minHeight: "600px" }}>
          <Table
            dataSource={dataTables}
            columns={columns}
            pagination={false}
            className="table-post"
          />
        </Col>
      )
    );
  };
  return (
    <Col
      span={5}
      style={{
        background: "white",
      }}
    >
      <Row>
        {DATA_TABLE && DATA_TABLE.length
          ? renderTableData(DATA_TABLE)
          : renderEmpty(DATA_TABLE)}
        <Col span={22} offset={1} style={{ padding: "20px 0" }}>
          <Button
            style={{
              width: "100%",
              height: "40px",
              background: "#FFA544",
              color: "white",
              borderRadius: "5px",
              borderCollapse: "#FFA544",
            }}
          >
            新規投稿作成
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
