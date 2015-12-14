package kata.yahtzee;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Roll {

    List<Integer> states;
    private final static Logger logger = Logger.getLogger(Roll.class.getName());

    public List<Integer> getStates() {
        return states;
    }

    public Roll(String txt) {
        states = new ArrayList<>();
        String[] tokens = txt.split(",");
        if (tokens.length != 5) {
            logger.log(Level.SEVERE, " Please roll 5 dice, there are only  {0} dice rolled {1}", new Object[]{tokens.length, txt});
            return;
        }
        for (String token : tokens) {
            Integer state = Integer.parseInt(token);
            if (state < 1 || state > 6) {
                logger.log(Level.SEVERE, " dice can state be from 1 to 6, found {0} in {1}", new Object[]{state, txt});
               return; 
            }

            states.add(state);
        }
    }

    public String toString() {
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < 5; i++) {
            
            if (i > 0) {
                buffer.append(",");
                buffer.append(getStates().get(i));
            } else {
                buffer.append(getStates().get(i));

            }
        }
        return buffer.toString();
    }


}
