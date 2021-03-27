## Backwards Clock

- [Description](#description)
- [Technologies](#Technologies)

### Description

This is an app that allows you travel back in time. Click [here](https://thngkia.github.io/backwards-clock/) to view the application.

To run the application using docker:

1. Pull the image from docker hub using the command

```
$ docker pull thngkia/backwards-clock
```

2. run the docker image in localhost:80

```
$ docker run -d -p 80:80 thngkia/backwards-clock
```

3. View on browser

To run the unit test,

1. clone the git repo into a new directory

```
$ git clone git@github.com:Thngkia/backwards-clock.git
```

2. cd into backwards-clock and then install node modules

```
$ npm install
```

3. run tests

```
$ npm run test
```

### Technologies

HTML, JavaScript

Libraries: Bootstrap, Jest, Docker
