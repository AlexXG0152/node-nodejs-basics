const parseEnv = () => {
  const data = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .reduce((obj, key) => {
      obj[key] = process.env[key];
      return obj;
    }, {});

  const output = Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(output);
};

parseEnv();
