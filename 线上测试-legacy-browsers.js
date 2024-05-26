/************* 
 * 线上测试 *
 *************/


// store info about the experiment session:
let expName = '线上测试';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(huanyingRoutineBegin());
flowScheduler.add(huanyingRoutineEachFrame());
flowScheduler.add(huanyingRoutineEnd());
flowScheduler.add(loadRoutineBegin());
flowScheduler.add(loadRoutineEachFrame());
flowScheduler.add(loadRoutineEnd());
flowScheduler.add(zj1RoutineBegin());
flowScheduler.add(zj1RoutineEachFrame());
flowScheduler.add(zj1RoutineEnd());
flowScheduler.add(trail1RoutineBegin());
flowScheduler.add(trail1RoutineEachFrame());
flowScheduler.add(trail1RoutineEnd());
flowScheduler.add(recall1RoutineBegin());
flowScheduler.add(recall1RoutineEachFrame());
flowScheduler.add(recall1RoutineEnd());
flowScheduler.add(feedback1RoutineBegin());
flowScheduler.add(feedback1RoutineEachFrame());
flowScheduler.add(feedback1RoutineEnd());
flowScheduler.add(ss1RoutineBegin());
flowScheduler.add(ss1RoutineEachFrame());
flowScheduler.add(ss1RoutineEnd());
flowScheduler.add(sspsg1RoutineBegin());
flowScheduler.add(sspsg1RoutineEachFrame());
flowScheduler.add(sspsg1RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'pics/幻灯片1.PNG', 'path': 'pics/幻灯片1.PNG'},
    {'name': 'pics/幻灯片4.PNG', 'path': 'pics/幻灯片4.PNG'},
    {'name': 'pics/幻灯片5.PNG', 'path': 'pics/幻灯片5.PNG'},
    {'name': 'pics/幻灯片6.PNG', 'path': 'pics/幻灯片6.PNG'},
    {'name': 'PICS/幻灯片7.PNG', 'path': 'PICS/幻灯片7.PNG'},
    {'name': 'pics/幻灯片8.PNG', 'path': 'pics/幻灯片8.PNG'},
    {'name': 'pics/幻灯片9.PNG', 'path': 'pics/幻灯片9.PNG'},
    {'name': 'pics/幻灯片10.PNG', 'path': 'pics/幻灯片10.PNG'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var huanyingClock;
var hy_image;
var hy_resp;
var loadClock;
var t1_load;
var t1_load_resp;
var zj1Clock;
var t1_zj;
var t1_zj_resp;
var trail1Clock;
var t1_psg1;
var time;
var countdown;
var t1_psg1_resp;
var recall1Clock;
var t1_recall;
var t1_recall_resp;
var feedback1Clock;
var fankui;
var ss1Clock;
var t1_ss;
var t1_ss_resp;
var sspsg1Clock;
var t1_psg2;
var clock1_2;
var t1_psg2_choice;
var t1_psg2_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "huanying"
  huanyingClock = new util.Clock();
  hy_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'hy_image', units : undefined, 
    image : 'pics/幻灯片1.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  hy_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "load"
  loadClock = new util.Clock();
  t1_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_load', units : undefined, 
    image : 'pics/幻灯片4.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t1_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj1"
  zj1Clock = new util.Clock();
  t1_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_zj', units : undefined, 
    image : 'pics/幻灯片5.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t1_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail1"
  trail1Clock = new util.Clock();
  t1_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_psg1', units : undefined, 
    image : 'pics/幻灯片6.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time = new visual.TextStim({
    win: psychoJS.window,
    name: 'time',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t1_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall1"
  recall1Clock = new util.Clock();
  t1_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_recall', units : undefined, 
    image : 'PICS/幻灯片7.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t1_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback1"
  feedback1Clock = new util.Clock();
  fankui = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss1"
  ss1Clock = new util.Clock();
  t1_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_ss', units : undefined, 
    image : 'pics/幻灯片8.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t1_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg1"
  sspsg1Clock = new util.Clock();
  t1_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_psg2', units : undefined, 
    image : 'pics/幻灯片9.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t1_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_psg2_choice', units : undefined, 
    image : 'pics/幻灯片10.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t1_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _hy_resp_allKeys;
var huanyingComponents;
function huanyingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'huanying' ---
    t = 0;
    huanyingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('huanying.started', globalClock.getTime());
    hy_resp.keys = undefined;
    hy_resp.rt = undefined;
    _hy_resp_allKeys = [];
    // keep track of which components have finished
    huanyingComponents = [];
    huanyingComponents.push(hy_image);
    huanyingComponents.push(hy_resp);
    
    huanyingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function huanyingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'huanying' ---
    // get current time
    t = huanyingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hy_image* updates
    if (t >= 0.0 && hy_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hy_image.tStart = t;  // (not accounting for frame time here)
      hy_image.frameNStart = frameN;  // exact frame index
      
      hy_image.setAutoDraw(true);
    }
    
    
    // *hy_resp* updates
    if (t >= 0.0 && hy_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hy_resp.tStart = t;  // (not accounting for frame time here)
      hy_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { hy_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { hy_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { hy_resp.clearEvents(); });
    }
    
    if (hy_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = hy_resp.getKeys({keyList: ['space'], waitRelease: false});
      _hy_resp_allKeys = _hy_resp_allKeys.concat(theseKeys);
      if (_hy_resp_allKeys.length > 0) {
        hy_resp.keys = _hy_resp_allKeys[_hy_resp_allKeys.length - 1].name;  // just the last key pressed
        hy_resp.rt = _hy_resp_allKeys[_hy_resp_allKeys.length - 1].rt;
        hy_resp.duration = _hy_resp_allKeys[_hy_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    huanyingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function huanyingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'huanying' ---
    huanyingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('huanying.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(hy_resp.corr, level);
    }
    psychoJS.experiment.addData('hy_resp.keys', hy_resp.keys);
    if (typeof hy_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('hy_resp.rt', hy_resp.rt);
        psychoJS.experiment.addData('hy_resp.duration', hy_resp.duration);
        routineTimer.reset();
        }
    
    hy_resp.stop();
    // the Routine "huanying" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t1_load_resp_allKeys;
var loadComponents;
function loadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'load' ---
    t = 0;
    loadClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('load.started', globalClock.getTime());
    t1_load_resp.keys = undefined;
    t1_load_resp.rt = undefined;
    _t1_load_resp_allKeys = [];
    // keep track of which components have finished
    loadComponents = [];
    loadComponents.push(t1_load);
    loadComponents.push(t1_load_resp);
    
    loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loadRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'load' ---
    // get current time
    t = loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1_load* updates
    if (t >= 0.0 && t1_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_load.tStart = t;  // (not accounting for frame time here)
      t1_load.frameNStart = frameN;  // exact frame index
      
      t1_load.setAutoDraw(true);
    }
    
    
    // *t1_load_resp* updates
    if (t >= 0.0 && t1_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_load_resp.tStart = t;  // (not accounting for frame time here)
      t1_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t1_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t1_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t1_load_resp.clearEvents(); });
    }
    
    if (t1_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t1_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t1_load_resp_allKeys = _t1_load_resp_allKeys.concat(theseKeys);
      if (_t1_load_resp_allKeys.length > 0) {
        t1_load_resp.keys = _t1_load_resp_allKeys[_t1_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t1_load_resp.rt = _t1_load_resp_allKeys[_t1_load_resp_allKeys.length - 1].rt;
        t1_load_resp.duration = _t1_load_resp_allKeys[_t1_load_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loadRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'load' ---
    loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('load.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t1_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t1_load_resp.keys', t1_load_resp.keys);
    if (typeof t1_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t1_load_resp.rt', t1_load_resp.rt);
        psychoJS.experiment.addData('t1_load_resp.duration', t1_load_resp.duration);
        routineTimer.reset();
        }
    
    t1_load_resp.stop();
    // the Routine "load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t1_zj_resp_allKeys;
var zj1Components;
function zj1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj1' ---
    t = 0;
    zj1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj1.started', globalClock.getTime());
    t1_zj_resp.keys = undefined;
    t1_zj_resp.rt = undefined;
    _t1_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj1Components = [];
    zj1Components.push(t1_zj);
    zj1Components.push(t1_zj_resp);
    
    zj1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zj1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj1' ---
    // get current time
    t = zj1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1_zj* updates
    if (t >= 0 && t1_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_zj.tStart = t;  // (not accounting for frame time here)
      t1_zj.frameNStart = frameN;  // exact frame index
      
      t1_zj.setAutoDraw(true);
    }
    
    
    // *t1_zj_resp* updates
    if (t >= 0 && t1_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_zj_resp.tStart = t;  // (not accounting for frame time here)
      t1_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t1_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t1_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t1_zj_resp.clearEvents(); });
    }
    
    if (t1_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t1_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t1_zj_resp_allKeys = _t1_zj_resp_allKeys.concat(theseKeys);
      if (_t1_zj_resp_allKeys.length > 0) {
        t1_zj_resp.keys = _t1_zj_resp_allKeys[_t1_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t1_zj_resp.rt = _t1_zj_resp_allKeys[_t1_zj_resp_allKeys.length - 1].rt;
        t1_zj_resp.duration = _t1_zj_resp_allKeys[_t1_zj_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    zj1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj1' ---
    zj1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('zj1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t1_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t1_zj_resp.keys', t1_zj_resp.keys);
    if (typeof t1_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t1_zj_resp.rt', t1_zj_resp.rt);
        psychoJS.experiment.addData('t1_zj_resp.duration', t1_zj_resp.duration);
        routineTimer.reset();
        }
    
    t1_zj_resp.stop();
    // the Routine "zj1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t1_psg1_resp_allKeys;
var trail1Components;
function trail1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail1' ---
    t = 0;
    trail1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(14.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail1.started', globalClock.getTime());
    t1_psg1_resp.keys = undefined;
    t1_psg1_resp.rt = undefined;
    _t1_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail1Components = [];
    trail1Components.push(t1_psg1);
    trail1Components.push(time);
    trail1Components.push(countdown);
    trail1Components.push(t1_psg1_resp);
    
    trail1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trail1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail1' ---
    // get current time
    t = trail1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1_psg1* updates
    if (t >= 0.0 && t1_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_psg1.tStart = t;  // (not accounting for frame time here)
      t1_psg1.frameNStart = frameN;  // exact frame index
      
      t1_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 14 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t1_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t1_psg1.setAutoDraw(false);
    }
    
    
    // *time* updates
    if (t >= 0.0 && time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time.tStart = t;  // (not accounting for frame time here)
      time.frameNStart = frameN;  // exact frame index
      
      time.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 14 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time.setAutoDraw(false);
    }
    
    
    if (countdown.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown.setText(round((14.0 - t), ndigits=1), false);
    }
    
    // *countdown* updates
    if (t >= 0.0 && countdown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown.tStart = t;  // (not accounting for frame time here)
      countdown.frameNStart = frameN;  // exact frame index
      
      countdown.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 14 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown.setAutoDraw(false);
    }
    
    
    // *t1_psg1_resp* updates
    if (t >= 0.0 && t1_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t1_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t1_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t1_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t1_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 14 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t1_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t1_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t1_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t1_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t1_psg1_resp_allKeys = _t1_psg1_resp_allKeys.concat(theseKeys);
      if (_t1_psg1_resp_allKeys.length > 0) {
        t1_psg1_resp.keys = _t1_psg1_resp_allKeys[_t1_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t1_psg1_resp.rt = _t1_psg1_resp_allKeys[_t1_psg1_resp_allKeys.length - 1].rt;
        t1_psg1_resp.duration = _t1_psg1_resp_allKeys[_t1_psg1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trail1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail1' ---
    trail1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trail1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t1_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t1_psg1_resp.keys', t1_psg1_resp.keys);
    if (typeof t1_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t1_psg1_resp.rt', t1_psg1_resp.rt);
        psychoJS.experiment.addData('t1_psg1_resp.duration', t1_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t1_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t1_recall_resp_allKeys;
var recall1Components;
function recall1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall1' ---
    t = 0;
    recall1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall1.started', globalClock.getTime());
    t1_recall_resp.keys = undefined;
    t1_recall_resp.rt = undefined;
    _t1_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall1Components = [];
    recall1Components.push(t1_recall);
    recall1Components.push(t1_recall_resp);
    
    recall1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall1' ---
    // get current time
    t = recall1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1_recall* updates
    if (t >= 0 && t1_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_recall.tStart = t;  // (not accounting for frame time here)
      t1_recall.frameNStart = frameN;  // exact frame index
      
      t1_recall.setAutoDraw(true);
    }
    
    
    // *t1_recall_resp* updates
    if (t >= 0 && t1_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_recall_resp.tStart = t;  // (not accounting for frame time here)
      t1_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t1_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t1_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t1_recall_resp.clearEvents(); });
    }
    
    if (t1_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t1_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t1_recall_resp_allKeys = _t1_recall_resp_allKeys.concat(theseKeys);
      if (_t1_recall_resp_allKeys.length > 0) {
        t1_recall_resp.keys = _t1_recall_resp_allKeys[_t1_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t1_recall_resp.rt = _t1_recall_resp_allKeys[_t1_recall_resp_allKeys.length - 1].rt;
        t1_recall_resp.duration = _t1_recall_resp_allKeys[_t1_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t1_recall_resp.keys == 'c') {
            t1_recall_resp.corr = 1;
        } else {
            t1_recall_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recall1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall1' ---
    recall1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('recall1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t1_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('c')) {
         t1_recall_resp.corr = 1;  // correct non-response
      } else {
         t1_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t1_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t1_recall_resp.keys', t1_recall_resp.keys);
    psychoJS.experiment.addData('t1_recall_resp.corr', t1_recall_resp.corr);
    if (typeof t1_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t1_recall_resp.rt', t1_recall_resp.rt);
        psychoJS.experiment.addData('t1_recall_resp.duration', t1_recall_resp.duration);
        routineTimer.reset();
        }
    
    t1_recall_resp.stop();
    // the Routine "recall1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback;
var feedback1Components;
function feedback1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback1' ---
    t = 0;
    feedback1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    if (key_resp.corr) {
        feedback = "zhengque";
    } else {
        feedback = "cuowu";
    }
    
    fankui.setText(feedback);
    // keep track of which components have finished
    feedback1Components = [];
    feedback1Components.push(fankui);
    
    feedback1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback1' ---
    // get current time
    t = feedback1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui* updates
    if (t >= 0.0 && fankui.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui.tStart = t;  // (not accounting for frame time here)
      fankui.frameNStart = frameN;  // exact frame index
      
      fankui.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback1' ---
    feedback1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback1.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t1_ss_resp_allKeys;
var ss1Components;
function ss1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss1' ---
    t = 0;
    ss1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss1.started', globalClock.getTime());
    t1_ss_resp.keys = undefined;
    t1_ss_resp.rt = undefined;
    _t1_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss1Components = [];
    ss1Components.push(t1_ss);
    ss1Components.push(t1_ss_resp);
    
    ss1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ss1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss1' ---
    // get current time
    t = ss1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1_ss* updates
    if (t >= 0.0 && t1_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_ss.tStart = t;  // (not accounting for frame time here)
      t1_ss.frameNStart = frameN;  // exact frame index
      
      t1_ss.setAutoDraw(true);
    }
    
    
    // *t1_ss_resp* updates
    if (t >= 0.0 && t1_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_ss_resp.tStart = t;  // (not accounting for frame time here)
      t1_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t1_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t1_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t1_ss_resp.clearEvents(); });
    }
    
    if (t1_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t1_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t1_ss_resp_allKeys = _t1_ss_resp_allKeys.concat(theseKeys);
      if (_t1_ss_resp_allKeys.length > 0) {
        t1_ss_resp.keys = _t1_ss_resp_allKeys[_t1_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t1_ss_resp.rt = _t1_ss_resp_allKeys[_t1_ss_resp_allKeys.length - 1].rt;
        t1_ss_resp.duration = _t1_ss_resp_allKeys[_t1_ss_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ss1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss1' ---
    ss1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ss1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t1_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t1_ss_resp.keys', t1_ss_resp.keys);
    if (typeof t1_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t1_ss_resp.rt', t1_ss_resp.rt);
        psychoJS.experiment.addData('t1_ss_resp.duration', t1_ss_resp.duration);
        routineTimer.reset();
        }
    
    t1_ss_resp.stop();
    // the Routine "ss1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t1_psg2_resp_allKeys;
var sspsg1Components;
function sspsg1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg1' ---
    t = 0;
    sspsg1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg1.started', globalClock.getTime());
    t1_psg2_resp.keys = undefined;
    t1_psg2_resp.rt = undefined;
    _t1_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg1Components = [];
    sspsg1Components.push(t1_psg2);
    sspsg1Components.push(clock1_2);
    sspsg1Components.push(t1_psg2_choice);
    sspsg1Components.push(t1_psg2_resp);
    
    sspsg1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sspsg1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg1' ---
    // get current time
    t = sspsg1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1_psg2* updates
    if (t >= 0.0 && t1_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_psg2.tStart = t;  // (not accounting for frame time here)
      t1_psg2.frameNStart = frameN;  // exact frame index
      
      t1_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t1_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t1_psg2.setAutoDraw(false);
    }
    
    
    if (clock1_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock1_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock1_2* updates
    if (t >= 0.0 && clock1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock1_2.tStart = t;  // (not accounting for frame time here)
      clock1_2.frameNStart = frameN;  // exact frame index
      
      clock1_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock1_2.setAutoDraw(false);
    }
    
    
    // *t1_psg2_choice* updates
    if (t >= 10 && t1_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t1_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t1_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t1_psg2_resp* updates
    if (t >= 10 && t1_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t1_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t1_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t1_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t1_psg2_resp.clearEvents(); });
    }
    
    if (t1_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t1_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t1_psg2_resp_allKeys = _t1_psg2_resp_allKeys.concat(theseKeys);
      if (_t1_psg2_resp_allKeys.length > 0) {
        t1_psg2_resp.keys = _t1_psg2_resp_allKeys[_t1_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t1_psg2_resp.rt = _t1_psg2_resp_allKeys[_t1_psg2_resp_allKeys.length - 1].rt;
        t1_psg2_resp.duration = _t1_psg2_resp_allKeys[_t1_psg2_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sspsg1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg1' ---
    sspsg1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('sspsg1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t1_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t1_psg2_resp.keys', t1_psg2_resp.keys);
    if (typeof t1_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t1_psg2_resp.rt', t1_psg2_resp.rt);
        psychoJS.experiment.addData('t1_psg2_resp.duration', t1_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t1_psg2_resp.stop();
    // the Routine "sspsg1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
