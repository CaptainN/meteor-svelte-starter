/* global Meteor */
import { check } from 'meteor/check'
import { Pages } from '/imports/api/collections/pages'

Meteor.publish('page', (slug) => {
  check(slug, String)
  return Pages.find({ slug })
})
