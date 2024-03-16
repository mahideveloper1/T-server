import axios  from "axios";
import { prismaClient } from "../../clients/db";
import JWTService from "../../services/jwt";
import { GraphQLContext } from "../interfaces";
import { User } from "@prisma/client";
import UserService from "../../services/user";

interface GoogleTokenResult {
    iss?:string;
    nbf?:string;
    aud?:string;
    sub?:string;
    email? :string;
    email_verfied?:string;
    azp?:string;
    name?:string;
    picture?:string;
    given_name?:string;
    family_name?:string;
    iat?:string;
    exp?:string;
    jti?:string;
    alg?:string;
    kid?:string;
    typ?:string;
   

       
}
const  queries ={
    getUserById:async(parent:any,{id}:{id:string},ctx:GraphQLContext)=> prismaClient.user.findUnique({where:{id}}),
    




    verifyGoogleToken: async(parent:any,{token}:{token: string}) =>{
        const resultToken = UserService.veriyGoogleAuthToken(token);
        return  resultToken;
        

    },

    getCurrentUser:async(parent:any,args:any,ctx:GraphQLContext)=>{
        const id =ctx.user?.id;
        if(!id) return null;
        const user = await prismaClient.user.findUnique({where:{id}});
        return user;
    },
    

}

const extraResolvers = {
    User:{
    tweets:(parent:User)=> prismaClient.tweet.findMany({where:{author:{id:parent.id}}})
    }
}
export const resolvers={queries,extraResolvers};