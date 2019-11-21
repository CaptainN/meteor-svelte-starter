import 'meteor/aldeed:collection2'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Tracker } from 'meteor/tracker'
import GroundDB from 'meteor/ground:db'
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
}, {
  check,
  tracker: Tracker
})

export const Pages = new Mongo.Collection('pages')

Pages.attachSchema(PageSchema)

// For SSR, we need to query the database directly.
// This has security implications since it bypasses the publication checks!
export const PagesOffline = Meteor.isServer
  ? Pages
  : new GroundDB.Ground.Collection('pages-offline')

if (Meteor.isClient) {
  PagesOffline.observeSource(Pages.find())
}
