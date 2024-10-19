import conf from "../configure/conf";
import { Account, Client, ID } from "appwrite";

export class AuthService {
    client = new Client();
    Account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAcc = await this.account.create(ID.unique(),email,password,name);
            if(userAcc){
                return this.login({email,password,name});
                
            }else{
                return userAcc
            }
        } catch (error) {
            throw error;
        }

    }
    async login({email,password}){
        try {
            const login = await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            console.log("Appwrite Services :: login :: error",error );
            
        }
    }
    async isUserLoggedIn(){
        try {
            const isUserLoggedIn = await  this.account.get();
            return isUserLoggedIn;
            
        } catch (error) {
            console.log("Appwrite Services :: getUser:: error",error );
            
        }
    }
    async logout (){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Services :: logout:: error",error );
        }
    }

}
const authService = new AuthService();
export default authService