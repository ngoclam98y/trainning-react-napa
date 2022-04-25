import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Progress, Row, Space, Upload } from "antd";
import React from "react";
import { fileIcon } from "./table";

const FILE_DATA = [
  {
    id: 1,
    title: "ドキュメント",
    size: "5.5 GB",
    length: "223ファイル",
    type: ".docx",
  },
  {
    id: 2,
    title: "写真",
    size: "2.5 GB",
    length: "123ファイル",
    type: ".jpg",
  },
  {
    id: 3,
    title: "ビデオ",
    size: "3.5 GB",
    length: "12ファイル",
    type: ".zip",
  },
  {
    id: 4,
    title: "その他",
    size: "3.5 GB",
    length: "45ファイル",
    type: ".mp4",
  },
];

export default function UploadAttachment(props) {
  const renderListFile = (arrays) => {
    return (
      arrays &&
      arrays.map((x) => {
        return (
          <div
            key={x.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {fileIcon(x.type)}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                }}
              >
                <h1
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: " 14px",
                    lineHeight: "20px",
                    color: "#000000",
                  }}
                >
                  {x.title}
                </h1>
                <p>{x.length}</p>
              </div>
            </div>
            <div>{x.size}</div>
          </div>
        );
      })
    );
  };
  return (
    <Row gutter={[16, 32]}>
      <Col span={24}>
        <Upload {...props} className="custom-upload" style={{ width: "100%" }}>
          <Button
            style={{
              width: "100%",
              height: "110px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFA544",
              fontWeight: 400,
              fontSize: 14,
              border: "1px solid #FFA544",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          >
            <UploadOutlined />
            <span style={{ marginTop: "10px" }}>アップロード</span>
          </Button>
        </Upload>
      </Col>
      <Col span={24}>
        <h1 style={{ color: "#000000" }}>保管所</h1>
        <Progress
          height={40}
          percent={80}
          showInfo={false}
          strokeColor={{
            "0%": "#ffffff",
            "100%": "#ffffff",
          }}
        />
        <Row gutter={[16, 16]} style={{ marginTop: "10px" }}>
          <Col
            style={{ display: "flex", justifyContent: "flex-end" }}
            span={24}
          >
            <Space>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                15 GB
              </span>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#B3B3B3",
                }}
              >
                used of 45 GB
              </span>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={24}>{renderListFile(FILE_DATA)}</Col>
    </Row>
  );
}
