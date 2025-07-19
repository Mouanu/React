import React from 'react'

const Card = ({name,btnText = "visit me"}) => {
    console.log({name})
  return (
      <div className="max-w-sm mx-auto bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 mt-10">
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        alt="Profile"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name} Biswas</h2>
        <p className="text-gray-600 mt-2">Frontend Developer • React Enthusiast 💻</p>
        <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
         {btnText }
        </button>
      </div>
    </div>
  )
}

export default Card
