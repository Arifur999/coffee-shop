import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
            {/* Back to home link */}
            <Link
                to="/"
                className="text-2xl text-gray-500 hover:text-gray-800 mb-4 flex items-center gap-1"
            >
                ← Back to home
            </Link>

            {/* 404 Image */}
            <img
                src="/images/404/404.gif"
                alt="404 Not Found"
                className="w-full max-w-md mb-6"
            />

            {/* Optional message below image */}
            <h1 className="text-4xl font-bold text-green-600 mb-2">Oops! Page not found</h1>
            <p className="text-gray-500 text-base mb-6">
                The page you're looking for might have been removed or doesn't exist.
            </p>

            
        </div>
    );
};

export default ErrorPage;
