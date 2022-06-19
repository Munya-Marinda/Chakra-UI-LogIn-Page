import Login from "../components/login.tsx";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}
