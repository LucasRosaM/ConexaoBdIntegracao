// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { validate } from 'jsonschema'

Cypress.Commands.add('validateSchema', (res, schema) => {
  cy.fixture(`schema/${schema}`).as('dataLoader').then(schema => {
    const validation = validate(res, schema, {required: true, nestedErrors: true})
    let errors = ''
    if (!validation.valid) {
      errors += validation.errors.map(err => {
        return '\n' + err.message
      })
      throw new Error('SCHEMA VALIDATION ERROR: ' + errors)
    }
  })
})
