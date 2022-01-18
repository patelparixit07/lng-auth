# Laravel Angular Authentication

## Requirements
**PHP Version:** >=7.2

**Laravel:** ~5.8

**Angular:** >12.0 

## Description
Simple demo application with some basic authentication functionalities.. *registration, login, profile* etc.

## Installation
- Clone repository or download zip on web server document root
```
git clone git@github.com:patelparixit07/lng-auth.git
```
- Install the required packages for Laravel. ```composer install```
- Enter inside the Anuglar folder and Install the required packages for Angular.
 ```
 cd resources/frontend/angular
 npm install
 ```
- Start web server ```php artisan serve```
- Browse url: ```http://localhost:8000```

## Configuration
- Configure API Endpoint. by updating enviornment variable ```apiUrl``` in file ```enviornments/enviornment.ts``` & ```enviornments/enviornment.prod.ts```

> ***Default:*** http://localhost:8000


### *For Development:* 

- To make changes in angular code, jump to folder ```resources/frontend/angular```
- Serve angular app ```npm start```
- Serve laravel app ```php artisan serve```
- Browse url: ```http://localhost:4200/assets/angular```
- If everything works fine in dev configuration generate production build using below command:

```
cd resources/frontend/angular
npm run build:prod
```

> That command will build the files, place them in the ```public/assets/angular``` directory and copy the contents of ```index.html``` into the ```resources/views/angular.blade.php``` file.


> If you get error ```cp``` command not found then, just run ```npm run build``` and manually copy content of file ```public/assets/angular/index.html``` into ```resources/views/angular.blade.php``` 

- Browse url: ```http://localhost:8000```



