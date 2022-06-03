import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from '../assets/memm.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from '../utils/APIRoutes.js'

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="who">
           
            <h1>iChat.v2</h1>
          </div>
          <input 
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input 
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button className ='login' type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
 
  .who {
    display: flex;
    align-items: center;
  
    justify-content: center;
    	
	background-image: linear-gradient(
	  -225deg,
    rgb(35, 21, 87) 0%,
	  rgb(68, 16, 122) 29%,
	  rgb(255, 19, 74) 67%,
	  rgb(255, 248, 0) 100%
	);
	background-size: auto auto;
	background-clip: border-box;
	background-size: 200% auto;
	color: #fff;
	background-clip: text;
  font-family: 'Comfortaa', cursive;
  font-weight: 400;
  font-size: 27px;
	text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: textclip 4s linear infinite;
  @keyframes textclip {
	to {
	  background-position: 200% center;
	}
  }
  img {
      height: 5rem;
    }
  }
  .login {
    cursor: pointer;
	
  color: rgb(255, 255, 255);
    
    padding-top: 2px;
   
     
    background-image: linear-gradient(
    -225deg,
    #2ec118 100%,
    #aca8b1 29%,
    #e4ced5a7 67%,
    #48ff00 100%
    );
    
      border-bottom: 2px solid rgba(102, 124, 162, 0);
    border-top: 2px solid rgba(102, 124, 162, 0);
    border-left: 2px solid rgba(102, 124, 162, 0);
    border-right: 2px solid rgba(102, 124, 162, 0);
      border-radius: 8px;
    
    font-size: 19px;
   
    font-weight:300;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
    color: white;

	border-top: 2px solid #3249714a;
	border-bottom: 2px solid #3249714a;
	border-left: 2px solid #3249714a;
	border-right: 2px solid #3249714a;
	
	
	border-radius: 8px;
	background-image: linear-gradient(to right, var(--tw-gradient-stops));
	--tw-gradient-from: rgba(236, 72, 154, 0.839);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(236, 72, 153, 0));
	--tw-gradient-to: #da8e0c;
	--tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
  }
  input {
    background-color: rgba(24, 24, 27, 0.5);
    padding: 1rem;
    border: 1.5px solid transparent;
    border-image: linear-gradient( #d53a9d, #ff9705);
    border-image-slice: 1;
   
    
    
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      border-radius: 3px;
      outline: none;

    }
  }
  button {
    cursor: pointer;
	
  color: rgb(255, 255, 255);
    padding-top: 2px;
   
     
    background-image: linear-gradient(
    -225deg,
    #2ec118 100%,
    #aca8b1 29%,
    #e4ced5a7 67%,
    #48ff00 100%
    );
    
      border-bottom: 2px solid rgba(102, 124, 162, 0);
    border-top: 2px solid rgba(102, 124, 162, 0);
    border-left: 2px solid rgba(102, 124, 162, 0);
    border-right: 2px solid rgba(102, 124, 162, 0);
      border-radius: 8px;
    
    font-size: 19px;
   
    font-weight:300;
    
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
   
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
