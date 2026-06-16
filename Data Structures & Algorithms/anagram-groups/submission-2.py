class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []
        hash_map = {}
        
        sorted_strs = list(map(lambda string: "".join(sorted(string)), strs))
    
        for i, string in enumerate(sorted_strs):
            if string in hash_map:
                hash_map[string].append(strs[i])
            else:
                hash_map[string] = [strs[i]]

        for i, key in enumerate(hash_map):
            result.append(hash_map[key])

        return result