package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.FourKind;

public class FourKindRoll {

    @Test
    public void noFourKind() {
        Roll roll = new Roll("2,2,6,4,5");
        FourKind fourKind = new FourKind(roll);
        assertEquals(fourKind.score(), 0);
    }
    @Test
    public void fourKind() {
        Roll roll = new Roll("2,2,2,2,6");
        FourKind fourKind = new FourKind(roll);
        assertEquals(fourKind.score(), 8);
    }
    @Test
    public void fourKindShouldReturn16() {
        Roll roll = new Roll("4,4,2,4,4");
        FourKind fourKind = new FourKind(roll);
        assertEquals(fourKind.score(), 16);
    }    
    @Test
    public void allSixShouldReturn24() {
        Roll roll = new Roll("6,6,6,6,6");
        FourKind fourKind = new FourKind(roll);
        assertEquals(fourKind.score(), 24);
    }    
}
