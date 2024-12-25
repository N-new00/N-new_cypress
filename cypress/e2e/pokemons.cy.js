describe('Покупка аватара', function () {                                //название 
    it('e2e тест на покупку нового аватара для тренера', function () {   //название теста
         cy.visit('https://pokemonbattle.ru/');                          //вошла на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');                   //ввела логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               //ввела пароль
         cy.get('button[type="submit"]').click();                        //нажала кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force : true }); //клик на аватар тренера
         cy.get('[href="/shop"]').click();                               //нажала кнопку Магазин
         cy.get('.available > button').first().click({ force : true });   //клик Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     //ввела номер карты
         cy.get('.k_input_ccv').type('125');                             //ввела CVV карты
         cy.get('.k_input_date').type('1225');                           //ввела срок действия карты
         cy.get('.k_input_name').type('NAME');                           //ввела имя владельца действия карты
         cy.get('.pay-btn').click();                                     //нажала кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            //ввела код подтверждения СМС
         cy.get('.payment__submit-button').click();                      //нажала кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     //проверила наличие и видимость сообщения о успешной покупке
     });
 })