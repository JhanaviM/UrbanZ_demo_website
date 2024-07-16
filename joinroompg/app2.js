document.getElementById("createRoomBtn").addEventListener("click", function() {
    const roomCode = generateRoomCode();
    document.getElementById("roomCode").innerText = "Room Code: " + roomCode;
    document.getElementById("copyCodeBtn").style.display = "inline-block";
  });
  
  document.getElementById("joinRoomBtn").addEventListener("click", function() {

    window.location.href = "../public/index.html"; 
  });
  
  document.getElementById("copyCodeBtn").addEventListener("click", function() {
    const roomCode = document.getElementById("roomCode").innerText.replace("Room Code: ", "");
    copyToClipboard(roomCode);
    alert("Room code copied to clipboard!");
  });
  
  function generateRoomCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }
  
  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }