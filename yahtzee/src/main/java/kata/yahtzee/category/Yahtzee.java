package kata.yahtzee.category;

import kata.yahtzee.Roll;

public class Yahtzee extends Category {

    public Yahtzee(Roll roll) {
        super(roll);
    }

    public int score() {
        boolean sum = true;
        int one = roll.getStates().get(0);
        for (int state : roll.getStates()) {
            sum = (sum && (one == state));
        }
        return (sum) ? 50:0;
    }
}
