
## Overview

The DSB Postman Collections is a repository of saved API requests, maintained by the Data Standards Body (DSB), to streamline CDR API testing for the participants. It is an invaluable resource for CDR participants which can streamline the testing process, simplify debugging, and  support ongoing compliance as standards evolve.
Ultimately, they improve the efficiency of CDR implementation efforts across all participants.

## Accessing the Collections

You can explore these collections in our public [Postman workspace](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests). All collections are maintained in this GitHub repository, which serves as a central hub for updates and community collaboration.

## Using the Postman Collection

Our collections are carefully organised into folders by sector: Banking, Common, and Energy. These folders contain numerous test scenarios and assertions as outlined in the CDR Test Documentation. Each collection serves as a blueprint, demonstrating one possible way to structure a test suite for a data holder. 

Some of the test cases in the Postman Collection links to the associated CDR Test Documentation scenario. For example, the test case [T.EAR.0002](https://www.postman.com/winter-shadow-541400/workspace/dsb-schema-tests/request/8286723-272ebbd2-81c7-488a-93c2-05c472150ef0?action=share&source=copy-link&creator=8286723&active-environment=ce3f92fe-ccc7-47b9-a820-8d0bc8b684b5) shows a real-world implementation with code examples under the Test tab in Postman, with its [detailed documentation](https://consumerdatastandardsaustralia.github.io/standards-testing/latest/#testcase-t.ear.0002) accessible in the CDR Test Documentation. 

By integrating the CDR Test Documentation with the DSB Postman collections, you can conduct thorough, standards-compliant testing of your Mock Data Holder implementations. The DSB provides ready-to-use sample environments, such as DSB Banking and DSB Energy. These configurations are designed to work with the Mock data holder (NodeJS), and are published in the [CDS mock-data-holder-nodejs repository](https://github.com/ConsumerDataStandardsAustralia/mock-data-holder-nodejs), providing a realistic testing backdrop.

### Customising Your Testing Environment

You can set up a custom Postman environment by configuring your own environment file, tailored to your own CDR Data Holder server, using the provided sample environment files.

Execute the tests using the Postman collection and then compare the outcomes in Postman with the expected results outlined in the Test Documentation to evaluate your CDR compliance and identify areas for enhancement.

Refer to the [Postman documentation](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) for more information on how to use collections.

## Reporting Issues

Encountered an issue? We're here to help. Please visit our [issue reporting guidelines](https://d61cds.notion.site/Issue-Reporting-Guidelines-71a329a0658c4b69a232eab95822509b) for submitting an issue.

## Stay Updated

Join our newsletter to receive the latest updates, release notes, and alerts. [Subscribe here](https://consumerdatastandards.us18.list-manage.com/subscribe?u=fb3bcb1ec5662d9767ab3c414&id=a4414b3906).

## License

The artefact is released under the [MIT License](https://github.com/ConsumerDataRight/mock-register/blob/main/LICENSE), which allows the community to use and modify it freely.

## Disclaimer

The artefacts in this repository are offered without warranty or liability, in accordance with the [MIT licence.](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE)

[The Data Standards Body](https://www.consumerdatastandards.gov.au/about) (DSB) develops these artefacts in the course of its work, in order to perform quality assurance on the Australian Consumer Data Right Standards (Data Standards).

The DSB makes this repository, and its artefacts, public [on a non-commercial basis](https://github.com/ConsumerDataStandardsAustralia/java-artefacts/blob/master/LICENSE) in the interest of supporting the participants in the CDR ecosystem.

The resources of the DSB are primarily directed towards assisting the [Data Standards Chair](https://consumerdatastandards.gov.au/about/) for [developing the Data Standards](https://github.com/ConsumerDataStandardsAustralia/standards).

Consequently, the development work provided on the artefacts in this repository is on a best-effort basis, and the DSB acknowledges the use of these tools alone is not sufficient for, nor should they be relied upon with respect to [accreditation](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0/cdr-draft-accreditation-guidelines), conformance, or compliance purposes.