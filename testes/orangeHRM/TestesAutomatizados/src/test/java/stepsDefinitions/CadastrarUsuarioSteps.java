package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CadastrarUsuarioPage;
import pageObjects.TelaInicalPage;

public class CadastrarUsuarioSteps {
	
	@Quando("eu acionar a aba admin")
	public void euAcionarAAbaAdmin() {
	    Na(TelaInicalPage.class).acionarAbaAdmin();
	}

	@E("acionar o botao add")
	public void acionarOBotaoAdd() {
		Na(TelaInicalPage.class).acionarBtnAdd();
	}

	@E("informar o campo employer name {string}")
	public void informarOCampoEmployerName(String employer) {
		Na(CadastrarUsuarioPage.class).informarCampoEmployer(employer);
	}

	@E("informar o campo username {string}")
	public void informarOCampoUsername(String usarname) {
		Na(CadastrarUsuarioPage.class).informarCampoUsername(usarname);
	}

	@E("informar o campo password {string}")
	public void informarOCampoPassword(String password) {
		Na(CadastrarUsuarioPage.class).informarCampoPassword(password);
	}

	@E("informar o campo confirmar password {string}")
	public void informarOCampoConfirmarPassword(String confirmarPassword) {
		Na(CadastrarUsuarioPage.class).informarCampoConfirmarPassword(confirmarPassword);
	}
	
	@E("acionar o botal Salvar")
	public void acionarOBotalSalvar() {
		Na(CadastrarUsuarioPage.class).acionarBotaoSalvar();
	}

	@Entao("o sistema cadastra o usuario {string}")
	public void oSistemaCadastraOUsuario(String usarname) {
	    assertTrue(driver.findElement(By.xpath("//a[text()='"+usarname+"']")).isDisplayed());
	}

}
