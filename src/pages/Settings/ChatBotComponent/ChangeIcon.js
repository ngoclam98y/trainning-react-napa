import { ToTopOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Upload } from "antd";
import CloseIcon from "../../../assets/close.png";
import "./ChangeIcon.css";

export default function () {
  return (
    <Col span={24}>
      <h1>アイコンの変更</h1>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Row gutter={[0, 32]}>
            <Col span={3}>
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  position: "relative",
                  cursor: "pointer",
                }}
                className="swapper"
              >
                <Upload
                  style={{
                    width: "84px",
                    height: "84px",
                  }}
                  className="custom-input-upload"
                >
                  <ToTopOutlined
                    style={{
                      opacity: 0,
                      visibility: "hidden",
                      transition: "0.5s ease-in-out",
                    }}
                  />
                </Upload>
                <img
                  style={{
                    position: "absolute",
                    zIndex: 1234,
                    cursor: "pointer",
                    top: 0,
                    right: 0,
                    opacity: 0,
                    visibility: "hidden",
                    transition: "0.5s ease-in-out",
                  }}
                  src={CloseIcon}
                />
              </div>
            </Col>
            <Col span={21}>
              <div>アイコンの画像ファイルについて</div>
              <div> 横50px以上90px以下</div>
              <div> 縦50px以上90px以下</div>
              <p style={{ padding: "10px 0" }}>
                PNG形式でアップロードしてください。
              </p>
            </Col>

            <Col span={24}>
              <Space size="large">
                <Button
                  danger
                  style={{
                    border: "1px solid #FFA544",
                    color: "#FFA544",
                    height: "40px",
                    width: "220px",
                    borderRadius: "5px",
                  }}
                >
                  デフォルトに戻す
                </Button>
                <Button
                  danger
                  style={{
                    border: "1px solid #FFA544",
                    color: "#FFA544",
                    height: "40px",
                    width: "160px",
                    borderRadius: "5px",
                  }}
                >
                  元に戻す
                </Button>
                <Button
                  danger
                  style={{
                    border: "1px solid #FFA544",
                    color: "white",
                    height: "40px",
                    width: "120px",
                    borderRadius: "5px",
                    background: "#FFA544",
                  }}
                >
                  保存する
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
