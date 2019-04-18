const {Selector} = require('testcafe');

exports.confirmationTable = {
    campoNombre: function() {
        //return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p')
        return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p')
    },
    campoEmail: function() {
        return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p').nth(1)
    },
    campoExperiencia: function() {
        return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p').nth(3)
    },
    campoMensaje: function() {
        return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p').nth(6)
    },
    mensajeConfirmacion: function() {
        return Selector('#contact-form-2599').child('h3').with({ boundTestRun: testController }).child('h3')
    }

}