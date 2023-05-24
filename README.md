# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Follow these steps to get the ElectronJS App Runing properly

### Step 1

### `npm install` 

This will install all the respective dependencies in the `package.json`


### Step 2

#### Running Scripts

Open the terminal and run: 

### `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Step 3

Open a new terminal in VSCode and then run:
### `npm run elec-start`

This will run the ElectronJS App natively on your laptop. The app is bootstrapped to [http://localhost:3000](http://localhost:3000) so you need to have both of these running for the app to work (This is how Discord and Slack work btw). Also you probably want to open a third last terminal just to install any new dependencies etc

### Step 4

Create your own `.env` file with the respective API keys so that when we push to GitHub it isn't revealed. 

# IMPORTANT

Create your own branch if you are working on it don't push directly to main branch or it will mess it up


## FILES

- `index.js` managing the routing system/what is being displayed
- `electron.js` is in the `public` directory and is handling displaying the ElectronJS app
- `App.js` is in the `src` directory and is displaying the start page info (eg. Start your day right page)
- `Main.js` is in the `src/screens` directory and is the main page with the text editor and the AI assistant and is in 




