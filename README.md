# String Matching and Cryptography (Caesar Cipher, Bit-Flipping)
This is a simple scenario based application for string matching and cryptography in the case of a publisher, subscriber model. This demonstrates the communication between a publisher and a subscriber model using two different modes of encryption and decryption(Caesar Cipher, Bit-Flipping).
This application is built in the perspective of a turing machine.


# PRE-REQUISITES:

- Node


## How to Run the file:

- Navigate to the project directory and run the below command to install the dependencies in the package.json file.
### npm -i

- Once after the dependencies are installed, we could start the development server either by using node or nodemon.
### nodemon app.js
or 
### node app.js

- Now the local server should be running in the port 3000. Now we should navigate to the browser and type the localhost url.
### http://localhost:3000/

->This should bring up a signin page.
<img width="1440" alt="Screenshot 2023-01-08 at 10 35 03 AM" src="https://user-images.githubusercontent.com/51052614/211181541-6f555292-bf65-4363-8631-e4ec38db4158.png">

- We can use any of the usernames and passwords mentioned below. Here, we use the string matching turing machine for login. Here we are intended to do only string matching, so the passwords here are kept straight and in an unencrypted manner.

### List of usernames and passwords. FORMAT: {"username" : "password"}.

{"nalin":"adminnalin"}, {"karthikeyan":"adminkeyan"},{"karthik":"adminkarthik"},{"eswar":"admineswar"},{"pragadishwaran":"adminpd"}

- Once after login, it should take us to the mode of encryption selection page, where the user can either use one method. 
  
 <img width="1440" alt="Screenshot 2023-01-08 at 10 35 22 AM" src="https://user-images.githubusercontent.com/51052614/211181640-48fe4f41-4e04-461b-a1b2-dd15956dec86.png">

### NOTE: The publisher and the subscriber should be opened parallely, so that once the message is passed from the publisher, it should be reflected in the subscriber side (after refreshing the page).



<img width="1440" alt="Screenshot 2023-01-08 at 10 35 46 AM" src="https://user-images.githubusercontent.com/51052614/211181706-13ed8252-b7f8-45a6-9d72-30b8b501a26a.png">



<img width="1440" alt="Screenshot 2023-01-08 at 10 35 55 AM" src="https://user-images.githubusercontent.com/51052614/211181692-d0db73d2-644c-44c7-a087-1ca7af8e0f41.png">



<img width="1440" alt="Screenshot 2023-01-08 at 10 36 03 AM" src="https://user-images.githubusercontent.com/51052614/211181686-e5646438-ccc6-48f5-881c-6f3cd9f4bb28.png">




