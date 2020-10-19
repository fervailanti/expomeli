export const newSuccessful = (res, statusCode, jsonResponse) => {
  res.status(statusCode).json(jsonResponse)
}
