package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CadastrarUsuarioPage {
	
	@FindBy(id = "systemUser_employeeName_empName")
	private WebElement campoEmployer;
	
	@FindBy(name = "systemUser[userName]")
	private WebElement campoUsername;
	
	@FindBy(name = "systemUser[password]")
	private WebElement campoPassword;
	
	@FindBy(name = "systemUser[confirmPassword]")
	private WebElement campoConfirmarPassword;
	
	@FindBy(name = "btnSave")
	private WebElement botaoSalvar;
	
	public void informarCampoEmployer(String employer) {
		campoEmployer.sendKeys(employer);
		
	}
	
	public void informarCampoUsername(String username) {
		campoUsername.sendKeys(username);
		
	}
	
	public void informarCampoPassword(String password) {
		campoPassword.sendKeys(password);
		
	}
	
	public void informarCampoConfirmarPassword(String confirmarPassword) {
		campoConfirmarPassword.sendKeys(confirmarPassword);
		
	}
	
	public void acionarBotaoSalvar() {
		botaoSalvar.click();
		
	}
	

}
