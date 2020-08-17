import java.util.HashMap;
import java.util.Map;

/**
 * https://www.techiedelight.com/find-pair-with-given-sum-array/
 */
public class FindPairWithGivenSum {
  public static void main(String[] args) {
    int[] A = { 8, 7, 2, 5, 3, 1 };
    int sum = 10;
    findPair(A, sum);
  }

  public static void findPair(int[] A, int sum) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < A.length; i++) {
      if (map.containsKey(sum - A[i])) {
        System.out.println("pair found at index:" + map.get(sum - A[i]) + "," + i);
        return;
      }
      map.put(A[i], i);
    }
    System.out.println("Pair Not Found");
  }
}
