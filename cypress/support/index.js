
// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-tab'
import 'cypress-xpath'
import 'jsonschema'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', () => false)

// function especialCharMask(especialChar) {
//   let tratado = especialChar.replace(/[áàãâä]/g, 'a')
//   tratado = tratado.replace(/[éèêë]/g, 'e')
//   tratado = tratado.replace(/[íìîï]/g, 'i')
//   tratado = tratado.replace(/[óòõôö]/g, 'o')
//   tratado = tratado.replace(/[úùûü]/g, 'u')
//   tratado = tratado.replace(/[ç]/g, 'c')
//   tratado = tratado.replace(/_+/g, '_')
//   tratado = tratado.replace(/[/'?]/g, '')
//   return tratado
// }

// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//       const parentTitle = especialCharMask(runnable.parent.title)
//       const testTitle = especialCharMask(test.title)
//       const screenshotFileName = `${parentTitle} -- ${testTitle}`
//       + ' (failed).png'
//       addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
//   }
// })

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  whitelist: () => true,
});



       
