const {
  GraphQLInt,
  GraphQLString,
  GraphQLEnumType,
  GraphQLObjectType
} = require('gridsome/graphql')

const HeadingType = new GraphQLObjectType({
  name: 'MarkdownHeading',
  fields: {
    value: {
      type: GraphQLString,
      resolve (heading) {
        return heading.value
      }
    },
    depth: {
      type: GraphQLInt,
      resolve (heading) {
        return heading.depth
      }
    }
  }
})

const HeadingLevels = new GraphQLEnumType({
  name: 'HeadingLevels',
  values: {
    h1: { value: 1 },
    h2: { value: 2 },
    h3: { value: 3 },
    h4: { value: 4 },
    h5: { value: 5 },
    h6: { value: 6 }
  }
})

module.exports = {
  HeadingType,
  HeadingLevels
}