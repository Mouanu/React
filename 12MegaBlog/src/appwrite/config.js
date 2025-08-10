import conf from "../conf/conf";
import { Client, Databases,ID, Storage,Query} from "appwrite";


// class
export class Service {

    client = new Client();
    databases;
    bucket;

    constructor(){

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug,content, freaturedImage,status,userId}){

        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    freaturedImage,
                    status,
                    userId
                }

            )
            
        } catch (error) {
            console.log("Appwrite createPost ",error);
        }
    }
    

    async updatePost(slug,{title,content, freaturedImage,status}){

        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    freaturedImage,
                    status 
                }
            )
            
        } catch (error) {
            console.log("Appwrite updatePost ",error)
        }
    }

    async deletePost(slug){
        try {
            
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite deletePost ",error);
            return false;
        }

    }

    async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
            } catch (error) {
                console.log("Appwrite getPost ",error);
            }
    }

    async getPosts(queries = [Query.equal("status","active")]){
          try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,              
                queries,
            )
          } catch (error) {
            console.log("Appwrite getPosts ",error);
            return false;
          }

    }

    // file uploadFile
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite uploadFile ",error);
            return false;
        }
    }

    async deleFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite deleteFile ",error);
            return false;
        }
    }

    // file preview --> er response onek first
    // tai async-await er dorkar nei

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }

}

const service = new Service();

export default service;