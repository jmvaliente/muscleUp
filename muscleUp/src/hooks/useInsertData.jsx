import { useState } from 'react'
import supabase from '../services/supabase'

const useInsertData = progressData => {
  console.log(progressData)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  setLoading(true)
  supabase
    .from('Exercise')
    .insert(progressData)
    .then(response => setData(response))
    .catch(responseError => setError(responseError))
  setLoading(false)
  return { data, error, loading }
}

export default useInsertData
