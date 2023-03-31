const { default: axios } = require('axios');
async function getPatientClipboard(req, res) {
  const { patientId } = req.params;
  try {
    const playgroundRequest = await axios.get(`https://playground.api.us-1.healtheintent.com/consumer-engagement/v1/patients/${patientId}/clipboards`, {
      headers: {
        'Authorization': req.authHeader,
      }
    })
    return res.json({
      data: playgroundRequest.data
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({errors: error.response.data});
  }
}

async function getFolders(req, res) {
  try {
    const { domain } = req.query
    const oauthConsumerKey = req.headers['oauth_consumer_key'];
    const playgroundRequest = await axios.get(`https://playground.api.us-1.healtheintent.com/consumer-engagement/v1/consumers/${oauthConsumerKey}/folders`, {
      headers: {
        'Authorization': req.authHeader,
      },
      params: {
        domain
      }
    })
    return res.json({
      data: playgroundRequest.data
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: error.response.data });
  }
}

async function getPatientMessages(req, res) {
  const { patientId } = req.params;
  const { folderId, domain } = req.query;
  const oauthConsumerKey = req.headers['oauth_consumer_key'];

  try {
    const playgroundRequest = await axios.get(`https://playground.api.us-1.healtheintent.com/consumer-engagement/v1/consumers/${oauthConsumerKey}/messages`, {
      headers: {
        'Authorization': req.authHeader,
      },
      params: {
        patientId,
        folderId,
        domain
      }
    })
    return res.json({
      data: playgroundRequest.data
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: error.response.data });
  }
}

async function createPatientMessage(req, res) {
  const oauthConsumerKey = req.headers['oauth_consumer_key'];

  try {
    const playgroundRequest = await axios.post(`https://playground.api.us-1.healtheintent.com/consumer-engagement/v1/consumers/${oauthConsumerKey}/messages`, req.body, {
      headers: {
        'Authorization': req.authHeader,
      }
    })
    return res.json({
      data: playgroundRequest.data
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: error.response.data });
  }
}

async function getPersonnels(req, res) {
  try {
    const playgroundRequest = await axios.get(`https://playground.api.us-1.healtheintent.com/consumer-engagement/v1/personnels`, {
      headers: {
        'Authorization': req.authHeader,
      }
    })
    return res.json({
      data: playgroundRequest.data
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: error.response.data });
  }
}

async function createPersonnel(req, res) {
  try {
    const playgroundRequest = await axios.post(`https://playground.api.us-1.healtheintent.com/consumer-engagement/v1/personnels`, req.body, {
      headers: {
        'Authorization': req.authHeader,
      }
    })
    return res.json({
      data: playgroundRequest.data
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errors: error.response.data });
  }
}

module.exports = {
  getPatientClipboard,
  getFolders,
  getPatientMessages,
  getPersonnels,
  createPatientMessage,
  createPersonnel
}
