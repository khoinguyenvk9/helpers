
import { cloneDeep } from './package'
import { TObject } from './type'

export const get = (obj: unknown, path: any, defaultValue?: any) => {
  const travel = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res: unknown, key: string) => (res !== null && res !== undefined ? res[key] : res), obj)
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}

export const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length

export function omit(obj: TObject, keys: string[]): TObject {
  const newObj = cloneDeep(obj)
  keys.forEach((key) => {
    const keyParts = key.split('.')
    let currentObj = newObj
    for (let i = 0; i < keyParts.length - 1; i++) {
      currentObj = currentObj[keyParts[i]]
    }
    delete currentObj[keyParts[keyParts.length - 1]]
  })
  return newObj
}
