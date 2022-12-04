const paginate = (model, query, defaultSort, request, response) => {
  const pageSize = +request.query.pageSize || 10
  const offset = +request.query.offset || 0

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
