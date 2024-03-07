const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let arr = []
let item = "Choose a crop to buy and quantity"
let cost = 0
let quantity = 0

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8"></head>
  <body>
  <p>${item}</p>
  <p>${cost}g X ${quantity} packets = ${cost*quantity}g</p>
  <form method="POST">
    <label for="crops">Choose a crop seed to buy:</label>
      <select id="crops" name="crops">
        <option value="Parsnip Seeds,20">Parsnip Seeds (20g)</option>
        <option value="Bean Starter,60">Bean Starter (60g)</option>
        <option value="Cauliflower Seeds,80">Cauliflower Seeds (80g)</option>
        <option value="Rice Shoots,40">Rice Shoots (40g)</option>
        <option value="Potato Seeds,50">Potato Seeds (50g)</option>
        <option value="Kale Seeds,70">Kale Seeds (70g)</option>
      </select>
    <label for="quantity">Quantity: </label>
    <input type="number" id="quantity" name="quantity" min="0" value="0">
    <button type="submit">Submit</button>
  </form>
  </body>
  </html>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["crops"]) {
        arr = body["crops"].split("%2C");
        item = arr[0].replace("+", " ")
        cost = parseInt(arr[1])
        quantity = parseInt(body["quantity"])
      } else {
        item = "Nothing was entered.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url)
})

server.listen(3000);
console.log("The server is listening on port 3000.");
