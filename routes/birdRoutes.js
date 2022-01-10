const router = require('express').Router()
const { Bird, Owner } = require('../models')

// Get all birds
router.get('/birds', async function (req, res) {
    const birdData = await Bird.find({}).populate('owner')
    res.json(birdData)
})

// Get one bird by id
router.get('/birds/:id', async function (req, res) {
    const birdData = await Bird.findById(req.params.id).populate('owner')
    res.json(birdData)
})
// Post one bird
router.post('/birds', async function (req, res) {
    const birdData = await Bird.create(req.body)
    await Owner.findByIdAndUpdate(req.body.owner, { $push: { birds: birdData._id } })
    res.json(birdData)
})

// Put one bird by id\
router.put('/birds/:id', async function (req, res) {
    await Bird.findByIdAndUpdate(req.params.id, req.body)
    res.sendStatus(200)
})

// Delete one bird by id
router.delete('/birds/:id', async function (req, res) {
    await Bird.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router