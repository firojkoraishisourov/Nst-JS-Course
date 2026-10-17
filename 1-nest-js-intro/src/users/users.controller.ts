import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";


//http://localhost:3000/users/101

@Controller('users')
export class UsersController{

    @Get()
    getUsers(@Query() query: any){
        const usersService = new UsersService();
        if(query.gender){
            return usersService.getAllUsers().filter(u => u.gender === query.gender);
        }
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