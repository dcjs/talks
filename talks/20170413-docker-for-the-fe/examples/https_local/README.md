## Local Directory HTTPS with Docker

In this example, we use the marvambass/apache2-ssl-secure container to load a local directory on https

You still won't get to see that lovely green because we're using a self-signed certificate, but if you
use an actual certificate (check out certbot) and update your hosts file, you should be able
to do this all locally with a nice green secure lock icon.


## To run your current directory https://localhost/

```
docker run -d -p 80:80 -p 443:443 -v $PWD/app:/var/www/html marvambass/apache2-ssl-secure
```

The marvambass/apache2-ssl-secure container will automatically create a self-signed cert
and also adds a configuration that will show whatever is in /var/www/html, so we just mount
our current directory over that directory.

