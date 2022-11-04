import React from 'react'
import PropTypes from 'prop-types'
const enhance = View => {
  const Card = ({ children }) => {
    return <View data={children} />
  }

  Card.propTypes = {
    children: PropTypes.object.isRequired,
  }
  return Card
}

export default enhance
