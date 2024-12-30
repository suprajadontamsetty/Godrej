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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../Authentication/SignUp.module.css";
import { toast } from "react-toastify";
const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [answer, setAnswer] = useState();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://godrejstorebackend.onrender.com/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className={`${styles.formLayout}`}>
      <VStack spacing="5px" className={`${styles.mainForm}`}>
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="pwd" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="phone" isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            placeholder="Enter your Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
        <FormControl id="answer" isRequired>
          <FormLabel>security</FormLabel>
          <Input
            placeholder="Enter your best friend name"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Submit
        </Button>
      </VStack>
    </div>
  );
};

export default Signup;
