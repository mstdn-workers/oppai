# print文
println("Hello oppai")

# 変数 & Unicode文字
strπ = "oppai"
println("Hello $strπ")

# 前置記法
op1 = *("o", "p", "p", "a", "i")
println(op1)

# 関数型
op2 = [string(c) for c in ['o', 'p', 'p', 'a', 'i']] |> arr -> foldl(*, arr)
print(op2)
