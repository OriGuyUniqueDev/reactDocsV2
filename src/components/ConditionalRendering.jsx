import { useState } from "react"
import MyButton from "./MyButton"

function Hamburger() {
    return <>
        <p>🍔</p>
    </>
}
function Pizza() {
    return <>
        <p>🍕</p>
    </>
}


function ConditionalRendering() {
    const [food,setFood] = useState(false)
    return <>
    <span onClick={() => setFood(!food)}>
        <MyButton>Click to Change Food</MyButton>
    </span>
    <p className="text-4xl">{food ? <Pizza /> : <Hamburger />}</p>

    </>
}

export default ConditionalRendering