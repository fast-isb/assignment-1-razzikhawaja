import React from "react";
import { Navbar, Button, Link, Text,Grid } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import ContentCard from "./ContentCard.jsx"

export default function App() {
  
  
  return (
    <>
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            App
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">View Houses</Navbar.Link>
          <Navbar.Link isActive href="#">Add House</Navbar.Link>
          
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
        
    </Layout>
    <Grid.Container gap={10}>
      <ContentCard></ContentCard>

    </Grid.Container>
    </>
  )
}
