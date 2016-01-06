Schema:

users
{
  id: INT
  name: TEXT
  password: HASH
}

jobs
{
  id: INT
  name: TEXT
  description: TEXT
  price: INT
  location: TUPLE (x, y coordinate)
  user: INT FK
}

bids
{
  job_id: FK (job the user bid on)
  user_id: FK (user who bid on job)
}


// to be later implemented

zipcodeconverter
{
  zipcode: INT
  location: TUPLE x, y coordinate
}

// any tagging system