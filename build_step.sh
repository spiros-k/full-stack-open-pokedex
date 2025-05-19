#! /bin/bash

echo "Build script"

git clone https://github.com/spiros-k/full-stack-open-pokedex.git

chmod +rx .

npm install

node app.js