import { assertEquals } from '@std/assert'
import { reverse } from '../src/reverse_integer.ts'

Deno.test('example 1', () =>
{
  const x = 123
  assertEquals(reverse(x), 321)
})

Deno.test('example 2', () =>
{
  const x = -123
  assertEquals(reverse(x), -321)
})

Deno.test('example 3', () =>
{
  const x = 120
  assertEquals(reverse(x), 21)
})

Deno.test('own test 1', () =>
{
  const x = 1234
  assertEquals(reverse(x), 4321)
})

Deno.test('big number', () =>
{
  const x = 123_456_789
  assertEquals(reverse(x), 987_654_321)
})

Deno.test('big negative number', () =>
{
  const x = -123_456_789
  assertEquals(reverse(x), -987_654_321)
})

Deno.test('out of range 1', () =>
{
  const x = 2_222_222_222
  assertEquals(reverse(x), 0)
})

Deno.test('out of range 2', () =>
{
  const x = 2_222_222_222
  assertEquals(reverse(x), 0)
})
