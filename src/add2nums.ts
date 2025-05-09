// https://leetcode.com/problems/add-two-numbers/description/
export function add2numbers(l1: Array<number>, l2: Array<number>): Array<number>
{
  let a = 0
  let b = 0

  function list_to_number(list: Array<number>): number
  {
    return list
      .map((n, i) => n * Math.pow(10, i))
      .reduce((Σ, σ) => Σ + σ)
  }

  a = list_to_number(l1)
  b = list_to_number(l2)

  const Σ = a + b

  return Σ
    .toString()
    .split('')
    .reverse()
    .map((c) => parseInt(c))
}

export function add2numbers_compact(l1: Array<number>, l2: Array<number>): Array<number>
{
  return (
    l1
      .map((n, i) => n * Math.pow(10, i))
      .reduce((Σ, σ) => Σ + σ)
    + l2
      .map((n, i) => n * Math.pow(10, i))
      .reduce((Σ, σ) => Σ + σ)
  )
    .toString()
    .split('')
    .reverse()
    .map((c) => parseInt(c))
}
