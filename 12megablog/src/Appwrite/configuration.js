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

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDbID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite Services :: getPost :: error",error );
            return false;
        }
    }
    async getAllPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteCollectionID,
                conf.appwriteBucketID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Services :: getAllPosts :: error",error );
            return false;
            
        }
    }

    async uploadFile(file){
        try {
            return await  this.storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite Services :: uploadFile :: error",error );
            return false;
            
        }
    }
    async deleteFile(fileID){
        try {
            return await  this.storage.createFile(
                conf.appwriteBucketID,
                fileID,
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Services :: deleteFile :: error",error );
            return false;
            
        }
    }

    getFilePreview(fileID){
        return this.storage.getFilePreview(
            conf.appwriteBucketID,
            fileID,
        )
    }


}
const service = new Service();
export default service