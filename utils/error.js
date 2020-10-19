export const newError = (res, statusCode, details) => {
  console.log('Error', { statusCode, details })
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    details
  })
}
