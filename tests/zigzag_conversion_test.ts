import { assertEquals } from '@std/assert'
import { convert } from '../src/zigzag_conversion.ts'

Deno.test('example 1', () => assertEquals(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR'))

Deno.test('example 2', () => assertEquals(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI'))

Deno.test('example 3', () => assertEquals(convert('A', 1), 'A'))
