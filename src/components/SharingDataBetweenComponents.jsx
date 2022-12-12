import MyButton from "./MyButton"

function SharingDataBetweenComponents({num,changeNum}) {
    

    return <>
        <div
			className="w-fit"
			onClick={changeNum}
		>
            <p className="mb-3">num in component is: {num}</p>
			<MyButton>Let's Count 🎇</MyButton>
		</div>
    </>
}

export default SharingDataBetweenComponents