#language: pt
#encoding: UTF-8

@login @End2End
Funcionalidade: Acessar sistema

  Cenario: usuario invalido
    Quando eu informar o usuario "Ad"
    E informar senha "ads"
    E clicar no botao login
    Entao o sistema exibe a mensagem o usuario invalido

@loginsucesso
  Cenario: realizar login
    Quando eu informar o usuario "Admin"
    E informar senha "admin123"
    E clicar no botao login
    Entao o sistema apresenta o usuario logado
