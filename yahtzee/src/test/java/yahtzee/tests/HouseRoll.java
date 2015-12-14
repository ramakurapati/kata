package yahtzee.tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import kata.yahtzee.Roll;
import kata.yahtzee.category.House;

public class HouseRoll {

    @Test
    public void hose() {
        Roll roll = new Roll("3,3,4,4,4");
        House house = new House(roll);
        assertEquals(house.score(), 18);
    }
    @Test
    public void hoseShouldRetrun26() {
        Roll roll = new Roll("6,6,4,4,6");
        House house = new House(roll);
        assertEquals(house.score(), 26);
    }    
    @Test
    public void pairShouldRetrun0() {
        Roll roll = new Roll("3,3,0,4,4");
        House house = new House(roll);
        assertEquals(house.score(), 0);
    }    
    @Test
    public void yahtzeeShouldReturn0() {
        Roll roll = new Roll("6,6,6,6,6");
        House house = new House(roll);
        assertEquals(house.score(), 0);
    }      
    @Test
    public void notHose() {
        Roll roll = new Roll("1,3,4,4,4");
        House house = new House(roll);
        assertEquals(house.score(), 0);
    }    
}
