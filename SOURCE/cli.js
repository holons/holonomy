/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMONJS MODULE EXPORT                                        (Version 0.0.0)

    @JOB: UBER_NGEN GENERATOR for Components schreiben
    @JOB: dropin vs configurable
    @JOB: Make "COMMENTS" create a nice visual structure of module in miniview
    http://www.patorjk.com/software/taag/#p=display&h=0&v=0&f=Banner&t=TOC
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
(function COMMONJS_EXPORTER (FACTORY) {
  'use strict';
  // If MODULE is a "Drop In" which executes once after loading:
  module.exports = FACTORY(/*with predefined set of PARAMS*/); // CommonJS
  // // ELSE IF MODULE is Otherwise a CONFIGURABLE:
  // module.exports = FACTORY;
})(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULENAME                                                      (this lego)
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  (function MODULE_MODULENAME (META, ENTITIES, DEPs, window, global, undefined)
  { // to shield MODULE from overriden 'undefined' and global object pollution
    'use strict';
    function MODULENAME_API (
      /*-----------------------------------------------------------------------
        MODULE API

          USAGE:
            ...
      -----------------------------------------------------------------------*/
      //INJECTED DEPENDENCIES:
      CONTAINER,  // DOM Form Element to apply MODULENAME to
      //OPTIONS:
      SETTINGS,   // OPTIONAL -- name:string, required:boolean, minQueryLength:number
      SUGGESTIONS // Optional ARRAY from which to choose autocomplete SUGGESTIONS
    ) {
      /*-----------------------------------------------------------------------
        PARAMETER VALIDATION + SANITIZATION

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
      /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        MODULE CREATION                                       (build this lego)
      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
      var MODULE =
        ENTITIES.length ? ENTITIES[ENTITIES.length-1] : // @JOB: if singleton vs factory
        (function MODULENAME (STATE) {
          var
          /*-------------------------------------------------------------------
            TEMPLATE - BUILDING
          -------------------------------------------------------------------*/
            // none
          /*-------------------------------------------------------------------
            TEMPLATE - CUSTOMIZATION (Markup, Properties, Styling)
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
          /*-------------------------------------------------------------------
            PUBLIC ENTITY API - SET MODULE ENTITY DEFAULT INTERFACE
          -------------------------------------------------------------------*/
            api = {
              /*---------------------------------------------------------------
                BUILD MODULE
              ---------------------------------------------------------------*/
              init: function initialize (settings) {
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

              @JOB: make INIT/CONFIGURE and START one method with many params
              @JOB: make module initialization a constructor option

          -------------------------------------------------------------------*/
          // [Optional] initialize this module immediately
          api.init({}); // provide optional settings argument
          return ENTITIES[api.id-1];
        })({})
      ;
      MODULE.META = META;
      return MODULE;
    }
    MODULENAME_API.META = META;
    return MODULENAME_API;
  })(
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    MODULE CONTEXT
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
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
          EXTERNAL DEPENDENCIES                                  (others legos)
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
          // none
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          INTERNAL DEPENDENCIES                                      (my legos)
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
