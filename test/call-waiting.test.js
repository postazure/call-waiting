import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import CallWaiting from '../src/call-waiting'

describe('CallWaiting', () => {
  let testFunction

  beforeEach(() => {
    testFunction = sinon.spy()
  })

  describe('.()', () => {
    it('should call the initialized function', () => {
      let functionToCall = CallWaiting.init(testFunction)
      expect(testFunction).to.not.have.been.called

      functionToCall()

      expect(testFunction).to.have.been.called
    })

    describe('when there callWaiting is initialized with args', () => {
      it('should call the function with those args', () => {
        let functionToCall = CallWaiting.init(testFunction, 'arg1', 'arg2')

        functionToCall()

        expect(testFunction).to.have.been.calledWith('arg1', 'arg2')
      })
    })
  })

  describe('.args', () => {
    it('should add arguments to the list of args to be called', () => {
      let functionToCall = CallWaiting.init(testFunction, 'arg1')

      functionToCall.args('arg2', 'arg3')
      functionToCall()

      expect(testFunction).to.have.been.calledWith('arg1', 'arg2', 'arg3')
    })
  })
})
