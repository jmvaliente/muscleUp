import React from 'react'
const enhance = View => {
  const Card = ({ children }) => {
    return <View props={children} />
  }
  return Card
}

export default enhance
