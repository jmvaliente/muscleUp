import React from 'react'
import Navbar from './ui/components/Navbar'
import Card from './ui/components/Card'
import Register from './ui/components/Register'
import supabase from './services/supabase'

import useFetchData from './hooks/useFetchData'
import useGetUser from './hooks/useGetUser'

function App() {
  const user = useGetUser()
  const exercises = useFetchData()

  return (
    <div>
      <Navbar />
      {user.data.data?.user ? (
        <div className="flex flex-wrap justify-center">
          {exercises.data.map(exercise => (
            <Card key={exercise.id}>{exercise}</Card>
          ))}
        </div>
      ) : (
        <Register />
      )}
      <button onClick={() => supabase.auth.signOut()}>Log out</button>
    </div>
  )
}

export default App
