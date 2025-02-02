const {expect} = require('chai')
const path = require('path')

describe('file specs', () => {
  it('spec 1 sum: any count of arguments', () => {
    function getArgumentsSumm() {
      // implementation
    }

    expect(getArgumentsSumm(1, 2, 3, 4, 5)).to.eql(15)

    expect(getArgumentsSumm()).to.eql(0)
  })

  it('spec 2 get object props names', () => {
    const obj = {
      a: 1, b: 2, c: 3
    }

    function getObjectPropsNames() {
      // implementation
    }

    expect(getObjectPropsNames(obj)).to.eql(['a', 'b', 'c'])
  })

  it('spec 2 object props values', () => {
    const obj = {
      a: 1, b: 2, c: 3
    }

    function getObjectPropsNames() {
      // implementation
    }

    expect(getObjectPropsNames(obj)).to.eql([1, 2, 3])
  })

  it('spec 3 sort array values without modification', () => {
    const a = [5, 3, 2, 4, 5]

    function sortArrayImmutable() {
      // imp
    }

    expect(sortArrayImmutable(a)).to.eql([2, 3, 4, 5, 5])

    expect(a).to.eql([5, 3, 2, 4, 5])
  })

  it('spec 4 read file content', () => {
    const testFilePath = path.resolve(__dirname, '../misc/test.txt')

    function getFileContent() {
      // implementation
    }

    expect(getFileContent(testFilePath)).to.include('middle should know how to work with file')

    expect(getFileContent('some/path/not_exists')).to.eql('not found')
  })

  it('spec 5 string to array by separator (default separator is ",")', () => {
    const testString = 'test, test \n test, test'

    function getStringsArray() {
      // implementation
    }

    expect(getStringsArray(testString).length).to.eql(3)

    expect(getStringsArray(testString, ',').length).to.eql(3)

    expect(getStringsArray(testString, '\n').length).to.eql(2)
  })
})
