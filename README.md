# Requirements
1. [Docker Toolbox](https://www.docker.com/docker-toolbox)

# Getting Started
### Setup your docker virtual machine
* Create the virtual machine to run docker. The command below will create a VM called default
```
docker-machine create
```
* Setup shell to work with docker machine
```
eval "$(docker-machine env default)"
```
* Start all the docker containers
```
docker-compose up
```
* Grab the IP of the created VM
```
docker-machine ip default
```
### Composer Install
Ensure that the IP for the MySQL host in src/main/java/resources/application.properties is the same as the Docker VM
```
docker-compose run composer install
```
### Build Client Side App
To build the front end assets you can run the following
```
docker-compose run npm npm run build
```