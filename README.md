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

## Frontend 🌈   
**Libraries:**
 - [react](https://es.reactjs.org/): to create the different interfaces in a simple and composable way.
 - [wouter](https://github.com/molefrog/wouter): to obtain a fairly simple SPA, it is similar to react router, but it occupies less space, and for this challenge it was more than enough.


**Brief description:**
The **client** consumes from the **backend** the products stored in the database. You can see in the `/products` route all the *paginated* products. Each product can be clicked and will take us to a **detailed** route that is responsible for displaying all the data, including the brand of the product. Also in our header there is a button **login** (only for administrator), once the session is started we will have access to the **administration panel**.

# **views**:  

### `/products`
**Mobile**  

![mobile-products](https://user-images.githubusercontent.com/71911407/180663508-1ec5f2c5-8e36-4de2-9cf2-57104a976f6e.png)  

**Desktop**  
![desktop-products](https://user-images.githubusercontent.com/71911407/180663535-c92e3cb7-36af-4ef1-bee4-6fd44b588356.png)


### `/products/:id`  
**Mobile**  

![mobile-detail](https://user-images.githubusercontent.com/71911407/180663600-6f0f8655-0e6c-424b-9438-80b4e7ad67a7.png) 

**Desktop**  
![desktop-detail](https://user-images.githubusercontent.com/71911407/180663620-e2698c37-8fa9-4f74-8874-c252a713c9fb.png)  

### `/accounts/login`   
**Mobile**   
![login-mobile](https://user-images.githubusercontent.com/71911407/180663677-d00654fd-2a23-4757-bc00-9e3e2668269c.png)  

**Desktop**  
![login-desktop](https://user-images.githubusercontent.com/71911407/180663701-71089415-2358-4656-8a98-ea2259520ffb.png)  

### `/admin-panel`   
**Mobile**   
![mobile](https://user-images.githubusercontent.com/71911407/180664144-7d2e09d8-2b5b-4da6-a903-27bf0767fac7.gif)



**Desktop**  
![desktop](https://user-images.githubusercontent.com/71911407/180664168-a3562051-31cd-40dd-b674-3ee3e68599e2.gif)



