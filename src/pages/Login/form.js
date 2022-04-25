import { Button, Checkbox, Col, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { USER_DATA } from "../../_mocks_/user";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function FormLogin() {
  const navigation = useNavigate();

  const onFinish = (values) => {
    if (!USER_DATA && !USER_DATA.length) return;
    const isUser = USER_DATA.some(
      (x) => x.username === values.username && x.password === values.password
    );
    if (!isUser) {
      message.error("username or password is wrong !");
      return;
    }
    window.localStorage.setItem("isLogin", JSON.stringify(true));
    return navigation("/dashboard/user");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Col span={8} style={styles}>
      <Form
        style={{ width: "70%" }}
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>ログイン</h1>
        <Form.Item
          label="ユーザー名"
          name="username"
          initialValue="ngoclam"
          rules={[
            {
              required: true,
              message: "Please input your ユーザー名!",
            },
          ]}
        >
          <Input style={{ height: "40px", borderRadius: "5px" }} />
        </Form.Item>

        <Form.Item
          label="パスワード"
          name="password"
          initialValue="ngoclam1998"
          rules={[
            {
              required: true,
              message: "Please input your パスワード!",
            },
          ]}
        >
          <Input.Password style={{ height: "40px", borderRadius: "5px" }} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            span: 24,
          }}
        >
          <Checkbox>パースワードを保存</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "5px",
              background: "#FFA544",
              borderColor: "#FFA544",
            }}
          >
            サインイン
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
}
