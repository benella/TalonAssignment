const DEFAULT_PAGE_SIZE = 10
const DEFAULT_OFFSET = 10

/**
 * Responding with a paginated result of the given query
 * @param model
 * @param query
 * @param defaultSort
 * @param request
 * @param response
 */
const paginate = (model, query, defaultSort, request, response) => {
  const pageSize = +request.query.pageSize || DEFAULT_PAGE_SIZE
  const offset = +request.query.offset || DEFAULT_OFFSET

  model
    .find(query)
    .sort(request.query.sort || defaultSort)
    .skip(offset)
    .limit(pageSize)
    .then((events) => {
      model.countDocuments(query).then((count) => {
        response.json({
          objects: events,
          pageSize,
          offset,
          total: count
        })
      })
    })
}

module.exports = paginate
