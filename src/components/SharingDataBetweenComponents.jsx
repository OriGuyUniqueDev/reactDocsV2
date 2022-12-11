import MyButton from "./MyButton"

function SharingDataBetweenComponents({num,onClick}) {
    

    return <>
        <div
			className="w-fit"
			onClick={onClick}
		>
            <p className="text-indigo-500 font-bold text-3xl">num in component is: {num}</p>
			<MyButton>Let's Count 🎇</MyButton>
		</div>
    </>
}

export default SharingDataBetweenComponents