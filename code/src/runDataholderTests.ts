

import syncrequest from 'sync-request'
import path from 'path'
import fs from'fs'
import newman, { NewmanRunOptions, NewmanRunSummary } from 'newman'

const outDir = path.join(__dirname, 'output');
const collectionDir = path.join(__dirname, 'collections');
const environmentDir = path.join(__dirname, 'environments');
const iterationDataDir = path.join(__dirname, 'iteration-data');


const sector = "Banking";



// Some public endpoints have a trainling slash at the end of the url.
// Newman library will cause this to be be an error.
function removeTrailingSlash(str: string) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

function writeNewmanSummaryData(summary: NewmanRunSummary, reportName: string){
    let path = `${outDir}/${reportName}.json`;
    fs.writeFileSync(path, JSON.stringify(summary, null, 2));
}

function RunNewmanForStates(iterationDataFile: string, folderData: string[], reportName: string) {
  // call newman library to create report
  const upperSector = sector?.charAt(0).toUpperCase() + sector.slice(1);
  let iterationData = require(`${iterationDataDir}/bankingAccountStates.json`);
  let collectionFile = require(`${collectionDir}/CDR ${upperSector} Sector Conformance Tests.postman_collection.json`);
  let environmentFile = require(`${environmentDir}/DSB ${upperSector} Test Data Server - AWS.postman_environment.json`);
  let options : NewmanRunOptions = {
    collection: collectionFile,
    sslClientCert: `${environmentDir}/dsb-client.pem`,
    sslClientKey: `${environmentDir}/dsb-client.key`,
    folder: folderData,
    iterationData: iterationDataFile,
    sslClientPassphrase: "password",
    sslExtraCaCerts: `${environmentDir}/ca.crt`,
    insecure: true,
    environment: environmentFile,
    // uncomment the line below for testing purposes. This will then only do 3 runs
    // iterationCount: 3,
    reporters: ['cli','htmlextra'],
    reporter: {
      htmlextra: {
         export: `${outDir}/${reportName}.html`
      }
    }
  }

  newman.run(options, (err: any, summary: NewmanRunSummary) => {
    if (err) { 
      throw err;
    }
    writeNewmanSummaryData(summary, reportName);
    }).on("beforeRequest", (err, data) => {
      console.log(data.request);
    })
    .on('request', (err, data) => {
      if (err) {
        console.log(err)
      }
      if (data) {
         console.log('Calling: ' + data?.request?.url)
      }
  });
}

var stateRunFolderData = ["Get Accounts - First page", "Get Bulk Direct Debits - First Page"];
var stateRunIterationData = require(`${iterationDataDir}/bankingAccountStates.json`)
const reportNameForStateRun = "NodeJS-DH-AccountStates"
RunNewmanForStates(stateRunIterationData, stateRunFolderData, reportNameForStateRun);

var stateRunFolderData = ["Get Accounts - First page", "Get Bulk Direct Debits - First Page"];
var stateRunIterationData = require(`${iterationDataDir}/bankingProductCategory.json`)
const reportNameForCategoryRun = "NodeJS-DH-AccountCategory"
RunNewmanForStates(stateRunIterationData, stateRunFolderData, reportNameForCategoryRun);




