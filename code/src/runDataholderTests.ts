

import syncrequest from 'sync-request'
import path from 'path'
import fs from'fs'
import newman, { NewmanRunOptions, NewmanRunSummary } from 'newman'

const outDir = path.join(__dirname, 'output');
const collectionDir = path.join(__dirname, 'collections');
const environmentDir = path.join(__dirname, 'environments');

const sector = "Banking";


// Some public endpoints have a trainling slash at the end of the url.
// Newman library will cause this to be be an error.
function removeTrailingSlash(str: string) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

function writeNewmanSummaryData(summary: NewmanRunSummary){
    let path = `${outDir}/NewmanSummaryReport_${sector}.json`;
    fs.writeFileSync(path, JSON.stringify(summary, null, 2));
}

function RunNewman() {
  // call newman library to create report
  const upperSector = sector?.charAt(0).toUpperCase() + sector.slice(1);
  let collectionFile = require(`${collectionDir}/CDR_${upperSector}_Sector_Conformance_Tests.json`);
  let environmentFile = require(`${environmentDir}/DSB ${upperSector} Test Data Server - AWS.postman_environment.json`);
  let options : NewmanRunOptions = {
    collection: collectionFile,
    sslClientCert: `${environmentDir}/dsb-client.pem`,
    sslClientKey: `${environmentDir}/dsb-client.key`,
    sslClientPassphrase: "password",
    sslExtraCaCerts: `${environmentDir}/ca.crt`,
    insecure: true,
    environment: environmentFile,
    // uncomment the line below for testing purposes. This will then only do 3 runs
    // iterationCount: 3,
    reporters: ['cli','htmlextra'],
    reporter: {
      htmlextra: {
         export: `${outDir}/NewmanReport DSB Node DH ${upperSector}.html`
      }
    }
  }

  newman.run(options, (err: any, summary: NewmanRunSummary) => {
    if (err) { 
      throw err;
    }
    writeNewmanSummaryData(summary);
    }).on('request', (err, data) => {
      if (err) {
        console.log(err)
      }
      if (data) {
         console.log('Calling: ' + data?.request?.url)
      }
  });
}

RunNewman();




