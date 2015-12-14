package kata.yahtzee.category;

import java.util.Collections;
import kata.yahtzee.Roll;

public class Small extends Category {

    public Small(Roll roll) {
        super(roll);
    }

    @Override
    public int score() {
        boolean sum = true;
        Collections.sort(roll.getStates());
        for (int i = 0; i < 5; i++) {
            sum = sum && (roll.getStates().get(i) == i + 1);
        }
        return (sum) ? 15 : 0;
    }

}
