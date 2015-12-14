package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.ThreeKind;

public class ThreeKindRoll {

    @Test
    public void noThreeKind() {
        Roll roll = new Roll("2,2,6,4,5");
        ThreeKind threeKind = new ThreeKind(roll);
        assertEquals(threeKind.score(), 0);
    }
    @Test
    public void threeKind() {
        Roll roll = new Roll("2,2,6,6,6");
        ThreeKind threeKind = new ThreeKind(roll);
        assertEquals(threeKind.score(), 18);
    }
    
}
