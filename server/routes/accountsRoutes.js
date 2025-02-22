const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

router.get('/transactions', async (request, response) => {
  const result = await accountService.getTransactionData();
  return handleResponse(result, response);
});

router.get('/balances', async (request, response) => {
  const result = await accountService.getBalanceData();
  return handleResponse(result, response);
});

const handleResponse = (result, response) => {
  if (!result || result.message) {
    console.log(`Error when hitting API: ${result.message}`);
    return response
      .status(result.statusCode)
      .send(JSON.stringify({ errorString: result.message }));
  }
  return response.status(result.statusCode).send(JSON.stringify(result));
};

module.exports = router;
