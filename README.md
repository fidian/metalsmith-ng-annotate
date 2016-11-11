# Description

Metalsmith plugin to add, remove and rebuild AngularJS dependency injection annotations.

# Usage

Install the package:

    npm install metalsmith-ng-annotate --save

Use the plugin in the Metalsmith chain:

    var Metalsmith = require('metalsmith'),
        ngAnnotate = require('metalsmith-ng-annotate');

    var project = Metalsmith(__dirname)
        .use(ngAnnotate({
            add: true
        }));

    project.build(function (error) {

    });

# Options

- **`add`** (Boolean)

  Add dependency injection annotations where non-existing.

- **`pattern`** (String | Array)

  Filter files that match a pattern.

- **`remove`** (Boolean)

  Remove all existing dependency injection annotations.

- **`rename`** (Object)

  Rename declarations and annotated references.

- **`single_quotes`** (Boolean)

  Use single quotes instead of double quotes.

# License

Released under The Apache Software License, Version 2.0
