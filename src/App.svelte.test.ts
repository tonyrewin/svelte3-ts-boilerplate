import App from './App.svelte'

describe('app Component', () => {
  it('should render', () => {
    expect.assertions(1)
    const el = document.createElement('div')
    new App({
      target: el,
      props: {
        name: 'World',
      },
    })
    expect(el.textContent).not.toBeNull()
  })
})
