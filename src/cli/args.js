const parseArgs = () => {
  const args = process.argv.slice(2);
  const data = new Array(Math.ceil(args.length / 2))
    .fill()
    .map((_) => args.splice(0, 2))
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(data);
};

parseArgs();
