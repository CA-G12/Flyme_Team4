const express = require('express');
const removePilot = require('../controllers/deletePilot');
const getPilots = require('../controllers/getPilots');
const postPilot = require('../controllers/postPilot');
const updatePilotData = require('../database/queries/updatePilotData');

const router = require('express').Router();

router.get('/pilots', getPilots);
router.post('/pilots', postPilot);
router.get('/pilot/:id', removePilot);
router.get('/pilot', updatePilotData);
module.exports = router;