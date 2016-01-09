{
  "GET /api/categories/": {
    "desc": "returns all categories",
    "response" : "200 application/json",
    "data": [{}, {}, {}]
  },

  "POST /api/categories/": {
    "desc": "creates and returns a new category",
    "requires": "name [String]",
    "response" : "201 application/json",
    "data": {}
  },

  "GET /api/categories/:id": {
    "desc": "returns one category represented by its id",
    "response" : "200 application/json",
    "data": {}
  },

  "PUT /api/categories/:id": {
    "desc": "changes a category, specified by its id, and returns the changed category",
    "response" : "200 application/json",
    "data": {}
  },

  "DELETE /api/categories/:id": {
    "desc": "deletes a category, specified by its id, and returns the deleted category",
    "response" : "200 application/json",
    "data": {}
  },



  "GET /api/users/": {
    "desc": "returns all users",
    "response" : "200 application/json",
    "data": [{}, {}, {}]
  },

  "POST /api/users/": {
    "desc": "creates and returns a new user",
    "requires": "username [String], password [String]",
    "response" : "201 application/json",
    "data": {}
  },

  "GET /api/users/:id": {
    "desc": "returns one user represented by its id",
    "response" : "200 application/json",
    "data": {}
  },

  "PUT /api/users/:id": {
    "desc": "changes a user, specified by its id, and returns the changed user",
    "response" : "200 application/json",
    "data": {}
  },

  "DELETE /api/users/:id": {
    "desc": "deletes a user, specified by its id, and returns the deleted user",
    "response" : "200 application/json",
    "data": {}
  },



  "GET /api/posts/": {
    "desc": "returns all posts", 
    "response" : "200 application/json",
    "data": [{}, {}, {}]
  },

  "POST /api/posts/": {
    "desc": "creates and returns a new post",
    "requires": "title [String], text [String], author [mongodb _id], categories [Array of mongodb _id]",
    "response" : "201 application/json",
    "data": {}
  },

  "GET /api/posts/:id": {
    "desc": "returns one post represented by its id",
    "response" : "200 application/json",
    "data": {}
  },

  "PUT /api/posts/:id": {
    "desc": "changes a post, specified by its id, and returns the changed post",
    "response" : "200 application/json",
    "data": {}
  },

  "DELETE /api/posts/:id": {
    "desc": "deletes a post, specified by its id, and returns the deleted post",
    "response" : "200 application/json",
    "data": {}
  }

}



"5691749973aa5549057a2269"
"569174e473aa5549057a226a"
Emu Sort
Emu Hash
Emu Bucket

# sending user / categories currently as STRING, need you to handle _ID on backend atm,
we will work on auth and user ID later...