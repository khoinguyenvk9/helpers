
import { get } from './object'
import { ObjectType, Primitive } from './type'

export function cloneDeep<T extends Primitive | ObjectType>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value
  }

  const cloned: ObjectType = Array.isArray(value) ? [] : {}

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const propertyValue = get(value, key) as any
      cloned[key] = cloneDeep(propertyValue)
    }
  }

  return cloned as T
}
