export default {
  init(func, ...args) {
    let f = (...newArgs) => func(...f.argsToCallWith, ...newArgs)

    f.argsToCallWith = args
    f.args = (...newArgs) => {
      f.argsToCallWith.push(...newArgs)
      return f
    }

    return f
  }
}


