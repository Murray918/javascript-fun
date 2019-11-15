let object ={
    party : true
} 

object = new Proxy(object, {
	get(target, prop) {
		if (prop in target) {
			return target[prop]
		} else {
			return "no such item"
        }
    },
    set(target, prop, value) {
        if (isNaN(value) && prop === 'quantity') {
            throw new Error('the key \'quantity\' must be of type number')
        } else {
            target[prop] = value
            return true
        }
    }
})
// now we never get a type or reference error we only get usefull information
console.log(object.party)
console.log(object.truth)
// object = [5, ...object] if we copy the object the proxy is no 
console.log(object[5])
object.quantity = 5 //?
object.time = new Date().toLocaleDateString() //?
object //?
object.quantity = 'party' //?
