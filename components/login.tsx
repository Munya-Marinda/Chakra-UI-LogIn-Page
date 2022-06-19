import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";

// Logo Component Starts

const Logo = () => {
  return (
    <Flex position="relative">
      <Box position="relative" w="70px" top={-1}>
        <Box
          position="absolute"
          left="6"
          top={6}
          h={12}
          w={12}
          rounded="full"
          backgroundColor="#BFD4E9"
        ></Box>
        <Box
          zIndex="2"
          position="absolute"
          left={2}
          h={10}
          w={10}
          rounded="full"
          backgroundColor="#063668"
        ></Box>
        <Box
          zIndex={999}
          position="absolute"
          right="2"
          top="-1"
          h={6}
          w={6}
          rounded="full"
          backgroundColor="#DD1515"
        ></Box>
      </Box>
      <Heading color="blue.800">
        Elite{" "}
        <Text pl={4} fontSize={15}>
          Cleaning
        </Text>
      </Heading>
    </Flex>
  );
};

const LogoEnlarge = () => {
  return (
    <Flex position="relative">
      <Box position="relative" w="140px" top={-1}>
        <Box
          position="absolute"
          left="12"
          top={12}
          h={24}
          w={24}
          rounded="full"
          backgroundColor="#BFD4E9"
        ></Box>

        <Box
          zIndex="2"
          position="absolute"
          left={6}
          h={20}
          w={20}
          rounded="full"
          backgroundColor="#063668"
        ></Box>
        <Box
          zIndex={999}
          position="absolute"
          right="2"
          top="-4"
          h={12}
          w={12}
          rounded="full"
          backgroundColor="#DD1515"
        ></Box>
      </Box>
      <Heading fontSize={60} color="blue.800">
        Elite{" "}
        <Text pl={4} fontSize={30}>
          Cleaning
        </Text>
      </Heading>
    </Flex>
  );
};

// Logo Component Ends

const Login = () => {
  const [thisPassword, setThisPassword] = useState<string>("null");
  const [thisEmail, setThisEmail] = useState<string>("null@null.com");

  return (
    <Flex
      margin="auto"
      alignSelf="center"
      h={{ base: "auto", md: "100vh" }}
      w="110vw"
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* --- Left side of page --- */}

      <Stack
        alignItems="center"
        justifyContent="center"
        w={{ base: "110vw", md: "50vw" }}
        p={{ base: "25px", md: "0px" }}
      >
        <Box
          position={{ base: "static", md: "absolute" }}
          left={{ base: "0", md: "20px" }}
          top={{ base: "0", md: "35px" }}
          m={{ base: "50px", md: "0px" }}
          mb={{ base: "100px", md: "0px" }}
          borderRadius="65px"
        >
          <Box display={{ base: "block", md: "none" }}>
            <LogoEnlarge />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Logo />
          </Box>
        </Box>

        {/* -- Login Component */}

        <Stack w="450px" h="500px" p="10">
          <Stack spacing="8">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading
                textAlign="left"
                fontSize={useBreakpointValue({ base: "40", md: "60" })}
              >
                Log in
              </Heading>
            </Stack>
            <Box borderWidth="0px">
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      isRequired={true}
                      id="email"
                      type="email"
                      borderBottomWidth="2px"
                      placeholder="example@example.com"
                      variant="flushed"
                      onChange={(event) => {
                        setThisEmail(event.target.value);
                      }}
                    />
                    <Stack>
                      <HStack justifyContent="space-between">
                        <FormLabel htmlFor="password" mt="4">
                          Password
                        </FormLabel>
                        <Button variant="link" colorScheme="blue" size="sm">
                          Forgot password?
                        </Button>
                      </HStack>
                      <Input
                        isRequired={true}
                        id="password"
                        type="password"
                        borderBottomWidth="2px"
                        placeholder="Enter your password"
                        variant="flushed"
                        onChange={(event) => {
                          setThisPassword(event.target.value);
                        }}
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Checkbox defaultIsChecked>Remember me</Checkbox>
                <Stack spacing="6">
                  <Button
                    variant="primary"
                    color="white"
                    bgColor="#2a4365"
                    borderLeftRadius="0"
                    borderBottomLeftRadius="55"
                    borderRightRadius="50"
                  >
                    Log In
                  </Button>
                  <HStack spacing="1" justify="center">
                    <Text color="muted">Don't have an account?</Text>
                    <Button variant="link" colorScheme="blue">
                      Sign up
                    </Button>
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* Right: Login Illustration */}
      <Stack
        backgroundImage="/log-in-right-bg-illustration.svg"
        backgroundSize="cover"
        alignItems="center"
        justifyContent="center"
        w={{ base: "110vw", md: "50vw" }}
        p={{ base: "25px", md: "0px" }}
        mt={{ base: "25px", md: "0px" }}
      >
        <Image
          src="/log-in-illustration.svg"
          w={{ base: "95vw", sm: "60%" }}
          // display={{ base: "none", sm: "block" }}
        />
      </Stack>
    </Flex>
  );
};

export default Login;
