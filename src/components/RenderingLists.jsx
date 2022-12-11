function RenderingLists() {
	const groceryList = [
		{ id: 1, item: "🍔", q: "1" },
		{ id: 2, item: "🍕", q: "3" },
		{ id: 3, item: "🍇", q: "5" },
		{ id: 4, item: "🍟", q: "2" },
		{ id: 5, item: "🌭", q: "2" },
		{ id: 6, item: "🥞", q: "4" },
		{ id: 7, item: "🍳", q: "2" },
		{ id: 8, item: "🫓", q: "20" },
		{ id: 9, item: "🍩", q: "7" },
	];

	return (
		<>
			{groceryList.map((itemInList) => (
				<p key={itemInList.id}>
					Buy: {itemInList.item} | Quantity: {itemInList.q}
				</p>
			))}
		</>
	);
}

export default RenderingLists;
