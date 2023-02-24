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

export class Sets extends Exercise {
  constructor(rm, repsRm, stepsCompleted, rate, reps, sets) {
    super(rm, repsRm, stepsCompleted, rate, reps, sets)
  }

  weightForSets() {
    const maxWeightForReps = this.calculateKgForReps()
    const weightForSets = []
    for (let i = 0; i < this.sets; i++) {
      const set = i
      const weight = this.calculateWeightForPercentage(
        maxWeightForReps,
        set * this.reps,
      ).toFixed(1)
      const performance = Math.round(
        this.calculatePercentage(maxWeightForReps, weight),
      )
      weightForSets.unshift({ weight, performance, set: set + 1 })
    }
    return weightForSets
  }
}
