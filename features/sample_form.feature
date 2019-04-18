Feature: Sample Form

    As a user
    I want to fill out the form
    So that the company recieves my information

    Scenario: Form Submission - Required Fields Only
        Given Navego a la pagina de ejemplo
        When lleno el campo nombre con "Nicolas Briones"
        And lleno el campo email con "nico.briones@gmail.com"
        And lleno el campo comentario con "Esto es un comentario de prueba"
        And Selecciono "3-5"
        And hago clic en el boton submit
        Then veo "Nicolas Briones" en el campo nombre del formulario de envio
        And veo "nico.briones@gmail.com" en el campo email del formulario de envio
        And veo "3-5" en el campo experiencia del formulario de envio
        And veo "Esto es un comentario de prueba" en el campo comentario del formulario de envio