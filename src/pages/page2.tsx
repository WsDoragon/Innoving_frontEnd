import React, { Component } from "react";
import { Grid, Navbar, Button, Link, Text, Card } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Header from "./test_pages/Header_test";
import { text } from "stream/consumers";

const Results = () => (
    <div id="results" className="search-results">
      <h1>
        Hola
      </h1>
    </div>
  )

function Analista(){
    const navigate = useNavigate();
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => {
        if (showResults) {
        setShowResults(false)
        }
        else setShowResults(true)
    }
    return(
        <Grid.Container gap={2} justify="center">
            <Header/>

            <Grid xs={12}>
                <Navbar variant="sticky">
                    <Navbar.Content variant="highlight" hideIn="xs">
                        <Navbar.Item>
                            <Button onClick={onClick} auto flat as={Link} href="#"> Indicadores </Button>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button auto flat as={Link} href="#">Solicitudes</Button>
                        </Navbar.Item>
                    </Navbar.Content>
                </Navbar>
            </Grid>

            {  showResults ? <Results /> : null }

        </Grid.Container>
    );
}

export default Analista;