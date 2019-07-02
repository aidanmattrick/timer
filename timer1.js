let args = process.argv.slice(2);

const timer = function(args) {
  if (args.length === 0) return;
  for (const item of args) {
    if (item < 0) return;
    if (isNaN(item)) return;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }
};

timer(args);