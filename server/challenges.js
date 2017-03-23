'use strict'

const db = require('APP/db')
const Challenges = db.model('challenges')

module.exports = require('express').Router()
	.get('/:id', (req, res, next) =>
		Challenges.findById(req.params.id)
		.then(challenge => res.json(challenge))
		.catch(next))
