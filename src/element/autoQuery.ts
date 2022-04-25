/**
 * @example :fetch-suggestions="(q,c) => autoQuery(q,c,a)"
 * @param queryString
 * @param queryCallback
 * @param queryArray
 */
export const autoQuery = (queryString: string, queryCallback: any, queryArray: any[]) => {
  queryCallback(queryString ? queryArray.filter((state) => state.value.toUpperCase().match(queryString.toUpperCase())) : queryArray)
}
