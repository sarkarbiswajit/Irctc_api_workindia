# Irctc_api_workindia

# For setting up the server
1. Clone my git repo or download the zip file and then unzip the file <br>
2. Open a new terminal in the project folder and run the  command "npm install" <br>
3. Open another terminal  and run the command 'mysql -u root -p' to start the Mysql server <br>
4. Then run this Mysql command <br>
     CREATE DATABASE irctc; <br>
     USE irctc; <br>
     CREATE TABLE users ( <br>
    id INT AUTO_INCREMENT PRIMARY KEY, <br>
    name VARCHAR(255), <br>
    email VARCHAR(255) UNIQUE, <br>
    password VARCHAR(255), <br>
    role ENUM('admin', 'user') <br>
); <br>

  CREATE TABLE trains (  <br>
    id INT AUTO_INCREMENT PRIMARY KEY, <br>
    name VARCHAR(255), <br>
    source VARCHAR(255), <br>
    destination VARCHAR(255), <br>
    total_seats INT, <br>
    available_seats INT <br>
); <br>

  CREATE TABLE bookings ( <br>
    id INT AUTO_INCREMENT PRIMARY KEY, <br>
    user_id INT, <br>
    train_id INT, <br>
    FOREIGN KEY (user_id) REFERENCES users(id), <br>
    FOREIGN KEY (train_id) REFERENCES trains(id) <br>
); <br>

5. And then now run 'node server.js' <br>


# For Testing 

1. Open Postman <br>
2. Register a user <br>
     Method: POST <br>
     URL: http://localhost:5000/api/auth/register <br>
     Body : <br>
        { <br>
            "name": "Biswajit Sarkar", <br>
            "email": "biswajit@gmail.com", <br>
            "password": "1234576", <br>
            "role": "admin" <br>
          } <br>
3. Login User  <br>
     Method: POST <br>
     URL: http://localhost:5000/api/auth/login <br>
     Body : <br>
          {  <br>
            "email": "biswajit@gmail.com", <br>
            "password": "1234576" <br>
          } <br>
4. Add a Train <br>
     Method: POST <br>
     URL: http://localhost:5000/api/train/add <br>
     Headers: <br>
     x-api-key: 1234576 <br>
     Body: <br>
        { <br>
            "name": "Rajdhani Express", <br>
            "source": "Delhi", <br>
            "destination": "Mumbai", <br>
            "total_seats": 100 <br>
          } <br>
 5. Get Available Trains <br>
      Method: GET <br>
     URL: http://localhost:5000/api/train/search?source=Delhi&destination=Mumbai <br>

6. Book a Seat <br>
   Method: POST <br>
   URL: http://localhost:5000/api/booking/book <br>
   Headers: <br>
     Authorization: Bearer your_jwt_token <br>
7.  Get User's Booking Details  <br>
     Method: GET <br>
     URL: http://localhost:5000/api/booking/details <br>
     Headers: <br>
     Authorization: Bearer your_jwt_token <br>
   
