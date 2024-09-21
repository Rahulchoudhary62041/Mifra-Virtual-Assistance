let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak (text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hour=day.getHours()
    if(hour>=0 && hour<12){
        speak ("Good Morning Sir")
    }
    else if (hour>=12 && hours <4){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }

}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= Window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("heelo sir,what can i help you?")
    }
    else if (message.includes("who are you")){
        speak("i am virtual assistance , created by rahul choudhary")
    }else if (message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","blank")
    }
    else if (message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","blank")
    }
    else if (message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","blank")
    }
    else if (message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","blank")
    }
    else if (message.includes("open linkdin")){
        speak("opening linkdin...")
        window.open("https://linkdin.com/","blank")
    }
    else if (message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if (message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
        
    }
    else{
        let finalText="this is what i found on internet regarding"+message.replace("mifra","") ||message.replace("mipra","")
        speak(finalText)
        window.open('https://www.goole.com/search?q=${message.replace("shipra","")}' ,"blank")
    }
}