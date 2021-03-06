# DSB-POSTMAN

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

This repository contains a Postman collection for the Energy and Banking sector, as well as the Common API calls as published by the DSB.
Additionally, it contains the Postman environment files which are needed to run the the collections.



## Using the Postman collection

The ```Postman Collections``` directory contains a set of API unit tests for the Banking and Energy sector, as well as the Common API.
These collections have been made available in the public  [DSB-SCHEMA-TESTS Postman workspace](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests).

The collections can also be imported directly into the Postman application and configured to specific requirements.

*Refer to the [Postman documentation](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) for more information on how to use collections.*


In order to run the API test an environment needs to be defined. The ```Postman Environments``` directory contains the definitions, which allow the tests to be run against the mock data holder developed by the [The Data Standards Body](https://consumerdatastandards.gov.au/), which is available in the [java-artefacts repository](https://github.com/ConsumerDataStandardsAustralia/java-artefacts).


---

### Using a Postman environment

The API tests can also be run in conjunction with the *xxx.postman_environment.json* configuration file. This file this can be configured for a specific data holder server.
The environment definitions in ```Postman Environments``` can be used as a template to configure for any  data holder. 

*Refer to the [Postman documentation](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) for more information on how to use environments.*


To achieve this import the configured *xxx.postman_environment.json* as an Environment in Postman. 
<img src="https://raw.githubusercontent.com/ConsumerDataStandardsAustralia/dsb-schema-tools/master/images/Pm_Screen4.JPG?token=AETEGIINYZ5ZM634AFT6ZITBBH4Y4" width=600>

---

*The files DSB Banking.postman_environment.json and  DSB Energyg.postman_environment.json 
are configured to work with the published data-holder server maintained by DSB and available in the ConsumerDataStandardsAustralia/java-artefacts repository.*
