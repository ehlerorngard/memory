import React from "react";
import MemoryCards from "./pages/Memory";
import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
	<div>
	   <Nav />
	  	<MemoryCards />
	</div>
);

export default App;