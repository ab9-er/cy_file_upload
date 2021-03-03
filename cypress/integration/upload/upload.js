const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
const selectors = require('../../fixtures/selectors.json')
const fileList = ['amazing_file.txt', 'test_image.png', 'test_archive.tar.gz'];

Given(/^I am on the WeTransfer upload page$/, () => {
  cy.accept_gdpr_tnc()
});


When(/^I upload the file to get a transfer link$/, () => {
  cy.get(selectors.add_files)
    .attachFile(fileList)
    .get(selectors.receiver)
    .type(Cypress.env('receiver_email'))
    .get(selectors.sender)
    .type(Cypress.env('sender_email'))
    .get(selectors.message)
    .type(Cypress.env('sender_message'))
    .get(selectors.transfer_options)
    .click()
    .get(selectors.transfer_link_option)
    .click()
    .get(selectors.transfer_btn)
    .click()
});


Then(/^I get a transfer link as the confirmation$/, () => {
  cy.get(selectors.upload_complete)
    .should('exist')
    .and('contain', 'You\’re done!')

  cy.get(selectors.transfer_link_url)
    .should('exist')
    .should(($input) => {
      var transferUrl = $input.val()
      expect(transferUrl).to.include('https')
    })

  cy.get(selectors.message_content)
    .should(($messageEl) => {
      var messageContent = $messageEl.text()
      expect(messageContent).to.equal(Cypress.env('sender_message'))
    })

  cy.get(selectors.file_name)
    .each(($uploadedFile) => {
      var fileName = $uploadedFile.text()
      expect(fileName).to.be.oneOf(fileList)
    })
});
