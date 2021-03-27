export const genericError = (res, err) => {
  console.error('err', err)
  return res.status(500).json({
    error: err,
    message: 'Internal Server Error'
  })
}

export const notFound = (res, type) => {
  return res.status(404).json({
    msg: `${type} not found`
  })
}

export const notAuthorized = (res) => {
  return res.status(403).json({
    msg: 'Not authorized token'
  })
}
