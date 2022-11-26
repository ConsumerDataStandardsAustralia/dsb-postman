# PRD Endpoint Validation

## Disclaimer

The artefacts in this repo are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://www.csiro.au/en/News/News-releases/2018/Data61-appointed-to-Data-Standards-Body-role)
(DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repo, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)
in the interest of supporting the participants in the CDR eco-system.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/)
for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repo is on a best-effort basis,
and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon
with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines),
conformance, or compliance purposes.

## Overview

This repository contains a NodeJS program which utilises the Postman collection `PublicEndpointTestsBanking.postman_collection` to check the CDR compliance of the ACCC registered public endpoints.

The program will retrieve a list of endpoints from the ACCC `brands/summary` API, then run a series of basic validation tests against each of these endpoints.

The output is a html file created by the Newman reporter. This file will be in the `/dist/output` directory (created at runtime).

For reference, the actual Postman JSON output created by using the Postman UI, as well as the Newman Html reporter can be found in the `output` folder.

## How to use

Run `npm install`, then

Run `npm start`. This will generate console output during the run (which can take a few minutes) and at the end create a `NewmanReport.html` file in the `dist/output` folder.

Open the `NewmanReport.html` to view collection run results.
