# This exmaple rebuiils MAMP, but with docker

Includes:

	* php (running in apache)
	* mysql
	* phpmyadmin

See docker-compose file for what's used to create it


# Usage

`docker-compose up` will mount your $PWD/app to /var/www/html/ (a php.info is included)
which is the base path of https://localhost and http://localhost

To test view http://localhost/phpinfo.php

To view phpmyadmin, go to [http://localhost:8080/](http://localhost:8080) 



