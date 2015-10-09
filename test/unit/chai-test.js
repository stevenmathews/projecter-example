describe('Karma tests with chai', () => {
  it('should expose the Chai expect method', function () {
    expect('foo').to.not.equal('bar')
  })
})
