const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/church-of-the-wilderness', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const prayerRequestsRoutes = require('./routes/prayer-requests');
const communityForumRoutes = require('./routes/community-forum');
const eventsRoutes = require('./routes/events');
const givingRoutes = require('./routes/giving');

app.use('/api/auth', authRoutes);
app.use('/api/prayer-requests', prayerRequestsRoutes);
app.use('/api/community-forum', communityForumRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/giving', givingRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});