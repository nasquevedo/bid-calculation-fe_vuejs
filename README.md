# The bid Calculation - Frontend Vuejs

This is a short project to calculate the vehicle price according to its vehicle base price and type, It consumes a REST API to get the information 

The API has two routes:<br>
```vehicle/types``` <br>
This route obtains the types on the database; by default, it gets two:
- Common
- Luxury

```/price```<br>
This route gets the total price, including the vehicle type, base price, each fee, and total fees. it recevies to parameters by [GET]
- price: vehicle base price
- type: vehicle type

### note
The project must be running on Windows 

## Setting up
- node18.19
- npm10.9

First, clone the repository.

```sh
git clone https://github.com/nasquevedo/bid-calculation-fe_vuejs.git
```

move to the project folder ```cd bid-calculation-fe_vuejs```

Create the .env file based on .env.local ```cp .env.local .env```

Install dependencies
```sh
npm install
```

Then, run the app 
```sh
npm run dev
```

Finally, visit [http://localhost:5173](http://localhost:5173)

or using docker-compose

```sh
docker-compose up -d --build
```

And visiting [http://localhost:8080](http://localhost:8080)

### Testing

To execute the tests, run the next command
```sh
npm run test:unit
```
