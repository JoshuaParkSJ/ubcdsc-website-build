ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
USE ubcdscWebsite;
SELECT * FROM events;