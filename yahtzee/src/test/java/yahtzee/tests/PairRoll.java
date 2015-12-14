package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.Pair;

public class PairRoll {

    @Test
    public void onePair() {
        Roll roll = new Roll("2,2,2,2,3");
        Pair pair = new Pair(roll);
        assertEquals(pair.score(), 4);
    }

    @Test
    public void multiplePair() {
        Roll roll = new Roll("2,2,6,6,3");
        Pair pair = new Pair(roll);
        assertEquals(pair.score(), 12);
    }

    @Test
    public void noPairs() {
        Roll roll = new Roll("2,1,3,6,4");
        Pair pair = new Pair(roll);
        assertEquals(pair.score(), 0);
    }
}
