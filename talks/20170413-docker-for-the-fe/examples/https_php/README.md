# A Docker container running https apache with php

The only change from the marvambass/apache2-ssl-secure container is to build from 
php:apache7.0 container and to remove the marvambass/apache2-ssl-secure line that 
installs apach2
 

## Usage

### Build it

```
cd docker-apache2-ssl-secure
docker build -t elgreg/secure_apache_php .
```

### Run it

`docker run -d -p 80:80 -p 443:443 -v $PWD/app:/var/www/html elgreg/secure_apache_php`