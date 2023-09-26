import React from 'react'

export default function ErrorPage() {
  return (
    <div className=''>
            <div class="bg-gray-100 flex items-center justify-center h-screen">
            <div class="bg-white rounded-lg shadow-md p-8 max-w-3xl text-center mx-auto">
                <h1 class="md:text-8xl text-4xl text-red-500 font-semibold">404</h1>
                <p class="text-gray-700 mt-2">Oops! Page not found.</p>
                <p class="text-gray-500 mt-4">The page you are looking for might have been removed or doesn't exist.</p>
                <a href="/" class="text-blue-500 hover:underline mt-4 block">Go back to the home page</a>
            </div>
        </div>
    </div>
  )
}
