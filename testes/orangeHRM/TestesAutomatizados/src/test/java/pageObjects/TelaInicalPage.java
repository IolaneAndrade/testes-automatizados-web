package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import static utils.Utils.*;

public class TelaInicalPage extends BasePage {
	
	//BasePage
	public void acionarAbaAdmin() {
		abaAdmin.click();
	}
	
	//Elementos
	@FindBy(name = "btnAdd")
	private WebElement btnAdd;
	
	public void acionarBtnAdd() {
		btnAdd.click();
		
	}
	
	public void acionarMenuField() {
		Actions acao = new Actions(driver);
		acao.moveToElement(abaPim).build().perform();
		acao.moveToElement(menuConfiguration).build().perform();
		acao.moveToElement(menuField).click().build().perform();
	}

}
