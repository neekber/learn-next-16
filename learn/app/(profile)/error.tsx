'use client';

export default function Error({error}:{error: Error}){

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-red-600">An error occurred!</h1>
            <p className="text-lg text-gray-700">Sorry, something went wrong while loading the profile page.</p>
            <p className="text-lg text-gray-700">Error: {error.message}</p>
        </div>
    )

}