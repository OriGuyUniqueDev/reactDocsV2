import reactLogo from "./assets/react.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Card from "./components/Card";
import ConditionalRendering from "./components/ConditionalRendering";
import RenderingLists from "./components/RenderingLists";
import HandlingEvents from "./components/HandlingEvents";
import StatesUpdateTheScreen from "./components/StatesUpdateTheScreen";
import SharingDataBetweenComponents from "./components/SharingDataBetweenComponents";
import { useState } from "react";

function App() {
	const [num,setNum] = useState(0)

	function updateNum() {
		setNum(num + 1)
	}

	return (
		<div className="App text-start mx-6 my-12 flex flex-col gap-3">
			<div className="flex">
				<a
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src="/vite.svg"
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://reactjs.org"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>React Docs V2</h1>
			<div className="mainContainer flex flex-col gap-10 mt-8">
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Creating and nesting components</h2>
					<p>React components are JavaScript functions that return markup</p>
					<MyButton>Im Button Component</MyButton>
					<p>
						go to <code>./src/App.jsx</code> line 48 and try to duplicate, Component are reuseable!{" "}
					</p>
				</div>
				<hr></hr>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Displaying data</h2>
					<p>
						To display dynamic data we can use <code>curly bracelets </code>
					</p>
					<Card />
					<p>
						go to <code>./src/components/Card.jsx</code> to see how to enter dynamic data{" "}
					</p>
				</div>
				<hr></hr>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Conditional Rendering</h2>
					<p>In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code.</p>
					<ConditionalRendering />
					<p>
						go to <code>./src/components/ConditionalRendering.jsx</code> to see how the ternary if works to display the data
					</p>
				</div>
				<hr></hr>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Rendering List (Arrays)</h2>
					<p>
						In many cases we will want to render a list of card of items from an array, We can use <code>Array.map()</code> to render the items inside the array, the map will return a new array with <code>JSX elements</code> and render it to the DOM
					</p>
					<RenderingLists />
					<p>
						go to <code>./src/components/RenderingList.jsx</code> to see how the <code>Array.map()</code> works
					</p>
				</div>
				<hr></hr>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Handling Events</h2>
					<p>
						In react we use camelCase to use react events for example <code>onClick="{"{myFunction}"}"</code> react will generate the handler for us
					</p>
					<HandlingEvents />
					<p>
						go to <code>./src/components/HandlingEvents.jsx</code> to see how the events works
					</p>
				</div>
				<hr></hr>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">SetState - Control State </h2>
					<p>
						In our apps we often want the component to remember data (state),for example how many items are in a cart, for this we use useState - it returns an array [0,1] - "0" - the original data, "1" - sets the new value, we work <strong>Only With "1"</strong>
					</p>
					<StatesUpdateTheScreen />
					<p>
						go to <code>./src/components/StatesUpdateTheScreen.jsx</code> to see how the setState works
					</p>
				</div>
				<hr></hr>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Sharing Data Between Components </h2>
					<p>In our apps we often want share data between components so how do we do it ? lets imagine a tree of components</p>
					<p>The top is the Root (App)</p>
					<p>all other components are nested inside of it (Card, MyButton...)</p>
					<p>if we want to share data all we need to do is to move the data from the lower branch (Card, MyButton...) to the higher branch in out example is the root (App)</p>
					<p>num in App: {num}</p>
					<SharingDataBetweenComponents num={num} changeNum={updateNum}></SharingDataBetweenComponents>
					<p>
						go to <code>./src/components/SharingDataBetweenComponents.jsx</code> to see how the setState works
					</p>
				</div>
				<hr></hr>
			</div>
		</div>
	);
}

export default App;
