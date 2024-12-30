import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../Authentication/SignUp.module.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';
import { useAuth } from "../Contexts/authContext";
export const Login = () => {
  const [show,setShow]=useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [auth,setAuth]=useAuth()
 const navigate=useNavigate();
  const handleClick=()=>setShow(!show);
  const submitHandler = async (e) => {
    e.preventDefault();
   try {
    const res=await axios.post("https://godrejstorebackend.onrender.com/login",{email,password});
    if(res && res.data.success){
      toast.success(res.data.message);
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token,
      })
      localStorage.setItem('auth',JSON.stringify(res.data))
         navigate('/');
    }else{
      toast.error(res.data.message)
  
    }
   } catch (error) {
    console.log(error);
    toast.error('something went wrong')
   }
  };
  return (
    <div className={`${styles.formLayout}`}>

  
    <VStack spacing="5px"  className={`${styles.mainForm}`}>
   
    <FormControl id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="pwd" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          type={show?"text":"password"}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show?"Hide":"Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button
    colorScheme="blue"
    width={'100%'}
    style={{marginTop:15}}
    onClick={submitHandler}
    >
   Login
    </Button>
    <Button
    colorScheme="blue"
    width={'100%'}
    style={{marginTop:15}}
    onClick={()=>{navigate('/forgot-password')}}
    >
   Forgot Password
    </Button>
    {/* <Button
    variant={'solid'}
    colorScheme="green"
    width={'100%'}
    style={{marginTop:15}}
    onClick={()=>{
      setEmail('guest@example.com');
      setPassword("123456");
    }}
    >
   Login With Guest Credentials
    </Button> */}
  </VStack>
  </div>
  )
}
