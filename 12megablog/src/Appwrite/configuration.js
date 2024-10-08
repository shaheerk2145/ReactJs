import { ID,Client,Account,Databases,Storage,Query } from "appwrite";
import conf from "../configure/conf";

export class Service {
    client = new Client();
    databases;
    storage; 
    constructor (){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID)
        this.databases= new Databases(this.client);
        this.storage= new Storage(this.client);
    }


    async createPost({title,slug,content,image,status,userID}){
        try {
            const createPost  = await this.databases.createDocument(
                conf.appwriteDbID,
                // conf.appwriteBucketID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userID
                }
            )
            return createPost;
        } catch (error) {
            console.log(error);
            
        }
    }
    async updatePost(slug, {title,content,image,status}){
        try {
            const createPost  = await this.databases.updateDocument(
                conf.appwriteDbID,
                // conf.appwriteBucketID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                }
            )
            return createPost;
        } catch (error) {
            console.log(error);
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteCollectionID,
                conf.appwriteDbID,
                slug
            )
            return true
            
        } catch (error) {
            console.log(error);
            return false
        }
    } 


}
const service = new Service();
export default service