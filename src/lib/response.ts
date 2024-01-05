const Respond = (status: number, message: string) => {
  return ContentService.createTextOutput()
    .setContent(JSON.stringify({ status, message }))
    .setMimeType(ContentService.MimeType.JSON)
}

export const ErrorResponse = (message: string) => {
  return Respond(400, message)
}

export const JsonResponse = (json: any) => {
  return ContentService.createTextOutput()
    .setContent(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON)
}
