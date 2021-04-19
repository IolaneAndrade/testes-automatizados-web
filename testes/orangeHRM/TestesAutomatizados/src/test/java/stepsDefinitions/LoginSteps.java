package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;

public class LoginSteps {
	

	@Quando("eu informar o usuario {string}")
	public void euInformarOUsuario(String usuario) {
	    Na(LoginPage.class).informarCampoUsuario(usuario);
	}

	@E("informar senha {string}")
	public void informarSenha(String senha) {
	    Na(LoginPage.class).informarCampoSenha(senha);
	}
	
	@E("clicar no botao login")
	public void clicarNoBotaoLogin() {
	    Na(LoginPage.class).acionarBotaoLogin();	    
	}

	@Entao("o sistema exibe a mensagem o usuario invalido")
	public void oSistemaExibeAMensagemOUsuarioInvalido() {
		 assertEquals("Invalid credentials", driver.findElement(By.id("spanMessage")).getText());
	}

	@Entao("o sistema apresenta o usuario logado")
	public void oSistemaApresentaOUsuarioLogado() {
	    assertEquals("Dashboard", driver.findElement(By.xpath("//div[@id='content']/div/div[1]/h1")).getText());
	}

}
