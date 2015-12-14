package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.Large;

public class LargeRoll {

    @Test
    public void noBigRoll() {
        Roll roll = new Roll("2,2,6,4,5");
        Large bigRoll = new Large(roll);
        assertEquals(bigRoll.score(), 0);
    }
    @Test
    public void bigRoll() {
        Roll roll = new Roll("2,3,4,5,6");
        Large bigRoll = new Large(roll);
        assertEquals(bigRoll.score(), 20);
    }
    @Test
    public void smallRollShouldRetrun0() {
        Roll roll = new Roll("1,2,3,4,5");
        Large bigRoll = new Large(roll);
        assertEquals(bigRoll.score(), 0);
    }
 
}
