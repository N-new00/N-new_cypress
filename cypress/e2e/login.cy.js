describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/');//зашла на сайт
       cy.get('#mail').type('german@dolnikov.ru');//ввела верный логин
       cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
       cy.get('#loginButton').click();//нажала Войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю текст после авт.
       cy.get('#messageHeader').should('be.visible');//текст виден для пользователя
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
})
it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#forgotEmailButton').click();//нажала Забыли пароль
    cy.get('#mailForgot').type('german@dolnikov.ru');//ввела верную почту
    cy.get('#restoreEmailButton').click();//нажала Отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю текст после авт.
    cy.get('#messageHeader').should('be.visible');//текст виден для пользователя
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})
it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('german@dolnikov.ru');//ввела верный логин
    cy.get('#pass').type('iLoveqastudio10');//ввела неверный пароль
    cy.get('#loginButton').click();//нажала Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю текст после авт.
    cy.get('#messageHeader').should('be.visible');//текст виден для пользователя
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('ger@dolnikov.ru');//ввела неверный логин
    cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
    cy.get('#loginButton').click();//нажала Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю текст после авт.
    cy.get('#messageHeader').should('be.visible');//текст виден для пользователя
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//
})
it('Негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('germandolnikov.ru');//ввела почту без @
    cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
    cy.get('#loginButton').click();//нажала Войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю текст после авт.
    cy.get('#messageHeader').should('be.visible');//текст виден для пользователя
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//
})
it('Проверка на приведение к строчным буквам в логине ', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('GerMan@dolnikov.ru');//ввела логин c заглавными буквами
    cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
    cy.get('#loginButton').click();//нажала Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю текст после авт.
    cy.get('#messageHeader').should('be.visible');//текст виден для пользователя
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})
})