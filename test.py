def a(arr):
	row=len(a)
	col=len(a[0])

	print(row, col)

	res=[[0] * row for _ in range(col)]
	for r in range(row):
		for c in range(col):
			res[c][row-1-r] = a[r][c]