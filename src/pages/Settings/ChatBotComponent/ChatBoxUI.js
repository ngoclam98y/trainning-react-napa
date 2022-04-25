import { LineOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";

export default function ChatBoxUI() {
  return (
    <div className="chat" style={{ width: "382px", height: "525px" }}>
      <div
        className="chat-header"
        style={{
          display: "flex",
          background: "#F96262",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          height: "68px",
          width: "100%",
        }}
      >
        <div
          className="chat-logo"
          style={{
            width: "25%",
            height: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar />
        </div>
        <div
          className="chat-info"
          style={{ display: "flex", flexDirection: "column", width: "60%" }}
        >
          <h3 style={{ color: "white" }}>チャットボット</h3>
          <p style={{ color: "#CCCCCC" }}>24時間受け付けてます！</p>
        </div>
        <div
          className="chat-close-icon"
          style={{
            width: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "15",
          }}
        >
          <LineOutlined />
        </div>
      </div>
      <div
        className="chat-content"
        style={{
          height: "457px",
          width: "100%",
          background: "#929292",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <div
          className="chat-body-content"
          style={{
            width: "90%",
            margin: "auto",
            height: "500px",
          }}
        ></div>
        <div className="chat-text" style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "100%",
            }}
          >
            <Input
              style={{
                width: "90%",
                height: "44px",
                borderRadius: "5px",
                margin: "10px auto",
              }}
              placeholder="お問い合わせ内容を入力ください。"
            />
            <span
              style={{
                position: "absolute",
                right: "10%",
                color: "#FFA544",
                top: "50%",
                fontSize: "20px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              <SendOutlined />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
