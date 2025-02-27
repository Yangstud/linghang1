import simulate from 'miniprogram-simulate'

describe('index', () => {
  it('should update total when page loads', async () => {
    const id = simulate.load('/pages/index/index')
    const comp = simulate.render(id)
    const parent = document.createElement('parent-wrapper')
    comp.attach(parent)

    expect(comp.data.total).toBe(50000)
    await simulate.sleep(100)
    expect(comp.data.total).toBeGreaterThan(50000)
  })
})