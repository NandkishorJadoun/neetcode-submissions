class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}
        for str in strs:
            alphabet = [0] * 26
            for s in str:
                alphabet[ord(s) - ord("a")] += 1
            hash_map.setdefault(tuple(alphabet), []).append(str)
        return list(hash_map.values())