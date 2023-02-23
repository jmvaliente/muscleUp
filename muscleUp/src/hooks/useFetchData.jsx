import { useState, useEffect } from 'react'
import supabase from '../services/supabase'
import { exercises } from '../services/mock/data'

const useFetchData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const isDev = import.meta.env.VITE_ENVIRONMENT === 'DEV'

  useEffect(() => {
    if (isDev) {
      setData(exercises)
    } else {
      supabase.auth
        .getUser()
        .then(currentUser => {
          setLoading(true)
          supabase
            .from('Exercise')
            .select('*')
            .eq('user_id', currentUser.data.user.id)
            .then(response => {
              setData(response.data)
              setLoading(false)
            })
        })
        .catch(responseError => setError(responseError))
    }
  }, [])
  return { data, error, loading }
}

export default useFetchData
