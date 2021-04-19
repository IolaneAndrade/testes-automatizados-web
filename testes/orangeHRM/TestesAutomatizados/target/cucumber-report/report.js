$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastroUsuario"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastroUsuario"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba admin",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarAAbaAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao add",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo employer name \"Fiona Grace\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOCampoEmployerName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo username \"Joana\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOCampoUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo confirmar password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOCampoConfirmarPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botal Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotalSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema cadastra o usuario \"Joana\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaCadastraOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Acessar sistema",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Ad\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar senha \"ads\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem o usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemOUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@loginsucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Admin\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar senha \"admin123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta o usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaApresentaOUsuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TestandoActions.feature");
formatter.feature({
  "name": "Testar Actions",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@dropDown"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "name": "verificar dropDown da aba",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@dropDown"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o menu customfields",
  "keyword": "Quando "
});
formatter.match({
  "location": "TestandoActionsSteps.acionarOMenuCustomfields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela custom field",
  "keyword": "Entao "
});
formatter.match({
  "location": "TestandoActionsSteps.oSistemaApresentaATelaCustomField()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});