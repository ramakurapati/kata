package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.TwoPairs;

public class TwoPairRoll {

    @Test
    public void onePair() {
        Roll roll = new Roll("2,2,6,4,5");
        TwoPairs twoPairs = new TwoPairs(roll);
        assertEquals(twoPairs.score(), 0);
    }

    @Test
    public void twoPairs() {
        Roll roll = new Roll("2,2,6,6,3");
        TwoPairs twoPairs = new TwoPairs(roll);
        assertEquals(twoPairs.score(), 16);
    }

    @Test
    public void twoPairsWithOneTripple() {
        Roll roll = new Roll("2,2,3,3,3");
        TwoPairs twoPairs = new TwoPairs(roll);
        assertEquals(twoPairs.score(), 10);
    }
    @Test
    public void noPairs() {
        Roll roll = new Roll("1,2,3,4,5");
        TwoPairs twoPairs = new TwoPairs(roll);
        assertEquals(twoPairs.score(), 0);
    }      
}
