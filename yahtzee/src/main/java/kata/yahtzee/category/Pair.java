package kata.yahtzee.category;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import kata.yahtzee.Roll;

public class Pair extends Category {

    public Pair(Roll roll) {
        super(roll);
    }
    private HashMap<Integer, List<Integer>> map = new HashMap<>();

    private void compute() {

        for (Integer state : roll.getStates()) {
            List<Integer> sameStates = map.get(state);
            if (sameStates == null) {
                sameStates = new ArrayList<>();
                map.put(state, sameStates);
            }
            sameStates.add(state);
        }
    }

    @Override
    public int score() {
        return getMax() * 2;
    }

    private int getMax() {
        compute();
        int max = 0;
        Set<Integer> keys = map.keySet();
        for (Integer key : keys) {
            List list = map.get(key);
            if (key > max && list.size() > 1) {
                max = key;
            }
        }
        return max;
    }

}
