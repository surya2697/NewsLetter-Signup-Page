import React from "react";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Thankyou = () => {
    const navigate=useNavigate()
  return (
    <>
      <Card margin="auto" width={{base:"70%",lg:"20%"}} borderRadius="25px" marginTop={{base:"50%",lg:"14%"}}>
        <Box margin="auto" marginLeft="8%" p="10px">
          <Image width="15%" src="./images/icon-success.svg" alt="success" />
          <Heading color="hsl(234, 29%, 20%)" marginTop="15px">
            {" "}
            Thanks for subscribing!
          </Heading>
          <Text fontSize={{base:"13px",lg:"16px"}} marginTop="15px" color="hsl(235, 18%, 26%)">
            A confirmation email has been sent to ash@loremcompany.com. Please
            open it and click the button inside to confirm your subscription.
          </Text>

          <Button
            w="90%"
            backgroundColor="hsl(234, 29%, 20%)"
            color="white"
            marginTop="20px"
            _hover={{ backgroundColor: "#ff471a", color: "white" }}
            onClick={()=>navigate('/')}
          >
            Dismiss message
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Thankyou;
