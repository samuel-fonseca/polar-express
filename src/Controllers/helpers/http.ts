
export const abort = (statusCode: number, message: string) => {
    throw {
        status: statusCode,
        message: message
    }
}
