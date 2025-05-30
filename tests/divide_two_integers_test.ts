import { assertEquals } from '@std/assert/equals'
import { divide } from '../src/divide_two_integers.ts'

Deno.test('example 1', () => assertEquals(divide(10, 3), 3))
Deno.test('example 2', () => assertEquals(divide(7, -3), -2))
Deno.test('example 3', () => assertEquals(divide(43, -8), -5))
