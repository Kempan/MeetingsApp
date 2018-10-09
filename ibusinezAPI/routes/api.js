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
				message: 'Something went wrong'
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
