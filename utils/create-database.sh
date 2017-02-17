#!/bin/bash
USER="user"
PASS="pass"
HOST="localhost"
DB="database_development"

mysql -u root -e "create database ${DB}";

# mysql -u $USER -h $HOST -p$PASS -Bse "CREATE DATABASE ${DB}"
