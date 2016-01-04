# Quiz with AngularJS
Simple quiz app with [angular.js](https://angularjs.org/)

### 1.1. Installing [Node.js](https://nodejs.org/en/) via [nvm (Node Version Manager)](https://github.com/creationix/nvm) on Ubuntu Linux.
##### Installing [NVM](https://github.com/creationix/nvm)
```
sudo apt-get install git git-core curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
or Wget:
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
##### Append the NVM path in ~/.bashrc
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```
##### Load ~/.bashrc and Check if NVM successfully installed.
```
source ~/.bashrc
nvm
```
##### Installing [Node.js](https://nodejs.org/en/) and Set default version
```
nvm install 5.3.0
nvm alias default 5.3.0
node --version
nvm list
```
### 2. Setup Gulp Connect Server
```
npm install -g gulp
npm install --save-dev gulp
npm install --save-dev gulp-util
npm install --save-dev gulp-connect
```
### 3. Run Gulp Connect Server
```
gulp
```
http://localhost:8080