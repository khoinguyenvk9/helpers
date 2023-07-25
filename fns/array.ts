export function unionBy<T, K>(...arrays: (T[] | ((item: T) => K))[]): T[] {
  const iteratee = arrays.pop();

  if (!Array.isArray(iteratee) && typeof iteratee !== "function") {
    return []; // return empty if iteratee is missing or invalid
  }

  const iterateeFn =
    typeof iteratee === "function"
      ? iteratee
      : (item: T) => item[iteratee as any];

  return ([] as T[]).concat(...(arrays as any)).filter(
    (
      (set: Set<K>) => (o: T) =>
        set.has(iterateeFn(o)) ? false : set.add(iterateeFn(o))
    )(new Set<K>())
  );
}
