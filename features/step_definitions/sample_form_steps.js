const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const formConfirmationPage = require('../support/pages/form_confirmation_page.js')
const formSubmitPage = require('../support/pages/form_submit_page.js')

Given('Navego a la pagina de ejemplo', async function () {
    await testController.navigateTo('http://www.globalsqa.com/samplepagetest/')
});

When('lleno el campo nombre con {string}', async function (nombre) {
    await testController.typeText(formSubmitPage.submitForm.campoNombre(), nombre)
});

When('lleno el campo email con {string}', async function (email) {
    //const emailField  = Selector('[id="g2599-email"]').with({boundTestRun: testController});

    await testController.typeText(formSubmitPage.submitForm.campoEmail(), email)
});

When('lleno el campo comentario con {string}', async function (comentario) {
    //const commentBox = Selector('#contact-form-comment-g2599-comment').with({boundTestRun: testController});
   //console.log("prueba")
    await testController.typeText(formSubmitPage.submitForm.campoComentario(), comentario)
});

When('Selecciono {string}', async function (experiencia) {
    //const experienceSelect = Selector('#g2599-experienceinyears').with({boundTestRun: testController});
    //const experienceOption = experienceSelect.find('option').with({boundTestRun: testController});

    await testController
        .click(formSubmitPage.submitForm.comboBoxExperiencia())
        .click(formSubmitPage.submitForm.opcionExperiencia().withText(experiencia))
});

When('hago clic en el boton submit', async function () {
    //const submitButton = Selector('input.pushbutton-wide').with({boundTestRun: testController});
    await testController.click(formSubmitPage.submitForm.botonSubmit())
});

Then('veo {string} en el campo nombre del formulario de envio', async function (nombre) {
    await testController.expect(formConfirmationPage.confirmationTable.campoNombre().innerText).contains(nombre)
});

Then('veo {string} en el campo email del formulario de envio', async function (email) {
    await testController.expect(formConfirmationPage.confirmationTable.campoEmail().innerText).contains(email)
});

Then('veo {string} en el campo experiencia del formulario de envio', async function (experiencia) {
    await testController.expect(formConfirmationPage.confirmationTable.campoExperiencia().innerText).contains(experiencia)
});

Then('veo {string} en el campo comentario del formulario de envio', async function (mensaje) {
    await testController.expect(formConfirmationPage.confirmationTable.campoMensaje().innerText).contains(mensaje)
});

Then('veo {string} message', async function (confirmacion) {
    await testController.expect(formConfirmationPage.confirmationTable.mensajeConfirmacion().contains(confirmacion))
});