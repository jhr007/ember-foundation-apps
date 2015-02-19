'use strict'

module.exports = ->
  name: 'ember-foundation-apps'

  included: (app) ->
    @_super.included app

    # app.import app.bowerDirectory + '/bower-lib/something.js'
  }
