// src/components/AuthForm.jsx

import React, { useState } from 'react';
import { auth, googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleSignUp = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailPasswordAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert('Account created successfully!');
      } else {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert('Logged in successfully!');
      }
    } catch (error) {
      console.error('Authentication Error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Google sign-in successful!');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, facebookProvider);
      alert('Facebook sign-in successful!');
    } catch (error) {
      console.error('Facebook Sign-In Error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <form onSubmit={handleEmailPasswordAuth} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="example@mail.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? (isSignUp ? 'Creating Account...' : 'Signing In...') : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="my-6 flex items-center justify-center">
          <span className="w-1/5 border-b border-gray-300"></span>
          <span className="text-sm text-gray-500 mx-4">Or continue with</span>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 disabled:opacity-50"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Google
          </button>
          <button
            onClick={handleFacebookSignIn}
            disabled={loading}
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 disabled:opacity-50"
          >
            <FaFacebookF className="w-5 h-5 text-blue-600 mr-2" />
            Facebook
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={toggleSignUp}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
