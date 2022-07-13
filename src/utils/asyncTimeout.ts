const asyncTimeout = async (timeout: number): Promise<null> => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

export default asyncTimeout