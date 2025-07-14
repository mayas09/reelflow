const express = require('express');
const Reel = require('../models/Reel');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// إضافة ريل جديد
router.post('/', verifyToken, async (req, res) => {
  const { title, category, videoURL, serviceId } = req.body;
  const reel = new Reel({
    title,
    category,
    videoURL,
    service: serviceId,
    creator: req.user.id
  });
  await reel.save();
  res.json(reel);
});

// جلب كل الريلز (مع الخدمة المرتبطة)
router.get('/', async (req, res) => {
  const reels = await Reel.find().populate('service');
  res.json(reels);
});

// جلب الريلز الخاصة بالمستخدم
router.get('/creator', verifyToken, async (req, res) => {
  const reels = await Reel.find({ creator: req.user.id }).populate('service');
  res.json(reels);
});

module.exports = router;
