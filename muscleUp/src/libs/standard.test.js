import { Exercise, Sets } from './standard'

const DATA = {
  rm1: 50,
  rate: 4,
  sets: 4,
  repsRm1: 5,
  reps: 10,
  stepsCompleted: 0,
}

describe('Calculate 1RM', () => {
  it('Get 1Rm calculate with 80kg and 10 reps', () => {
    const UNIT_DATA = {
      rm1: 80,
      repsRm1: 10,
    }
    const exercise = new Exercise(UNIT_DATA)
    const rm = exercise.calculate1Rm()
    expect(rm).toBe(107)
  })
  it('Get 1Rm calculate with 50kg and 5 reps', () => {
    const exercise = new Exercise(DATA)
    const rm = exercise.calculate1Rm()
    expect(rm).toBe(57)
  })
})

describe('Kilograms per repetition', () => {
  it('Should give the kilograms per repetition', () => {
    const exercise = new Exercise(DATA)
    const kg = exercise.calculateKgForReps()
    expect(kg).toBe(42.8)
  })

  it('Should give the kilograms per repetition when complete all rates success', () => {
    const UNIT_DATA = {
      rm1: 50,
      rate: 3,
      repsRm1: 5,
      reps: 10,
      stepsCompleted: 1,
    }
    const exercise = new Exercise(UNIT_DATA)
    const kg = exercise.calculateKgForReps()
    expect(kg).toBe(45.8)
  })
})

describe('Kilograms per sets', () => {
  it('Should give the kilograms per sets', () => {
    const exercise = new Exercise(DATA)
    const maxWeight = exercise.calculateKgForReps()
    const minWeight = exercise.calculateMinWeightForReps()
    expect(maxWeight).toBe(42.8)
    expect(minWeight).toBe(30)
  })
})

describe('Sets per works', () => {
  it('Should give total sets per work', () => {
    const expected = [
      { weight: '38.5', performance: 90, set: 2 },
      { weight: '30.0', performance: 70, set: 4 },
    ]
    const sets = new Sets(DATA)
    const setsForExercise = sets.weightForSets()
    expect(setsForExercise).toEqual(expect.arrayContaining(expected))
  })
})
