

import syncrequest from 'sync-request'
import path from 'path'
import newman, { NewmanRunOptions, NewmanRunSummary } from 'newman'

const outDir = path.join(__dirname, 'output');
const collectionDir = path.join(__dirname, 'collections');
const registrationEndpoint = 'https://api.cdr.gov.au/cdr-register/v1/banking/data-holders/brands/summary';

// used for the ACCC request
const options = {
    method: 'GET',
    headers: {
      'x-v': '1',
      'accept': '*/*'
    }
};

// The list of endpoints against which the tests are run
var prdEndpoints: any = [];

// Get all registered data holders from the ACCC registry (synchrounously)
function GetACCCData() {
  var res = syncrequest('GET', registrationEndpoint, options);
  var dataSet = JSON.parse(res.getBody('utf8')).data;
  prdEndpoints = dataSet.map((obj:any) => {
      let uri = removeTrailingSlash(obj.publicBaseUri);
      return {...obj, publicBaseUri: uri};
  })
}

// Some public endpoints have a trainling slash at the end of the url.
// Newman library will cause this to be be an error.
function removeTrailingSlash(str: string) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

function RunNewman() {
  // call newman library to create report
  let collectionFile = require(`${collectionDir}/PublicEndpointTestsBanking.postman_collection.json`);
  let options : NewmanRunOptions = {
    collection: collectionFile,
    iterationData: prdEndpoints,
    reporters: ['cli','htmlextra'],
    reporter: {
      htmlextra: {
         export: `${outDir}/NewmanReport.html`
      }
    }
  }

  newman.run(options, (err: any, summary: NewmanRunSummary) => {
    if (err) { 
      throw err;
    }
    console.log('collection run complete!');
    }).on('request', (err, data) => {
      if (err) {
        console.log(err)
      }
      if (data) {
         console.log('Calling: ' + data?.request?.url)
      }
  });
}

GetACCCData();
RunNewman();




