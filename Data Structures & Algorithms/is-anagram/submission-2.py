class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_map = dict()
        t_map = dict()
        for letter in s:
            if letter in s_map:
                s_map[letter] += 1
            else:
                s_map[letter] = 1

        for letter in t:
            if letter in t_map:
                t_map[letter] += 1
            else:
                t_map[letter] = 1

        return s_map == t_map