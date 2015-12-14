package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.Small;

public class SmallRoll {

    @Test
    public void noSmallRoll() {
        Roll roll = new Roll("2,2,6,4,5");
        Small small = new Small(roll);
        assertEquals(small.score(), 0);
    }
    @Test
    public void smallRoll() {
        Roll roll = new Roll("1,2,3,4,5");
        Small small = new Small(roll);
        assertEquals(small.score(), 15);
    }

    @Test
    public void bigRollShouldRetrun0() {
        Roll roll = new Roll("2,3,4,5,6");
        Small small = new Small(roll);
        assertEquals(small.score(), 0);
    }    
}
