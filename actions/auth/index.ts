import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import {db,auth} from "@/config/firebase"
import {collection,getDocs,addDoc} from "firebase/firestore";



export const FLogin = async (email: string, password: string) => {
    try {
        const userResponse = await signInWithEmailAndPassword(auth, email, password);
        if (userResponse.user) {
            console.log('Login successful with', email);
            return userResponse;
        }
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Propagate the error for further handling
    }
};


export const storeData = async(name:string,email:string, password:string) =>{
    try{
        const data=await addDoc(collection(db,'users'),{
            name,
            email,
            password
        })
    }
    catch(error){
        console.log(error);   
    }   
};


export const FSignUp = async (name: string, email: string, password: string) => {
    try {
        const userResponse = await createUserWithEmailAndPassword(auth, email, password);
        if (userResponse.user) {
            await sendEmailVerification(userResponse.user);
            console.log('Email verification sent to', email);
            
        }
        console.log('User registered with',name, email, password)
        storeData(name,email,password);
        
    } catch (error) {
        console.error(error);
    }
};

export const FResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log('Password reset email sent to', email);
        return true;
        
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error;
    }
};

