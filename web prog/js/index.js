// const fs = require('fs');



const  output = document.getElementById('chat-content');

// function loadJsonSync(filePath) {
//     const data = fs.readFileSync(filePath, 'utf-8');
//     return JSON.parse(data);
// }

// function saveJsonSync(filePath, jsonData) {
//     const jsonString = JSON.stringify(jsonData, null, 2);
//     fs.writeFileSync(filePath, jsonString, 'utf-8');
// }


// function save_new_data(userinput){
//     saveJsonSync('..//database/responses.json', userinput);
// }

function toggleDropdown() {
    var dropdown = document.getElementById("main_nav");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown if clicked outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("main_nav");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}





document.getElementById('userint').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('submit').click();
        document.getElementById('userint').value = '';
    }
});

function scrollToBottom(){
    var chatContainer = document.getElementById('main-container');
    chatContainer.scrollTop =chatContainer.scrollHeight;
}


function displayUserINput(){
    const userinput = document.getElementById('userint');
    var user = userinput.value;

    // var messageElement = document.getElementById('main-container');
    const messageContainer = document.getElementById('chat-content');
    let newMessage = document.createElement('div');
    newMessage.className = 'userInputData';
    newMessage.textContent = user;

    
    messageContainer.appendChild(newMessage);
    // save_new_data(newMessage);


    scrollToBottom();
    console.log(user)
}
