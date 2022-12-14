import MyButton from "./MyButton"
import JSConfetti from 'js-confetti'
import { useState } from "react";

function HandlingEvents() {
    const [show,setShow] = useState(false)
    function blowUp() {
		const jsConfetti = new JSConfetti();
		jsConfetti.addConfetti({
			emojis: ["๐งโ๐ป", "๐จโ๐ป", "๐ฉโ๐ป", "โญ", "๐ก", "โค๏ธ"],
			emojiSize: 40,
			confettiNumber: 30,
		});
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }
    return <div className="w-fit" onClick={blowUp}>
        <MyButton>Click ๐</MyButton>
        {
            show ? <p className="text-red-600 mb-2">You Fired an OnClick Event ๐งจ๐ฅ</p> : <></>
        }        
        
    </div>

}

export default HandlingEvents 