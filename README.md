<p align="center">
  <a href="https://gearappi.com/" target="_blank"><img src="https://raw.githubusercontent.com/gearappi/resource/master/logo_site.png" width="200" alt="gearappi Logo" /></a>
</p>
<p align="center">
    Backend as a service. The main request router.
</p>
   
## API.GEARAPPI

The service is available at <a href="https://api.gearappi.com/">api.gearappi.com</a>.

### How to use:

In order to use our service, you will need to register on the website 
<a href="https://abra.gearappi.com/">abra.gearappi.com</a>.

After registering, you can create the necessary function, which will be available by a special token.

You enter this token after the domain, for example:

``
https://api.gearappi.com/{token}
``

If you created a get function, then by going to this address you will get the result of your function. Otherwise, 
you will have to pass the parameters in the request body.

### About this service:

We strive to maintain a clean architecture, therefore, all elements are divided into layers, so the business logic 
layer is independent of the controllers, and the controllers, in turn, are independent of routing. 
Therefore, if you want to become a member of our project, support this rule in our architecture.

The following block diagram can tell you more about this architecture:

<p align="center">
    <img
        src="https://raw.githubusercontent.com/gearappi/resource/master/_Clean_Architecture.jpg"
        width="800" 
        alt="clean architecture diagram">
</p>

### How to work with it:

1. Entities are business logic. Each entity can be either an endpoint or it may need to work with data. 
It is important to understand that working with data must be declarative. 
Entities do not need to know where this data comes from (for example, it can be a database or file storage), 
the main thing is that it should receive it. 
Therefore, resource files must implement a repository pattern.

2. Each entity is called by the controller, and the controller is called along a specific route.

3. A common router only deals with sending a request to a specific router.

### How it looks in the application architecture:

We believe that the best practice is to divide the code not by technical roles, 
but by business roles or, more correctly, by components. 
Thus, it will become easier for each new user to understand the code and understand which 
one to find where each area of ​​responsibility is.

### How to deploy the api service:

1 step. Clone the repository into your project
```
git clone git@github.com:gearappi/api.gearappi.git
```
2 step. Install all the dependencies
```
yarn install    //recomended

or

npm install
```
3 step. Start the service
```
yarn dev   //recomended

or 

npm run dev
```


## Thank you for using our service.
 <p align="right">2020 © Gearappi team</p>
