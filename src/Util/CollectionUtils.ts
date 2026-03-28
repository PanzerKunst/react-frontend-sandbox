export function withoutNullish<T>(arr: (T | null | undefined)[] | null | undefined): T[] {
  if (!arr) {
    return []
  }

  return arr.reduce((res, el) => {
    if (el) {
      res.push(el)
    }

    return res
  }, [] as T[])
}

export function getKeyByValue<T>(object: Record<string, T>, value: T) {
  return Object.keys(object).find(key => object[key] === value)
}

export function createRecordFromArrays<T extends PropertyKey, U>(keys: T[], values: U[]): Record<T, U> {
  const record: Record<T, U> = {} as Record<T, U>

  if (keys.length !== values.length) {
    throw new Error("Keys and values must be of the same length")
  }

  for (let i = 0; i < keys.length; i++) {
    // @ts-expect-error TS2536: Type T | undefined cannot be used to index type Record<T, U>
    record[keys[i]] = values[i]
  }

  return record
}
