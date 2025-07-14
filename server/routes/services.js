const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// إنشاء خدمة جديدة
router.post('/', async (req, res) => {
  const { label, description, link } = req.body;
  const service = new Service({ label, description, link });
  await service.save();
  res.json(service);
});

// جلب جميع الخدمات
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// جلب خدمة محددة
router.get('/:id', async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
});

module.exports = router;
