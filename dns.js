const dns = require('dns');

// dns.lookup('romaintestard.surge.sh', (err, address) => {
//   console.log(address);
// });

// dns.resolve4('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// MX records
// dns.resolve('pluralsight.com', 'MX', (err, address) => {
//   console.log(address);
// });

// dns.resolveMx('pluralsight.com', 'MX', (err, address) => {
//   console.log(address);
// });

// reverse an IP into its hostnames
dns.reverse('54.191.212.90', (err, hostnames) => {
  console.log(hostnames);
});
