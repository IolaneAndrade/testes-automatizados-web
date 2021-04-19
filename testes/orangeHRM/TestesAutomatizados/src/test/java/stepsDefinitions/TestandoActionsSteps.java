package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicalPage;

public class TestandoActionsSteps {

@Quando("acionar o menu customfields")
public void acionarOMenuCustomfields() {
	Na(TelaInicalPage.class).acionarMenuField();
}

@Entao("o sistema apresenta a tela custom field")
public void oSistemaApresentaATelaCustomField() {
    assertEquals("Defined Custom Fields", driver.findElement(By.xpath("//div[@id='customFieldListPane']/div[1]/h1")).getText());
}

}
