import { Card, Flex, Typography, Form, Input, Button } from "antd";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link ,useNavigate } from "react-router-dom";

const Register = () => {
  const handleRegister = (values) => {
    console.log(values);
  };

  const navigate = useNavigate();
  const [inputValue ,setInputValue] = useState({
    email : "",
    password : "",
    username : "",
    profilePic : null
  });
  const {email ,password ,username ,profilePic} = inputValue;

  const handleOnChange = (e) =>{
    const {name ,value ,files} = e.target;
    if(name === 'profilePic'){
      setInputValue({
        ...inputValue,
        [name] : files[0]
      });
    }else{
      setInputValue({
        ...inputValue,
        [name]: value,
      });  
    }
  }

  const handleError = (err) =>{
    toast.error(err ,{
        position : "bottom-left",
    });
}
const handleSuccess = (msg) =>{
    toast.success(msg ,{
        position : "bottom-right",
    });
} 
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password',  password);
    formData.append('username', username);
    formData.append('profilePic', profilePic);
    
    try{
      const {data} = await axios.post(
        "http://localhost:3456/signup",
        // {...inputValue},
        // {withCredentials : true}
        formData,
        {
          headers: {
            "Content-Type" : 'multipart/form-data'
          },
          withCredentials : true
        }
      );

      const {success ,message} = data;
      if(success){
        handleSuccess(message);
        setTimeout(() =>{
          navigate("/signin");
        } ,2500);
      }else{
        handleError(message);
      }
    }catch(e){
      console.log(`Error : ${e}`);
    }
    setInputValue({
      ...inputValue,
      email : "",
      password : "",
      username : "",
      profilePic : null
    });
    
  }
  return (
    <Card className="form-container overflow-hidden">
      <Flex gap="large">
        {/* form */}
        <Flex vertical flex={1} style={{ paddingRight: "20px" }}>
          <Typography.Title level={3} strong className="title text-center">
            Sign Up
          </Typography.Title>
          <Form 
          onSubmitCapture={handleSubmit}
          layout="vertical" 
          onFinish={handleRegister}
          autoComplete="off">
            <div className="w-full text-[#060606]  font-semibold bg-white my-2.5 border-2 border-bg-stone-500	 rounded-md p-1.5 text-center flex items-center justify-center cursor-pointer">
              {/* <img src={GOOGLE_ICON} className="h-6 mr-2" /> */}
              <p>Sign Up with Google</p>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[0.3px] bg-black/30"></div>
              <p className="text-xs absolute text-black/60 bg-[#ffffff]">
                Or Sign Up with Email
              </p>
            </div>
            <Form.Item
              label="Full Name"
              name="name"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input 
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              size="large" 
              placeholder="Enter your full name" />
            </Form.Item>
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
            <Form.Item
            label="Profile Picture"
            name="profilePic"
            style={{ marginBottom: "10px" }}
            rules={[
              {
                required: true,
                message: "Please upload your profile picture!",
              },
            ]}>
              <Input
              type="file"
              name="profilePic"
              onChange={handleOnChange}
              accept="image/*"
              />
            </Form.Item>

            
            <div className="w-full flex items-start justify-start mt-[-0.15rem]">
              <input type="checkbox" className="w-4 h-4 mr-2 cursor-pointer" />
              <p
                className="text-xs"
                style={{ lineHeight: "1.5", marginTop: "0.1rem" }}
              >
                I agree with the Terms & Conditions
              </p>
            </div>
            <p className="text-xs cursor-pointer underline underline-offset-2 font-medium hover:text-teal-400">
              Forget Password ?
            </p>
            <Form.Item style={{ marginTop: "20px" }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="btn w-full"
              >
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              <div style={{ marginBottom: "12px" }}>
                <Link to="/signin">
                  Already have an account?{" "}
                  <span className="text-teal-400	underline ">Sign In</span>
                </Link>
              </div>
            </Form.Item>
          </Form>
        </Flex>
        {/* Image */}
        <Flex style={{ flex: "0 0 50%" }}>
          <>
            <Form.Item>
              <div className="my-4">
                <img
                  // src={registerImage}
                  className="auth-image h-auto w-full rounded-lg"
                  alt="Register"
                />
              </div>
            </Form.Item>{" "}
          </>
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

export default Register;