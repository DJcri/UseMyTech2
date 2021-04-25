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
<summary>https://foodtruckbuildweek.herokuapp.com/api/equipment</summary>

```JSON
what you get back:
[
    {
        "owner": {
            "id": 1,
            "username": "Sonic"
        },
        "id": 1,
        "name": "camera",
        "imgUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "description": "like new",
        "availableForRent": true
    },
    {
        "owner": {
            "id": 2,
            "username": "Mario"
        },
        "id": 2,
        "name": "video camera",
        "imgUrl": "https://images.unsplash.com/photo-1589872307379-0ffdf9829123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
        "description": "excellent audio and image",
        "availableForRent": false
    },
    {
        "owner": {
            "id": 3,
            "username": "Luigi"
        },
        "id": 3,
        "name": "podcast microphone",
        "imgUrl": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "description": "best audio out there",
        "availableForRent": true
    }
]
    
    
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Rental Requests (must be logged in with role "owner")
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/requests</summary>

```JSON
what you get back:
[
    {
        "equipment_id": 1, --id of equipment
        "owner_id": 1, --of who owns the equipment
        "renter_id": 2, --of person who sent the request
    },
    {
        "equipment_id": 1,
        "owner_id": 1,
        "renter_id": 3,
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### POST - Create 
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks</summary>

```JSON
what you get back:
[
    {
        "truck_id": 1,
        "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
        "cuisine_type": "french",
        "departure_time": "19:00:00",
        "longitude": "99.00333",
        "latitude": "44.77777"
    },
    {
        "truck_id": 2,
        "truck_img": "s-o-c-i-a-l-c-u-t--eeAvufLf9A-unsplash.jpg",
        "cuisine_type": "vietnamese",
        "departure_time": "17:00:00",
        "longitude": "91.00998",
        "latitude": "14.75577"
    },
    {
        "truck_id": 3,
        "truck_img": "harry-gillen-b2gdRynjL9Q-unsplash.jpg",
        "cuisine_type": "mexican",
        "departure_time": "21:00:00",
        "longitude": "90.00322",
        "latitude": "77.76654"
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get truck by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks/{truck_id}</summary>

```JSON
what you get back:
{
    "truck_id": 1,
    "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
    "cuisine_type": "french",
    "departure_time": "19:00:00",
    "longitude": "99.00333",
    "latitude": "44.77777"
}
```
</details>

-----------------------------------------------------------------------------------------


### POST - Create new truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks</summary>

```JSON
what you need: 
{
    "truck_img": "eugene-chystiakov-nlHdn7AhJHY-unsplash.jpg",
    "cuisine_type": "american",
    "departure_time": "11:00pm",
    "longitude": "12.12121",
    "latitude": "13.13133"
}

what you get back: 

{
    "truck_id": 4,
    "truck_img": "eugene-chystiakov-nlHdn7AhJHY-unsplash.jpg",
    "cuisine_type": "american",
    "departure_time": "23:00:00",
    "longitude": "12.12121",
    "latitude": "13.13133"
}
```
</details>

-----------------------------------------------------------------------------------------

### PUT - Update Truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks/{truck_id}</summary>

```JSON
What you need: 
{
    "truck_id": 2, 
    "truck_img": "eugene-chystiakov-nlHdn7AhJHY-unsplash.jpg",
    "cuisine_type": "eithopian",
    "departure_time": "11:11pm",
    "longitude": "15.12121",
    "latitude": "13.13443"
}

What you get is:
Status: 200 Ok
```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Delete truck
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/trucks/{truck_id}</summary>

```JSON
{
    "message": "truck deleted"
}
```
</details>


-----------------------------------------------------------------------------------------

### GET - Get operator by id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/operators/{operator_id}</summary>

```JSON
what you get back:
{
    "operator_id": 2,
    "truck_id": 3
}
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get trucks based on operator's id
<details>
<summary>https://foodtruckbuildweek.herokuapp.com/api/operators/{operator_id}/trucks</summary>

```JSON
what you get back:
[
    {
        "truck_id": 1,
        "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
        "cuisine_type": "french",
        "departure_time": "19:00:00",
        "longitude": "99.00333",
        "latitude": "44.77777",
        "operator_id": 1
    }
]
```
</details>
