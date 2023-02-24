import React from 'react'
import PropTypes from 'prop-types'
import { Exercise, Sets } from '../../../libs/standard'

const enhance = View => {
  const Card = ({ children }) => {
    const { repsRm1, rm1, sets, reps, rate, stepsCompleted } = children
    const exercise = new Exercise(
      rm1,
      repsRm1,
      stepsCompleted,
      rate,
      reps,
      sets,
    )
    const setsForExercise = new Sets(
      rm1,
      repsRm1,
      stepsCompleted,
      rate,
      reps,
      sets,
    )

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
