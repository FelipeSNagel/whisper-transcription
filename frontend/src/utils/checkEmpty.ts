export default function checkEmpty(
  value?: number | string | null | [] | Record<string | number, string | number>
): boolean {
  return (
    value === '' ||
    value === null ||
    value === undefined ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  )
}
