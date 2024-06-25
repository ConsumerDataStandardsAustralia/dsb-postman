

import syncrequest from 'sync-request'
import path from 'path'
import fs from'fs'
import newman, { NewmanRunOptions, NewmanRunSummary } from 'newman'

const outDir = path.join(__dirname, 'output');
const collectionDir = path.join(__dirname, 'collections');
const securityDir = path.join(__dirname, 'security');
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

function RunNewman(iterationDataFile: string,
  collectionName: string,
  environment: string,
  folderData: string[] | string | undefined, 
  reportName: string) {
  // call newman library to create report
  const upperSector = sector?.charAt(0).toUpperCase() + sector.slice(1);
  let options : NewmanRunOptions = {
    collection: collectionName,
    sslClientCert: `${securityDir}/dsb-client.pem`,
    sslClientKey: `${securityDir}/dsb-client.key`,
    folder: folderData,
    iterationData: iterationDataFile,
    sslClientPassphrase: "password",
    sslExtraCaCerts: `${securityDir}/ca.crt`,
    insecure: true,
    environment: environment,
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

const upperSector = sector?.charAt(0).toUpperCase() + sector.slice(1);
let collectionFile = require(`${collectionDir}/CDR ${upperSector} Sector Conformance Tests.postman_collection.json`);
let environmentFile = require(`${environmentDir}/DSB ${upperSector}.postman_environment.json`);

// var stateRunFolderData = ["Get Accounts - First page", "Get Bulk Direct Debits - First Page"];
// var stateRunIterationData = `${iterationDataDir}/bankingAccountStates.json`
// const reportNameForStateRun = "NodeJS-DH-AccountStates"
// RunNewman(stateRunIterationData, collectionFile, environmentFile,  stateRunFolderData, reportNameForStateRun);

// var categoryRunFolderData = ["Get Accounts - First page", "Get Bulk Direct Debits - First Page"];
// var categoryRunIterationData = require(`${iterationDataDir}/bankingProductCategory.json`)
// const reportNameForCategoryRun = "NodeJS-DH-AccountCategory"
// RunNewman(categoryRunIterationData, collectionFile, environmentFile, categoryRunFolderData, reportNameForCategoryRun);

// var transactionRunFolderData = ["Get Transactions For Account - First page", "Get Transactions For Account - Other pages"];
// var transactionRunIterationData = require(`${iterationDataDir}/bankingTransactionTests.json`)
// const reportNameForTransactionRun = "NodeJS-DH-TransactionTests"
// RunNewman(transactionRunIterationData, collectionFile, environmentFile, transactionRunFolderData, reportNameForTransactionRun);


var runAllFolderData = "CDR Banking Sector Conformance Tests";
var transactionRunIterationData = require(`${iterationDataDir}/bankingTransactionTests.json`)
const reportNameForAllRun = "NodeJS-DH-Complete"
RunNewman(transactionRunIterationData, collectionFile, environmentFile, undefined, reportNameForAllRun);







