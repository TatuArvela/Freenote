import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'

test('Link renders', () => {
  const component = renderer.create(
    <Link/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onMouseEnter()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onMouseLeave()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
