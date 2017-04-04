const widgetsConstants = require('molecular-design-applications-shared').widgetsConstants;

const mockedAppStatus = {
  created: 1491328956897,
  email: 'justin.mccandless@autodesk.com',
  ended: 1491329063327,
  id: 'B1SpJD-al',
  inputString: '3ac2',
  inputs: [
    {
      fetchedValue: null,
      name: 'prep.pdb',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/H1CsywbTx/outputs/prep.pdb'
    },
    {
      fetchedValue: null,
      name: 'workflow_state.dill',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/H1CsywbTx/outputs/workflow_state.dill'
    },
    {
      fetchedValue: null,
      name: 'prep.json',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/H1CsywbTx/outputs/prep.json'
    },
    {
      fetchedValue: '',
      name: 'selection.json',
      type: 'inline',
      value: '{\'ligandname\':\'MPD513\',\'atom_ids\':[2224,2225,2226,2227,2228,2229,2230,2231]}'
    }
  ],
  jobResult: {
    definition: {
      appendStdErr: true,
      appendStdOut: true,
      image: {
        optionsCreate: {
          Cmd: [
            'minimize',
            '--restart',
            '/inputs/workflow_state.dill',
            '--setoutput',
            'user_atom_selection=/inputs/selection.json',
            '--outputdir',
            '/outputs/'
          ],
          Env: [
            'CCC=ccc.bionano.autodesk.com:9000',
            'INPUTS=/inputs',
            'OUTPUTS=/outputs',
            'OUTPUTS_HOST_MOUNT=outputs__B1SpJD-al_1',
            'INPUTS_HOST_MOUNT=inputs__B1SpJD-al_1'
          ],
          HostConfig: {
            Binds: [
              'outputs__B1SpJD-al_1:/outputs:rw',
              'inputs__B1SpJD-al_1:/inputs:rw'
            ],
            LogConfig: {
              Config: {},
              Type: 'json-file'
            }
          },
          Image: 'avirshup/mst:workflows-0.0.1b6',
          Labels: {
            computeId: 'B1SpJD-al_1',
            jobId: 'B1SpJD-al'
          }
        },
        type: 'image',
        value: 'avirshup/mst:workflows-0.0.1b6'
      },
      inputs: [
        'prep.pdb',
        'workflow_state.dill',
        'prep.json',
        'selection.json'
      ],
      jobId: 'B1SpJD-al',
      mountApiServer: false,
      parameters: {
        cpus: 1,
        maxDuration: 600000
      }
    },
    error: null,
    exitCode: 0,
    inputs: [
      'prep.pdb',
      'workflow_state.dill',
      'prep.json',
      'selection.json'
    ],
    inputsBaseUrl: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/inputs/',
    jobId: 'B1SpJD-al',
    outputs: [
      'results.json',
      'final_structure.pdb',
      'minsteps.tar.gz',
      'minstep_frames.json',
      'prmtop',
      'minstep.1.pdb',
      'inpcrd',
      'workflow_state.dill',
      'minstep.0.pdb'
    ],
    outputsBaseUrl: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/',
    resultJson: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/result.json',
    stats: {
      attempts: [
        {
          container: '1m',
          dequeued: '2017-04-04T11:02:36 PDT',
          enqueued: '2017-04-04T11:02:36 PDT',
          error: 'null',
          exitCode: 0,
          image: '0.005s',
          inputs: '3.7640000000000002s',
          inputsAndImage: '3.769s',
          outputs: '5.404s'
        }
      ],
      duration: '17260d',
      finished: '1969-12-31T16:00:00 PST',
      recieved: '2017-04-04T11:02:36 PDT',
      uploaded: '17260d'
    },
    status: 'success',
    stderr: null,
    stdout: [
      'Running workflow \'minimize\' with input \'/inputs/workflow_state.dill.\'',
      'Outputs will be written to \'/outputs/\'.',
      'Reading configuration from /root/.moldesign/moldesign.yml',
      'Using CCC server: ccc.bionano.autodesk.com:9000',
      'Setting output of UI task \'user_atom_selection\' to contents of /inputs/selection.json',
      '',
      ' ----   RESTARTING WORKFLOW \'Refine ligand binding site\'   ----',
      '',
      'Starting workflow \'Refine ligand binding site\'',
      '',
      'Running task \'prep_ligand\' on CloudComputeCannon engine on host: http://ccc.bionano.autodesk.com:9000/',
      '  jobid: r1TpyPZTg',
      '  image: docker.io/avirshup/mst:mdt_ambertools-0.0.1b6',
      '  command: python2 run_job.py',
      '  input_fields:',
      '    \'ligand_atom_ids\': <Output field \'atom_ids\' from task \'user_atom_selection\'>',
      '    \'ligandname\': <Output field \'ligandname\' from task \'user_atom_selection\'>',
      '    \'mol\': <Output field \'mol\' from task \'read_molecule\'>',
      'Job status: Downloading...............Running.Finishing.Finished',
      'Done with task \'prep_ligand\'',
      'Total walltime for \'prep_ligand\': 31.85 s',
      'Python execution walltime: 2.72557687759',
      'Output fields: ligand, ligand_parameters',
      '    ----- results.json -----',
      'r1TpyPZTg:',
      '  definition:',
      '    command: [sh, -c, cp -rf /inputs/* . && export CCC_WORKDIR=`pwd` && python2 run_job.py',
      '        && cd $CCC_WORKDIR && cp -r * /outputs 2>/dev/null]',
      '    containerInputsMountPath: null',
      '    containerOutputsMountPath: null',
      '    image: {pull_options: null, type: image, value: \'docker.io/avirshup/mst:mdt_ambertools-0.0.1b6\'}',
      '    inputs: [source.py, run_job.py, function.pkl, inputs/ligandname.pkl, inputs/ligand_atom_ids.pkl,',
      '      inputs/mol.pkl]',
      '    inputsPath: null',
      '    jobId: r1TpyPZTg',
      '    meta: null',
      '    outputsPath: null',
      '    parameters: {cpus: 1, maxDuration: 3600000}',
      '    resultsPath: null',
      '    workingDir: /workingdir',
      '  error: null',
      '  exitCode: 0',
      '  inputs: [source.py, run_job.py, function.pkl, inputs/ligandname.pkl, inputs/ligand_atom_ids.pkl,',
      '    inputs/mol.pkl]',
      '  inputsBaseUrl: https://d3bt947tva2i1l.cloudfront.net/r1TpyPZTg/inputs/',
      '  jobId: r1TpyPZTg',
      '  outputs: [source.pyc, function.pkl, source.py, outputs/ligand.pkl, outputs/ligand_parameters.pkl,',
      '    inputs/ligand_atom_ids.pkl, inputs/mol.pkl, inputs/ligandname.pkl, run_job.py,',
      '    outputfields.txt]',
      '  outputsBaseUrl: https://d3bt947tva2i1l.cloudfront.net/r1TpyPZTg/outputs/',
      '  resultJson: https://d3bt947tva2i1l.cloudfront.net/r1TpyPZTg/result.json',
      '  stats:',
      '    attempts:',
      '    - {container: 4.134s, dequeued: \'2017-04-04T11:02:45 PDT\', enqueued: \'2017-04-04T11:02:45',
      '        PDT\', error: \'null\', exitCode: 0, image: 18.811s, inputs: 3.309s, inputsAndImage: 22.12s,',
      '      outputs: 3.089s}',
      '    duration: 29.824s',
      '    error: \'null\'',
      '    finished: 2017-04-04T11:03:14 PDT',
      '    recieved: 2017-04-04T11:02:44 PDT',
      '    uploaded: 17260d',
      '  status: success',
      '  stderr: https://d3bt947tva2i1l.cloudfront.net/r1TpyPZTg/stderr',
      '  stdout: https://d3bt947tva2i1l.cloudfront.net/r1TpyPZTg/stdout',
      '',
      '',
      'Running task \'prep_forcefield\' on CloudComputeCannon engine on host: http://ccc.bionano.autodesk.com:9000/',
      '  jobid: rya1ewW6l',
      '  image: docker.io/avirshup/mst:mdt_ambertools-0.0.1b6',
      '  command: python2 run_job.py',
      '  input_fields:',
      '    \'ligand_atom_ids\': <Output field \'atom_ids\' from task \'user_atom_selection\'>',
      '    \'ligand_params\': <Output field \'ligand_parameters\' from task \'prep_ligand\'>',
      '    \'mol\': <Output field \'mol\' from task \'read_molecule\'>',
      'Job status: Downloading...Running.......Finishing.Finished',
      'Done with task \'prep_forcefield\'',
      'Total walltime for \'prep_forcefield\': 20.02 s',
      'Python execution walltime: 8.12047195435',
      'Output fields: inpcrd, molecule, prmtop',
      '    ----- results.json -----',
      'rya1ewW6l:',
      '  definition:',
      '    command: [sh, -c, cp -rf /inputs/* . && export CCC_WORKDIR=`pwd` && python2 run_job.py',
      '        && cd $CCC_WORKDIR && cp -r * /outputs 2>/dev/null]',
      '    containerInputsMountPath: null',
      '    containerOutputsMountPath: null',
      '    image: {pull_options: null, type: image, value: \'docker.io/avirshup/mst:mdt_ambertools-0.0.1b6\'}',
      '    inputs: [source.py, run_job.py, inputs/ligand_params.pkl, function.pkl, inputs/ligand_atom_ids.pkl,',
      '      inputs/mol.pkl]',
      '    inputsPath: null',
      '    jobId: rya1ewW6l',
      '    meta: null',
      '    outputsPath: null',
      '    parameters: {cpus: 1, maxDuration: 3600000}',
      '    resultsPath: null',
      '    workingDir: /workingdir',
      '  error: null',
      '  exitCode: 0',
      '  inputs: [source.py, run_job.py, inputs/ligand_params.pkl, function.pkl, inputs/ligand_atom_ids.pkl,',
      '    inputs/mol.pkl]',
      '  inputsBaseUrl: https://d3bt947tva2i1l.cloudfront.net/rya1ewW6l/inputs/',
      '  jobId: rya1ewW6l',
      '  outputs: [source.pyc, function.pkl, source.py, outputs/prmtop.pkl, outputs/molecule.pkl,',
      '    outputs/inpcrd.pkl, inputs/ligand_atom_ids.pkl, inputs/mol.pkl, inputs/ligand_params.pkl,',
      '    run_job.py, outputfields.txt]',
      '  outputsBaseUrl: https://d3bt947tva2i1l.cloudfront.net/rya1ewW6l/outputs/',
      '  resultJson: https://d3bt947tva2i1l.cloudfront.net/rya1ewW6l/result.json',
      '  stats:',
      '    attempts:',
      '    - {container: 9.177s, dequeued: \'2017-04-04T11:03:17 PDT\', enqueued: \'2017-04-04T11:03:16',
      '        PDT\', error: \'null\', exitCode: 0, image: 0.898s, inputs: 3.691s, inputsAndImage: 4.589s,',
      '      outputs: 3.51s}',
      '    duration: 17.755s',
      '    error: \'null\'',
      '    finished: 2017-04-04T11:03:34 PDT',
      '    recieved: 2017-04-04T11:03:16 PDT',
      '    uploaded: 17260d',
      '  status: success',
      '  stderr: https://d3bt947tva2i1l.cloudfront.net/rya1ewW6l/stderr',
      '  stdout: https://d3bt947tva2i1l.cloudfront.net/rya1ewW6l/stdout',
      '',
      '',
      'Running task \'mm_minimization\' on CloudComputeCannon engine on host: http://ccc.bionano.autodesk.com:9000/',
      '  jobid: B1fbxDZae',
      '  image: docker.io/avirshup/mst:mdt_subprocess-0.0.1b6',
      '  command: python2 run_job.py',
      '  input_fields:',
      '    \'mol\': <Output field \'molecule\' from task \'prep_forcefield\'>',
      'Job status: Downloading.....Running.............Finishing.Finishedminstep.0.pdb',
      'minstep.1.pdb',
      '',
      'Done with task \'mm_minimization\'',
      'Total walltime for \'mm_minimization\': 37.87 s',
      'Python execution walltime: 22.3634738922',
      'Output fields: minstep_frames, trajectory, molecule, results, pdbstring, minsteps.tar.gz',
      '    ----- results.json -----',
      'B1fbxDZae:',
      '  definition:',
      '    command: [sh, -c, cp -rf /inputs/* . && export CCC_WORKDIR=`pwd` && python2 run_job.py',
      '        && cd $CCC_WORKDIR && cp -r * /outputs 2>/dev/null]',
      '    containerInputsMountPath: null',
      '    containerOutputsMountPath: null',
      '    image: {pull_options: null, type: image, value: \'docker.io/avirshup/mst:mdt_subprocess-0.0.1b6\'}',
      '    inputs: [source.py, run_job.py, function.pkl, inputs/mol.pkl]',
      '    inputsPath: null',
      '    jobId: B1fbxDZae',
      '    meta: null',
      '    outputsPath: null',
      '    parameters: {cpus: 1, maxDuration: 3600000}',
      '    resultsPath: null',
      '    workingDir: /workingdir',
      '  error: null',
      '  exitCode: 0',
      '  inputs: [source.py, run_job.py, function.pkl, inputs/mol.pkl]',
      '  inputsBaseUrl: https://d3bt947tva2i1l.cloudfront.net/B1fbxDZae/inputs/',
      '  jobId: B1fbxDZae',
      '  outputs: [source.pyc, function.pkl, source.py, minsteps.tar.gz, outputs/trajectory.pkl,',
      '    outputs/pdbstring.pkl, outputs/minsteps.tar.gz.pkl, outputs/molecule.pkl, outputs/results.pkl,',
      '    outputs/minstep_frames.pkl, inputs/mol.pkl, run_job.py, minstep.1.pdb, minstep.0.pdb,',
      '    outputfields.txt]',
      '  outputsBaseUrl: https://d3bt947tva2i1l.cloudfront.net/B1fbxDZae/outputs/',
      '  resultJson: https://d3bt947tva2i1l.cloudfront.net/B1fbxDZae/result.json',
      '  stats:',
      '    attempts:',
      '    - {container: 23.784s, dequeued: \'2017-04-04T11:03:38 PDT\', enqueued: \'2017-04-04T11:03:38',
      '        PDT\', error: \'null\', exitCode: 0, image: 1.597s, inputs: 4.687s, inputsAndImage: 6.284s,',
      '      outputs: 4.402s}',
      '    duration: 35.327s',
      '    error: \'null\'',
      '    finished: 2017-04-04T11:04:13 PDT',
      '    recieved: 2017-04-04T11:03:38 PDT',
      '    uploaded: 17260d',
      '  status: success',
      '  stderr: https://d3bt947tva2i1l.cloudfront.net/B1fbxDZae/stderr',
      '  stdout: https://d3bt947tva2i1l.cloudfront.net/B1fbxDZae/stdout',
      '',
      '',
      'Workflow complete. Output directory:',
      '     /outputs',
      ''
    ]
  },
  outputs: [
    {
      name: 'results.json',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/results.json'
    },
    {
      name: 'final_structure.pdb',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/final_structure.pdb'
    },
    {
      name: 'minsteps.tar.gz',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/minsteps.tar.gz'
    },
    {
      name: 'minstep_frames.json',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/minstep_frames.json'
    },
    {
      name: 'prmtop',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/prmtop'
    },
    {
      name: 'minstep.1.pdb',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/minstep.1.pdb'
    },
    {
      name: 'inpcrd',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/inpcrd'
    },
    {
      name: 'workflow_state.dill',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/workflow_state.dill'
    },
    {
      name: 'minstep.0.pdb',
      type: 'url',
      value: 'https://d3bt947tva2i1l.cloudfront.net/B1SpJD-al/outputs/minstep.0.pdb'
    }
  ],
  params: null,
  status: 'COMPLETED',
  app: {
    bgColor: '#292E60',
    bgIndex: 3,
    color: '#2FE695',
    comingSoon: false,
    creatorImage: '/img/logo1.png',
    description: 'Automatically parameterize and refine a small molecule bound to a protein',
    id: '1',
    selectLigands: true,
    title: 'Refine a protein-ligand complex',
    viewCount: 45,
    widgets: [
      {
        id: widgetsConstants.LOAD,
        type: widgetsConstants.LOAD,
        title: 'Load Molecule',
        outputs: [
          { id: 'prep.pdb' },
          { id: 'prep.json' },
          { id: 'workflow_state.dill' },
        ],
      },
      {
        id: widgetsConstants.SELECTION,
        type: widgetsConstants.SELECTION,
        title: 'Ligand Selection',
        inputs: [
          { id: 'prep.pdb' },
          { id: 'prep.json' },
          { id: 'workflow_state.dill' },
        ],
        outputs: [
          { id: 'selection.json' },
        ],
      },
      {
        id: widgetsConstants.RUN,
        type: widgetsConstants.RUN,
        title: 'Run',
        inputs: [
          { id: 'prep.pdb' },
          { id: 'prep.json' },
          { id: 'workflow_state.dill' },
          { id: 'selection.json' },
        ],
        outputs: [
          {
            id: 'PROCESSED_PDB_DATA',
          },
        ],
      },
      {
        id: widgetsConstants.RESULTS,
        type: widgetsConstants.RESULTS,
        title: 'Results',
        inputs: [
          {
            id: 'PROCESSED_PDB_DATA',
          },
        ],
      },
    ],
  },
  appId: '1',
};

module.exports = mockedAppStatus;
