Setup the node package manager.  Run in the root project folder
  // command to enter
	npm init

Instal Node Packages:
	$ npm install babel-cli -D
	$ npm install babel-preset-env -D
	
Add .babelrc file to the project folder
	touch .babelrc

Put into the .babelrc file
	echo {"presets": ["env"]} >> .babelrc

Add build to "package.json"
{
  "name": "learn-javascript-transpilation-bct-npm-init",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-env": "^1.5.2"
  }
}

Transpile code using the command:
	npm run build
