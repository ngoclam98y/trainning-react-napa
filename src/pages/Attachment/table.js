import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm, Table, Typography } from "antd";
import { useState } from "react";
import { default as Docx, default as Mp4 } from "../../assets/docx.png";
import Jpg from "../../assets/jpg.png";
import Zip from "../../assets/zip.png";
const { Text } = Typography;

const text = "Are you sure to delete this file?";

export const fileIcon = (fileName) => {
  if (fileName.includes(".docx")) {
    return <img src={Docx} alt="" style={{ marginRight: "10px" }} />;
  }
  if (fileName.includes(".jpg")) {
    return <img src={Jpg} alt="" style={{ marginRight: "10px" }} />;
  }
  if (fileName.includes(".zip")) {
    return <img src={Zip} alt="" style={{ marginRight: "10px" }} />;
  }
  if (fileName.includes(".mp4")) {
    return <img src={Mp4} alt="" style={{ marginRight: "10px" }} />;
  }
};

const data = [
  {
    id: 1,
    key: "1",
    fileName: "発注書.docx",
    createdAt: "2 days ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
  {
    id: 2,
    key: "7",
    fileName: "イベント１.jpg",
    createdAt: "1 week ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
  {
    id: 3,
    key: "6",
    fileName: "イベント２.mp4",
    createdAt: "23 hours ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
  {
    id: 4,
    key: "5",
    fileName: "申し込み.zip",
    createdAt: "2 minutes ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
  {
    id: 5,
    key: "4",
    fileName: "案内書.docx",
    createdAt: "2 days ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
  {
    id: 6,
    key: "3",
    fileName: "紹介.mp4",
    createdAt: "23 hours ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
  {
    id: 7,
    key: "2",
    fileName: "紹介.jpg",
    createdAt: "1 week ago",
    size: "35.5 MB",
    updatedAt: "2022/01/25",
    action: "delete",
  },
];

export default function TableAttachment() {
  const [dataTable, setDataTable] = useState([...data]);

  const columns = [
    {
      title: "ファイル名",
      dataIndex: "fileName",
      key: "fileName",
      width: "50%",
      render: (text) => (
        <span>
          {fileIcon(text)}
          {text}
        </span>
      ),
    },
    {
      title: "作成日",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "サイズ",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "更新日",
      key: "updatedAt",
      dataIndex: "updatedAt",
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: (_, options) => (
        <Text style={{ cursor: "pointer" }} type="danger">
          <Popconfirm
            placement="top"
            title={text}
            onConfirm={() => {
              const newArr = dataTable.filter((x) => x.id !== options.id);
              setDataTable(newArr);
            }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </Text>
      ),
    },
  ];
  return <Table columns={columns} dataSource={dataTable} pagination={false} />;
}
