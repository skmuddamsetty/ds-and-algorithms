import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
  public static int firstMissingPositive(int[] nums) {
    int n = nums.length;

    // 1. mark numbers (num < 0) and (num > n) with a special marker number (n+1)
    // (we can ignore those because if all number are > n then we'll simply return
    // 1)
    for (int i = 0; i < n; i++) {
      if (nums[i] <= 0 || nums[i] > n) {
        nums[i] = n + 1;
      }
    }
    // note: all number in the array are now positive, and on the range 1..n+1

    // 2. mark each cell appearing in the array, by converting the index for that
    // number to negative
    for (int i = 0; i < n; i++) {
      int num = Math.abs(nums[i]);
      if (num > n) {
        continue;
      }
      num--; // -1 for zero index based array (so the number 1 will be at pos 0)
      if (nums[num] > 0) { // prevents double negative operations
        nums[num] = -1 * nums[num];
      }
    }

    // 3. find the first cell which isn't negative (doesn't appear in the array)
    for (int i = 0; i < n; i++) {
      if (nums[i] >= 0) {
        return i + 1;
      }
    }

    // 4. no positive numbers were found, which means the array contains all numbers
    // 1..n
    return n + 1;
  }

  public static List<Integer> findAnagrams(String s, String p) {
    int ns = s.length(), np = p.length();
    if (ns < np)
      return new ArrayList<>();

    Map<Character, Integer> pCount = new HashMap();
    Map<Character, Integer> sCount = new HashMap();
    // build reference hashmap using string p
    for (char ch : p.toCharArray()) {
      if (pCount.containsKey(ch)) {
        pCount.put(ch, pCount.get(ch) + 1);
      } else {
        pCount.put(ch, 1);
      }
    }

    List<Integer> output = new ArrayList();
    // sliding window on the string s
    for (int i = 0; i < ns; ++i) {
      // add one more letter
      // on the right side of the window
      char ch = s.charAt(i);
      if (sCount.containsKey(ch)) {
        sCount.put(ch, sCount.get(ch) + 1);
      } else {
        sCount.put(ch, 1);
      }
      // remove one letter
      // from the left side of the window
      if (i >= np) {
        ch = s.charAt(i - np);
        if (sCount.get(ch) == 1) {
          sCount.remove(ch);
        } else {
          sCount.put(ch, sCount.get(ch) - 1);
        }
      }
      // compare hashmap in the sliding window
      // with the reference hashmap
      if (pCount.equals(sCount)) {
        output.add(i - np + 1);
      }
    }
    return output;
  }

  public static List<Integer> findAnagrams_using_array(String s, String p) {
    int ns = s.length(), np = p.length();
    if (ns < np)
      return new ArrayList();

    int[] pCount = new int[26];
    int[] sCount = new int[26];
    // build reference array using string p
    for (char ch : p.toCharArray()) {
      pCount[(int) (ch - 'a')]++;
    }

    List<Integer> output = new ArrayList();
    // sliding window on the string s
    for (int i = 0; i < ns; ++i) {
      // add one more letter
      // on the right side of the window
      sCount[(int) (s.charAt(i) - 'a')]++;
      // remove one letter
      // from the left side of the window
      if (i >= np) {
        sCount[(int) (s.charAt(i - np) - 'a')]--;
      }
      // compare array in the sliding window
      // with the reference array
      if (Arrays.equals(pCount, sCount)) {
        output.add(i - np + 1);
      }
    }
    return output;
  }

  public static void main(String args[]) {
    int[] A = { 3, 4, -1, 1 };
    findAnagrams_using_array("cbaebabacd", "abc");
  }
}