# Use My Tech App

### POST - Create Account
create a user with role type of renter or owner
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/auth/register</summary>

```JSON
what you need:
{
    "username": "marco",  
    "password": "foobar", 
    "role": "owner"
}

what you get back:
{
    "user_id": 12,
    "username": "mary",
    "password": "$2a$08$cHlS2uqmuiHGvZcqcnFKNOnWcHJD49nDpINZslFqKaQi8dWMIoclC",
    "role": "owner"
}
```
</details>

-----------------------------------------------------------------------------------------

### POST - Login
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/auth/login</summary>

```JSON
what you need:
role can be owner or renter
{
    "username": "marco",  
    "password": "foobar",
}

what you get back:
{
    "message": "marco is back!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJtYXJjbyIsInJvbGUiOiJvd25lciIsImlhdCI6MTYxOTM2ODY1OCwiZXhwIjoxNjE5NDU1MDU4fQ.Hl9vOkOOhNPTcuckYaoj1b8KCMUvCHXGgMPFK4Vd2XA",
    "role": "owner"
}
```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Logout User
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/auth/logout</summary>

```JSON
Status: 200 OK
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get All Equipment
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/equipment</summary>
</details>

-----------------------------------------------------------------------------------------

### POST - Add Equipment
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/equipment</summary>
</details>

-----------------------------------------------------------------------------------------

### PUT - Update Equipment By ID
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/equipment/:equipment_id</summary>
</details>

-----------------------------------------------------------------------------------------

### DELETE - Remove Equipment By ID
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/equipment/:equipment_id</summary>
</details>

-----------------------------------------------------------------------------------------

### GET - Get Rental Requests
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/requests</summary>
</details>

-----------------------------------------------------------------------------------------

### POST - Create A Request To Rent
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/requests</summary>
</details>

-----------------------------------------------------------------------------------------

### DELETE - Delete Rental Request By ID
<details>
<summary>https://use-my-tech-app.herokuapp.com/api/requests/:request_id</summary>
</details>

-----------------------------------------------------------------------------------------

### GET - Get Rented Equipment

-----------------------------------------------------------------------------------------

### POST - Rent Equipment To Renter

-----------------------------------------------------------------------------------------

### DELETE - Terminate Rental
