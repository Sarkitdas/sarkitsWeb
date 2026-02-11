"use-client"

import React from 'react'

const page = () => {
  return (
    <>
    <section className="relative w-full py-16 bg-gray-50" id="projects">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
        My <span className="text-blue-600">Projects</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Some of my recent works where I crafted modern, responsive web apps with clean code and beautiful UI.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project Card Example */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src="/image/project1.png"
          alt="Project 1"
          className="w-full h-56 sm:h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-4">
            A responsive portfolio website built with React and Tailwind CSS.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600 font-semibold">React</span>
            <a
              href="#"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors"
            >
              View
            </a>
          </div>
        </div>
      </div>

      {/* Duplicate for more projects */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src="/image/project2.png"
          alt="Project 2"
          className="w-full h-56 sm:h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">E-commerce App</h3>
          <p className="text-gray-600 mb-4">
            A full-stack e-commerce app with product management and payment integration.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600 font-semibold">MERN</span>
            <a
              href="#"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors"
            >
              View
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src="/image/project3.png"
          alt="Project 3"
          className="w-full h-56 sm:h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Blog Platform</h3>
          <p className="text-gray-600 mb-4">
            A modern blogging platform with user authentication and rich-text editor.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600 font-semibold">Next.js</span>
            <a
              href="#"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default page