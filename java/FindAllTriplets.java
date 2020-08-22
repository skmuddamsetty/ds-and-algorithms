import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * https://www.techiedelight.com/print-triplets-array-sum-less-equal-given-number/
 */
public class FindAllTriplets {
  // Function to print all distinct triplets in the array with sum
  // less than or equal to given number
  public static void findAllTriplets(List<Integer> input, int sum, int begin, List<Integer> comb,
      List<List<Integer>> res) {
    if (comb.size() == 3) {
      res.add(new ArrayList<>(comb));
      return;
    }

    for (int i = begin; i < input.size() && input.get(i) <= sum; i++) {
      comb.add(input.get(i));
      findAllTriplets(input, sum - input.get(i), i + 1, comb, res);
      comb.remove(comb.size() - 1);
    }
  }

  public static void main(String[] args) {
    int sum = 10;
    List<Integer> input = Arrays.asList(2, 7, 4, 9, 5, 1, 3); // 1 2 3 4 5 7 9

    // sort the input
    Collections.sort(input);
    List<Integer> comb = new ArrayList<>();

    // find all distinct triplets
    List<List<Integer>> result = new ArrayList<>();
    findAllTriplets(input, sum, 0, comb, result);

    // print all triplets
    for (List<Integer> triplet : result) {
      System.out.println("(" + triplet.get(0) + ", " + triplet.get(1) + ", " + triplet.get(2) + ")");
    }
  }
}