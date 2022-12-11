import reactLogo from "./assets/react.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Card from "./components/Card";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {
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
					<p>go to <code>./src/App.jsx</code> line 35 and try to duplicate, Component are reuseable! </p>
				</div>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Displaying data</h2>
					<p>To display dynamic data we can use <code>curly bracelets </code></p>
					<Card />
					<p>go to <code>./src/components/Card.jsx</code> to see how to enter dynamic data </p>
				</div>
				<div className="mainContainer flex flex-col gap-3 ">
					<h2 className="text-2xl underline decoration-indigo-500">Conditional Rendering</h2>
					<p>In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code.</p>
					<ConditionalRendering />
					<p>go to <code>./src/components/ConditionalRendering.jsx</code> to see how the ternary if works to display the data</p>
				</div>
			</div>
		</div>
	);
}

export default App;
