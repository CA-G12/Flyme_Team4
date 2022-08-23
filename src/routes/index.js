const express = require('express');

const removePilot = require('../controllers/pilots/deletePilot');
const getPilots = require('../controllers/pilots/getPilots');
const postPilot = require('../controllers/pilots/postPilot');
const updatingPData = require('../controllers/pilots/upadatingPilotData');
const updatingFData = require('../controllers/flights/upadatingFlightData');

const getFlights = require('../controllers/flights/getFlights');
const postFlight = require('../controllers/flights/postFlight');
const removeFlight = require('../controllers/flights/deleteFlight');

const router = require('express').Router();

router.get('/pilots', getPilots);
router.post('/pilots', postPilot);
router.get('/pilot/:id', removePilot);
router.post('/pilot', updatingPData);

router.get('/flights', getFlights);
router.post('/flights', postFlight);
router.get('/flight/:id', removeFlight);
router.post('/flight', updatingFData);
module.exports = router;