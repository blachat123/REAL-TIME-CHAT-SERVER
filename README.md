# REAL-TIME-CHAT-SERVER
A REAL-TIME CHAT BACKEND USING WEBSOCKETS OR SOCKET.IO WITH SUPPORT FOR MULTIPLE CHAT ROOMS.A NODE.JS BASED SERVER HANDLING REAL-TIME COMMUNICATION


*COMPANY*: CODTECH IT SOLUTIONS
*NAME*: VEERADIMMU MADESH
*INTERN ID*: CT08WX50
*DOMAIN*: BACKEND DEVELOPMENT
*DURATION*: 8 WEEKS
*MENTOR*: NEELA SANTOSH


*DESCRIPTION ABOUT PROJECT*: 

A real-time chat backend allows users to send and receive messages instantly across multiple chat rooms. It uses WebSocket-based communication (via Socket.IO) for bidirectional, event-driven interaction between clients (web/mobile apps) and the server. Node.js handles asynchronous I/O efficiently, making it ideal for real-time applications.

Core Components
a. Node.js Server

    Acts as the backbone for handling HTTP/WebSocket connections.

    Uses Express.js to serve static files (like a frontend) or REST APIs (if needed).

    Initializes a Socket.IO server to manage real-time events.

b. Socket.IO

    A library layered over WebSockets with fallbacks (like HTTP long polling) for broader compatibility.

    Enables rooms (isolated communication channels) and namespaces (for separating use cases).

    Handles events like connection, disconnect, and custom events (e.g., send_message).

c. Chat Rooms

    Purpose: Isolate conversations so messages are only sent to users in the same room.

    Mechanics:

        Users join a room using a unique roomId (e.g., /chat/room-123).

        Messages broadcasted to a room are only received by users in that room.

        Rooms are dynamically created/destroyed as users join/leave.


*OUTPUT*

![Image](https://github.com/user-attachments/assets/aba76cc5-a22a-4457-9aa0-fcefe71b9697)
![Image](https://github.com/user-attachments/assets/efce1c01-c83b-45bc-add2-61fc93ff511b)
![Image](https://github.com/user-attachments/assets/7952fa32-dd06-44c7-a27c-a953700687c8)

d. Message Flow

    Client sends a message: Emits a send_message event with data (e.g., { roomId: 'room-123', text: 'Hello' }).

    Server processes the event: Validates the message and broadcasts it to all clients in room-123.

    Clients receive the message: Listen for receive_message events and render the message in their UI.
