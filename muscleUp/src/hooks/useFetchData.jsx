import { useState, useEffect } from 'react'
import supabase from '../services/supabase'

const useFetchData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
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
  }, [])
  return { data, error, loading }
}

export default useFetchData
