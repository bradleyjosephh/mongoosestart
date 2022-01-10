const router = require('express').Router()
const { Cat } = require('../models')

// Get all cats
router.get('/cats', async function (req, res) {
    const catData = await Cat.find({})
    res.json(catData)
})

// Get one cat by id
router.get('/cats/:id', async function (req, res) {
    const catData = await Cat.findById(req.params.id)
    res.json(catData)
})
// Post one cat
router.post('/cats', async function (req, res) {
    const catData = await Cat.creat(req.body)
    res.json(catData)
})

// Put one cat by id\
router.put('/cats/:id', async function (req, res) {
    await Cat.findByIdAndUpdate(req.params.id, req.body)
    res.sendStatus(200)
})

// Delete one cat by id
router.delete('/cats/:id', async function (req, res) {
    await Cat.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.export = router