export class Exercise {
  constructor(rm, repsRm, stepsCompleted, rate, reps, sets) {
    this.rm = rm
    this.repsRm = repsRm
    this.stepsCompleted = stepsCompleted
    this.rate = rate
    this.reps = reps
    this.sets = sets
  }

  calculate1Rm() {
    return Math.round(this.rm / ((100 - this.repsRm * 2.5) / 100))
  }

  calculateKgForReps() {
    const rm = this.calculate1Rm()
    const totalRate = this.rate * this.stepsCompleted
    const total = ((100 - this.reps * 2.5) / 100) * rm
    const totalRouned = Math.round(total * 10) / 10
    if (this.stepsCompleted) {
      return totalRouned + totalRate
    } else {
      return totalRouned
    }
  }

  calculateWeightForPercentage(weight, percentage) {
    const result = weight - (percentage * weight) / 100
    return Number(result.toFixed(1))
  }

  calculatePercentage(rm, weight) {
    return (weight * 100) / rm
  }

  calculateMinWeightForReps() {
    const result = this.calculateWeightForPercentage(
      this.calculateKgForReps(),
      (this.sets - 1) * 10,
    )
    return Number(result.toFixed(1))
  }
}

export class Sets {
  constructor(rm, repsRm, stepsCompleted, rate, reps, sets) {
    this.exercise = new Exercise(rm, repsRm, stepsCompleted, rate, reps, sets)
  }

  weightForSets() {
    const maxWeightForReps = this.exercise.calculateKgForReps()
    const weightForSets = []
    for (let i = 0; i < this.exercise.sets; i++) {
      const set = i
      const weight = this.exercise
        .calculateWeightForPercentage(
          maxWeightForReps,
          set * this.exercise.reps,
        )
        .toFixed(1)
      const performance = Math.round(
        this.exercise.calculatePercentage(maxWeightForReps, weight),
      )
      weightForSets.unshift({ weight, performance, set: set + 1 })
    }
    return weightForSets
  }
}
