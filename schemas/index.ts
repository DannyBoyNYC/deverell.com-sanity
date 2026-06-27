// Document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import bio from './bio'
import book from './book'
// Object types
import mainImage from './objects/mainImage'
import excerptPortableText from './objects/excerptPortableText'

export const schemaTypes = [
  // Document types
  post,
  author,
  category,
  bio,
  book,
  // Object types
  blockContent,
  excerptPortableText,
  mainImage,
]
