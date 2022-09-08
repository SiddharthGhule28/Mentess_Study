interface CustomResponse {
    valid: boolean
    error: string
   }
   const errorResponse = (): CustomResponse => {
    return { valid: false, error: 'error occurred' }
   
   }

const validator=(() => errorResponse())
console.log(validator().valid) 
   //=> false
   console.log(validator().error)