import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormLabel,
  Card,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Image,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error,setError]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/thankyou");
      setError(false)
    } else {
        setError(true)
    }
    console.log(input);
  };
  const onChange = (e) => {
    const value=e.target.value
    setInput(value);
    const checkEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  setIsValid(checkEmail.test(value))
  };
  
  return (
    <>
      <Card
        margin="auto"
        width={{base:"90%",lg:"50%"}}
        display="grid"
        gridTemplateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}
        borderRadius="25px"
        marginTop={{base:"5%",lg:"7%"}}
      >
        <Box margin="auto" marginLeft="8%" marginTop={{base:"5%",lg:"30%"}}>
          <Heading color="hsl(234, 29%, 20%)">Stay updated!</Heading>
          <Text fontSize='16px' marginTop="15px" color="hsl(235, 18%, 26%)">
            Join 60,000+ product managers receiving monthly updates on:
          </Text>
          <Checkbox
            marginTop="15px"
            color="hsl(235, 18%, 26%)"
            defaultChecked
            colorScheme="orange"
          
          >
            Product discovery and building what matters
          </Checkbox>
          <Checkbox
            marginTop="8px"
            color="hsl(235, 18%, 26%)"
            defaultChecked
            colorScheme="orange"
          >
            Measuring to ensure updates are a success
          </Checkbox>
          <br />
          <Checkbox
            marginTop="8px"
            color="hsl(235, 18%, 26%)"
            defaultChecked
            colorScheme="orange"
          >
            And much more!
          </Checkbox>
          <FormControl marginTop="20px">
            <FormLabel>Email address</FormLabel>
            {error ? <Alert marginTop='15px' marginBottom='15px' status="error">
        <AlertIcon backgroundSize='sm' />
        <AlertTitle fontSize='sm'>Enter Valid Email</AlertTitle>
      </Alert>:""}
            <Input
               w={{base:"90%",lg:"70%"}}
              type="email"
              placeholder="email@company.com"
              value={input}
              onChange={onChange}
              isInvalid={!isValid}
            />
            
          </FormControl>
          <Button
            w={{base:"90%",lg:"70%"}}
            onClick={handleSubmit}
            backgroundColor="hsl(234, 29%, 20%)"
            color="white"
            marginTop="20px"
            _hover={{ backgroundColor: "#ff471a", color: "white" }}
            isDisabled={!input}
          >
            Subscribe to monthly newsletter
          </Button>
        </Box>
        <Box p={{base:"0px",lg:"10px"}} marginTop={{base:"10px"}}>
          <Image
            w={{base:"100%",lg:"100%"}}

            src="./images/illustration-sign-up-desktop.svg"
            alt="image"
          />
        </Box>
      </Card>
    </>
  );
};

export default Signup;
