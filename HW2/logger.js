const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  const formatted =
    time.getDate().toString().padStart(2, "0") +
    "/" +
    (time.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    time.getFullYear() +
    " " +
    time.getHours().toString().padStart(2, "0") +
    ":" +
    time.getMinutes().toString().padStart(2, "0") +
    ":" +
    time.getSeconds().toString().padStart(2, "0");

  console.log(formatted);

  console.log(method, url, formatted);
  next();
};

module.exports = logger;
