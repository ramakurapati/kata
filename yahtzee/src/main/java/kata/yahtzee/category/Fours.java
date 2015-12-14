package kata.yahtzee.category;

import kata.yahtzee.Roll;

public class Fours extends Category {

    public Fours(Roll roll) {
        super(roll);
    }

    @Override
    public int score() {
        int sum = 0;
        for (Integer state : roll.getStates()) {
            if (state == 4) {
                sum = sum + 4;
            }
            System.out.println(state);
        }
        return sum;
    }
}
