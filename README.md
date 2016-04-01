# aurelia-london-2016-june
This is a repo for the Aurelia Class in London

## What do you need?

### node 
  * version >= 4 recommended 

    > run <code>node -v</code> to confirm the version
    > download from http://nodejs.org/

### npm 
  * version >= 3 recommended 

    >run <code>npm -v</code> to confirm the version
  * If you have an older version of npm, please update it by running <code>npm update -g npm</code> (if this doesn't work run <code>npm install -g npm</code>) 
  
### git tools 
  * download from http://git-scm.com
  
### jspm 
  * Install it by running <code>npm install –g jspm</code>
  * Configure it by running jspm registry config github

    >You will need a github.com user in order to do this. 
      
### http-server 
  * Install by running <code>npm install –g http-server</code>

## How to get started

### Create a new folder and change to it
  * mkdir <folder>
  * cd <folder>

### Initialize npm in that folder
  * Run <code>npm init</code> and accept all the default values

### Initialize jspm in that folder
  * Run <code>jspm init</code> and accept all the default values

### Install the Aurelia packages
  * <code>jspm install aurelia-framework</code>
  * <code>jspm install aurelia-router</code>
  * <code>jspm install aurelia-bootstrapper</code>
