const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/signin', async (req, res) => {
  const { username, email, phone, password, dob } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        phone,
        password,
        dob: new Date(dob),
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
