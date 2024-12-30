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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Forgotpassword = () => {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState();
  const [email, setEmail] = useState();
  const [newpassword, setnewPassword] = useState();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://godrejstorebackend.onrender.com/forgot-password", {
        email,
        newpassword,
        answer,
      });
      console.log("oi",email,newpassword,answer);
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("hi something went wrong");
    }
  };
  return (
    <div className={`${styles.formLayout}`}>
        
      <VStack spacing="5px" className={`${styles.mainForm}`}>
      <h2>Reset Password</h2>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormControl>
        <FormControl id="pwd" isRequired>
          <FormLabel>New Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your Password"
              onChange={(e) => setnewPassword(e.target.value)}
              value={newpassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="secretanswer" isRequired>
          <FormLabel>secret answer</FormLabel>
          <Input
            placeholder="Enter your secret anwer"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Reset
        </Button>
      </VStack>
    </div>
  );
};
