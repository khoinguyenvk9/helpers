export function groupBy(arr: any, cb: Function) {
  if (!Array.isArray(arr)) {
    throw new Error("expected an array for first argument");
  }

  if (typeof cb !== "function") {
    throw new Error("expected a function for second argument");
  }

  let result: any;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let bucketCategory = cb(item);
    let bucket = result[bucketCategory];

    if (!Array.isArray(bucket)) {
      result[bucketCategory] = [item];
    } else {
      result[bucketCategory].push(item);
    }
  }

  return result;
}

export const groupByKey = <T, K>(
  collection: T[],
  iteratee: (item: T) => K
): Record<string, T[]> => {
  return collection.reduce((result: Record<string, T[]>, item: T) => {
    const key = String(iteratee(item));
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

export const minBy = (collection: any, key: string) => {
  // slower because need to create a lambda function for each call...
  const select = (a: any, b: any) => (a[key] <= b[key] ? a : b);
  return collection.reduce(select, {});
};

export const maxBy = (collection: any, key: string) => {
  // slower because need to create a lambda function for each call...
  const select = (a: any, b: any) => (a[key] >= b[key] ? a : b);
  return collection.reduce(select, {});
};

type Key = string | number;
type Iteratee<T> = (item: T) => Key;

export const keyBy = <T>(
  array: T[],
  iteratee: keyof T | Iteratee<T>
): { [k in Key]: T } =>
  array.reduce((result, item) => {
    const keyValue =
      typeof iteratee === "function" ? iteratee(item) : item[iteratee];
    result[keyValue as string] = item;
    return result;
  }, {} as { [k in Key]: T });
