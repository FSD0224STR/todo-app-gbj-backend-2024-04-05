# todo-app-backend

## Endpoints

### Tasks

<details>
  <summary>
    <code>GET</code> 
    <code>/tasks</code> 
    Get an incompleted task list
  </summary>
  
  #### Parameters

  > | name      |  type     | data type               | description     |
  > |-----------|-----------|-------------------------|-----------------|
  > | None      |  N/A      | N/A                     | N/A             |

  
  #### Responses

  > | http code     | content-type                      | response              |
  > |---------------|-----------------------------------|-----------------------|
  > | `200`         | `application/json`                | Array of task objects |
  
</details>

<details>
  <summary>
    <code>GET</code> 
    <code>/tasks/:id</code> 
    Get a detail of a task
  </summary>
  
  #### Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |

  #### Responses

  > | http code     | content-type                      | response                  |
  > |---------------|-----------------------------------|---------------------------|
  > | `200`         | `application/json`                | A task object             |
  > | `403`         | `application/json`                | `{"msg":"Forbidden}`      |
  > | `404`         | `application/json`                | `{"msg":"Task not found}` |
  
</details>

<details>
  <summary>
    <code>PUT</code> 
    <code>/tasks/:id</code> 
    Update a task
  </summary>
  
  #### Parameters

  > | name             |  type     | data type               | description                  |
  > |------------------|-----------|-------------------------|------------------------------|
  > | id               |  required | string                  | ID of the task               |
  > | title            |  required | string                  | Title of the new task        |
  > | description      |  optional | string                  | Description of the new task  |
  > | datestart        |  optional | string                  | Date to start the task       |
  > | dateend          |  optional | string                  | Date to end the task         |
  
  #### Responses

  > | http code     | content-type                      | response                                                            |
  > |---------------|-----------------------------------|---------------------------------------------------------------------|
  > | `200`         | `application/json`                | Array of task objects                                               |
  > | `400`         | `application/json`                | `{"msg": "You missed some parameters: parameter1, parameter2, ...}` |
  > | `403`         | `application/json`                | `{"msg": "Forbidden"}  `                                            |
  > | `404`         | `application/json`                | `{"msg": "Task not found"}`                                         |
  
</details>

<details>
  <summary>
    <code>DELETE</code> 
    <code>/tasks/:id</code> 
    Remove a task
  </summary>
  
  #### Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |
  
  #### Responses

  > | http code     | content-type                      | response                                                            |
  > |---------------|-----------------------------------|---------------------------------------------------------------------|
  > | `200`         | `application/json`                | Array of task objects                                               |
  > | `403`         | `application/json`                | `{"msg": "Forbidden"}  `                                            |
  > | `404`         | `application/json`                | `{"msg": "Task not found"}`                                         |
  
</details>

<details>
  <summary>
    <code>POST</code> 
    <code>/tasks/</code> 
    Create a new task
  </summary>
  
  #### Parameters

  > | name             |  type     | data type               | description                  |
  > |------------------|-----------|-------------------------|------------------------------|
  > | title            |  required | string                  | Title of the new task        |
  > | description      |  optional | string                  | Description of the new task  |
  > | datestart        |  optional | string                  | Date to start the task       |
  > | dateend          |  optional | string                  | Date to end the task         |
  
  #### Responses

  > | http code     | content-type                      | response                                                            |
  > |---------------|-----------------------------------|---------------------------------------------------------------------|
  > | `201`         | `application/json`                | `{"msg": "Task created", "id": "123456}`                            |
  > | `400`         | `application/json`                | `{"msg": "You missed some parameters: parameter1, parameter2, ...}` |
  
</details>

<details>
  <summary>
    <code>PATCH</code> 
    <code>/tasks/:id</code> 
    Mark task as done
  </summary>
  
  #### Parameters

  > | name      |  type     | data type  | description     |
  > |-----------|-----------|------------|-----------------|
  > | id        |  required | string     | ID of the task  |
  
  #### Responses

  > | http code     | content-type                      | response                                  |
  > |---------------|-----------------------------------|-------------------------------------------|
  > | `200`         | `application/json`                | `{"msg": "Task marked as completed"}`     |
  > | `403`         | `application/json`                | `{"msg": "Forbidden"}  `                  |
  > | `404`         | `application/json`                | `{"msg": "Task not found"}`               |
  
</details>

### Users

<details>
  <summary>
    <code>GET</code> 
    <code>/user</code> 
    Get user information
  </summary>
  
  #### Parameters

  > | name      |  type     | data type               | description     |
  > |-----------|-----------|-------------------------|-----------------|
  > | None      |  N/A      | N/A                     | N/A             |
  
  #### Responses

  > | http code     | content-type                      | response                                                                      |
  > |---------------|-----------------------------------|-------------------------------------------------------------------------------|
  > | `200`         | `application/json`                | `{"firstname": "Jordi", "lastname": "Galobart", "email": "test@example.com"}` |
  
</details>

<details>
  <summary>
    <code>POST</code> 
    <code>/user/login</code> 
    Login user
  </summary>
  
  #### Parameters

  > | name             |  type     | data type               | description                  |
  > |------------------|-----------|-------------------------|------------------------------|
  > | email            |  required | string                  | User e-mail                  |
  > | password         |  optional | string                  | User password                |
  
  #### Responses

  > | http code     | content-type                      | response                              |
  > |---------------|-----------------------------------|---------------------------------------|
  > | `200`         | `application/json`                | `{"msg": "Login succesful"}`          |
  > | `403`         | `application/json`                | `{"msg": "Forbidden"}`                |
  > | `404`         | `application/json`                | `{"msg": "User not found"}`           |
  
</details>

## Task
- title
- description
- status
- datestart
- dateend
- id
- user
- createdAt
- modifiedAt
- deletedAt

## User
- firstname
- lastname
- email
