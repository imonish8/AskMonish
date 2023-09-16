import bot from '/Users/imonish8/Desktop/PROGPT/assets/bot.svg';
import user from '/Users/imonish8/Desktop/PROGPT/assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
    element.textContent = '';


    loadInterval = setInterval(() => {
         element.textContent += '.';

     if (element.textContent === '....'){
        element.textContent = '.';
    }
  }  , 300)
}

///writing element to write text in response in one line another.

function typeText(element, text) {
    let index = 0;

    let interval = setInterva;(() => {
        if(index < text.length){
            element.innerHTML += text.charAt(index);
            index++;
            }
            else {
            clearInterval(interval);
        }
    }, 20)
}

///unique id for every single message, idea is to create unique id 
///using current time and random function which build in javascript function.

function generateUniqueId() {
    const timeStamp = Date.now();
    const randomNumber = Math.random();
    const hexaDecimalString = randomNumber.toString(16);

    return `id-${timeStamp}- ${hexaDecimalString}`

    
}

function chatStripe  (isAi, value, uniqueId){
    return (
        `
        <div class = "wrapper ${isAi && 'ai'}>
        <div class="chat>
        <div className ="profile">
        <img
        src="${isAi ? bot : user}"
        alt="${isAi ? 'bot' : 'user'}"
        />
        </div>
        <div class="message" id=${uniqueId}> ${value} </div>
        </div>
        </div>
        `
    )
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    //user's chatStripe
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'));
   
    //loader
    form.reset();
    
    //BOTS CHAT STRIP
     const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId);
    
    ///to put new mesaage in new 
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const messageDiv = document.getElementById(uniqueId);

loader(messageDiv);
 }

form.addEventListener('submit', handleSubmit());
form.addEventListener('keyup', (e) => {
 if(e.keyCode === 13){
    handleSubmit(e);
 }

})

    

