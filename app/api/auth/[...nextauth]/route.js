import { ConnectMongoDB } from "@lib/mongodb";
import User from "@models/users";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const authOptions= {
    
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks:{
        async signIn({user,account}){   /*Destructure user and account from signIn */
            //console.log("User:", user);
            //console.log("Account", account)

            if (account.provider ==='google'){
                const {name,email}= user;//destructure name and email from user
                try{
                    await ConnectMongoDB();// first try to connect to MongoDB

                    const userExist= await User.findOne({email});// first check if Email exist 

                    if (!userExist){// if it does not exist then 
                        
                    const res=await fetch('http://localhost:3000/api/user',{// fetch from API then
                        method:"POST",// specify if it is to POST,GET, .....etc
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({// Convert name and email that we destructured to string
                            name,email
                        })
                    })
                    if (res.ok){// if everything goes alright then return the user
                        return user;
                    }
                    }

                }catch(error){
                    console.log(error);
                }
            }
            return user;
        }
    }
}

const handler= NextAuth(authOptions)

export {handler as GET, handler as POST}