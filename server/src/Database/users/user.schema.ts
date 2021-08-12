import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

export type UserDoc = User & Document

@Schema()
export class User {
    @Prop()
    role : string
    @Prop({required:true, unique: true})
    name : string
    @Prop({required:true})
    email : string
    @Prop({required:true})
    number : number
    @Prop({required:true})
    password : string
}

export const UserSchema = SchemaFactory.createForClass(User);
