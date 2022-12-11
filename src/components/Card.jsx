function Card() {
    const user = {
        img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEth1ftel0HSQ/profile-displayphoto-shrink_200_200/0/1664284451743?e=1676505600&v=beta&t=8RQVsVqD95X9Z4s2A_oGUCVD76DY17J1vSVXdnNZwJ0',
        name:'Ori Guy' ,
        text:'Ori Guy 👋 | Beer Sheva, Israel 📍 | Full Stack Web Development Student 👨‍🎓'
    }
    return <div className="border-2 border-indigo-500 w-96 rounded-lg flex flex-col gap-3 py-6 px-3">
        <img className="rounded-full w-20" src={user.img} alt="image profile" />
        <h2>{user.name}</h2>
        <p>{user.text}</p>
    </div>
}

export default Card