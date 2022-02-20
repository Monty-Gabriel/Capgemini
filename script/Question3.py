# Question3 Capgemini 2022

def countOfAnagramSubstring(s):
      
    # Retorna o total das substring
    # substrings em s
    n = len(s)
    mp = dict()
      
    # loop para length de substring
    for i in range(n):
        sb = ''
        for j in range(i, n):
            sb = ''.join(sorted(sb + s[j]))
            mp[sb] = mp.get(sb, 0)
              
            # incrementa o contagem
            # para esta dict array
            mp[sb] += 1
  
    anas = 0
      
    # faz um loop em todos os dicionários diferentes
    # itens e contagem de substring agregada
    for k, v in mp.items():
        anas += (v*(v-1))//2
    return anas
  
# Driver Code
s = "xyyx"
print(countOfAnagramSubstring(s))
  
# O codigo original e contribucao de fgaim testado e modificado por Monty 19/02/2022 22:57