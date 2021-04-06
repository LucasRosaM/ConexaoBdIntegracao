export default class BaseFactory {
  static randomInteger(digits){
    if (digits === 1) {
      return Math.floor(Math.random() * 9) + 1
    } else {
      let aux = '1'
      for(let i=1; i<digits; i++)
        aux+= '0'
      return Math.floor(Math.random() * 9) + parseInt(aux)
    }
  }
}
