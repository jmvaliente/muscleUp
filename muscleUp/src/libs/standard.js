export const calculate1Rm = (weight, reps) =>
  weight / ((100 - reps * 2.5) / 100) // 2.5 incremental improvement?

export const calculateKgForReps = (rm1, reps) =>
  ((100 - reps * 2.5) / 100) * rm1

const calculatePercentage = (rm1, weight) => (weight * 100) / rm1

const calculateWeightForPercentage = (maxWeight, percentage) =>
  maxWeight - (percentage * maxWeight) / 100

export const calculateRateForSteps = (rm1, sets, reps) => {
  const maxWeightForReps = calculateKgForReps(rm1, reps)
  const minWeightForReps = calculateWeightForPercentage(
    maxWeightForReps,
    (sets - 1) * 10,
  )
  const weightForSets = []

  for (let i = 0; i < sets; i++) {
    const set = i
    const weight = calculateWeightForPercentage(
      maxWeightForReps,
      set * reps,
    ).toFixed(1)
    const performance = Math.round(
      calculatePercentage(maxWeightForReps, weight),
    )
    weightForSets.unshift({ weight, performance, set: set + 1 })
  }

  return {
    maxWeight: maxWeightForReps.toFixed(1),
    minWeight: minWeightForReps.toFixed(1),
    weightForSets,
  }
}
