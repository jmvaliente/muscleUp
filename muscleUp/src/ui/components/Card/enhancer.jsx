import React from 'react'
import PropTypes from 'prop-types'
import { calculateRateForSteps, calculate1Rm } from '../../../libs/standard'

const enhance = View => {
  const Card = ({ children }) => {
    const { repsRm1, rm1, sets, reps, rate, stepsCompleted } = children
    const rm1Real = calculate1Rm(rm1, repsRm1, rate, stepsCompleted)
    const routine = calculateRateForSteps(
      rm1Real,
      sets,
      reps,
      rate,
      stepsCompleted,
    )
    return <View data={children} routine={routine} />
  }

  Card.propTypes = {
    children: PropTypes.object.isRequired,
  }
  return Card
}

export default enhance
