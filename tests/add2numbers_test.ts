import { assertEquals } from '@std/assert'
import { add2numbers } from '../src/add2nums.ts'

Deno.test('example 1', () =>
{
  const l1 = [2, 4, 3]
  const l2 = [5, 6, 4]
  assertEquals(add2numbers(l1, l2), [7, 0, 8])
})

Deno.test('example 2', () =>
{
  const l1 = [0]
  const l2 = [0]
  assertEquals(add2numbers(l1, l2), [0])
})

Deno.test('example 3', () =>
{
  const l1 = [9, 9, 9, 9, 9, 9, 9]
  const l2 = [9, 9, 9, 9]
  assertEquals(add2numbers(l1, l2), [8, 9, 9, 9, 0, 0, 0, 1])
})
