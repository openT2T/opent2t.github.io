# OpenT2T Quality Strategy

Overview
========

This document overviews the approach to ensuring that openT2T translators are high quality. There are multiple levels and stages for validation, including testing against mock things and real hardware. There are three quality levels and five steps in the overall quality flow. There are also different groups of people who have unique responsibilities, working together ensuring high quality translators.

## OCF/Iotivity Opent2t Translator Committer Team
Owners of the Translators and Onboarding Repos
* Code Review and provide feedback to 3rd party developers
* Merge Pull Requests
* Establish Certification Flow
* Work with Certification team to ensure correct steps to certify are followed
* Consists of multiple companies, for example Microsoft, Intel, Samsung, etc

## OCF/Iotivity Opent2t Certification Commiter Team
Owners of certification of the translators with real hardware
* Follow the Certification flow process
* Ensure hardware is setup appropriately, in real world configurations
* Ensure Translators work with hardware
* Ensure Translators work with OCF/Iotivity Opent2t reference applications
* There could be multiple certification teams, one per company. A translator needs to only be certified by one such team.


Terminology
===========

  Term|Meaning|
  -------|:------|
  OCF/Iotivity|Open Connectivity Foundation|
  Opent2t|Open Translators to Things|
  Reference Application|A sample application which demonstrates how to use opent2t|
  Certification Flow|Process established which certifies a translator to be used by applications|
  Real World Configuration|A configuration which models a real world user setup|
  Device|The layer of OCF which represents abstract device concepts|
  Thing|Real world hardware device which a user can purchase|
  PR|Pull request, how code is checked in to GitHub|
  Lint/Linters|A program which performs static analyzes code for potential errors|
  Translator|A Node.js module which converts thing communication to OCF|
                             
                             

OCF/Iotivity Quality Levels
===========================

Alpha|Beta|Release|
-----|----|-------|
|Code has been code reviewed and merged by OCF/Iotivity opent2t translator committer team|Complete thing validation in OCF/Iotivity opent2t lab by OCF/Iotivity opent2t certification team|X real users have used the translator using any app which uses OCF/Iotivity opent2t|
Limited real thing validation by translator developer|Integration testing with OCF/Iotivity opent2t test apps in the OCF/Iotivity opent2t lab by OCF/Iotivity opent2t certification team|Observed error rates are <1% for the translator using any app which uses OCF/Iotivity opent2t|



Translator Flow
===============

Owner|Actions|
-----|-------|
<h2>Translator Developer</h2>|<ul><li>Run linters, validate naming and schema locally</li><li>Run tests with thing</li><li>Submit PR</li></ul>|
<h2>Automated Validation by Repo</h2>|<ul><li>Linters</li><li>Naming and Schema validation</li><li>Unit Tests</li></ul>|
<h2>OCF/Iotivity opent2t translator committer team</h2>|<ul><li>Code review and Accept PR</li><li>Quick test against real thing (not always)</li><li>Publish package, add Translator to Alpha</li></ul>|
<h2>OCF/Iotivity opent2t certification committer team</h2>|<ul><li>Deeper testing with real hardware</li><li>Integration tests with OCF/Iotivity opent2t reference apps</li><li>Sign off on translator and produce logs</li></ul>|
<h2>OCF/Iotivity opent2t translator committer team</h2>|<ul><li>Verify Sign off and logs</li><li>Add Translator to Beta</li></ul>|
<h2>Real Users</h2>|<ul><li>Translator is run by Insiders/Beta Users</li><li>Errors and Usage is logged</li></ul>|
<h2>OCF/Iotivity opent2t translator committer team</h2>|<ul><li>Monitor usage and errors</li><li>If some criteria, i.e. 99% success with >100 users, promotes to release</li></ul>|



Automated linters, naming and schema validation are static code analysis and will be supplemented by automated unit testing. Both will leverage continuous integration tools to help prevent low quality code from being merged into the codebase. Developers can get feedback locally prior to submitting a pull request and directly in GitHub after submitting a pull request.

In the spirit of leveraging and contributing to open source technologies we will use open and available solutions to make development as seamless as possible for ourselves and for third party developers.

Security
========

Sandbox
-------

We will require all translators have a whitelist of URLs they will be accessing to be included in their manifest.xml file. This set of URLs will be vetted by the OCF/Iotivity opent2t translator committer team. Translators will not be allowed to access any URLs which are not in their whitelist to ensure no data is being leaked.

Dependency Management
---------------------

All dependencies of opent2t libraries need to be verified to ensure the entire chain is trusted and no package lower in the tree is doing something malicious. We will be verifying the set used by initial translators and then as needed per new translators. We may come up with a white list and ask developers to leverage the whitelist as much as possible.

Concerns
--------

The following list is a list of security concerns which we need to mitigate:

-   A malicious virus can update local JavaScript code and alter their intended behavior

Continuous integration
======================

