const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	const result = await Category.findAll({
		include: [Product],
	})
	// find all categories
	// be sure to include its associated Products
	res.json(result)
})

router.get('/:id', async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	const result = await Category.findByPk(req.params.id, {
		include: [Product],
	})
	res.json(result)
})

router.post('/', async (req, res) => {
	// create a new category
	const result = await Category.create(req.body)
	res.json(result)
})

router.put('/:id', async (req, res) => {
	// update a category by its `id` value
	const result = await Category.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
	res.json(result)
})

router.delete('/:id', async (req, res) => {
	// delete a category by its `id` value
	const result = await Category.destroy({
		where: {
			id: req.params.id,
		},
	})
	res.json(result)
})

module.exports = router
