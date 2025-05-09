// https://leetcode.com/problems/zigzag-conversion/description/
export function convert(str: string, num_rows: number): string
{
  // Container struct for the zig zap pattern
  const rows: Array<Array<string>> = []

  // Creating necessary number of rows
  for (let i = 0; i < num_rows; i++)
    rows.push([''] as Array<string>)

  // Each character gets put in the correct position in the zig zag pattern
  // This index goes up and down, representing the row we're currently on
  let row_idx = 0
  let direction: 'down' | 'up' = 'down'
  for (let i = 0; i < str.length; i++)
  {
    rows[row_idx].push(str[i])

    if (direction === 'down') row_idx++
    else row_idx--

    // If we've reached the lowest row, we go back up the row count
    if (row_idx >= num_rows - 1) direction = 'up'
    else if (row_idx <= 0) direction = 'down'
  }

  // Creating the final string by concatenating everything together
  return rows
    .map((row) => row.join(''))
    .join('')
}
