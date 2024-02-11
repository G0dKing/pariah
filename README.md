
![Logo](https://i.imgur.com/bW6PMSk.png)

# DJ EPK Website Template

A responsive, dynamic, visually striking portfolio website template for creatives.
#### Developed by Alex Pariah ([@G0dKing](https://github.com/G0dKing))



####
![App Screenshot](https://i.imgur.com/V2rEHbd.png)


## Installation/Usage

1. Clone the repository:
```bash
  git clone https://github.com/G0dKing/pariah.git
```

2. If you don't have the Node Package Manager installed, download it [HERE](https://nodejs.org/en/download) or run:
```
    sudo apt update && sudo apt upgrade -y
    sudo apt install -y nodejs
```

3. Navigate into the root directory and install the dependencies:
```
    cd pariah
    npm i
```
4. Modify the files as needed to fit your use-case.

5. Finally, build the application:
```
    npm run build
```
## Deployment (w/ NGINX)

#### 1. Ensure NGINX is installed:
```
sudo apt update && sudo apt upgrade -y
sudo apt install nginx certbot python3-certbot-nginx
```

#### 2. Prepare NGINX:
```
cd /etc/nginx/sites-available
sudo rm default
```

#### 3. Modify your domain's DNS records to point to your server's public IP address (varies depending on your hosting provider).

#### 4. Create a new file in /etc/nginx/sites-available called "epk_site" or whatever you want:
```
sudo nano /etc/nginx/sites-available/epk_site
```
#### Then, configure an HTTP server (replace "example.com" with your domain):
```
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        root /path/to/pariah/directory;
        index index.html;
    }
}
```
#### 5. Navigate to the "sites-enabled" directory, remove the default file and create a symbolic link to your HTTP server:
```
cd /etc/nginx/sites-enabled
sudo rm default
sudo ln -s /etc/nginx/sites-available/dj-epk epk_site
```
Then reload NGINX:
```
sudo nginx -t
sudo systemctl restart nginx
```

#### 6. Acquire SSL certificate using certbot and deploy via HTTPS and reload again:
```
sudo certbot --nginx --agree-tos --email YOUR_EMAIL -n -d example.com www.example.com
sudo nginx -t
sudo systemctl restart nginx
```

#### 7. You should now be able to access the template at "https://example.com" or "https://www.example.com"

## License

Licensed under the MIT License [READ MORE](https://choosealicense.com/licenses/mit/)

