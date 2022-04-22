import { EditOutlined, SmileOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { useState } from "react";

const { Text } = Typography;

const { Option } = Select;

const months = Array(12)
  .fill(0)
  .map((_, index) => index + 1);
const days = Array(31)
  .fill(0)
  .map((_, index) => index + 1);
const years = Array(5)
  .fill(new Date().getFullYear())
  .map((x, index) => x - index);

const DATA_ONE = [
  {
    id: 1,
    title: "名前と苗字",
    name: "username",
    titleEdit: "苗字とファーストネームを入力してください。",
  },
  {
    id: 2,
    title: "生年月日",
    name: "birthday",
    titleEdit: "生年月日を選択してください。",
  },
  {
    id: 3,
    title: "電子メールアドレス",
    name: "email",
    titleEdit: "電子メールアドレスを入力してください。",
  },
];

const DATA_TWO = [
  {
    id: 1,
    title: "パスワード",
    name: "password",
    titleEdit:
      "利用できる文字は8文字以上の半角英数字及び記号（「-」「_」「%」「$」「#」のみ）",
  },
];

export default function () {
  const [text, setText] = useState("");
  const [userData, setUserData] = useState({
    username: "グエンホアンサン",
    birthday: "1996/01/01",
    email: "example@gmail.com",
    password: "••••••••••",
  });

  const [form] = Form.useForm();

  const handleNameEdit = (value) => {
    setText(value);
    form.resetFields();
  };

  const setUserDataFollowField = (fields, values) => {
    if (fields.includes("firstName") && fields.includes("lastName")) {
      setUserData({
        ...userData,
        username: `${values.firstName} ${values.lastName}`,
      });
      return handleNameEdit("");
    }
    if (
      fields.includes("year") &&
      fields.includes("day") &&
      fields.includes("month")
    ) {
      setUserData({
        ...userData,
        birthday: `${values.year}/${values.month}/${values.day}`,
      });
      return handleNameEdit("");
    }
    if (fields.includes("email")) {
      setUserData({
        ...userData,
        email: `${values.email}`,
      });
      return handleNameEdit("");
    }
    if (
      fields.includes("newPass") &&
      fields.includes("oldPass") &&
      fields.includes("confirmPass")
    ) {
      if (values.newPass === values.confirmPass) {
        setUserData({
          ...userData,
          password: Array(values.newPass.length)
            .fill("*")
            .toString()
            .replaceAll(",", ""),
        });
        return handleNameEdit("");
      }
      return message.error("confirm password not match!");
    }
  };

  const renderButtonSubmit = ({ values, resetFields, fields, errors }) => {
    return (
      <Form.Item wrapperCol={{ span: 23 }}>
        <Row>
          <Col xs={5} xl={2} offset={4}>
            <Button
              htmlType="submit"
              type="text"
              danger
              onClick={() => {
                resetFields(fields);
                handleNameEdit("");
                return;
              }}
            >
              キャンセル
            </Button>
          </Col>
          <Col xs={5} xl={4}>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "#fa8c16",
                width: "100px",
                borderColor: "#fa8c16",
                borderRadius: "5px",
                color: "#ffffff",
              }}
              onClick={() => {
                if (errors && errors.length && errors[0].length) {
                  return;
                }
                if (
                  Object.values(values).every((x) => x !== undefined) &&
                  Object.values(values).length === fields.length
                ) {
                  setUserDataFollowField(fields, values);
                  return;
                }
                message.error("please input your all field");
                return;
              }}
            >
              保存
            </Button>
          </Col>
        </Row>
      </Form.Item>
    );
  };

  const renderEditContent = (name) => {
    if (text === "username" && name === text) {
      return (
        <Form
          style={{ marginTop: "20px" }}
          name="basic"
          labelCol={{ span: 1, offset: 1 }}
          wrapperCol={{ span: 3, offset: 2 }}
          autoComplete="off"
          initialValues={{ firstName: "", lastName: "" }}
        >
          {(values, formInstance) => {
            const { firstName, lastName } = values;
            const { resetFields } = formInstance;
            return (
              <>
                <Form.Item label="苗字" name="firstName">
                  <Input type="text" value={values.firstName} />
                </Form.Item>

                <Form.Item label="ファーストネーム" name="lastName">
                  <Input type="text" value={values.lastName} />
                </Form.Item>
                {renderButtonSubmit({
                  values: { firstName, lastName },
                  resetFields,
                  fields: ["firstName", "lastName"],
                })}
              </>
            );
          }}
        </Form>
      );
    }
    if (text === "birthday" && name === text) {
      return (
        <Form
          style={{ marginTop: "20px" }}
          name="basic"
          labelCol={{ span: 1, offset: 8 }}
          wrapperCol={{ span: 5, offset: 4 }}
          autoComplete="off"
          form={form}
          initialValues={{ year: "", month: "", day: "" }}
        >
          {(values, formInstance) => {
            const { year, month, day } = values;
            const { resetFields } = formInstance;
            return (
              <>
                <Row>
                  <Col offset={3} xs={10} xl={4}>
                    <Space size="small">
                      <Form.Item name="year">
                        <Select
                          style={{ width: 80 }}
                          name="year"
                          value={values.year}
                        >
                          {years.map((x) => (
                            <Option value={x} key={x}>
                              {x}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item name="month">
                        <Select
                          style={{ width: 80 }}
                          name="month"
                          value={values.month}
                        >
                          {months.map((x) => (
                            <Option value={x} key={x}>
                              {x}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item name="day">
                        <Select
                          style={{ width: 80 }}
                          name="day"
                          value={values.day}
                        >
                          {days.map((x) => (
                            <Option value={x} key={x}>
                              {x}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Space>
                  </Col>
                </Row>

                {renderButtonSubmit({
                  values: {
                    year,
                    month,
                    day,
                  },
                  resetFields,
                  fields: ["year", "month", "day"],
                })}
              </>
            );
          }}
        </Form>
      );
    }
    if (text === "email" && name === text) {
      return (
        <Form
          style={{ marginTop: "20px" }}
          name="basic"
          labelCol={{ span: 1, offset: 8 }}
          wrapperCol={{ span: 5, offset: 4 }}
          autoComplete="off"
          form={form}
          initialValues={{ email: "" }}
        >
          {(values, formInstance) => {
            const { email } = values;
            const { getFieldError, resetFields } = formInstance;
            return (
              <>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: " the input is not valid E-mail",
                    },
                  ]}
                >
                  <Space align="center">
                    <Input type="text" value={values.email} />
                    {values.email && !getFieldError("email").length && (
                      <Space
                        align="center"
                        style={{ width: "160px", color: "#45D313" }}
                      >
                        <SmileOutlined /> 有効なメール
                      </Space>
                    )}
                  </Space>
                </Form.Item>

                {renderButtonSubmit({
                  values: { email },
                  resetFields,
                  fields: ["email"],
                  errors: getFieldError("email"),
                })}
              </>
            );
          }}
        </Form>
      );
    }

    if (text === "password" && name === text)
      return (
        <Form
          style={{ marginTop: "20px" }}
          name="basic"
          labelCol={{ span: 1, offset: 1 }}
          wrapperCol={{ span: 3, offset: 2 }}
          autoComplete="off"
          initialValues={{ newPass: "", oldPass: "", confirmPass: "" }}
        >
          {(values, formInstance) => {
            const { newPass, oldPass, confirmPass } = values;
            const { resetFields } = formInstance;
            return (
              <>
                <Form.Item label="現在のパスワード" name="oldPass">
                  <Input type="password" />
                </Form.Item>

                <Form.Item label="新しいパスワード" name="newPass" hasFeedback>
                  <Input type="password" />
                </Form.Item>

                <Form.Item
                  label="新しいパスワードを確認"
                  name="confirmPass"
                  dependencies={["newPass"]}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPass") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input type="password" />
                </Form.Item>

                {renderButtonSubmit({
                  values: { newPass, oldPass, confirmPass },
                  resetFields,
                  fields: ["oldPass", "newPass", "confirmPass"],
                })}
              </>
            );
          }}
        </Form>
      );
  };

  const renderEditIcon = (name) => {
    if (!text && name !== text)
      return (
        <>
          <EditOutlined
            key="edit"
            style={{ cursor: "pointer" }}
            onClick={() => handleNameEdit(name)}
          />
          <span style={{ paddingLeft: "10px" }}>編集</span>
        </>
      );
    if (text && name !== text) {
      return (
        <>
          <EditOutlined
            key="edit"
            style={{ cursor: "pointer" }}
            onClick={() => handleNameEdit(name)}
          />
          <span style={{ paddingLeft: "10px" }}>編集</span>
        </>
      );
    }
    return null;
  };

  const renderContentEdit = (obj) => {
    if (!text && obj.name !== text) return <span>{userData[obj.name]}</span>;
    if (text && obj.name !== text) {
      return <span>{userData[obj.name]}</span>;
    }
    return <span style={{ color: "gray" }}>{obj.titleEdit}</span>;
  };

  const renderDataOne = (arrays) => {
    return arrays.map((v) => {
      return (
        <Col xs={23} xl={23} className="custom-font" key={v.id}>
          <Card>
            <Row>
              <Col xs={23} xl={4}>
                <span>{v.title}</span>
              </Col>
              <Col xs={23} xl={16}>
                {renderContentEdit(v)}
              </Col>
              <Col xs={23} xl={4} className="custom-font-color">
                {renderEditIcon(v.name)}
              </Col>
            </Row>
            {renderEditContent(v.name)}
          </Card>
        </Col>
      );
    });
  };

  return (
    <Row>
      <Col xs={24} xl={24}>
        <h1
          style={{
            fontFamily: "Noto Sans JP",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "35px",
          }}
        >
          プロファイル
        </h1>
      </Col>
      {renderDataOne(DATA_ONE)}
      <Col xs={24} xl={24} style={{ padding: "10px" }}></Col>
      {renderDataOne(DATA_TWO)}
    </Row>
  );
}
