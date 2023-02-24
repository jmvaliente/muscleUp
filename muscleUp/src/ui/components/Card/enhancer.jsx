import React from 'react'
import PropTypes from 'prop-types'
import { Exercise, Sets } from '../../../libs/standard'

const enhance = View => {
  const Card = ({ children }) => {
    const exercise = new Exercise(children)
    const setsForExercise = new Sets(children)

    const routine = {
      maxWeight: exercise.calculateKgForReps(),
      minWeight: exercise.calculateMinWeightForReps(),
      weightForSets: setsForExercise.weightForSets(),
    }
    return <View data={children} routine={routine} />
  }

  Card.propTypes = {
    children: PropTypes.object.isRequired,
  }
  return Card
}

export default enhance
