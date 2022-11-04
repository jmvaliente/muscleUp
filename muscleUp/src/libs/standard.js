export const calculate1Rm = (weight, reps) =>
  weight / ((100 - reps * 2.5) / 100)

export const calculateKgForReps = (rm1, reps) =>
  ((100 - reps * 2.5) / 100) * rm1

const calculatePercentage = (rm1, weight) => (weight * 100) / rm1

const calculateWeightForPercentage = (maxWeight, percentage) =>
  maxWeight - (percentage * maxWeight) / 100

export const calculateRateForSteps = (rm1, steps, reps) => {
  const maxWeightForReps = calculateKgForReps(rm1, reps)
  const minWeightForReps = calculateWeightForPercentage(
    maxWeightForReps,
    (steps - 1) * 10,
  )
  const weightForSteps = []

  for (let i = 0; i < steps; i++) {
    const step = i
    const weight = calculateWeightForPercentage(maxWeightForReps, step * 10)
    const performance = calculatePercentage(maxWeightForReps, weight)
    weightForSteps.unshift({ weight, performance, step: step + 1 })
  }

  return {
    maxWeight: maxWeightForReps,
    minWeight: minWeightForReps,
    weightForSteps,
  }
}
