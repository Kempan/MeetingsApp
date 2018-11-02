// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

/*  This is a sample API route. */

router.get('/meeting', (req, res) => {
	turbo.fetch('meeting')
		.then(meetings => {
			res.json({
				confirmation: 'success',
				data: meetings
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.post('/create/meeting', (req, res) => {

	turbo.create('meeting', req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.post('/create/comment/:id', (req, res) => {
	const id = req.params.id;

	turbo.updateEntity('meeting', id, { comments: req.body })
		.then(resp => {
			res.json({
				confirmation: 'success',
				data: resp
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})



module.exports = router
