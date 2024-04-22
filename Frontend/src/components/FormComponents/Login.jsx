
import { Card, Flex, Typography, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
// import LoginImage from "../assets/image1.jpg";
// import GOOGLE_ICON from "../assets/google.png";

const Login = () => {
  const handleLogin = async (values) => {
    console.log(values);
  };
  return (
    <Card className="form-container">
      <Flex>
        {/* Image */}
        <div className="my-4" style={{ flex: "0 0 50%" }}>
          <img
            // src={LoginImage}
            className="auth-image h-auto w-full rounded-lg"
            alt="Login"
          />
        </div>
        {/* Form */}
        <Flex
          vertical
          flex={1}
          style={{
            paddingLeft: "20px",
            paddingBottom: "40px",
            paddingTop: "40px",
          }}
        >
          <Typography.Title level={3} strong className="title text-center">
            Sign In
          </Typography.Title>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            {/* Form content */}
            <div className="w-full text-[#060606] font-semibold bg-white my-2.5 border-2 border-bg-stone-500 rounded-md p-1.5 text-center flex items-center justify-center cursor-pointer">
              {/* <img src={GOOGLE_ICON} className="h-6 mr-2" alt="Google Icon" /> */}
              <p>Sign In with Google</p>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[0.3px] bg-black/30"></div>
              <p className="text-xs absolute text-black/60 bg-[#ffffff]">
                Or Sign In with Email
              </p>
            </div>
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                {
                  type: "email",
                  message: "The input is not valid Email",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            {/* Password */}
            <Form.Item
              label="Password"
              name="password"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>
            {/* Remember Me */}
            <div className="w-full flex items-start justify-start mt-[-0.15rem]">
              <input type="checkbox" className="w-4 h-4 mr-2 cursor-pointer" />
              <p
                className="text-xs"
                style={{ lineHeight: "1.5", marginTop: "0.1rem" }}
              >
                Remember me
              </p>
            </div>
            {/* Forgot Password */}
            <p className="text-xs cursor-pointer underline underline-offset-2 font-medium hover:text-teal-400">
              Forgot Password ?
            </p>
            {/* Submit Button */}
            <Form.Item style={{ marginTop: "40px" }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="btn w-full"
              >
                Sign In
              </Button>
            </Form.Item>
            {/* Sign Up Link */}
            <Form.Item>
              <div style={{ marginBottom: "12px" }}>
                <Link to="/register">
                  Dont have an account?{" "}
                  <span className="text-teal-400 underline">Sign Up</span>
                </Link>
              </div>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Login;
