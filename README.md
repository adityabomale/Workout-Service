Workout Service-

--------------------------------------------------------
Prerequistes-
Node js v22.14.0
Docker 28.0.4
Mongodb 8.0.6

PORTS - 3001 - api endpoints
        27017 - mongodb 
--------------------------------------------------------
cd Microservice-Deployment
docker compose up
--------------------------------------------------------
Endpoints-

Request:
POST /workout/createPlan   --create workout plan
{
    "userid": 19,
    "plan": "full body",
    "days": "friday",
    "exercise": ["pullups","situps"]
}

Response:
{
        "_id": "680d34b10cd89c50b0969518",
        "userid": 19,
        "plan": "full body",
        "days": "friday",
        "exercise": [
            "pullups",
            "situps"
        ],
        "__v": 0
}

Request:
GET /workout/showAllPlans -- to fetch all user details
GET /workout/showPlan/:userid -- to fetch specific user details

Response:
[
    {
        "_id": "680d34b10cd89c50b0969518",
        "userid": 19,
        "plan": "full body",
        "days": "friday",
        "exercise": [
            "pullups",
            "situps"
        ],
        "__v": 0
    }
]

PUT /workout/updatePlan/19  --make changes to workout plan for specific user
Request:
{
    "userid": 19,
    "plan": "upper body",
    "days": "monday, tuesday",
    "exercise": ["crunches:{ part1:12,part2:24 }, pullups"]
}

Response:
{
    "_id": "680cce0d27a8e7b3eaa152b7",
    "userid": 19,
    "plan": "upper body",
    "days": "monday, tuesday",
    "exercise": [
        "crunches:{ part1:12,part2:24 }, pullups"
    ],
    "__v": 0
}


PATCH /workout/updatePlan/exerciseSchedule/:userid  --change exercise schedule for specific user

Request:
{
    "exercise": "crunches"
}

Response:
{
    "_id": "680d34b10cd89c50b0969518",
    "userid": 19,
    "plan": "full body",
    "days": "friday",
    "exercise": [
        "crunches"
    ],
    "__v": 0
}


DELETE /workout/DeletePlan/19   --delete workout plan for specific user
Response:
Document with 19 has been deleted..