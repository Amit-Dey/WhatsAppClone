# What's App Clone using Java.

## Follow these simple steps to have your own whatsapp clone

#### 1: Clone this repo using this command 
`git clone https://github.com/Amit-Dey/WhatsAppClone.git`

#### 2: Enter 
`cd WhatsAppClone`

#### 3: Next
`npm install`

#### 4: Goto `src` & Find file named `firebase.js` => Replace the config data to your project config data.

![image](https://user-images.githubusercontent.com/64111533/177619460-ca7cbd36-6f70-499a-adba-326366dc751f.png)

Firebase config data you have to replace it with yours & save.

#### 5: Now, Goto `src` directory again and find file named `.firebasesrc`
![image](https://user-images.githubusercontent.com/64111533/177619592-e87366e4-e1ee-408f-ba47-75077f180c86.png)

Replace the line `"default": "your_project__name"` & save.

#### 6: Hit `npm start` in terminal & Boom you have your own whatsapp clone!!  open at port 3000.




## Set Up Hosting in Firebase

#### 0: intstall firebase cli `npm i firebase-tools`

#### 1: Hit command `firebase init`

#### 2: Enter Yes

#### 3: Goto the 4th option says - "Configure and Deploy firebase Hosting sites", Use Arrow key to go down & Hit spacebar to select the option and then hit Enter key

#### 4: Enter `build` for directory && select `Yes` for all other options.

#### 5: After initialization Completed. Enter 
`npm run build`

#### 6: Now the last command
Enter `firebase deploy`

#### Boom! You have succesfully hosted your firebase app. Click on the link and Enjoy!. Don't forget to rate the repository.
