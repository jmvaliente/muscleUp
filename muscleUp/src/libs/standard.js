export class Exercise {
  constructor(rm, repsRm, stepsCompleted, rate, reps) {
    this.rm = rm
    this.repsRm = repsRm
    this.stepsCompleted = stepsCompleted
    this.rate = rate
    this.reps = reps
  }

  calculate1Rm() {
    return Math.round(this.rm / ((100 - this.repsRm * 2.5) / 100))
  }

  calculateKgForReps() {
    const rm = this.calculate1Rm()
    const totalRate = this.rate * this.stepsCompleted
    const total = ((100 - this.reps * 2.5) / 100) * rm
    if (this.stepsCompleted) {
      return total + totalRate
    } else {
      return total
    }
  }
}

export const calculate1Rm = (weight, reps) =>
  Math.round(weight / ((100 - reps * 2.5) / 100))

export const calculateKgForReps = (rm1, reps, rate, stepsCompleted) => {
  const totalRate = rate * stepsCompleted
  const total = ((100 - reps * 2.5) / 100) * rm1

  if (stepsCompleted) {
    return total + totalRate
  } else {
    return total
  }
}

const calculatePercentage = (rm1, weight) => (weight * 100) / rm1

const calculateWeightForPercentage = (maxWeight, percentage) =>
  maxWeight - (percentage * maxWeight) / 100

export const calculateRateForSteps = (
  rm1,
  sets,
  reps,
  rate,
  stepsCompleted,
) => {
  const maxWeightForReps = calculateKgForReps(rm1, reps, rate, stepsCompleted)
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
