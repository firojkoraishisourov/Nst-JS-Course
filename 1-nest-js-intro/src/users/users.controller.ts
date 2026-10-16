import { Controller, Get, Post } from "@nestjs/common";


//http://localhost:3000/users

@Controller('users')
export class UsersController{

    @Get()
    getUsers(){
        return 'You made a GET request to  get all users!'
    }

    @Post()
    createUser(){
        return 'A new user has been created!'
    }
}