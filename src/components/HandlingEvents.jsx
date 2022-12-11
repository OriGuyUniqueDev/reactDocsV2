import MyButton from "./MyButton"
import JSConfetti from 'js-confetti'
import { useState } from "react";

function HandlingEvents() {
    const [show,setShow] = useState(false)
    function blowUp() {
		const jsConfetti = new JSConfetti();
		jsConfetti.addConfetti({
			emojis: ["🧑‍💻", "👨‍💻", "👩‍💻", "⭐", "💡", "❤️"],
			emojiSize: 40,
			confettiNumber: 30,
		});
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }
    return <div className="w-fit" onClick={blowUp}>
        <MyButton>Click 🎇</MyButton>
        {
            show ? <p className="text-red-600 mb-2">You Fired an OnClick Event 🧨🔥</p> : <></>
        }        
        
    </div>

}

export default HandlingEvents 