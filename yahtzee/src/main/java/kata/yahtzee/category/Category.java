package kata.yahtzee.category;

import kata.yahtzee.Roll;

public abstract class Category {

    Roll roll;

    public abstract int score();

    public Category(Roll roll) {
        this.roll = roll;
    }
}
