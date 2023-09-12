import { TObject } from "./type";

export function unionBy<T, K>(...arrays: (T[] | ((item: T) => K))[]): T[] {
  const iteratee = arrays.pop();

  if (!Array.isArray(iteratee) && typeof iteratee !== "function") {
    return []; // return empty if iteratee is missing or invalid
  }

  const iterateeFn =
    typeof iteratee === "function"
      ? iteratee
      : (item: T) => item[iteratee as any];

  return ([] as T[])
    .concat(...(arrays as any))
    .filter(
      ((set: Set<K>) => (o: T) =>
        set.has(iterateeFn(o)) ? false : set.add(iterateeFn(o)))(new Set<K>()),
    );
}

export function removeDuplicatesByProperty<T extends TObject>(
  array: T[],
  property: keyof T,
): T[] {
  if (!Array.isArray(array) || typeof property !== "string") {
    throw new Error("Invalid input");
  }

  const uniqueIds = new Set();
  const unique: T[] = [];

  for (const element of array) {
    const propertyValue = element[property];
    if (!uniqueIds.has(propertyValue)) {
      uniqueIds.add(propertyValue);
      unique.push(element);
    }
  }

  return unique;
}

export function arrayIntersect<T>(arr1: T[], arr2: T[]) {
  return arr1.filter(function (item) {
    return arr2.includes(item);
  });
}
