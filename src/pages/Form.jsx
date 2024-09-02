 import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'

const Form = () => {


    const [isSignUp , setIsSignUp] = useState(false);
    const  [loading , setLoading] = useState(false)
    const [formData , setFormData]= useState({
        email:'',
        passowrd: '',
    })

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    }

    const handleChange =() => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value 
        })
    }

    const handleEmailPasswordAuth = async (e) => {
        e.preventDefault();
        setLoading(true); // Note: It should be setLoading instead of setloading
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                alert('Account Created');
            } else {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                alert('Logged in Successfully');
            }
        } catch (error) {
            console.error('Authentication Error:', error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };
    


  return (
    <div>
      
    </div>
  )
}

export default Form
