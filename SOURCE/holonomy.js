#! /usr/bin/env node
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                         #######  #######   #####
                            #     #     #  #     #
                            #     #     #  #
                            #     #     #  #
                            #     #     #  #
                            #     #     #  #     #
                            #     #######   #####

  _TABLE_OF_CONTENT     - Table of Content
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    _holonomy    - holonomy
    _USAGE_API          - Describe the interface of this module
    _SANITIZE           - validate & sanitize given arguments
    _MODULE             - implement the logic of this module
    _EXPORT_API         - specify the api of a return object
    _CONTEXT            - define all dependencies of this module

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    @JOB: adapt TOC according to project needs
    @JOB: decide dropin vs configurable in 'npmgenerate-cjs'

                                             (by npmgenerate-cjs version 0.2.1)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
(function COMMONJS_MODULE_EXPORTER (FACTORY) {
  'use strict';
  module.exports = FACTORY(/*with predefined set of PARAMS*/); // DROPIN
  // module.exports = FACTORY; // CONFIGURABLE
})(
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

        #    #   ####   #        ####   #    #   ####   #    #  #   #
        #    #  #    #  #       #    #  ##   #  #    #  ##  ##   # #
        ######  #    #  #       #    #  # #  #  #    #  # ## #    #
        #    #  #    #  #       #    #  #  # #  #    #  #    #    #
        #    #  #    #  #       #    #  #   ##  #    #  #    #    #
        #    #   ####   ######   ####   #    #   ####   #    #    #

  _TABLE_OF_CONTENT _holonomy
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    Copyright (c) 2014 Alexander Praetorius
    Licensed under the MIT license.

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    ...

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  (function MODULE_holonomy (
    // to shield MODULE from overriden 'undefined' and global object pollution
    ///////////////////////////////////////////////////////////////////////////
    META, ENTITIES, DEPs, window, global, undefined
    ///////////////////////////////////////////////////////////////////////////
  ) {
    'use strict';
    function holonomy_API (
      /*-----------------------------------------------------------------------

           #    #   ####     ##     ####   ######        ##    #####   #
           #    #  #        #  #   #    #  #            #  #   #    #  #
           #    #   ####   #    #  #       #####       #    #  #    #  #
           #    #       #  ######  #  ###  #           ######  #####   #
           #    #  #    #  #    #  #    #  #           #    #  #       #
            ####    ####   #    #   ####   ######      #    #  #       #

        _TABLE_OF_CONTENT _USAGE_API
        -----------------------------------------------------------------------
        ### DESCRIPTION

          MODULE API

            USAGE:
              ...

        -----------------------------------------------------------------------
        ### ROADMAP

          ...

      -----------------------------------------------------------------------*/
      /////////////////////////////////////////////////////////////////////////
      //INJECTED DEPENDENCIES:
      CONTAINER,  // DOM Form Element to apply holonomy to
      //OPTIONS:
      SETTINGS,   // OPTIONAL -- name:string, required:boolean, minQueryLength:number
      SUGGESTIONS // Optional ARRAY from which to choose autocomplete SUGGESTIONS
      /////////////////////////////////////////////////////////////////////////
    ) {
      /*-----------------------------------------------------------------------

                ####     ##    #    #  #  #####  #  ######  ######
               #        #  #   ##   #  #    #    #      #   #
                ####   #    #  # #  #  #    #    #     #    #####
                    #  ######  #  # #  #    #    #    #     #
               #    #  #    #  #   ##  #    #    #   #      #
                ####   #    #  #    #  #    #    #  ######  ######

        _TABLE_OF_CONTENT _SANITIZE
        -----------------------------------------------------------------------
        ### PARAMETER VALIDATION + SANITIZATION - ROADMAP

          @JOB: Refine behavior in relation to given input
          @JOB: Only do if not singleton and single instance already exists
          @ASSERT: at least one 'billboards' is given in SETTINGS.billboards
            else: return without creating anything new!
      -----------------------------------------------------------------------*/
      SETTINGS = typeof SETTINGS === 'undefined' ?
        { // DEFAULT SETTINGS
          // settings      : {placeholder: 'Search', value: '', minQueryLength: 0},
          // SUGGESTIONS   : [],
          // selection     : '',
          // onQueryChange : function onQueryChange (oldQuery, newQuery) {
          //   return;
          // }
        }
        : SETTINGS // @JOB: Extend non-given OPTIONS with DEFAULTS, allow override defualts with "NULL"
      ;
      var MODULE =
        ENTITIES.length ? ENTITIES[ENTITIES.length-1] : // @JOB: if singleton vs factory
        (function holonomy (STATE) {
          var
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

               #    #   ####   #####   #    #  #       ######
               ##  ##  #    #  #    #  #    #  #       #
               # ## #  #    #  #    #  #    #  #       #####
               #    #  #    #  #    #  #    #  #       #
               #    #  #    #  #    #  #    #  #       #
               #    #   ####   #####    ####   ######  ######

  _TABLE_OF_CONTENT _MODULE
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    MODULE CREATION

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    ...

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          /*-------------------------------------------------------------------
            TEMPLATE - BUILDING & CUSTOMIZATION (Markup, Properties, Styling)
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            DEFINE
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            USER INTERACTION EVENTS & HANDLER
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            MODULE SPECIFIC HELPERS
          -------------------------------------------------------------------*/
            // none

                  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                           #  #    #  #  #####  #    ##    #       #  ######  ######
                           #  ##   #  #    #    #   #  #   #       #      #   #
                           #  # #  #  #    #    #  #    #  #       #     #    #####
                           #  #  # #  #    #    #  ######  #       #    #     #
                           #  #   ##  #    #    #  #    #  #       #   #      #
                           #  #    #  #    #    #  #    #  ######  #  ######  ######

                    _TABLE_OF_CONTENT _INITIALIZE
                    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

  exit      = require('exit'),
  fs        = require('graceful-fs'), // https://github.com/isaacs/node-graceful-fs
  subarg    = require('subarg'), // https://github.com/substack/subarg, https://github.com/substack/minimist
  path      = require('path'),
  bulk      = require('bulk-require'),
  pkg       = require(path.join(__dirname,'../package.json')),
  version   = {
    api       : pkg.version, // maybe can divert from cli if methods provided?
    cli       : pkg.version,
    project   : null
  },
  project   = (function meta (projectPath) {
    // @TODO: maybe in order to use "holonomy" go to the "root directory"
    // of the project that contains package.json with "holonomy" attribute
    var settings  = fs.existsSync(projectPath) && require(projectPath);
    if (settings.holonomy) {
      version.project = settings.version;
    } else {
      var errormessage = 'Project is not a holonomy - ' + projectPath;
      console.log(errormessage);
      exit(1);
    }
    return settings.holonomy;
  })(path.join(process.cwd(), 'package.json'))
  // https://www.npmjs.org/doc/misc/npm-scripts.html - consider adding defaults to package.json in postInstall Hook
  // STYLING
  // wordwrap
  // @TODO: camelize          : camelize - https://github.com/substack/camelize
  // @TODO: globbing          : glob
  // @TODO: colors            : chalk, colors
  // @TODO: msee              : markdown terminal comments
  // ...
  // @TODO: um & others       : bash tab completion - https://github.com/Jonovono/um, https://github.com/hij1nx/complete, https://github.com/mklabs/node-tabtab

  // OTHER FEATURES:
  // - stack/middleware
  // - daemon
;
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  REQUIRE CALL -> HOLONOMY
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
module.exports = initialize;
function initialize (args) {
  // if args is string, ten split(' ');
  // check if argv is array of command and params or a string representing them
  // holonomy('snapshot aboutpage --public');
  // holonomy('snapshot', 'aboutpage', '--public');
  // holonomy('snapshot', 'aboutpage --public');
  console.info('holonomy from require()');
  var argv = subarg(args); // CHECK: https://github.com/substack/minimist#methods
  holonomy(argv);
}
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMAND LINE CALL -> HOLONOMY
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
if (module === require.main) {
  console.info('holonomy from command line');
  var argv = subarg(process.argv.slice(2)); // CHECK: https://github.com/substack/minimist#methods
  holonomy(argv);
}

                                  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                                         #    #   ####   #        ####   #    #   ####   #    #  #   #
                                         #    #  #    #  #       #    #  ##   #  #    #  ##  ##   # #
                                         ######  #    #  #       #    #  # #  #  #    #  # ## #    #
                                         #    #  #    #  #       #    #  #  # #  #    #  #    #    #
                                         #    #  #    #  #       #    #  #   ##  #    #  #    #    #
                                         #    #   ####   ######   ####   #    #   ####   #    #    #

                                    _TABLE_OF_CONTENT _HOLONOMY
                                    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function holonomy (argv) {
  //   var userArgs = process.argv;
  //   var searchParam = userArgs[2];
  //   if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
  //       return console.log('cli help');
  //   }
  //   if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
  //       return console.log(require('./package').version);
  //   }
  var
    command = argv._.shift(),
    source  = path.join('.',project.source),
    // source  = path.join(process.cwd(),project.source),
    data    = bulk(source, ['**/*.js']),
    finder  = require('findit')(source),  // @TODO: finder or bulk!
    widgets = Object.keys(data)
  ;
  (function LOGGING () {
    console.log('==========================');
    console.log(argv);
    console.log('==========================');
    console.log(command);
    console.log('==========================');
    console.log(version);
    console.log(project);
    console.log('==========================');

    // @TODO: instead of "index.js", make "holonomy" its own globally installable module
    // @TODO: make it useful as library
    // @TODO: make it useful as cli
    // @TODO: make it useful as browserify trasform
    // @TODO: think about usefulness in browser context...
    // @TODO:#T01: use require('fs') to read json directory structure

    //#T01
    console.log(data.diary.item1);

    finder
      .on('directory', function (dir, stat, stop) {
          var base = path.basename(dir);
          if (base === '.git' || base === 'node_modules') stop()
          else console.log(path.join(dir, '/'));
      })
      .on('file', function (file, stat) {
          console.log(file);
      })
      .on('link', function (link, stat) {
        console.log(link);
      })
    ;
  })//();

                                  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                                          ####   #       #      #####   ######   ####   #   ####   #    #
                                         #    #  #       #      #    #  #       #       #  #    #  ##   #
                                         #       #       #      #    #  #####    ####   #  #       # #  #
                                         #       #       #      #    #  #            #  #  #  ###  #  # #
                                         #    #  #       #      #    #  #       #    #  #  #    #  #   ##
                                          ####   ######  #      #####   ######   ####   #   ####   #    #

                                    _TABLE_OF_CONTENT _CLI_DESIGN
                                    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP:

    CONFIG
    - SANITZIER (parseInt, camelize,...)
    PROMPT:
    - password
    - one line
    - multiline
    - choose
    - confirm
    COMMANDS:
    - help
    - version
    ACTIONS:
    - ...
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
// var api =
  require('clilib')
    .DESCRIPTION()
    //.alias()  // only for inner commands
    .EXAMPLE()
    // .EXAMPLE() // more examples
    .USAGE()    // FORMAT: ~ $ name command options  -> action - maybe automatically generated
    .DEFAULTS()
    // complain if stuff/arguments are given, which are not defined
    .CHECK()    // validators/required/demand/typecheck/constraints/choices/sanitize - function with comments
    .OPTION(/*
      #args (*=list, 1,..,n,...), METAVAR for use in USAGE
    */)
    // .OPTION() // more options
    .PARAMETER('--help', function (__help) {
      __help.alias('--h')
    })  // OPTION
    .PARAMETER('--h')     // OPTION
    // SUBCOMMANDS
    .COMMAND('help', function (help) { // FLAG (1st FLAG = MODE)
      help
        .alias('h')
        .option('verbose', {
          alias       : 'v',
          description : 'description of verbose',
          default     : 0, // defaults or certain values can also be read from package.json
          check       : function isValid (values) {
            // {0,1,2,3}
            return /[0123]/.test(values[0]); // = demanded parameter
            return /undefined|[0123]/.test(values[0]); // = optional parameter
          }, // ... ... ... ... ... ... ... ... ... ...
          required    : false,
          type        : 'integer',    // boolean, string, ...
        })
        .check(function (options) {}) // options = { verbose: 1 }
        .example('holonomy help --verbose 2')
        // usage should be generated from the rest
        // .usage('holonomy help [--verbose=$0]') // $0 = process.args[0] = "holonomy" or "node ./holonomy.js"
              // Usage: node ./divide.js -x [num] -y [num]
              //
              // Options:
              //   -x  [required]
              //   -y  [required]
              //
              // Missing required arguments: y
    })
    // .command () // more sub commands


  .COMMAND('help', function (help) {
    help
      .alias('h')
      .option('verbose', {
        alias       : 'v',
        description : 'description of verbose',
        default     : 0, // defaults or certain values can also be read from package.json
        check       : function isValid (values) {
          // {0,1,2,3}
          return /[0123]/.test(values[0]); // = demanded parameter
          return /undefined|[0123]/.test(values[0]); // = optional parameter
        }, // ... ... ... ... ... ... ... ... ... ...
        required    : false,
        type        : 'integer',    // boolean, string, ...
      })
      .check(function (options) {}) // options = { verbose: 1 }
      .example('holonomy help --verbose 2')
  })


  ;
  console.log('=============================================================');
}


/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

      ######  #    #  #####    ####   #####   #####        ##    #####   #
      #        #  #   #    #  #    #  #    #    #         #  #   #    #  #
      #####     ##    #    #  #    #  #    #    #        #    #  #    #  #
      #         ##    #####   #    #  #####     #        ######  #####   #
      #        #  #   #       #    #  #   #     #        #    #  #       #
      ######  #    #  #        ####   #    #    #        #    #  #       #

  _TABLE_OF_CONTENT _EXPORT_API
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    PUBLIC ENTITY API - SET MODULE ENTITY DEFAULT INTERFACE

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    @JOB: make INIT/CONFIGURE and START one method with many params
    @JOB: make module initialization an USAGE API option

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
var            api = {
              /*---------------------------------------------------------------
                BUILD MODULE
              ---------------------------------------------------------------*/
              init: function initializeObject (settings) {
                delete api.init;
                /*-------------------------------------------------------------
                  CUSTOMIZE - module interface, internals & initialization
                -------------------------------------------------------------*/
                // just initialize something
                // or set other api.attributes
                // or return something
                // or set some global stuff
              }
            }
          ;
          api.id = ENTITIES.push(api);
          /*-------------------------------------------------------------------
            PUBLIC API EXPORT
          -------------------------------------------------------------------*/
          // [Optional] initialize this module immediately
          api.init({}); // provide optional settings argument
          return ENTITIES[api.id-1];
        })({})
      ;
      MODULE.META = META;
      return MODULE;
    }
    holonomy_API.META = META;
    return holonomy_API;
  })(
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

              ####    ####   #    #  #####  ######  #    #  #####
             #    #  #    #  ##   #    #    #        #  #     #
             #       #    #  # #  #    #    #####     ##      #
             #       #    #  #  # #    #    #         ##      #
             #    #  #    #  #   ##    #    #        #  #     #
              ####    ####   #    #    #    ######  #    #    #

  _TABLE_OF_CONTENT _CONTEXT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### DESCRIPTION

    MODULE CONTEXT

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

    ...

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    /*-------------------------------------------------------------------------
      META

      @JOB - http://www.2ality.com/2012/10/javascript-properties.html
        (use to create the stuff below)

    -------------------------------------------------------------------------*/
    {
      NAME    : require('../package.json').name.toUpperCase(),
      VERSION : 'v' + require('../package.json').version,
    },
    /*-------------------------------------------------------------------------
      SET OF MODULE INSTANCES - only 1 if singleton

      @JOB: singleton vs factory

    -------------------------------------------------------------------------*/
    [],
    /*-------------------------------------------------------------------------
      DEPENDENCY TREE

        @JOB - http://www.2ality.com/2012/10/javascript-properties.html
          (use to create the stuff below)

    -------------------------------------------------------------------------*/
    (function DEPENDENCIES () {
      'use strict';
      return {
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          EXTERNAL DEPENDENCIES
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          INTERNAL DEPENDENCIES
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*---------------------------------------------------------------------
          e.g. INTERNAL MODULE - nameOfInternalModule1
          (copy structure of this file)
        ---------------------------------------------------------------------*/
      };
    })()
  )
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
