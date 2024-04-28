
import { Card, Flex, Typography, Form, Input, Button } from "antd";
import axios from "axios";
import { useState ,useEffect} from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link ,useNavigate} from "react-router-dom";

// import LoginImage from "../assets/image1.jpg";
// import GOOGLE_ICON from "../assets/google.png";

const Login = () => {
  const handleLogin = async (values) => {
    console.log(values);
  };
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3456/signin",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const {success, message, isAdmin} = data;

      if (success) {
        if (isAdmin) {
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
          handleSuccess(message);
          console.log("Redirecting to admin dashboard");
          console.log(isAdmin);
        } 
        else {
          setTimeout(() => {
            navigate("/");
          }, 3000);
          handleSuccess(message);
          console.log("Redirecting to main");
        }
      } else {
        handleError(message);
      }
      console.log(data);
        
    }catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
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
          <Form 
          onSubmitCapture={handleSubmit}
          layout="vertical" 
          onFinish={handleLogin} 
          autoComplete="off">
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
              <Input 
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email" />
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
              <Input.Password 
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              size="large" 
              placeholder="Enter your password" />
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
                <Link to="/signup">
                  Dont have an account?{" "}
                  <span className="text-teal-400 underline">Sign Up</span>
                </Link>
              </div>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
      <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}/>
    </Card>
  );
};

export default Login;
