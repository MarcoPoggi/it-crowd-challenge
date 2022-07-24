# IT CROWD Challenge

## Deployment ☁️
Backend: [Heroku](https://itcrowd-ch.herokuapp.com/api/products)  

Frontend: [Vercel](https://it-crowd-challenge-marcopoggi.vercel.app/products)  

Database: ElephantSQL(private)

## Backend 🥷🏻
**Libraries:**
 - [cors](https://www.npmjs.com/package/cors): Simplifies the way of handling everything related to access control, header configuration, etc.
 - [dotenv](https://www.npmjs.com/package/dotenv): To load environment variables from an .env file.
 - [express](https://expressjs.com/): To create the api and start our server, although it could be done with the node http module, it is much simpler to use this framework.
 - [jsonwebtoken(JWT)](https://www.npmjs.com/package/jsonwebtoken): used for authentication.
 - [pg, pg-hstore, sequelize](https://sequelize.org/): libraries in order to be able to use postgreSQL and sequelize.

**Brief description:**
The **backend**(developed with express) connects to the postgre **database**, then through a `json file`, which contains false data from different products, the database is initialized. Through the defined endpoints you can **create**, **update**, **read** and **delete** the products. In addition, certain actions are restricted (**authentication** will be required).

**Endpoints:**  

🟩 **`GET`**

 - `/products`: returns as response an array with all the products in the database
 - `/products/:id`: returns an object with the product information as a response
 - `/brands`: returns as response an array with all the brands in the database

🟨 **`POST`**
Authetication token is required:

    Headers: {'Authorization':'Bearer ...token'}

 - `/products`: receives by body the data of the product and the brand. Return the product created.
 ```json
 //example body
 {
	"product": {
		"name": "BMX Bike",
		"description": "BMX bike. red color, shot 26",
		"image_url": "https://hambike.com.ar/wp-content/uploads/2020/11/image-6.jpg",
		"price": 89000
	},
	"brand": {
		"name": "Kawasaki",
		"logo_url": "https://img.remediosdigitales.com/633515/hi_brand_symbol_kawasaki_vertical_black_rgb/450_1000.jpeg"
	}
}
```
 - `/auth`: receives by body a user and password. returns a token if the information is valid
  ```json
 //example body
{
	"username":"root",
	"password":"root"
}
```
 - `/auth/confirm`: receives the token by header and validates it. determining if it expires or not.  

🟦 **`PUT`**  

Authetication token is required:

    Headers: {'Authorization':'Bearer ...token'}

 - `/products`: receives by body the id of the product to update, the product data and the brand data (optional)  
```json
 //example body
	{
	"id":"e229cda0-e039-4f63-9e87-a2ac0eb5b2fa",
	"dataProduct": {
		"name": "Roller",
		"description": "Roller para adultos, para practicar.",
		"image_url": "https://mercadoamil.com.ar/wp-content/uploads/2021/02/IMG_0623-scaled.jpg",
		"price": 7000
	},
	//OPTIONAL
	,
	"dataBrand": {
		"name": "Adidas",
		"logo_url": "https://pbs.twimg.com/profile_images/1387737810338304001/Y0mLwcDF_400x400.jpg"
	}
	
}
```  

🟥 DELETE  
 Authetication token is required:

    Headers: {'Authorization':'Bearer ...token'}
 - `/products`: receives by body the id of the product to be removed
 ```json
{
	"id":"e229cda0-e039-4f63-9e87-a2ac0eb5b2fa"
}
```
