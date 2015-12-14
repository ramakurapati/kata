package kata.yahtzee;

import java.util.logging.Level;
import java.util.logging.Logger;
import kata.yahtzee.category.Category;
import kata.yahtzee.category.FourKind;
import kata.yahtzee.category.Fours;
import kata.yahtzee.category.House;
import kata.yahtzee.category.Pair;
import kata.yahtzee.category.Small;
import kata.yahtzee.category.ThreeKind;
import kata.yahtzee.category.TwoPairs;
import kata.yahtzee.category.Yahtzee;

public class App {

    private Category category;
    private final Roll roll;
    private final String option;

    public String getOption() {
        return option;
    }

    public Roll getRoll() {
        return roll;
    }
    
    
    private final static Logger logger = Logger.getLogger(App.class.getName()); 

    public App(String dice, String option) {
        roll = new Roll(dice);
        this.option = option.toLowerCase();
    }

    public static void main0(String[] args) throws Exception {
        App app = new App(args[0],args[1]);
        logger.log(Level.INFO, "dice rolled {0}", app.getRoll());
        logger.log(Level.INFO, "category is {0}", app.getOption());
        logger.log(Level.INFO, "score is {0}", app.score());
    }

    public int score() throws Exception {
        switch (option) {
            case "fours": {
                category = new Fours(roll);
                break;
            }
            case "fourkind": {
                category = new FourKind(roll);
                break;
            }
            case "house": {
                category = new House(roll);
                break;
            }
            case "pair": {
                category = new Pair(roll);
                break;
            }
            case "small": {
                category = new Small(roll);
                break;
            }
            case "threekind": {
                category = new ThreeKind(roll);
                break;
            }
            case "twopairs": {
                category = new TwoPairs(roll);
                break;
            }
            case "yahtzee": {
                category = new Yahtzee(roll);
                break;
            }
            default:
                 logger.log(Level.SEVERE, " Invalid Category {0}", option);
                 return 0;
        }
        return category.score();
    }
}
//    mvn exec:java -Dexec.mainClass="teksystems.yahtzee.App" -Dexec.args="6,1,6,6,6 fourkind"  

