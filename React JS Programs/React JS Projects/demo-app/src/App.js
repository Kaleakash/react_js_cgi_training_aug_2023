import React from "react";
import Operation from "./Operation";
function WithoutJSX() {
  let ptag = React.createElement("p",{},"This is p tag contents");
  return React.createElement("div",{},ptag);

}
function WithJSX() {
  return <div>This is component with JSX</div>
}

function Header() {
  return <div>This is header component</div>
}

function Footer() {
  return <div>This is footer component</div>
}

function App() {
 return(
<>
 <Header></Header>
 <WithoutJSX></WithoutJSX>
 <WithJSX></WithJSX>
 <Operation></Operation>
 <p>Welcome to React JS</p>
 <span>This is simple span tag</span>
 <Footer></Footer>
 </>
 );

}

export default App;
