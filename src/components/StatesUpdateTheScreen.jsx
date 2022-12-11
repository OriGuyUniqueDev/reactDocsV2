import { useState } from "react";
import MyButton from "./MyButton";

function StatesUpdateTheScreen() {
	const [count, setCount] = useState(0);

	function letsCount() {
		setCount(count + 1 );
	}

	return (
		<div
			className="w-fit"
			onClick={letsCount}
		>
            <p className="text-indigo-500 font-bold text-3xl">{count}</p>
			<MyButton>Let's Count 🎇</MyButton>
		</div>
	);
}

export default StatesUpdateTheScreen;
