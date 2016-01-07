{
  "GET /users/:id": {
    "desc": "returns one user represented by their id",
    "response" : "200 application/json",
    "data": [{}, {}, {}]
  },
  "POST /users": {
    "desc": "creates and returns a new user",
    "response" : "201 application/json",
    "data": {}
  },

  "GET /jobs": {
    "desc": "returns all jobs",
    "response" : "200 application/json",
    "data": [{}, {}, {}]
  },

  "GET /jobs/:id": {
    "desc": "returns one job represented by its id",
    "response" : "200 application/json",
    "data": {}
  },

  "POST /jobs": {
    "desc": "creates and returns a new job",
    "response" : "201 application/json",
    "data": {}
  },

  "GET /bids/:id": {
    "desc": "returns all bids on a certain job specified by its id",
    "response" : "200 application/json",
    "data": [{}, {}, {}]
  },



  "POST /bids/:id": {
    "desc": "makes a bid on a job specified by the id",
    "response" : "201 application/json",
    "data": {}
  }
}