package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.Yahtzee;

public class YahtzeeRoll {

    @Test
    public void allTwos() {
        Roll roll = new Roll("2,2,2,2,2");
        Yahtzee yahtzee = new Yahtzee(roll);
        assertEquals(yahtzee.score(),50);

    }
    @Test
    public void allFoursShouldRetrun50() {
        Roll roll = new Roll("4,4,4,4,4");
        Yahtzee yahtzee = new Yahtzee(roll);
        assertEquals(yahtzee.score(),50);

    }    
    @Test
    public void notYahtzee() {
        Roll roll = new Roll("2,2,2,2,3");
        Yahtzee yahtzee = new Yahtzee(roll);
        assertEquals(yahtzee.score(),0);
    }


}
