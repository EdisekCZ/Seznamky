const path = require('path');
const express = require('express');
const app = express();
const PORT = 2222 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log(`Server funguje normalne tybrdo na portu ${PORT}`));