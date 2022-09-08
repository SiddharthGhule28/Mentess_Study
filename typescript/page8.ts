class Pangram {
    input: string
  
    constructor(input: string) {
      this.input = input.toLowerCase()
    }
  
    isPangram(){
        const letters = this.input.replace(/[^a-z]/g, '')
      return new Set(letters).size === 26
      
    }
  }
  
const Pangram1 = new Pangram('A quick brown fox jumps over the lazy dog')
console.log(Pangram1.isPangram())
const Pangram2 = new Pangram('hcvcyvgdcDZcydcdhzcYDcyciowdsbjd')
console.log(Pangram2.isPangram())