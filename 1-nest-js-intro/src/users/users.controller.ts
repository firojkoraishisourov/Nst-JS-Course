import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";


//http://localhost:3000/users/101

@Controller('users')
export class UsersController{

    @Get()
    getUsers(){
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: any){
        const usersService = new UsersService();
        return usersService.getUserById(+id);
    }

    @Post()
    createUser(){
        const user = {id: 3, name: 'sourov', age: 24 , gender: 'male', isMarried: false};
        const usersService = new UsersService();
        usersService.createUser(user);
        return 'A new user has been created!';
    }
}