makeUsers = (count) => {
	users = [];
	for (let i = 0; i < count; i++) {
		users.push(`User ${i}`)
	}
	return users
}

makeMsgs = (count) => {
	msgs = [];
	for (let i = 0; i < count; i++) {
		msgs.push('Ipsum nostrum corporis eaque quidem minima. Placeat quod tempore explicabo velit animi alias Doloremque consectetur debitis magnam consequuntur facere? Dolor pariatur suscipit inventore rerum soluta? Ipsum facilis nam placeat quasi?')
	}
	return msgs
}

data = {
	makeUsers: makeUsers,
	makeMsgs: makeMsgs
}

exports.locals = data
