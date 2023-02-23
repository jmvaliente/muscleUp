import React, { useState } from 'react'
import { Spinner, Button } from 'flowbite-react'

import Navbar from './ui/components/Navbar'
import Card from './ui/components/Card'
import ModalRegister from './ui/modal/ModalRegister'
import Register from './ui/components/Register'
import supabase from './services/supabase'

import useFetchData from './hooks/useFetchData'
import useGetUser from './hooks/useGetUser'

function App() {
  const [isVisible, setVisible] = useState(false)
  const user = useGetUser()
  const exercises = useFetchData()
  const isDev = import.meta.env.VITE_ENVIRONMENT === 'DEV'

  const isLoadingUser = () =>
    user.loading ? (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    ) : null

  const isLoadingExercises = () =>
    exercises.loading ? (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    ) : (
      <>
        <div className="flex flex-wrap justify-center self-center">
          {exercises.data.map(exercise => (
            <Card key={exercise.id}>{exercise}</Card>
          ))}
          <div className="flex justify-center p-5">
            <div className="rounded-xl shadow-lg bg-white max-w-sm">
              <div className="justify-center flex items-center h-full">
                <Button
                  outline={true}
                  gradientDuoTone="purpleToBlue"
                  onClick={() => setVisible(true)}
                >
                  Add new Exercise
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    )

  return (
    <div>
      <ModalRegister isVisible={isVisible} setVisible={setVisible} />
      {user.loading ? (
        isLoadingUser()
      ) : (
        <div>
          <Navbar />
          {user.data.data?.user || isDev ? isLoadingExercises() : <Register />}
          <button onClick={() => supabase.auth.signOut()}>Log out</button>
        </div>
      )}
    </div>
  )
}

export default App
