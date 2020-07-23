const test = require('tape')

const { startRPC, createManager, createNode, params, baseRequest } = require('../helpers')

const method = 'admin_nodeInfo'

test(method, (t) => {
  const manager = createManager(createNode({ opened: true }))
  const server = startRPC(manager.getMethods())

  const req = params(method, [])

  const expectRes = res => {
    const { result } = res.body
    if (result) {
      t.pass('admin_nodeInfo returns a value')
    } else {
      throw new Error(msg)
    }
  }
  baseRequest(t, server, req, 200, expectRes)
})
