#language: pt
#encoding: UTF-8

@CadastroUsuario @End2End
Funcionalidade: Cadastrar usuario

  Cenario: cadastrar usuario
    Quando eu acionar a aba admin
    E acionar o botao add
    E informar o campo employer name "Fiona Grace"
    E informar o campo username "Joana"
    E informar o campo password "12345678"
    E informar o campo confirmar password "12345678"
    E acionar o botal Salvar
    Entao o sistema cadastra o usuario "Joana"

