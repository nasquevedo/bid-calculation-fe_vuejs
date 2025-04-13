# The bid Calculation - Frontend Vuejs

This is a short project to calculate the vehicle price according to its vehicle base price and type, it consumes a REST API to get the information 

## Setting up
- node18.19
- npm10.9

First, clone the repository.\

```sh
git clone https://github.com/nasquevedo/bid-calculation-fe_vuejs.git
```

Once the repository was cloned, create the image and container by running docker compose.\

Create the .env file based on .env.local ```cp .env.local .env```

```sh
docker-compose up -d --build
````

Finally, visit [http://localhost:8080](HTTP://localhost:8080)

### Testing

To execute the tests, run the next command
```sh
npm run test:unit
```
