import { expect } from 'chai'
import sinon from 'sinon'
import 'babel-polyfill'

import CallWaiting from '../src/call-waiting'

describe('CallWaiting', () => {
  let testMethod

  beforeEach(() => {
    testMethod = sinon.spy()
  })

  describe('.()', () => {
    it(' should call the initialized method', () => {
      let methodToCall = CallWaiting.init(testMethod)
      expect(testMethod).to.not.have.been.calledOn()

      methodToCall()

      expect(testMethod).to.have.been.calledOn()
    })
  })
})