We are using [*Travis CI*](https://travis-ci.org/) for our continuous
integration tasks. Travis works by spinning up a clean VM each time a
pull request is submitted or updated and running specified tasks against
the modified code. This is done in the cloud and doesn’t require us to
own or maintain any of the servers or VM’s ourselves. Results from each
integration run are available on the Travis CI website and are linked to
from the GitHub pull request page.

**Features:**

1.  Great support for node.js projects. Travis supports node out of the
    box by specifying a single environment property in its config file.

2.  Excellent integration with GitHub. Travis is easily integrated with
    GitHub projects via a simple one-time setup. Once setup Travis runs
    every time a pull request is submitted or updated. GitHub shows
    pass/fail status for every pull request making it very easy to see
    when a pull request has issues. The full details of the CI run are
    also available.

3.  Widely used in OSS projects. Travis is a widely used CI service in
    the open source world and should therefore be familiar to many
    developers.

4.  It’s free! Travis CI is completely free for open source projects.

Static code analysis
====================

Static code analysis is already setup and running via Travis for both
the translators and onboarding repos. We are using
[*ESLint*](http://eslint.org/) to analyze all JavaScript code in these
repos.

**Features:**

1.  Integrates well with node projects.

    a.  Available from NPM.

    b.  Custom configurations can be defined as node packages, easily
        shareable amongst multiple repos and easily installable in CI
        environment.

Automatically ignores files in node\_modules folders so violations in
dependent packages will be ignored.

1.  Highly configurable and extendable. It’s easy to inherit and modify
    custom rulesets to suit our coding standards. This allows us to
    reuse an existing recommended ruleset while retaining control and
    flexibility.

2.  Widely used in OSS projects. There is a very active community
    creating configurations and plugins as well as contributing to the
    core tool.

3.  Extension supports continuous linting of JavaScript files within
    Visual Studio Code. This notifies developers of linting violations
    as they modify files.

**Caveats and concerns:**

1.  Default JavaScript parser doesn’t support all features of es6. We
    are working around this by using an alternative parser.

2.  We will need to be diligent in our code reviews to make sure we
    don’t merge code with violations.

In addition to linting, we will be doing the following additional
validations:

-   Validate manifest XML files conform to schema (XSD)

-   Validate opent2t metadata in package.json

-   Validate dependencies in package.json (for interface/onboarding
    references to other packages)

-   Validate interface modules successfully load and export their
    interface

-   Validate translators implement interfaces declared in RAML metadata

-   Validate translator interface method implementations have correct
    parameters/return types

Automated testing
====================

Tests in our translators repo will support the following:

1.  Run without things using mocked out responses

2.  Run with real things

3.  Run at an individual translator level

4.  Run at a schema level and validate all translators implementing the
    schema

**Test types:**

-   **Unit tests**

    -   Required to run with mocked out responses by default

    -   Required to run against a thing with a flag

-   **Opent2t Integration tests**

    -   Required to run against a thing by default

    -   Required to run with mocked out responses with a flag

-   **App/Consumer Integration tests**

    -   Required to run against a thing

**Unit test guidelines:**

1.  All translators will have standalone unit tests.

2.  Tests will use ava testing framework as this is what the existing
    integration tests use.

3.  Tests will be run as part of continuous integration when pull
    requests are submitted.

4.  Tests will use mock thing objects to initialize translators and
    expose canned thing data and functionality.

5.  We will define a standard pattern for exposing unit tests via the
    translators package.json to make it easy to run all unit tests.

6.  We will need to develop a way to run all relevant unit tests for a
    pull request without having to run any unnecessary tests. This is
    certainly doable but requires some additional investigation.

7.  Code reviewers will need to ensure that new tests have been created
    as necessary.

**Opent2t Integration test guidelines:**

1.  As stated above we will require integration tests. Since these will
    not be run as part of CI we will rely on our developers to run tests
    prior to sending a PR. We will also rely on code reviews to ensure
    that integration tests are present.

2.  These tests will ensure integration with schemas.

3.  Integration tests will continue to use the ava testing framework.

4.  Readme files should provide clear and consistent instructions for
    running integration tests.

5.  Integration tests will be run against real things by default.

**App/Consumer Integration test guidelines:**

1.  These tests will be written by the app/consumer and will ensure
    integration with the translators and their app.

Lab run integration tests
====================

In some cases, we will need to take extra measures to ensure translator
quality by testing on premises. These tests are relatively expensive as
they require specialized hardware and manual interaction so we will need
to choose which to run and when wisely.

Here are some guidelines for running tests manually:

1.  Integration tests will be run against hardware rather than
    emulators.

2.  In addition to integration tests we should test translators by using
    them within a consuming app.

3.  Tests will be run for high profile, largely used translators as well
    as translators that have quality issues reported through telemetry.

4.  Tests will be run prior to publishing the translator module to npm.
    Because of this we will need to ensure a quick turnaround after a
    pull request has been merged.

Open Telemetry
====================

All translators will be run through the OCF/Iotivity opent2t library
which will be instrumented to provide open telemetry and will allow us
to identify issues and to help us understand when a translator has met
the criteria necessary to be released. We have not yet determined which
telemetry tools/frameworks we will use or what the promotion criteria
will be.

Telemetry will be surfaced on an OCF/Iotivity opent2t open dashboard
which shows usage for each individual translators, success/error rates
and latency of request/responses. This will allow all consumers of
opent2t to view usage of various translators and gain confidence in the
project. The dashboard should provide usage of translators at all three
quality levels and how close it is to being ready for promotion.

Privacy needs to be maintained and no information about which consumer
of opent2t is using which translators and how much. For example, open
telemetry will not collect:

-   Any information which can identify a person: location, username,
    user guid, device id, device serial

-   Which app is hosting the translator

For Example:<br/>
![](quality-strategy-open-telemetry.png?raw=true)

3rd Party Service Availability
================================

Opent2t relies on translators connecting to 3rd party cloud services.
It is inevitable that the availability of these services will be
fluctuate. Opent2t will have an availability site which shows
availability and a 7-day history. 3rd party services will be checked
every 5 minutes, if a service is down we will check every minute to see
if it comes back up.

For Example:<br/>
![](quality-strategy-service-availability.png?raw=true)
