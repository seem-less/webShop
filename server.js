const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const wooConfig = require('./wooConfig');

const { consumerKey,
        consumerSecret,
        siteUrl,
        version} = wooConfig;

const api = new WooCommerceRestApi({
  url: siteUrl,
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: version
});

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.get('/getProducts', (req, res) => {
    api.get("products", {
        per_page: 20, // 20 products per page
      })
        .then((response) => {
          // Successful request
          res.json(response.data);
        })
        .catch((error) => {
          // Invalid request, for 4xx and 5xx statuses
          console.log("Response Status:", error);
          console.log("Response Status:", error.response.status);
          console.log("Response Headers:", error.response.headers);
          console.log("Response Data:", error.response.data);
        })
        .finally(() => {
          // Always executed.
        });
    //return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})