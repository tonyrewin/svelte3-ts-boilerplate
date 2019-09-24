import { target } from './main'

describe('entry Script', () => {
  it('target dom element should contains textContent', () => {
    expect.assertions(1)
    expect(target.textContent).not.toBeNull()
  })
})
