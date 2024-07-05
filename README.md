# Environmental Monitoring API

This project is an Environmental Monitoring API built with Node.js, Express, and MySQL. The API provides CRUD operations for various entities such as environmental data, Arduino devices, plants, and global parameters. It also includes Swagger for API documentation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/environmental-monitoring-api.git
    cd environmental-monitoring-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MySQL database credentials:

    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=your_database
    ```

4. Start the server:

    ```bash
    node app.js
    ```

## Usage

Once the server is running, you can access the API at `http://localhost:3000`. You can use tools like Postman to interact with the API endpoints.

## API Endpoints

### Arduino Devices

- **Create a new Arduino device**
  - `POST /arduino-devices`
  - Request Body:
    ```json
    {
      "device_id": 101,
      "plant_id_1": 1,
      "plant_id_2": 2,
      "plant_id_3": 3
    }
    ```

- **Get all Arduino devices**
  - `GET /arduino-devices`

- **Get an Arduino device by ID**
  - `GET /arduino-devices/:id`

- **Update an Arduino device by ID**
  - `PUT /arduino-devices/:id`
  - Request Body:
    ```json
    {
      "device_id": 102,
      "plant_id_1": 4,
      "plant_id_2": 5,
      "plant_id_3": 6
    }
    ```

- **Delete an Arduino device by ID**
  - `DELETE /arduino-devices/:id`

### Environmental Data

- **Create a new environmental data entry**
  - `POST /environmental-data`
  - Request Body:
    ```json
    {
      "device_id": 1,
      "uv_radiation": 5,
      "light": 300,
      "air_temperature": 22.5,
      "air_humidity": 55,
      "soil_humidity": 120,
      "measurement_date": "2024-07-01T12:00:00Z",
      "plant_ID": 1,
      "cnt": 1
    }
    ```

- **Get all environmental data**
  - `GET /environmental-data`

- **Get an environmental data entry by ID**
  - `GET /environmental-data/:id`

- **Update an environmental data entry by ID**
  - `PUT /environmental-data/:id`
  - Request Body:
    ```json
    {
      "device_id": 2,
      "uv_radiation": 6,
      "light": 320,
      "air_temperature": 24.0,
      "air_humidity": 60,
      "soil_humidity": 130,
      "measurement_date": "2024-07-01T12:30:00Z",
      "plant_ID": 2,
      "cnt": 2
    }
    ```

- **Delete an environmental data entry by ID**
  - `DELETE /environmental-data/:id`

### Environmental Average Data

- **Create a new environmental average data entry**
  - `POST /environmental-data-avg`
  - Request Body:
    ```json
    {
      "device_id": 1,
      "uv_radiation": 5,
      "light": 300,
      "air_temperature": 22.5,
      "air_humidity": 55,
      "soil_humidity": 120,
      "measurement_date": "2024-07-01T12:00:00Z",
      "plant_ID": 1
    }
    ```

- **Get all environmental average data**
  - `GET /environmental-data-avg`

- **Get an environmental average data entry by ID**
  - `GET /environmental-data-avg/:id`

- **Update an environmental average data entry by ID**
  - `PUT /environmental-data-avg/:id`
  - Request Body:
    ```json
    {
      "device_id": 2,
      "uv_radiation": 6,
      "light": 320,
      "air_temperature": 24.0,
      "air_humidity": 60,
      "soil_humidity": 130,
      "measurement_date": "2024-07-01T12:30:00Z",
      "plant_ID": 2
    }
    ```

- **Delete an environmental average data entry by ID**
  - `DELETE /environmental-data-avg/:id`

### Last Update

- **Create a new last update entry**
  - `POST /last-updates`
  - Request Body:
    ```json
    {
      "device_id": 1,
      "LastUpdate": "12:00:00"
    }
    ```

- **Get all last updates**
  - `GET /last-updates`

- **Get a last update entry by ID**
  - `GET /last-updates/:id`

- **Update a last update entry by ID**
  - `PUT /last-updates/:id`
  - Request Body:
    ```json
    {
      "device_id": 2,
      "LastUpdate": "13:00:00"
    }
    ```

- **Delete a last update entry by ID**
  - `DELETE /last-updates/:id`

### Plants

- **Create a new plant**
  - `POST /plants`
  - Request Body:
    ```json
    {
      "row": 1,
      "col": 1
    }
    ```

- **Get all plants**
  - `GET /plants`

- **Get a plant by ID**
  - `GET /plants/:id`

- **Update a plant by ID**
  - `PUT /plants/:id`
  - Request Body:
    ```json
    {
      "row": 2,
      "col": 3
    }
    ```

- **Delete a plant by ID**
  - `DELETE /plants/:id`

### Global Parameters

- **Create a new global parameter**
  - `POST /global-parameters`
  - Request Body:
    ```json
    {
      "intelval_in": 10,
      "intelval_log": "00:10:00"
    }
    ```

- **Get all global parameters**
  - `GET /global-parameters`

- **Get a global parameter by ID**
  - `GET /global-parameters/:id`

- **Update a global parameter by ID**
  - `PUT /global-parameters/:id`
  - Request Body:
    ```json
    {
      "intelval_in": 20,
      "intelval_log": "00:20:00"
    }
    ```

- **Delete a global parameter by ID**
  - `DELETE /global-parameters/:id`

## Swagger Documentation

You can access the Swagger documentation for the API at:

