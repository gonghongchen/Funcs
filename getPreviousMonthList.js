// 获取本月之前的 n 个月的月份列表
const getPreviousMonthList = (n = 6) => {
	const list = []
	let curYear = new Date().getFullYear()
	new Array(n).fill('').reduce(prevMonth => {
		let curMonth = 0
		let res = ''
		if (prevMonth === 1) {
			curMonth = 12
			curYear--
			res = `${curYear}-12`
		} else {
			curMonth = prevMonth - 1
			res = `${curYear}-${curMonth > 9 ? curMonth : '0' + curMonth}` // 补全0
		}
		list.push(res)
		return curMonth
	}, new Date().getMonth() + 2)
	return list
}

getPreviousMonthList() // ["2022-01", "2021-12", "2021-11", "2021-10", "2021-09", "2021-08"]
getPreviousMonthList(14) // ["2022-01", "2021-12", "2021-11", "2021-10", "2021-09", "2021-08", "2021-07", "2021-06", "2021-05", "2021-04", "2021-03", "2021-02", "2021-01", "2020-12"]