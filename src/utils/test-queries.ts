import {
    queryHelpers,
    buildQueries,
    Matcher,
    MatcherOptions,
    GetAllBy,
    GetErrorFunction,
  } from '@testing-library/react'
  
  // The queryAllByAttribute is a shortcut for attribute-based matchers
  // You can also use document.querySelector or a combination of existing
  // testing library utilities to find matching nodes for your query
  const queryAllByDataCy: GetAllBy<any[]> = (
    container: HTMLElement,
    id: Matcher,
    options?: MatcherOptions | undefined,
  ) => queryHelpers.queryAllByAttribute('data-cy', container, id, options)
  
  const getMultipleError: GetErrorFunction = (c, dataCyValue) =>
    `Found multiple elements with the data-cy attribute of: ${dataCyValue}`
  const getMissingError: GetErrorFunction = (c, dataCyValue) =>
    `Unable to find an element with the data-cy attribute of: ${dataCyValue}`
  
  const [
    queryByDataCy,
    getAllByDataCy,
    getByDataCy,
    findAllByDataCy,
    findByDataCy,
  ] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError)
  
  export {
    queryByDataCy,
    queryAllByDataCy,
    getByDataCy,
    getAllByDataCy,
    findAllByDataCy,
    findByDataCy,
  }