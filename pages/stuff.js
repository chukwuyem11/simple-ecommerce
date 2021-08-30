import Head from "next/head";
import Image from "next/image";
import React from "react";
import axios from "axios";


import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input } from "@chakra-ui/react";
import {
  signIn,
  signOut,
  useSession,
  getSession,
  getCsrfToken,
} from "next-auth/client";

import { useRouter } from 'next/router'


export default function Stuff() {
  const [session] = useSession();
  const router = useRouter()

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");


  
console.log(router)
  console.log(session);
const newStr = router.pathname.replace('/', '');

console.log(newStr)

  const postStuff = () => {
    console.log(email)
    console.log(username)
    axios
      .post("/createAdmin", {
        email: email,
        username: username,
       
      })
      .then((response) => {
        console.log(response);
        setEmail("");
        setUsername("");
       
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className={styles.container}>
      <Text
        fontSize={[10, 20, 32]}
        bg="green"
        borderRadius={[3, 6, 9]}
        w={["100%", "80%", "60%"]}
        p={4}
        color="white"
        textAlign={["center", "left", "right"]}
      >
        guy
      </Text>
      <div>
        {!session ? (
          <div>
            {/* <Button onPress={() => signIn("github")}>GitHub Connect</Button> */}
            <Button onClick={signIn} colorScheme="blue" size="sm">
              Sign In
            </Button>
          </div>
        ) : (
          <>
            {/* <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{ width: "25px", borderRadius: "50%" }}
              />
            )} */}
            <Button onClick={signOut} colorScheme="orange" size="sm">
              Sign Out
            </Button>
            <FormControl id="first-name" isRequired>
  <FormLabel>username</FormLabel>
  <Input placeholder="First name" onChange={(e) => setUsername(e.target.value)}
          
          value={username} />
</FormControl>
<FormControl id="email" isRequired>
  <FormLabel>email</FormLabel>
  <Input placeholder="info@email.com" type="email" onChange={(e) => setEmail(e.target.value)}
          
          value={email}/>
</FormControl>
<Button onClick={postStuff}  colorScheme="blue" size="sm">
              Submit
            </Button>
          </>
        )}
      </div>
     
    </div>
  );
}
