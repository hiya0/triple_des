import { Body, Controller, Get, Post } from "@nestjs/common";
import { loginBody, signUpBody } from "src/Interface";
@Controller('login')
export class Login {
    @Post()
    signIn(@Body() body : loginBody ) : any {
        const {email,password}  = body
        return {email,password}
    }
}

@Controller('signup')
export class Signup {
    @Post()
    signUp(@Body() body : signUpBody) : any {
        const {email, number, password} = body
        return {email, number, password}
    }

}