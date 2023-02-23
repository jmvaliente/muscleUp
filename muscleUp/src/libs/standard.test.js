import { Exercise } from './standard'

describe('Calculate 1RM', () => {
  it('Get 1Rm calculate with 80kg and 10 reps', () => {
    const exercise = new Exercise(80, 10)
    const rm = exercise.calculate1Rm(80, 10)
    expect(rm).toBe(107)
  })
  it('Get 1Rm calculate with 50kg and 5 reps', () => {
    const exercise = new Exercise(50, 5)
    const rm = exercise.calculate1Rm(50, 5)
    expect(rm).toBe(57)
  })
})

describe('Kilograms per repetition', () => {
  it('Should give the kilograms per repetition', () => {
    const exercise = new Exercise(50, 5, 0, 3, 10)
    const kg = exercise.calculateKgForReps()
    expect(kg).toBe(42.75)
  })

  it('Should give the kilograms per repetition when complete all rates success', () => {
    const exercise = new Exercise(50, 5, 1, 3, 10)
    const kg = exercise.calculateKgForReps()
    expect(kg).toBe(45.75)
  })
})
