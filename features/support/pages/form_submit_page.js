const {Selector} = require('testcafe');

exports.submitForm = {
    campoNombre: function() {
        return Selector('#g2599-name').with({ boundTestRun: testController })
    },
    campoEmail: function() {
        return Selector('[id="g2599-email"]').with({boundTestRun: testController})
    },
    comboBoxExperiencia: function() {
        return Selector('#g2599-experienceinyears').with({boundTestRun: testController})
    },
    opcionExperiencia: function() {
        return this.comboBoxExperiencia().find('option').with({boundTestRun: testController})
    },
    campoComentario: function() {
        return Selector('#contact-form-comment-g2599-comment').with({boundTestRun: testController})
    },
    botonSubmit: function() {
        return Selector('input.pushbutton-wide').with({boundTestRun: testController})
    }

}