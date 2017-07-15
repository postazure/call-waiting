export default {
  init(func, ...args) {
    let f = () => func(...f.argsToCallWith)

    f.argsToCallWith = args
    f.args = (...newArgs) => {
      f.argsToCallWith.push(...newArgs)
    }

    return f
  }
}


