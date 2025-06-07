const mongoose = require('mongoose');
const URL = require('../models/url'); 

async function clearAll() {
  try {
    await mongoose.connect('mongodb://localhost:27017/link-shortener'); // change db URI
    const result = await URL.deleteMany({});
    console.log('Deleted documents:', result.deletedCount);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error clearing DB:', error);
  }
}

clearAll();

/* OR COULD ADD A CLEARING ROUTE
only for testing and should not be exposed in production 

app.delete('/clear-all-urls', async (req, res) => {
  try {
    const result = await URL.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear URLs' });
  }
});

*/