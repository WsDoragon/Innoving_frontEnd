import React from "react";
import { Grid, Card, Text, Button,Link } from "@nextui-org/react";

const Results = () => (
  <div id="results" className="search-results">
    <h1>
      Hola
    </h1>
  </div>
)

function Page3(){
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => {
    if (showResults) {
      setShowResults(false)
    }
    else setShowResults(true)
  }
  return (
    <div >
        <button onClick={onClick}>Click me</button>
        { showResults ? <Results /> : null }
    </div>
  );
}

export default Page3;