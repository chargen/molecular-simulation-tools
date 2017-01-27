const CCCC = require('cloud-compute-cannon-client');
const ccc = CCCC.connect(process.env["CCC"]);

const workflowUtils = {

  /**
   * Run a conversion of a pdb file.
   * {
   *   pdbData: <pdb file as a string>
   * }
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  executeWorkflow0(params) {
    var paramsToLog = Object.assign({}, params);
    if (paramsToLog.pdbData) {
      paramsToLog.pdbData = paramsToLog.pdbData.substr(0, 100);
    }
    log.debug({workflow:"executeWorkflow0", params:paramsToLog});

    var cccInput = {
      name: "input.pdb",
    };
    if (params.pdbUrl) {
      var pdbUrl = params.pdbUrl;
      if (!pdbUrl.startsWith('http')) {
        if (!pdbUrl.startsWith('/')) {
          pdbUrl = `/${pdbUrl}`;
        }
        pdbUrl = `http://localhost:${process.env.PORT}${pdbUrl}`;
      }
      cccInput.value = pdbUrl;
      cccInput.type = 'url';
    }

    if (!params.pdbUrl) {
      cccInput.value = params.pdbData;
      cccInput.type = 'inline';
    }

    if (!cccInput.type) {
      return Promise.reject('Missing pdbUrl or pdbData field in parameters');
    }

    const jobJson = {
      wait: false,
      appendStdOut: true,
      appendStdErr: true,
      // image: 'docker.io/avirshup/vde:0.0.7',
      image: 'docker.io/busybox:latest',
      /* If this is a local dev docker-compose setup, mount the local ccc server to the workflow container */
      mountApiServer: process.env["CCC"] == "ccc:9000",
      inputs: [cccInput],
      createOptions: {
        WorkingDir: '/outputs',
        // Cmd: [params.pdbUrl],
        Cmd: ["cp", "/inputs/input.pdb", "/outputs/out.pdb"],
        Env: [
          `CCC=${process.env["CCC"]}`
        ]
      }
    };
    // log.info({jobJson:jobJson});
    return ccc.submitJobJson(jobJson);
  },

  /**
   * The first step in workflow1, where a pdb
   * needs to be processed before a ligand
   * can be selected
   * @param  {String} pdbData
   * @return {Promise<{success:true, prepJson:<URL>, prepPdb:<URL>}>}
   */
  executeWorkflow1Step0(pdbDataStream) {
    var cccInput = {};
    cccInput["input.pdb"] = pdbDataStream;
    const jobJson = {
      wait: true,
      appendStdOut: true,
      appendStdErr: true,
      image: 'docker.io/avirshup/mst:workflow_qmmm1-0.0.alpha0',
      createOptions: {
        Cmd: ["/inputs/input.pdb"]
      }
    };
    return ccc.run(jobJson, cccInput)
      .then(jobResult => {
        if (jobResult.exitCode == 0) {
          var baseUrl = jobResult.outputsBaseUrl;
          //Local dev version
          if (!baseUrl.startsWith('http')) {
            baseUrl = 'http://localhost:9000/' + baseUrl;
          }
          var result = {
            success: true,
            "prepJson": baseUrl + 'prep.json',
            "prepPdb": baseUrl + 'prep.pdb'
          }
          return result;
        } else {
          return {success:false, job:jobResult};
        }
      });
  },

  processInput(workflowId, pdb) {
    return new Promise((resolve) => {
      // TODO hardcoding this for every workflow seems fragile, is there a
      // better abstraction for this?
      switch (workflowId) {
        case '1':
          // TODO this should be replaced by something that runs the real Python
          // pdb processing and returns real data instead of this hardcoded data
          return resolve({
            data: {
              ligands: {
                // Hardcoded data for 3aid
                ARQ: Array(42).fill().map((val, index) => 1846 + index),
              },
            },
            pdb,
          });

        // Handles workflows that don't require input processing (like VDE)
        default:
          return resolve({ pdb: '', data: {} });
      }
    });
  },
};

module.exports = workflowUtils;