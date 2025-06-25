import React from 'react'

const ProfileCard = () => {
  return (
    <div>
        <Pro
        name="Dodo"
        age={20}
        isMarried={false}>
            <h2>Hola re hola</h2>
        </Pro>
        <Pro
        name="Dida"
        age={21}
        isMarried={true}>
            <h2>Hola re holu</h2>
        </Pro>
      
    </div>
  )
}
function Pro({name, age, isMarried, children}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p className="text-gray-700">Age: {age}</p>
        <p className="text-gray-700">Married: {isMarried ? "Yes" : "No"}</p>
        {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default ProfileCard
