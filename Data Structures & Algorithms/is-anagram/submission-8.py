class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        alphabet = [0] * 26

        for i in range(len(s)):
            char_code_a = ord("a")
            alphabet[ord(s[i]) - char_code_a] += 1
            alphabet[ord(t[i]) - char_code_a] -= 1

        result = all(x == 0 for x in alphabet)

        return result