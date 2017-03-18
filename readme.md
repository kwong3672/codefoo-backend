# Code-Foo Back End Project

## Description:
* Build an app to store at least 10 articles and 10 videos from the API in a MySQL 5.6.X database. 
* Build a service that can read in the articles and videos from the MySQL database instance in the previous step and serve a valid MRSS feed. Use the official RSS 2.0 and MRSS 1.5.1 specifications from the RSS Advisory Board

## Instructions:
### Setup
* Clone repository
* Install dependencies.  From root of project directory in a command line type 'npm install'
* Setup MySQL (If running mySQL locally)
* Start MySQL by typing 'mysql.server start'
* From command line typing 'mysql -u USERNAME - p'  (replace USERNANE with user name or root)
* From Mysql prompt type 'CREATE DATABASE codefoo_backend;'
* (Optional) Create .env file in root of project folder and save environmental variables for MySQL connection or change lines 10 - 12 of 'mysql.js'

### Run app that saves articles and videos from API to MySQL
From command line in root of project folder type 'node server/utilities/saveAPIData.js'

### Run service that reads MySQL and creates valid RSS feed
From command line in root of project folder type 'node server/utilities/createRSS.js'

### Additional Notes:
To run a basic Node.js & Express server that will serve static files and the xml files created from the service above type 'node server/server.js'

(from web browser go to the following urls)
http://localhost:3000/feeds/rss_articles_feed.xml
http://localhost:3000/feeds/rss_videos_feed.xml
