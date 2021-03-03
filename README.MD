# Transfer Link Exercise

The project makes use of Cypress as the automation framework of choice.

The feature file for this exercise can be found at `cypress/integration/upload.feature`.

The files uploaded are stored as fixtures at `cypress/fixtures/`.

The project makes use of `mochawesome reports` which are stored at `cypress\report`. Along with these reports, videos and screenshots are saved at `cypress\videos` and `cypress\screenshots` respectively.

The project also uses `dotenv` for development so it is wise to use a `.env` file at the root. The format is as follows,
``` .env
RECEIVER_EMAIL=john@doe.com
SENDER_EMAIL=jane@doe.com
SENDER_MESSAGE=Hi! John, check this out!
```


To install all the dependencies,
``` 
npm i
```

To run the tests,
```
npm run test
```

A CI version has been built with a Makefile and using a Docker image.

To build the Docker image,
```
make build
```

To run the tests using the image built,
```
ENV_FILE=<PATH_TO_ENV_FILE> make run
```

`ENV_FILE` is the file that will hold the environment variables used during the tests which also holds the information that is entered during the test. Fixtures could have been used for this purpose, but I used ENV to give the exercise some flexibility. The previously created `.env` file can be easily used here.

Docker run caveat: Image has known memory leak issue which causes the browser to crash, a re-run should solve it.
