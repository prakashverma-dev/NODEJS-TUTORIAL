
// <!-- To use socket here  -->

//    function createWSConnection(){
       
//         const socket = io();
//    }


// <!-- //We want as soon as window loads, a WS Connection gets loads -- -->

// Note : Once we load the socket-client-io i.e <script src="/socket.io/socket.io.js"></script> , then It exposes an io global function/method and then once we invoke this io function, socket-client connected with socket-server -

   const socket = io();

   //For taking user name -
   let userName ;
   do{

    userName = prompt("Enter a nickname");
    
   }while(!userName);


   //Handling User Input Text Area -
   const inputText = document.querySelector("#inputText");

   inputText.addEventListener('keyup', (e)=>{

        if(e.key ==='Enter'){

            sendMessage(e.target.value)
        }
        
   })







   const sendBtn = document.getElementById("sendBtn");
   const messageInput = document.getElementById("inputMsg");

   sendBtn.addEventListener('click', ()=>{

       // const msg = messageInput.value ;
       // console.log(messageInput.value);

       //Sending this msg to socket server -
       socket.emit("sendTextToServer", messageInput.value ); //we named our event name as 'sendText' //now catch at socket server with .on() method.

       messageInput.value="" ;
       
   });


   //Now, Receiving all message from server to available to all client users -
   socket.on('sendTextToALLClients', (allMsg)=>{

           // console.log(allMsg); //We will print this message on frontend UI.
           // const allMsg = document.getElementById('allMsg');
           const p = document.createElement('li');

           p.innerText = allMsg;

           document.getElementById('allMsg').appendChild(p);
          

           
       })


 
