import { Button, Card, Col, Input, Row } from "antd";

const link = `<script src="https://localhost:8443/chatbot/forLP.js" charset="UTF-8" tenant-id="cc88883ebffbe99bfda924c637edd315" url-page-counter="google.com"></script>`;

export default function () {
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Card>
          <p>
            チャットボットを表示したいページの
            タグの前に以下のHTMLを埋め込んでください。
          </p>
          <p>
            <Input value={`${link}`} />
          </p>
          <p>
            <Button
              style={{
                background: "#FFA544",
                border: "1px solid #FFA544",
                borderRadius: "5px",
                height: "50px",
                width: "200px",
                color: "white",
              }}
            >
              クリップボードにコピー
            </Button>
          </p>
        </Card>
      </Col>
    </Row>
  );
}
