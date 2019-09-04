import 'meteor/aldeed:collection2'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
import SimpleSchema from 'simpl-schema'

export const PageSchema = new SimpleSchema({
  title: {
    type: String,
    trim: false
  },

  slug: {
    type: String
  },

  content: {
    type: String,
    trim: false
  }
}, { check })

export const Pages = new Mongo.Collection('pages')

Pages.attachSchema(PageSchema)
