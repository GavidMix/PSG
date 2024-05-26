/************* 
 * 实验1B *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '实验1b';  // from the Builder filename that created this script
let expInfo = {
    '你的名字【必填】': '',
    '你的性别【必填】': ["\u7537", "\u5973"],
    '你的年龄【必填】': '',
    '是否接受过系统的心理学教育【必填】': ["\u662f", "\u5426"],
    '之前是否参与过类似的实验【请如实填写】': ["\u662f", "\u5426"],
    '你的年级【必填】': ["\u5927\u4e00", "\u5927\u4e8c", "\u5927\u4e09", "\u5927\u56db", "\u7814\u4e00", "\u7814\u4e8c", "\u7814\u4e09", "\u535a\u58eb"],
    '你的专业【必填】': ["\u6587\u79d1", "\u7406\u79d1", "\u5de5\u79d1", "\u533b\u5b66", "\u827a\u672f", "\u4f53\u80b2"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
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
flowScheduler.add(backgroudRoutineBegin());
flowScheduler.add(backgroudRoutineEachFrame());
flowScheduler.add(backgroudRoutineEnd());
flowScheduler.add(ruleRoutineBegin());
flowScheduler.add(ruleRoutineEachFrame());
flowScheduler.add(ruleRoutineEnd());
const loop1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop1LoopBegin(loop1LoopScheduler));
flowScheduler.add(loop1LoopScheduler);
flowScheduler.add(loop1LoopEnd);








const loop2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop2LoopBegin(loop2LoopScheduler));
flowScheduler.add(loop2LoopScheduler);
flowScheduler.add(loop2LoopEnd);








const loop3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop3LoopBegin(loop3LoopScheduler));
flowScheduler.add(loop3LoopScheduler);
flowScheduler.add(loop3LoopEnd);








const loop4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop4LoopBegin(loop4LoopScheduler));
flowScheduler.add(loop4LoopScheduler);
flowScheduler.add(loop4LoopEnd);








const loop5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop5LoopBegin(loop5LoopScheduler));
flowScheduler.add(loop5LoopScheduler);
flowScheduler.add(loop5LoopEnd);








const loop6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop6LoopBegin(loop6LoopScheduler));
flowScheduler.add(loop6LoopScheduler);
flowScheduler.add(loop6LoopEnd);








const loop7LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop7LoopBegin(loop7LoopScheduler));
flowScheduler.add(loop7LoopScheduler);
flowScheduler.add(loop7LoopEnd);








const loop8LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop8LoopBegin(loop8LoopScheduler));
flowScheduler.add(loop8LoopScheduler);
flowScheduler.add(loop8LoopEnd);








const loop9LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop9LoopBegin(loop9LoopScheduler));
flowScheduler.add(loop9LoopScheduler);
flowScheduler.add(loop9LoopEnd);








const loop10LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop10LoopBegin(loop10LoopScheduler));
flowScheduler.add(loop10LoopScheduler);
flowScheduler.add(loop10LoopEnd);








const loop11LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop11LoopBegin(loop11LoopScheduler));
flowScheduler.add(loop11LoopScheduler);
flowScheduler.add(loop11LoopEnd);








const loop12LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop12LoopBegin(loop12LoopScheduler));
flowScheduler.add(loop12LoopScheduler);
flowScheduler.add(loop12LoopEnd);








const loop13LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop13LoopBegin(loop13LoopScheduler));
flowScheduler.add(loop13LoopScheduler);
flowScheduler.add(loop13LoopEnd);








const loop14LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop14LoopBegin(loop14LoopScheduler));
flowScheduler.add(loop14LoopScheduler);
flowScheduler.add(loop14LoopEnd);








flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'PICS/幻灯片1.PNG', 'path': 'PICS/幻灯片1.PNG'},
    {'name': 'PICS/幻灯片2.PNG', 'path': 'PICS/幻灯片2.PNG'},
    {'name': 'PICS/幻灯片3.PNG', 'path': 'PICS/幻灯片3.PNG'},
    {'name': 'PICS/幻灯片4.PNG', 'path': 'PICS/幻灯片4.PNG'},
    {'name': 'PICS/幻灯片5.PNG', 'path': 'PICS/幻灯片5.PNG'},
    {'name': 'PICS/幻灯片6.PNG', 'path': 'PICS/幻灯片6.PNG'},
    {'name': 'PICS/幻灯片7.PNG', 'path': 'PICS/幻灯片7.PNG'},
    {'name': 'PICS/幻灯片8.PNG', 'path': 'PICS/幻灯片8.PNG'},
    {'name': 'PICS/幻灯片9.PNG', 'path': 'PICS/幻灯片9.PNG'},
    {'name': 'PICS/幻灯片10.PNG', 'path': 'PICS/幻灯片10.PNG'},
    {'name': 'PICS/幻灯片11.PNG', 'path': 'PICS/幻灯片11.PNG'},
    {'name': 'PICS/幻灯片12.PNG', 'path': 'PICS/幻灯片12.PNG'},
    {'name': 'PICS/幻灯片13.PNG', 'path': 'PICS/幻灯片13.PNG'},
    {'name': 'PICS/幻灯片14.PNG', 'path': 'PICS/幻灯片14.PNG'},
    {'name': 'PICS/幻灯片15.PNG', 'path': 'PICS/幻灯片15.PNG'},
    {'name': 'PICS/幻灯片16.PNG', 'path': 'PICS/幻灯片16.PNG'},
    {'name': 'PICS/幻灯片17.PNG', 'path': 'PICS/幻灯片17.PNG'},
    {'name': 'PICS/幻灯片18.PNG', 'path': 'PICS/幻灯片18.PNG'},
    {'name': 'PICS/幻灯片19.PNG', 'path': 'PICS/幻灯片19.PNG'},
    {'name': 'PICS/幻灯片20.PNG', 'path': 'PICS/幻灯片20.PNG'},
    {'name': 'PICS/幻灯片21.PNG', 'path': 'PICS/幻灯片21.PNG'},
    {'name': 'PICS/幻灯片22.PNG', 'path': 'PICS/幻灯片22.PNG'},
    {'name': 'PICS/幻灯片23.PNG', 'path': 'PICS/幻灯片23.PNG'},
    {'name': 'PICS/幻灯片24.PNG', 'path': 'PICS/幻灯片24.PNG'},
    {'name': 'PICS/幻灯片25.PNG', 'path': 'PICS/幻灯片25.PNG'},
    {'name': 'PICS/幻灯片26.PNG', 'path': 'PICS/幻灯片26.PNG'},
    {'name': 'PICS/幻灯片27.PNG', 'path': 'PICS/幻灯片27.PNG'},
    {'name': 'PICS/幻灯片28.PNG', 'path': 'PICS/幻灯片28.PNG'},
    {'name': 'PICS/幻灯片29.PNG', 'path': 'PICS/幻灯片29.PNG'},
    {'name': 'PICS/幻灯片30.PNG', 'path': 'PICS/幻灯片30.PNG'},
    {'name': 'PICS/幻灯片31.PNG', 'path': 'PICS/幻灯片31.PNG'},
    {'name': 'PICS/幻灯片32.PNG', 'path': 'PICS/幻灯片32.PNG'},
    {'name': 'PICS/幻灯片33.PNG', 'path': 'PICS/幻灯片33.PNG'},
    {'name': 'PICS/幻灯片34.PNG', 'path': 'PICS/幻灯片34.PNG'},
    {'name': 'PICS/幻灯片35.PNG', 'path': 'PICS/幻灯片35.PNG'},
    {'name': 'PICS/幻灯片36.PNG', 'path': 'PICS/幻灯片36.PNG'},
    {'name': 'PICS/幻灯片37.PNG', 'path': 'PICS/幻灯片37.PNG'},
    {'name': 'PICS/幻灯片38.PNG', 'path': 'PICS/幻灯片38.PNG'},
    {'name': 'PICS/幻灯片39.PNG', 'path': 'PICS/幻灯片39.PNG'},
    {'name': 'PICS/幻灯片40.PNG', 'path': 'PICS/幻灯片40.PNG'},
    {'name': 'PICS/幻灯片41.PNG', 'path': 'PICS/幻灯片41.PNG'},
    {'name': 'PICS/幻灯片42.PNG', 'path': 'PICS/幻灯片42.PNG'},
    {'name': 'PICS/幻灯片43.PNG', 'path': 'PICS/幻灯片43.PNG'},
    {'name': 'PICS/幻灯片44.PNG', 'path': 'PICS/幻灯片44.PNG'},
    {'name': 'PICS/幻灯片45.PNG', 'path': 'PICS/幻灯片45.PNG'},
    {'name': 'PICS/幻灯片46.PNG', 'path': 'PICS/幻灯片46.PNG'},
    {'name': 'PICS/幻灯片47.PNG', 'path': 'PICS/幻灯片47.PNG'},
    {'name': 'PICS/幻灯片48.PNG', 'path': 'PICS/幻灯片48.PNG'},
    {'name': 'PICS/幻灯片49.PNG', 'path': 'PICS/幻灯片49.PNG'},
    {'name': 'PICS/幻灯片50.PNG', 'path': 'PICS/幻灯片50.PNG'},
    {'name': 'PICS/幻灯片51.PNG', 'path': 'PICS/幻灯片51.PNG'},
    {'name': 'PICS/幻灯片52.PNG', 'path': 'PICS/幻灯片52.PNG'},
    {'name': 'PICS/幻灯片53.PNG', 'path': 'PICS/幻灯片53.PNG'},
    {'name': 'PICS/幻灯片54.PNG', 'path': 'PICS/幻灯片54.PNG'},
    {'name': 'PICS/幻灯片55.PNG', 'path': 'PICS/幻灯片55.PNG'},
    {'name': 'PICS/幻灯片56.PNG', 'path': 'PICS/幻灯片56.PNG'},
    {'name': 'PICS/幻灯片57.PNG', 'path': 'PICS/幻灯片57.PNG'},
    {'name': 'PICS/幻灯片58.PNG', 'path': 'PICS/幻灯片58.PNG'},
    {'name': 'PICS/幻灯片59.PNG', 'path': 'PICS/幻灯片59.PNG'},
    {'name': 'PICS/幻灯片60.PNG', 'path': 'PICS/幻灯片60.PNG'},
    {'name': 'PICS/幻灯片61.PNG', 'path': 'PICS/幻灯片61.PNG'},
    {'name': 'PICS/幻灯片62.PNG', 'path': 'PICS/幻灯片62.PNG'},
    {'name': 'PICS/幻灯片63.PNG', 'path': 'PICS/幻灯片63.PNG'},
    {'name': 'PICS/幻灯片64.PNG', 'path': 'PICS/幻灯片64.PNG'},
    {'name': 'PICS/幻灯片65.PNG', 'path': 'PICS/幻灯片65.PNG'},
    {'name': 'PICS/幻灯片66.PNG', 'path': 'PICS/幻灯片66.PNG'},
    {'name': 'PICS/幻灯片67.PNG', 'path': 'PICS/幻灯片67.PNG'},
    {'name': 'PICS/幻灯片68.PNG', 'path': 'PICS/幻灯片68.PNG'},
    {'name': 'PICS/幻灯片69.PNG', 'path': 'PICS/幻灯片69.PNG'},
    {'name': 'PICS/幻灯片70.PNG', 'path': 'PICS/幻灯片70.PNG'},
    {'name': 'PICS/幻灯片71.PNG', 'path': 'PICS/幻灯片71.PNG'},
    {'name': 'PICS/幻灯片72.PNG', 'path': 'PICS/幻灯片72.PNG'},
    {'name': 'PICS/幻灯片73.PNG', 'path': 'PICS/幻灯片73.PNG'},
    {'name': 'PICS/幻灯片74.PNG', 'path': 'PICS/幻灯片74.PNG'},
    {'name': 'PICS/幻灯片75.PNG', 'path': 'PICS/幻灯片75.PNG'},
    {'name': 'PICS/幻灯片76.PNG', 'path': 'PICS/幻灯片76.PNG'},
    {'name': 'PICS/幻灯片77.PNG', 'path': 'PICS/幻灯片77.PNG'},
    {'name': 'PICS/幻灯片78.PNG', 'path': 'PICS/幻灯片78.PNG'},
    {'name': 'PICS/幻灯片79.PNG', 'path': 'PICS/幻灯片79.PNG'},
    {'name': 'PICS/幻灯片80.PNG', 'path': 'PICS/幻灯片80.PNG'},
    {'name': 'PICS/幻灯片81.PNG', 'path': 'PICS/幻灯片81.PNG'},
    {'name': 'PICS/幻灯片82.PNG', 'path': 'PICS/幻灯片82.PNG'},
    {'name': 'PICS/幻灯片83.PNG', 'path': 'PICS/幻灯片83.PNG'},
    {'name': 'PICS/幻灯片84.PNG', 'path': 'PICS/幻灯片84.PNG'},
    {'name': 'PICS/幻灯片85.PNG', 'path': 'PICS/幻灯片85.PNG'},
    {'name': 'PICS/幻灯片86.PNG', 'path': 'PICS/幻灯片86.PNG'},
    {'name': 'PICS/幻灯片87.PNG', 'path': 'PICS/幻灯片87.PNG'},
    {'name': 'PICS/幻灯片88.PNG', 'path': 'PICS/幻灯片88.PNG'},
    {'name': 'PICS/幻灯片89.PNG', 'path': 'PICS/幻灯片89.PNG'},
    {'name': 'PICS/幻灯片90.PNG', 'path': 'PICS/幻灯片90.PNG'},
    {'name': 'PICS/幻灯片91.PNG', 'path': 'PICS/幻灯片91.PNG'},
    {'name': 'PICS/幻灯片92.PNG', 'path': 'PICS/幻灯片92.PNG'},
    {'name': 'PICS/幻灯片93.PNG', 'path': 'PICS/幻灯片93.PNG'},
    {'name': 'PICS/幻灯片94.PNG', 'path': 'PICS/幻灯片94.PNG'},
    {'name': 'PICS/幻灯片95.PNG', 'path': 'PICS/幻灯片95.PNG'},
    {'name': 'PICS/幻灯片96.PNG', 'path': 'PICS/幻灯片96.PNG'},
    {'name': 'PICS/幻灯片97.PNG', 'path': 'PICS/幻灯片97.PNG'},
    {'name': 'PICS/幻灯片98.PNG', 'path': 'PICS/幻灯片98.PNG'},
    {'name': 'PICS/幻灯片99.PNG', 'path': 'PICS/幻灯片99.PNG'},
    {'name': 'PICS/幻灯片100.PNG', 'path': 'PICS/幻灯片100.PNG'},
    {'name': 'PICS/幻灯片101.PNG', 'path': 'PICS/幻灯片101.PNG'},
    {'name': 'PICS/幻灯片102.PNG', 'path': 'PICS/幻灯片102.PNG'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4f60\u7684\u540d\u5b57\u3010\u5fc5\u586b\u3011"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var huanyingClock;
var zdy;
var hy_resp;
var backgroudClock;
var back_image;
var back_key;
var ruleClock;
var rule_image;
var rule_key;
var zsd1Clock;
var zsd1_1;
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
var feedback;
var fankui1;
var ss1Clock;
var t1_ss;
var t1_ss_resp;
var sspsg1Clock;
var t1_psg2;
var clock1_2;
var t1_psg2_choice;
var t1_psg2_resp;
var zsd2Clock;
var zsd1_2;
var t2_load;
var t2_load_resp;
var zj2Clock;
var t2_zj;
var t2_zj_resp;
var trail2Clock;
var t2_psg1;
var time_2;
var countdown_2;
var t2_psg1_resp;
var recall2Clock;
var t2_recall;
var t2_recall_resp;
var feedback2Clock;
var fankui_2;
var ss2Clock;
var t2_ss;
var t2_ss_resp;
var sspsg2Clock;
var t2_psg2;
var clock2_2;
var t2_psg2_choice;
var t2_psg2_resp;
var zsd3Clock;
var zsd1_3;
var t3_load;
var t3_load_resp;
var zj3Clock;
var t3_zj;
var t3_zj_resp;
var trail3Clock;
var t3_psg1;
var time_3;
var countdown_3;
var t3_psg1_resp;
var recall3Clock;
var t3_recall;
var t3_recall_resp;
var feedback3Clock;
var fankui_3;
var ss3Clock;
var t3_ss;
var t3_ss_resp;
var sspsg3Clock;
var t3_psg2;
var clock3_2;
var t3_psg2_choice;
var t3_psg2_resp;
var zsd4Clock;
var zsd1_4;
var t4_load;
var t4_load_resp;
var zj4Clock;
var t4_zj;
var t4_zj_resp;
var trail4Clock;
var t4_psg1;
var time_4;
var countdown_4;
var t4_psg1_resp;
var recall4Clock;
var t4_recall;
var t4_recall_resp;
var feedback4Clock;
var fankui_4;
var ss4Clock;
var t4_ss;
var t4_ss_resp;
var sspsg4Clock;
var t4_psg2;
var clock4_2;
var t4_psg2_choice;
var t4_psg2_resp;
var zsd5Clock;
var zsd1_5;
var t5_load;
var t5_load_resp;
var zj5Clock;
var t5_zj;
var t5_zj_resp;
var trail5Clock;
var t5_psg1;
var time_5;
var countdown_5;
var t5_psg1_resp;
var recall5Clock;
var t5_recall;
var t5_recall_resp;
var feedback5Clock;
var fankui_5;
var ss5Clock;
var t5_ss;
var t5_ss_resp;
var sspsg5Clock;
var t5_psg2;
var clock5_2;
var t5_psg2_choice;
var t5_psg2_resp;
var zsd6Clock;
var zsd1_6;
var t6_load;
var t6_load_resp;
var zj6Clock;
var t6_zj;
var t6_zj_resp;
var trail6Clock;
var t6_psg1;
var time_6;
var countdown_6;
var t6_psg1_resp;
var recall6Clock;
var t6_recall;
var t6_recall_resp;
var feedback6Clock;
var fankui_6;
var ss6Clock;
var t6_ss;
var t6_ss_resp;
var sspsg6Clock;
var t6_psg2;
var clock6_2;
var t6_psg2_choice;
var t6_psg2_resp;
var zsd7Clock;
var zsd1_7;
var t7_load;
var t7_load_resp;
var zj7Clock;
var t7_zj;
var t7_zj_resp;
var trail7Clock;
var t7_psg1;
var time_7;
var countdown_7;
var t7_psg1_resp;
var recall7Clock;
var t7_recall;
var t7_recall_resp;
var feedback7Clock;
var fankui_7;
var ss7Clock;
var t7_ss;
var t7_ss_resp;
var sspsg7Clock;
var t7_psg2;
var clock7_2;
var t7_psg2_choice;
var t7_psg2_resp;
var zsd8Clock;
var zsd1_8;
var t8_load;
var t8_load_resp;
var zj8Clock;
var t8_zj;
var t8_zj_resp;
var trail8Clock;
var t8_psg1;
var time_8;
var countdown_8;
var t8_psg1_resp;
var recall8Clock;
var t8_recall;
var t8_recall_resp;
var feedback8Clock;
var fankui_8;
var ss8Clock;
var t8_ss;
var t8_ss_resp;
var sspsg8Clock;
var t8_psg2;
var clock8_2;
var t8_psg2_choice;
var t8_psg2_resp;
var zsd9Clock;
var zsd1_9;
var t9_load;
var t9_load_resp;
var zj9Clock;
var t9_zj;
var t9_zj_resp;
var trail9Clock;
var t9_psg1;
var time_9;
var countdown_9;
var t9_psg1_resp;
var recall9Clock;
var t9_recall;
var t9_recall_resp;
var feedback9Clock;
var fankui_9;
var ss9Clock;
var t9_ss;
var t9_ss_resp;
var sspsg9Clock;
var t9_psg2;
var clock9_2;
var t9_psg2_choice;
var t9_psg2_resp;
var zsd10Clock;
var zsd1_10;
var t10_load;
var t10_load_resp;
var zj10Clock;
var t10_zj;
var t10_zj_resp;
var trail10Clock;
var t10_psg1;
var time_10;
var countdown_10;
var t10_psg1_resp;
var recall10Clock;
var t10_recall;
var t10_recall_resp;
var feedback10Clock;
var fankui_10;
var ss10Clock;
var t10_ss;
var t10_ss_resp;
var sspsg10Clock;
var t10_psg2;
var clock10_2;
var t10_psg2_choice;
var t10_psg2_resp;
var zsd11Clock;
var zsd1_11;
var t11_load;
var t11_load_resp;
var zj11Clock;
var t11_zj;
var t11_zj_resp;
var trail11Clock;
var t11_psg1;
var time_11;
var countdown_11;
var t11_psg1_resp;
var recall11Clock;
var t11_recall;
var t11_recall_resp;
var feedback11Clock;
var fankui_11;
var ss11Clock;
var t11_ss;
var t11_ss_resp;
var sspsg11Clock;
var t11_psg2;
var clock11_2;
var t11_psg2_choice;
var t11_psg2_resp;
var zsd12Clock;
var zsd1_12;
var t12_load;
var t12_load_resp;
var zj12Clock;
var t12_zj;
var t12_zj_resp;
var trail12Clock;
var t12_psg1;
var time_12;
var countdown_12;
var t12_psg1_resp;
var recall12Clock;
var t12_recall;
var t12_recall_resp;
var feedback12Clock;
var fankui_12;
var ss12Clock;
var t12_ss;
var t12_ss_resp;
var sspsg12Clock;
var t12_psg2;
var clock12_2;
var t12_psg2_choice;
var t12_psg2_resp;
var zsd13Clock;
var zsd1_13;
var t13_load;
var t13_load_resp;
var zj13Clock;
var t13_zj;
var t13_zj_resp;
var trail13Clock;
var t13_psg1;
var time_13;
var countdown_13;
var t13_psg1_resp;
var recall13Clock;
var t13_recall;
var t13_recall_resp;
var feedback13Clock;
var fankui_13;
var ss13Clock;
var t13_ss;
var t13_ss_resp;
var sspsg13Clock;
var t13_psg2;
var clock13_2;
var t13_psg2_choice;
var t13_psg2_resp;
var zsd14Clock;
var zsd1_14;
var t14_load;
var t14_load_resp;
var zj14Clock;
var t14_zj;
var t14_zj_resp;
var trail14Clock;
var t14_psg1;
var time_14;
var countdown_14;
var t14_psg1_resp;
var recall14Clock;
var t14_recall;
var t14_recall_resp;
var feedback14Clock;
var fankui_14;
var ss14Clock;
var t14_ss;
var t14_ss_resp;
var sspsg14Clock;
var t14_psg2;
var clock14_2;
var t14_psg2_choice;
var t14_psg2_resp;
var endClock;
var end_image;
var end_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "huanying"
  huanyingClock = new util.Clock();
  zdy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'zdy', units : undefined, 
    image : 'PICS/幻灯片1.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  hy_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "backgroud"
  backgroudClock = new util.Clock();
  back_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_image', units : undefined, 
    image : 'PICS/幻灯片2.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  back_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rule"
  ruleClock = new util.Clock();
  rule_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rule_image', units : undefined, 
    image : 'PICS/幻灯片3.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  rule_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd1"
  zsd1Clock = new util.Clock();
  zsd1_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_1', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t1_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_load', units : undefined, 
    image : 'PICS/幻灯片4.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t1_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj1"
  zj1Clock = new util.Clock();
  t1_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1_zj', units : undefined, 
    image : 'PICS/幻灯片5.PNG', mask : undefined,
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
    image : 'PICS/幻灯片6.PNG', mask : undefined,
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
  // Run 'Begin Experiment' code from code1
  feedback = "";
  
  fankui1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui1',
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
    image : 'PICS/幻灯片8.PNG', mask : undefined,
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
    image : 'PICS/幻灯片9.PNG', mask : undefined,
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
    image : 'PICS/幻灯片10.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t1_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd2"
  zsd2Clock = new util.Clock();
  zsd1_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_2', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t2_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_load', units : undefined, 
    image : 'PICS/幻灯片11.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t2_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj2"
  zj2Clock = new util.Clock();
  t2_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_zj', units : undefined, 
    image : 'PICS/幻灯片12.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t2_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail2"
  trail2Clock = new util.Clock();
  t2_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_psg1', units : undefined, 
    image : 'PICS/幻灯片13.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_2',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t2_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall2"
  recall2Clock = new util.Clock();
  t2_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_recall', units : undefined, 
    image : 'PICS/幻灯片14.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t2_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback2"
  feedback2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  feedback = "";
  
  fankui_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss2"
  ss2Clock = new util.Clock();
  t2_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_ss', units : undefined, 
    image : 'PICS/幻灯片15.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t2_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg2"
  sspsg2Clock = new util.Clock();
  t2_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_psg2', units : undefined, 
    image : 'PICS/幻灯片16.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock2_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t2_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't2_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片17.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t2_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd3"
  zsd3Clock = new util.Clock();
  zsd1_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_3', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t3_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_load', units : undefined, 
    image : 'PICS/幻灯片18.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t3_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj3"
  zj3Clock = new util.Clock();
  t3_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_zj', units : undefined, 
    image : 'PICS/幻灯片19.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t3_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail3"
  trail3Clock = new util.Clock();
  t3_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_psg1', units : undefined, 
    image : 'PICS/幻灯片20.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_3',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t3_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall3"
  recall3Clock = new util.Clock();
  t3_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_recall', units : undefined, 
    image : 'PICS/幻灯片21.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t3_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback3"
  feedback3Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  feedback = "";
  
  fankui_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss3"
  ss3Clock = new util.Clock();
  t3_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_ss', units : undefined, 
    image : 'PICS/幻灯片22.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t3_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg3"
  sspsg3Clock = new util.Clock();
  t3_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_psg2', units : undefined, 
    image : 'PICS/幻灯片23.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock3_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t3_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't3_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片24.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t3_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd4"
  zsd4Clock = new util.Clock();
  zsd1_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_4', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t4_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_load', units : undefined, 
    image : 'PICS/幻灯片25.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t4_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj4"
  zj4Clock = new util.Clock();
  t4_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_zj', units : undefined, 
    image : 'PICS/幻灯片26.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t4_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail4"
  trail4Clock = new util.Clock();
  t4_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_psg1', units : undefined, 
    image : 'PICS/幻灯片27.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_4',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t4_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall4"
  recall4Clock = new util.Clock();
  t4_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_recall', units : undefined, 
    image : 'PICS/幻灯片28.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t4_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback4"
  feedback4Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  feedback = "";
  
  fankui_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss4"
  ss4Clock = new util.Clock();
  t4_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_ss', units : undefined, 
    image : 'PICS/幻灯片29.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t4_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg4"
  sspsg4Clock = new util.Clock();
  t4_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_psg2', units : undefined, 
    image : 'PICS/幻灯片30.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock4_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock4_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t4_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't4_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片31.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t4_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd5"
  zsd5Clock = new util.Clock();
  zsd1_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_5', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t5_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_load', units : undefined, 
    image : 'PICS/幻灯片32.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t5_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj5"
  zj5Clock = new util.Clock();
  t5_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_zj', units : undefined, 
    image : 'PICS/幻灯片33.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t5_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail5"
  trail5Clock = new util.Clock();
  t5_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_psg1', units : undefined, 
    image : 'PICS/幻灯片34.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_5',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t5_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall5"
  recall5Clock = new util.Clock();
  t5_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_recall', units : undefined, 
    image : 'PICS/幻灯片35.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t5_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback5"
  feedback5Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  feedback = "";
  
  fankui_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss5"
  ss5Clock = new util.Clock();
  t5_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_ss', units : undefined, 
    image : 'PICS/幻灯片36.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t5_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg5"
  sspsg5Clock = new util.Clock();
  t5_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_psg2', units : undefined, 
    image : 'PICS/幻灯片37.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock5_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock5_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t5_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't5_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片38.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t5_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd6"
  zsd6Clock = new util.Clock();
  zsd1_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_6', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t6_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_load', units : undefined, 
    image : 'PICS/幻灯片39.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t6_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj6"
  zj6Clock = new util.Clock();
  t6_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_zj', units : undefined, 
    image : 'PICS/幻灯片40.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t6_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail6"
  trail6Clock = new util.Clock();
  t6_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_psg1', units : undefined, 
    image : 'PICS/幻灯片41.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_6',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t6_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall6"
  recall6Clock = new util.Clock();
  t6_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_recall', units : undefined, 
    image : 'PICS/幻灯片42.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t6_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback6"
  feedback6Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  feedback = "";
  
  fankui_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss6"
  ss6Clock = new util.Clock();
  t6_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_ss', units : undefined, 
    image : 'PICS/幻灯片43.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t6_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg6"
  sspsg6Clock = new util.Clock();
  t6_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_psg2', units : undefined, 
    image : 'PICS/幻灯片44.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock6_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock6_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t6_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't6_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片45.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t6_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd7"
  zsd7Clock = new util.Clock();
  zsd1_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_7', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t7_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_load', units : undefined, 
    image : 'PICS/幻灯片46.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t7_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj7"
  zj7Clock = new util.Clock();
  t7_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_zj', units : undefined, 
    image : 'PICS/幻灯片47.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t7_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail7"
  trail7Clock = new util.Clock();
  t7_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_psg1', units : undefined, 
    image : 'PICS/幻灯片48.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_7',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t7_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall7"
  recall7Clock = new util.Clock();
  t7_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_recall', units : undefined, 
    image : 'PICS/幻灯片49.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t7_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback7"
  feedback7Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_7
  feedback = "";
  
  fankui_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss7"
  ss7Clock = new util.Clock();
  t7_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_ss', units : undefined, 
    image : 'PICS/幻灯片50.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t7_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg7"
  sspsg7Clock = new util.Clock();
  t7_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_psg2', units : undefined, 
    image : 'PICS/幻灯片51.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock7_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock7_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t7_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't7_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片52.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t7_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd8"
  zsd8Clock = new util.Clock();
  zsd1_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_8', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t8_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_load', units : undefined, 
    image : 'PICS/幻灯片53.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t8_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj8"
  zj8Clock = new util.Clock();
  t8_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_zj', units : undefined, 
    image : 'PICS/幻灯片54.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t8_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail8"
  trail8Clock = new util.Clock();
  t8_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_psg1', units : undefined, 
    image : 'PICS/幻灯片55.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_8',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t8_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall8"
  recall8Clock = new util.Clock();
  t8_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_recall', units : undefined, 
    image : 'PICS/幻灯片56.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t8_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback8"
  feedback8Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_8
  feedback = "";
  
  fankui_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss8"
  ss8Clock = new util.Clock();
  t8_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_ss', units : undefined, 
    image : 'PICS/幻灯片57.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t8_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg8"
  sspsg8Clock = new util.Clock();
  t8_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_psg2', units : undefined, 
    image : 'PICS/幻灯片58.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock8_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock8_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t8_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't8_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片59.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t8_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd9"
  zsd9Clock = new util.Clock();
  zsd1_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_9', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t9_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_load', units : undefined, 
    image : 'PICS/幻灯片60.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t9_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj9"
  zj9Clock = new util.Clock();
  t9_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_zj', units : undefined, 
    image : 'PICS/幻灯片61.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t9_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail9"
  trail9Clock = new util.Clock();
  t9_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_psg1', units : undefined, 
    image : 'PICS/幻灯片62.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_9',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t9_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall9"
  recall9Clock = new util.Clock();
  t9_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_recall', units : undefined, 
    image : 'PICS/幻灯片63.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t9_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback9"
  feedback9Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_9
  feedback = "";
  
  fankui_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss9"
  ss9Clock = new util.Clock();
  t9_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_ss', units : undefined, 
    image : 'PICS/幻灯片64.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t9_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg9"
  sspsg9Clock = new util.Clock();
  t9_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_psg2', units : undefined, 
    image : 'PICS/幻灯片65.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t9_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't9_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片66.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t9_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd10"
  zsd10Clock = new util.Clock();
  zsd1_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_10', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t10_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_load', units : undefined, 
    image : 'PICS/幻灯片67.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t10_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj10"
  zj10Clock = new util.Clock();
  t10_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_zj', units : undefined, 
    image : 'PICS/幻灯片68.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t10_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail10"
  trail10Clock = new util.Clock();
  t10_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_psg1', units : undefined, 
    image : 'PICS/幻灯片69.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_10',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t10_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall10"
  recall10Clock = new util.Clock();
  t10_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_recall', units : undefined, 
    image : 'PICS/幻灯片70.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t10_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback10"
  feedback10Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_10
  feedback = "";
  
  fankui_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss10"
  ss10Clock = new util.Clock();
  t10_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_ss', units : undefined, 
    image : 'PICS/幻灯片71.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t10_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg10"
  sspsg10Clock = new util.Clock();
  t10_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_psg2', units : undefined, 
    image : 'PICS/幻灯片72.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock10_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock10_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t10_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't10_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片73.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t10_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd11"
  zsd11Clock = new util.Clock();
  zsd1_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_11', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t11_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_load', units : undefined, 
    image : 'PICS/幻灯片74.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t11_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj11"
  zj11Clock = new util.Clock();
  t11_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_zj', units : undefined, 
    image : 'PICS/幻灯片75.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t11_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail11"
  trail11Clock = new util.Clock();
  t11_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_psg1', units : undefined, 
    image : 'PICS/幻灯片76.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_11',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t11_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall11"
  recall11Clock = new util.Clock();
  t11_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_recall', units : undefined, 
    image : 'PICS/幻灯片77.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t11_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback11"
  feedback11Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_11
  feedback = "";
  
  fankui_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss11"
  ss11Clock = new util.Clock();
  t11_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_ss', units : undefined, 
    image : 'PICS/幻灯片78.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t11_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg11"
  sspsg11Clock = new util.Clock();
  t11_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_psg2', units : undefined, 
    image : 'PICS/幻灯片79.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock11_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock11_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t11_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't11_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片80.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t11_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd12"
  zsd12Clock = new util.Clock();
  zsd1_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_12', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t12_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_load', units : undefined, 
    image : 'PICS/幻灯片81.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t12_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj12"
  zj12Clock = new util.Clock();
  t12_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_zj', units : undefined, 
    image : 'PICS/幻灯片82.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t12_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail12"
  trail12Clock = new util.Clock();
  t12_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_psg1', units : undefined, 
    image : 'PICS/幻灯片83.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_12',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t12_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall12"
  recall12Clock = new util.Clock();
  t12_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_recall', units : undefined, 
    image : 'PICS/幻灯片84.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t12_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback12"
  feedback12Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  feedback = "";
  
  fankui_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss12"
  ss12Clock = new util.Clock();
  t12_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_ss', units : undefined, 
    image : 'PICS/幻灯片85.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t12_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg12"
  sspsg12Clock = new util.Clock();
  t12_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_psg2', units : undefined, 
    image : 'PICS/幻灯片86.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock12_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock12_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t12_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't12_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片87.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t12_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd13"
  zsd13Clock = new util.Clock();
  zsd1_13 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_13', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t13_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_load', units : undefined, 
    image : 'PICS/幻灯片88.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t13_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj13"
  zj13Clock = new util.Clock();
  t13_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_zj', units : undefined, 
    image : 'PICS/幻灯片89.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t13_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail13"
  trail13Clock = new util.Clock();
  t13_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_psg1', units : undefined, 
    image : 'PICS/幻灯片90.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_13',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t13_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall13"
  recall13Clock = new util.Clock();
  t13_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_recall', units : undefined, 
    image : 'PICS/幻灯片91.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t13_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback13"
  feedback13Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_13
  feedback = "";
  
  fankui_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss13"
  ss13Clock = new util.Clock();
  t13_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_ss', units : undefined, 
    image : 'PICS/幻灯片92.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t13_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg13"
  sspsg13Clock = new util.Clock();
  t13_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_psg2', units : undefined, 
    image : 'PICS/幻灯片93.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock13_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock13_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t13_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't13_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片94.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t13_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zsd14"
  zsd14Clock = new util.Clock();
  zsd1_14 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'zsd1_14', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  t14_load = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_load', units : undefined, 
    image : 'PICS/幻灯片95.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  t14_load_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zj14"
  zj14Clock = new util.Clock();
  t14_zj = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_zj', units : undefined, 
    image : 'PICS/幻灯片96.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t14_zj_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trail14"
  trail14Clock = new util.Clock();
  t14_psg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_psg1', units : undefined, 
    image : 'PICS/幻灯片97.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  time_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_14',
    text: '剩余时间',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  countdown_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdown_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  t14_psg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall14"
  recall14Clock = new util.Clock();
  t14_recall = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_recall', units : undefined, 
    image : 'PICS/幻灯片98.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t14_recall_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback14"
  feedback14Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_14
  feedback = "";
  
  fankui_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fankui_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ss14"
  ss14Clock = new util.Clock();
  t14_ss = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_ss', units : undefined, 
    image : 'PICS/幻灯片99.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  t14_ss_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sspsg14"
  sspsg14Clock = new util.Clock();
  t14_psg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_psg2', units : undefined, 
    image : 'PICS/幻灯片100.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  clock14_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock14_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.35], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  t14_psg2_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 't14_psg2_choice', units : undefined, 
    image : 'PICS/幻灯片101.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  t14_psg2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end_image', units : undefined, 
    image : 'PICS/幻灯片102.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    huanyingComponents.push(zdy);
    huanyingComponents.push(hy_resp);
    
    for (const thisComponent of huanyingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *zdy* updates
    if (t >= 0.0 && zdy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zdy.tStart = t;  // (not accounting for frame time here)
      zdy.frameNStart = frameN;  // exact frame index
      
      zdy.setAutoDraw(true);
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
    for (const thisComponent of huanyingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of huanyingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var _back_key_allKeys;
var backgroudComponents;
function backgroudRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'backgroud' ---
    t = 0;
    backgroudClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('backgroud.started', globalClock.getTime());
    back_key.keys = undefined;
    back_key.rt = undefined;
    _back_key_allKeys = [];
    // keep track of which components have finished
    backgroudComponents = [];
    backgroudComponents.push(back_image);
    backgroudComponents.push(back_key);
    
    for (const thisComponent of backgroudComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function backgroudRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'backgroud' ---
    // get current time
    t = backgroudClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *back_image* updates
    if (t >= 0.0 && back_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_image.tStart = t;  // (not accounting for frame time here)
      back_image.frameNStart = frameN;  // exact frame index
      
      back_image.setAutoDraw(true);
    }
    
    
    // *back_key* updates
    if (t >= 0.0 && back_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_key.tStart = t;  // (not accounting for frame time here)
      back_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { back_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { back_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { back_key.clearEvents(); });
    }
    
    if (back_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = back_key.getKeys({keyList: ['space'], waitRelease: false});
      _back_key_allKeys = _back_key_allKeys.concat(theseKeys);
      if (_back_key_allKeys.length > 0) {
        back_key.keys = _back_key_allKeys[_back_key_allKeys.length - 1].name;  // just the last key pressed
        back_key.rt = _back_key_allKeys[_back_key_allKeys.length - 1].rt;
        back_key.duration = _back_key_allKeys[_back_key_allKeys.length - 1].duration;
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
    for (const thisComponent of backgroudComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function backgroudRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'backgroud' ---
    for (const thisComponent of backgroudComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('backgroud.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(back_key.corr, level);
    }
    psychoJS.experiment.addData('back_key.keys', back_key.keys);
    if (typeof back_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('back_key.rt', back_key.rt);
        psychoJS.experiment.addData('back_key.duration', back_key.duration);
        routineTimer.reset();
        }
    
    back_key.stop();
    // the Routine "backgroud" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _rule_key_allKeys;
var ruleComponents;
function ruleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rule' ---
    t = 0;
    ruleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('rule.started', globalClock.getTime());
    rule_key.keys = undefined;
    rule_key.rt = undefined;
    _rule_key_allKeys = [];
    // keep track of which components have finished
    ruleComponents = [];
    ruleComponents.push(rule_image);
    ruleComponents.push(rule_key);
    
    for (const thisComponent of ruleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ruleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rule' ---
    // get current time
    t = ruleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rule_image* updates
    if (t >= 0.0 && rule_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rule_image.tStart = t;  // (not accounting for frame time here)
      rule_image.frameNStart = frameN;  // exact frame index
      
      rule_image.setAutoDraw(true);
    }
    
    
    // *rule_key* updates
    if (t >= 0.0 && rule_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rule_key.tStart = t;  // (not accounting for frame time here)
      rule_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rule_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rule_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rule_key.clearEvents(); });
    }
    
    if (rule_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rule_key.getKeys({keyList: ['space'], waitRelease: false});
      _rule_key_allKeys = _rule_key_allKeys.concat(theseKeys);
      if (_rule_key_allKeys.length > 0) {
        rule_key.keys = _rule_key_allKeys[_rule_key_allKeys.length - 1].name;  // just the last key pressed
        rule_key.rt = _rule_key_allKeys[_rule_key_allKeys.length - 1].rt;
        rule_key.duration = _rule_key_allKeys[_rule_key_allKeys.length - 1].duration;
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
    for (const thisComponent of ruleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ruleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rule' ---
    for (const thisComponent of ruleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rule.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(rule_key.corr, level);
    }
    psychoJS.experiment.addData('rule_key.keys', rule_key.keys);
    if (typeof rule_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rule_key.rt', rule_key.rt);
        psychoJS.experiment.addData('rule_key.duration', rule_key.duration);
        routineTimer.reset();
        }
    
    rule_key.stop();
    // the Routine "rule" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loop1;
function loop1LoopBegin(loop1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop1'
    });
    psychoJS.experiment.addLoop(loop1); // add the loop to the experiment
    currentLoop = loop1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop1 of loop1) {
      snapshot = loop1.getSnapshot();
      loop1LoopScheduler.add(importConditions(snapshot));
      loop1LoopScheduler.add(zsd1RoutineBegin(snapshot));
      loop1LoopScheduler.add(zsd1RoutineEachFrame());
      loop1LoopScheduler.add(zsd1RoutineEnd(snapshot));
      loop1LoopScheduler.add(zj1RoutineBegin(snapshot));
      loop1LoopScheduler.add(zj1RoutineEachFrame());
      loop1LoopScheduler.add(zj1RoutineEnd(snapshot));
      loop1LoopScheduler.add(trail1RoutineBegin(snapshot));
      loop1LoopScheduler.add(trail1RoutineEachFrame());
      loop1LoopScheduler.add(trail1RoutineEnd(snapshot));
      loop1LoopScheduler.add(recall1RoutineBegin(snapshot));
      loop1LoopScheduler.add(recall1RoutineEachFrame());
      loop1LoopScheduler.add(recall1RoutineEnd(snapshot));
      loop1LoopScheduler.add(feedback1RoutineBegin(snapshot));
      loop1LoopScheduler.add(feedback1RoutineEachFrame());
      loop1LoopScheduler.add(feedback1RoutineEnd(snapshot));
      loop1LoopScheduler.add(ss1RoutineBegin(snapshot));
      loop1LoopScheduler.add(ss1RoutineEachFrame());
      loop1LoopScheduler.add(ss1RoutineEnd(snapshot));
      loop1LoopScheduler.add(sspsg1RoutineBegin(snapshot));
      loop1LoopScheduler.add(sspsg1RoutineEachFrame());
      loop1LoopScheduler.add(sspsg1RoutineEnd(snapshot));
      loop1LoopScheduler.add(loop1LoopEndIteration(loop1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop2;
function loop2LoopBegin(loop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop2'
    });
    psychoJS.experiment.addLoop(loop2); // add the loop to the experiment
    currentLoop = loop2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop2 of loop2) {
      snapshot = loop2.getSnapshot();
      loop2LoopScheduler.add(importConditions(snapshot));
      loop2LoopScheduler.add(zsd2RoutineBegin(snapshot));
      loop2LoopScheduler.add(zsd2RoutineEachFrame());
      loop2LoopScheduler.add(zsd2RoutineEnd(snapshot));
      loop2LoopScheduler.add(zj2RoutineBegin(snapshot));
      loop2LoopScheduler.add(zj2RoutineEachFrame());
      loop2LoopScheduler.add(zj2RoutineEnd(snapshot));
      loop2LoopScheduler.add(trail2RoutineBegin(snapshot));
      loop2LoopScheduler.add(trail2RoutineEachFrame());
      loop2LoopScheduler.add(trail2RoutineEnd(snapshot));
      loop2LoopScheduler.add(recall2RoutineBegin(snapshot));
      loop2LoopScheduler.add(recall2RoutineEachFrame());
      loop2LoopScheduler.add(recall2RoutineEnd(snapshot));
      loop2LoopScheduler.add(feedback2RoutineBegin(snapshot));
      loop2LoopScheduler.add(feedback2RoutineEachFrame());
      loop2LoopScheduler.add(feedback2RoutineEnd(snapshot));
      loop2LoopScheduler.add(ss2RoutineBegin(snapshot));
      loop2LoopScheduler.add(ss2RoutineEachFrame());
      loop2LoopScheduler.add(ss2RoutineEnd(snapshot));
      loop2LoopScheduler.add(sspsg2RoutineBegin(snapshot));
      loop2LoopScheduler.add(sspsg2RoutineEachFrame());
      loop2LoopScheduler.add(sspsg2RoutineEnd(snapshot));
      loop2LoopScheduler.add(loop2LoopEndIteration(loop2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop3;
function loop3LoopBegin(loop3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop3'
    });
    psychoJS.experiment.addLoop(loop3); // add the loop to the experiment
    currentLoop = loop3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop3 of loop3) {
      snapshot = loop3.getSnapshot();
      loop3LoopScheduler.add(importConditions(snapshot));
      loop3LoopScheduler.add(zsd3RoutineBegin(snapshot));
      loop3LoopScheduler.add(zsd3RoutineEachFrame());
      loop3LoopScheduler.add(zsd3RoutineEnd(snapshot));
      loop3LoopScheduler.add(zj3RoutineBegin(snapshot));
      loop3LoopScheduler.add(zj3RoutineEachFrame());
      loop3LoopScheduler.add(zj3RoutineEnd(snapshot));
      loop3LoopScheduler.add(trail3RoutineBegin(snapshot));
      loop3LoopScheduler.add(trail3RoutineEachFrame());
      loop3LoopScheduler.add(trail3RoutineEnd(snapshot));
      loop3LoopScheduler.add(recall3RoutineBegin(snapshot));
      loop3LoopScheduler.add(recall3RoutineEachFrame());
      loop3LoopScheduler.add(recall3RoutineEnd(snapshot));
      loop3LoopScheduler.add(feedback3RoutineBegin(snapshot));
      loop3LoopScheduler.add(feedback3RoutineEachFrame());
      loop3LoopScheduler.add(feedback3RoutineEnd(snapshot));
      loop3LoopScheduler.add(ss3RoutineBegin(snapshot));
      loop3LoopScheduler.add(ss3RoutineEachFrame());
      loop3LoopScheduler.add(ss3RoutineEnd(snapshot));
      loop3LoopScheduler.add(sspsg3RoutineBegin(snapshot));
      loop3LoopScheduler.add(sspsg3RoutineEachFrame());
      loop3LoopScheduler.add(sspsg3RoutineEnd(snapshot));
      loop3LoopScheduler.add(loop3LoopEndIteration(loop3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop4;
function loop4LoopBegin(loop4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop4'
    });
    psychoJS.experiment.addLoop(loop4); // add the loop to the experiment
    currentLoop = loop4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop4 of loop4) {
      snapshot = loop4.getSnapshot();
      loop4LoopScheduler.add(importConditions(snapshot));
      loop4LoopScheduler.add(zsd4RoutineBegin(snapshot));
      loop4LoopScheduler.add(zsd4RoutineEachFrame());
      loop4LoopScheduler.add(zsd4RoutineEnd(snapshot));
      loop4LoopScheduler.add(zj4RoutineBegin(snapshot));
      loop4LoopScheduler.add(zj4RoutineEachFrame());
      loop4LoopScheduler.add(zj4RoutineEnd(snapshot));
      loop4LoopScheduler.add(trail4RoutineBegin(snapshot));
      loop4LoopScheduler.add(trail4RoutineEachFrame());
      loop4LoopScheduler.add(trail4RoutineEnd(snapshot));
      loop4LoopScheduler.add(recall4RoutineBegin(snapshot));
      loop4LoopScheduler.add(recall4RoutineEachFrame());
      loop4LoopScheduler.add(recall4RoutineEnd(snapshot));
      loop4LoopScheduler.add(feedback4RoutineBegin(snapshot));
      loop4LoopScheduler.add(feedback4RoutineEachFrame());
      loop4LoopScheduler.add(feedback4RoutineEnd(snapshot));
      loop4LoopScheduler.add(ss4RoutineBegin(snapshot));
      loop4LoopScheduler.add(ss4RoutineEachFrame());
      loop4LoopScheduler.add(ss4RoutineEnd(snapshot));
      loop4LoopScheduler.add(sspsg4RoutineBegin(snapshot));
      loop4LoopScheduler.add(sspsg4RoutineEachFrame());
      loop4LoopScheduler.add(sspsg4RoutineEnd(snapshot));
      loop4LoopScheduler.add(loop4LoopEndIteration(loop4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop5;
function loop5LoopBegin(loop5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop5'
    });
    psychoJS.experiment.addLoop(loop5); // add the loop to the experiment
    currentLoop = loop5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop5 of loop5) {
      snapshot = loop5.getSnapshot();
      loop5LoopScheduler.add(importConditions(snapshot));
      loop5LoopScheduler.add(zsd5RoutineBegin(snapshot));
      loop5LoopScheduler.add(zsd5RoutineEachFrame());
      loop5LoopScheduler.add(zsd5RoutineEnd(snapshot));
      loop5LoopScheduler.add(zj5RoutineBegin(snapshot));
      loop5LoopScheduler.add(zj5RoutineEachFrame());
      loop5LoopScheduler.add(zj5RoutineEnd(snapshot));
      loop5LoopScheduler.add(trail5RoutineBegin(snapshot));
      loop5LoopScheduler.add(trail5RoutineEachFrame());
      loop5LoopScheduler.add(trail5RoutineEnd(snapshot));
      loop5LoopScheduler.add(recall5RoutineBegin(snapshot));
      loop5LoopScheduler.add(recall5RoutineEachFrame());
      loop5LoopScheduler.add(recall5RoutineEnd(snapshot));
      loop5LoopScheduler.add(feedback5RoutineBegin(snapshot));
      loop5LoopScheduler.add(feedback5RoutineEachFrame());
      loop5LoopScheduler.add(feedback5RoutineEnd(snapshot));
      loop5LoopScheduler.add(ss5RoutineBegin(snapshot));
      loop5LoopScheduler.add(ss5RoutineEachFrame());
      loop5LoopScheduler.add(ss5RoutineEnd(snapshot));
      loop5LoopScheduler.add(sspsg5RoutineBegin(snapshot));
      loop5LoopScheduler.add(sspsg5RoutineEachFrame());
      loop5LoopScheduler.add(sspsg5RoutineEnd(snapshot));
      loop5LoopScheduler.add(loop5LoopEndIteration(loop5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop6;
function loop6LoopBegin(loop6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop6'
    });
    psychoJS.experiment.addLoop(loop6); // add the loop to the experiment
    currentLoop = loop6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop6 of loop6) {
      snapshot = loop6.getSnapshot();
      loop6LoopScheduler.add(importConditions(snapshot));
      loop6LoopScheduler.add(zsd6RoutineBegin(snapshot));
      loop6LoopScheduler.add(zsd6RoutineEachFrame());
      loop6LoopScheduler.add(zsd6RoutineEnd(snapshot));
      loop6LoopScheduler.add(zj6RoutineBegin(snapshot));
      loop6LoopScheduler.add(zj6RoutineEachFrame());
      loop6LoopScheduler.add(zj6RoutineEnd(snapshot));
      loop6LoopScheduler.add(trail6RoutineBegin(snapshot));
      loop6LoopScheduler.add(trail6RoutineEachFrame());
      loop6LoopScheduler.add(trail6RoutineEnd(snapshot));
      loop6LoopScheduler.add(recall6RoutineBegin(snapshot));
      loop6LoopScheduler.add(recall6RoutineEachFrame());
      loop6LoopScheduler.add(recall6RoutineEnd(snapshot));
      loop6LoopScheduler.add(feedback6RoutineBegin(snapshot));
      loop6LoopScheduler.add(feedback6RoutineEachFrame());
      loop6LoopScheduler.add(feedback6RoutineEnd(snapshot));
      loop6LoopScheduler.add(ss6RoutineBegin(snapshot));
      loop6LoopScheduler.add(ss6RoutineEachFrame());
      loop6LoopScheduler.add(ss6RoutineEnd(snapshot));
      loop6LoopScheduler.add(sspsg6RoutineBegin(snapshot));
      loop6LoopScheduler.add(sspsg6RoutineEachFrame());
      loop6LoopScheduler.add(sspsg6RoutineEnd(snapshot));
      loop6LoopScheduler.add(loop6LoopEndIteration(loop6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop7;
function loop7LoopBegin(loop7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop7'
    });
    psychoJS.experiment.addLoop(loop7); // add the loop to the experiment
    currentLoop = loop7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop7 of loop7) {
      snapshot = loop7.getSnapshot();
      loop7LoopScheduler.add(importConditions(snapshot));
      loop7LoopScheduler.add(zsd7RoutineBegin(snapshot));
      loop7LoopScheduler.add(zsd7RoutineEachFrame());
      loop7LoopScheduler.add(zsd7RoutineEnd(snapshot));
      loop7LoopScheduler.add(zj7RoutineBegin(snapshot));
      loop7LoopScheduler.add(zj7RoutineEachFrame());
      loop7LoopScheduler.add(zj7RoutineEnd(snapshot));
      loop7LoopScheduler.add(trail7RoutineBegin(snapshot));
      loop7LoopScheduler.add(trail7RoutineEachFrame());
      loop7LoopScheduler.add(trail7RoutineEnd(snapshot));
      loop7LoopScheduler.add(recall7RoutineBegin(snapshot));
      loop7LoopScheduler.add(recall7RoutineEachFrame());
      loop7LoopScheduler.add(recall7RoutineEnd(snapshot));
      loop7LoopScheduler.add(feedback7RoutineBegin(snapshot));
      loop7LoopScheduler.add(feedback7RoutineEachFrame());
      loop7LoopScheduler.add(feedback7RoutineEnd(snapshot));
      loop7LoopScheduler.add(ss7RoutineBegin(snapshot));
      loop7LoopScheduler.add(ss7RoutineEachFrame());
      loop7LoopScheduler.add(ss7RoutineEnd(snapshot));
      loop7LoopScheduler.add(sspsg7RoutineBegin(snapshot));
      loop7LoopScheduler.add(sspsg7RoutineEachFrame());
      loop7LoopScheduler.add(sspsg7RoutineEnd(snapshot));
      loop7LoopScheduler.add(loop7LoopEndIteration(loop7LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop7LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop8;
function loop8LoopBegin(loop8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop8'
    });
    psychoJS.experiment.addLoop(loop8); // add the loop to the experiment
    currentLoop = loop8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop8 of loop8) {
      snapshot = loop8.getSnapshot();
      loop8LoopScheduler.add(importConditions(snapshot));
      loop8LoopScheduler.add(zsd8RoutineBegin(snapshot));
      loop8LoopScheduler.add(zsd8RoutineEachFrame());
      loop8LoopScheduler.add(zsd8RoutineEnd(snapshot));
      loop8LoopScheduler.add(zj8RoutineBegin(snapshot));
      loop8LoopScheduler.add(zj8RoutineEachFrame());
      loop8LoopScheduler.add(zj8RoutineEnd(snapshot));
      loop8LoopScheduler.add(trail8RoutineBegin(snapshot));
      loop8LoopScheduler.add(trail8RoutineEachFrame());
      loop8LoopScheduler.add(trail8RoutineEnd(snapshot));
      loop8LoopScheduler.add(recall8RoutineBegin(snapshot));
      loop8LoopScheduler.add(recall8RoutineEachFrame());
      loop8LoopScheduler.add(recall8RoutineEnd(snapshot));
      loop8LoopScheduler.add(feedback8RoutineBegin(snapshot));
      loop8LoopScheduler.add(feedback8RoutineEachFrame());
      loop8LoopScheduler.add(feedback8RoutineEnd(snapshot));
      loop8LoopScheduler.add(ss8RoutineBegin(snapshot));
      loop8LoopScheduler.add(ss8RoutineEachFrame());
      loop8LoopScheduler.add(ss8RoutineEnd(snapshot));
      loop8LoopScheduler.add(sspsg8RoutineBegin(snapshot));
      loop8LoopScheduler.add(sspsg8RoutineEachFrame());
      loop8LoopScheduler.add(sspsg8RoutineEnd(snapshot));
      loop8LoopScheduler.add(loop8LoopEndIteration(loop8LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop8LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop8);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop8LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop9;
function loop9LoopBegin(loop9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop9'
    });
    psychoJS.experiment.addLoop(loop9); // add the loop to the experiment
    currentLoop = loop9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop9 of loop9) {
      snapshot = loop9.getSnapshot();
      loop9LoopScheduler.add(importConditions(snapshot));
      loop9LoopScheduler.add(zsd9RoutineBegin(snapshot));
      loop9LoopScheduler.add(zsd9RoutineEachFrame());
      loop9LoopScheduler.add(zsd9RoutineEnd(snapshot));
      loop9LoopScheduler.add(zj9RoutineBegin(snapshot));
      loop9LoopScheduler.add(zj9RoutineEachFrame());
      loop9LoopScheduler.add(zj9RoutineEnd(snapshot));
      loop9LoopScheduler.add(trail9RoutineBegin(snapshot));
      loop9LoopScheduler.add(trail9RoutineEachFrame());
      loop9LoopScheduler.add(trail9RoutineEnd(snapshot));
      loop9LoopScheduler.add(recall9RoutineBegin(snapshot));
      loop9LoopScheduler.add(recall9RoutineEachFrame());
      loop9LoopScheduler.add(recall9RoutineEnd(snapshot));
      loop9LoopScheduler.add(feedback9RoutineBegin(snapshot));
      loop9LoopScheduler.add(feedback9RoutineEachFrame());
      loop9LoopScheduler.add(feedback9RoutineEnd(snapshot));
      loop9LoopScheduler.add(ss9RoutineBegin(snapshot));
      loop9LoopScheduler.add(ss9RoutineEachFrame());
      loop9LoopScheduler.add(ss9RoutineEnd(snapshot));
      loop9LoopScheduler.add(sspsg9RoutineBegin(snapshot));
      loop9LoopScheduler.add(sspsg9RoutineEachFrame());
      loop9LoopScheduler.add(sspsg9RoutineEnd(snapshot));
      loop9LoopScheduler.add(loop9LoopEndIteration(loop9LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop9LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop9);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop9LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop10;
function loop10LoopBegin(loop10LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop10 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop10'
    });
    psychoJS.experiment.addLoop(loop10); // add the loop to the experiment
    currentLoop = loop10;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop10 of loop10) {
      snapshot = loop10.getSnapshot();
      loop10LoopScheduler.add(importConditions(snapshot));
      loop10LoopScheduler.add(zsd10RoutineBegin(snapshot));
      loop10LoopScheduler.add(zsd10RoutineEachFrame());
      loop10LoopScheduler.add(zsd10RoutineEnd(snapshot));
      loop10LoopScheduler.add(zj10RoutineBegin(snapshot));
      loop10LoopScheduler.add(zj10RoutineEachFrame());
      loop10LoopScheduler.add(zj10RoutineEnd(snapshot));
      loop10LoopScheduler.add(trail10RoutineBegin(snapshot));
      loop10LoopScheduler.add(trail10RoutineEachFrame());
      loop10LoopScheduler.add(trail10RoutineEnd(snapshot));
      loop10LoopScheduler.add(recall10RoutineBegin(snapshot));
      loop10LoopScheduler.add(recall10RoutineEachFrame());
      loop10LoopScheduler.add(recall10RoutineEnd(snapshot));
      loop10LoopScheduler.add(feedback10RoutineBegin(snapshot));
      loop10LoopScheduler.add(feedback10RoutineEachFrame());
      loop10LoopScheduler.add(feedback10RoutineEnd(snapshot));
      loop10LoopScheduler.add(ss10RoutineBegin(snapshot));
      loop10LoopScheduler.add(ss10RoutineEachFrame());
      loop10LoopScheduler.add(ss10RoutineEnd(snapshot));
      loop10LoopScheduler.add(sspsg10RoutineBegin(snapshot));
      loop10LoopScheduler.add(sspsg10RoutineEachFrame());
      loop10LoopScheduler.add(sspsg10RoutineEnd(snapshot));
      loop10LoopScheduler.add(loop10LoopEndIteration(loop10LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop10LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop10);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop10LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop11;
function loop11LoopBegin(loop11LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop11 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop11'
    });
    psychoJS.experiment.addLoop(loop11); // add the loop to the experiment
    currentLoop = loop11;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop11 of loop11) {
      snapshot = loop11.getSnapshot();
      loop11LoopScheduler.add(importConditions(snapshot));
      loop11LoopScheduler.add(zsd11RoutineBegin(snapshot));
      loop11LoopScheduler.add(zsd11RoutineEachFrame());
      loop11LoopScheduler.add(zsd11RoutineEnd(snapshot));
      loop11LoopScheduler.add(zj11RoutineBegin(snapshot));
      loop11LoopScheduler.add(zj11RoutineEachFrame());
      loop11LoopScheduler.add(zj11RoutineEnd(snapshot));
      loop11LoopScheduler.add(trail11RoutineBegin(snapshot));
      loop11LoopScheduler.add(trail11RoutineEachFrame());
      loop11LoopScheduler.add(trail11RoutineEnd(snapshot));
      loop11LoopScheduler.add(recall11RoutineBegin(snapshot));
      loop11LoopScheduler.add(recall11RoutineEachFrame());
      loop11LoopScheduler.add(recall11RoutineEnd(snapshot));
      loop11LoopScheduler.add(feedback11RoutineBegin(snapshot));
      loop11LoopScheduler.add(feedback11RoutineEachFrame());
      loop11LoopScheduler.add(feedback11RoutineEnd(snapshot));
      loop11LoopScheduler.add(ss11RoutineBegin(snapshot));
      loop11LoopScheduler.add(ss11RoutineEachFrame());
      loop11LoopScheduler.add(ss11RoutineEnd(snapshot));
      loop11LoopScheduler.add(sspsg11RoutineBegin(snapshot));
      loop11LoopScheduler.add(sspsg11RoutineEachFrame());
      loop11LoopScheduler.add(sspsg11RoutineEnd(snapshot));
      loop11LoopScheduler.add(loop11LoopEndIteration(loop11LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop11LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop11);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop11LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop12;
function loop12LoopBegin(loop12LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop12 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop12'
    });
    psychoJS.experiment.addLoop(loop12); // add the loop to the experiment
    currentLoop = loop12;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop12 of loop12) {
      snapshot = loop12.getSnapshot();
      loop12LoopScheduler.add(importConditions(snapshot));
      loop12LoopScheduler.add(zsd12RoutineBegin(snapshot));
      loop12LoopScheduler.add(zsd12RoutineEachFrame());
      loop12LoopScheduler.add(zsd12RoutineEnd(snapshot));
      loop12LoopScheduler.add(zj12RoutineBegin(snapshot));
      loop12LoopScheduler.add(zj12RoutineEachFrame());
      loop12LoopScheduler.add(zj12RoutineEnd(snapshot));
      loop12LoopScheduler.add(trail12RoutineBegin(snapshot));
      loop12LoopScheduler.add(trail12RoutineEachFrame());
      loop12LoopScheduler.add(trail12RoutineEnd(snapshot));
      loop12LoopScheduler.add(recall12RoutineBegin(snapshot));
      loop12LoopScheduler.add(recall12RoutineEachFrame());
      loop12LoopScheduler.add(recall12RoutineEnd(snapshot));
      loop12LoopScheduler.add(feedback12RoutineBegin(snapshot));
      loop12LoopScheduler.add(feedback12RoutineEachFrame());
      loop12LoopScheduler.add(feedback12RoutineEnd(snapshot));
      loop12LoopScheduler.add(ss12RoutineBegin(snapshot));
      loop12LoopScheduler.add(ss12RoutineEachFrame());
      loop12LoopScheduler.add(ss12RoutineEnd(snapshot));
      loop12LoopScheduler.add(sspsg12RoutineBegin(snapshot));
      loop12LoopScheduler.add(sspsg12RoutineEachFrame());
      loop12LoopScheduler.add(sspsg12RoutineEnd(snapshot));
      loop12LoopScheduler.add(loop12LoopEndIteration(loop12LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop12LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop12);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop12LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop13;
function loop13LoopBegin(loop13LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop13 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop13'
    });
    psychoJS.experiment.addLoop(loop13); // add the loop to the experiment
    currentLoop = loop13;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop13 of loop13) {
      snapshot = loop13.getSnapshot();
      loop13LoopScheduler.add(importConditions(snapshot));
      loop13LoopScheduler.add(zsd13RoutineBegin(snapshot));
      loop13LoopScheduler.add(zsd13RoutineEachFrame());
      loop13LoopScheduler.add(zsd13RoutineEnd(snapshot));
      loop13LoopScheduler.add(zj13RoutineBegin(snapshot));
      loop13LoopScheduler.add(zj13RoutineEachFrame());
      loop13LoopScheduler.add(zj13RoutineEnd(snapshot));
      loop13LoopScheduler.add(trail13RoutineBegin(snapshot));
      loop13LoopScheduler.add(trail13RoutineEachFrame());
      loop13LoopScheduler.add(trail13RoutineEnd(snapshot));
      loop13LoopScheduler.add(recall13RoutineBegin(snapshot));
      loop13LoopScheduler.add(recall13RoutineEachFrame());
      loop13LoopScheduler.add(recall13RoutineEnd(snapshot));
      loop13LoopScheduler.add(feedback13RoutineBegin(snapshot));
      loop13LoopScheduler.add(feedback13RoutineEachFrame());
      loop13LoopScheduler.add(feedback13RoutineEnd(snapshot));
      loop13LoopScheduler.add(ss13RoutineBegin(snapshot));
      loop13LoopScheduler.add(ss13RoutineEachFrame());
      loop13LoopScheduler.add(ss13RoutineEnd(snapshot));
      loop13LoopScheduler.add(sspsg13RoutineBegin(snapshot));
      loop13LoopScheduler.add(sspsg13RoutineEachFrame());
      loop13LoopScheduler.add(sspsg13RoutineEnd(snapshot));
      loop13LoopScheduler.add(loop13LoopEndIteration(loop13LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop13LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop13);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop13LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop14;
function loop14LoopBegin(loop14LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop14 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop14'
    });
    psychoJS.experiment.addLoop(loop14); // add the loop to the experiment
    currentLoop = loop14;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop14 of loop14) {
      snapshot = loop14.getSnapshot();
      loop14LoopScheduler.add(importConditions(snapshot));
      loop14LoopScheduler.add(zsd14RoutineBegin(snapshot));
      loop14LoopScheduler.add(zsd14RoutineEachFrame());
      loop14LoopScheduler.add(zsd14RoutineEnd(snapshot));
      loop14LoopScheduler.add(zj14RoutineBegin(snapshot));
      loop14LoopScheduler.add(zj14RoutineEachFrame());
      loop14LoopScheduler.add(zj14RoutineEnd(snapshot));
      loop14LoopScheduler.add(trail14RoutineBegin(snapshot));
      loop14LoopScheduler.add(trail14RoutineEachFrame());
      loop14LoopScheduler.add(trail14RoutineEnd(snapshot));
      loop14LoopScheduler.add(recall14RoutineBegin(snapshot));
      loop14LoopScheduler.add(recall14RoutineEachFrame());
      loop14LoopScheduler.add(recall14RoutineEnd(snapshot));
      loop14LoopScheduler.add(feedback14RoutineBegin(snapshot));
      loop14LoopScheduler.add(feedback14RoutineEachFrame());
      loop14LoopScheduler.add(feedback14RoutineEnd(snapshot));
      loop14LoopScheduler.add(ss14RoutineBegin(snapshot));
      loop14LoopScheduler.add(ss14RoutineEachFrame());
      loop14LoopScheduler.add(ss14RoutineEnd(snapshot));
      loop14LoopScheduler.add(sspsg14RoutineBegin(snapshot));
      loop14LoopScheduler.add(sspsg14RoutineEachFrame());
      loop14LoopScheduler.add(sspsg14RoutineEnd(snapshot));
      loop14LoopScheduler.add(loop14LoopEndIteration(loop14LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop14LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop14);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop14LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _t1_load_resp_allKeys;
var zsd1Components;
function zsd1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd1' ---
    t = 0;
    zsd1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd1.started', globalClock.getTime());
    t1_load_resp.keys = undefined;
    t1_load_resp.rt = undefined;
    _t1_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd1Components = [];
    zsd1Components.push(zsd1_1);
    zsd1Components.push(t1_load);
    zsd1Components.push(t1_load_resp);
    
    for (const thisComponent of zsd1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function zsd1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd1' ---
    // get current time
    t = zsd1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_1* updates
    if (t >= 0.0 && zsd1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_1.tStart = t;  // (not accounting for frame time here)
      zsd1_1.frameNStart = frameN;  // exact frame index
      
      zsd1_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_1.setAutoDraw(false);
    }
    
    
    // *t1_load* updates
    if (t >= 0.5 && t1_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_load.tStart = t;  // (not accounting for frame time here)
      t1_load.frameNStart = frameN;  // exact frame index
      
      t1_load.setAutoDraw(true);
    }
    
    
    // *t1_load_resp* updates
    if (t >= 0.5 && t1_load_resp.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of zsd1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd1' ---
    for (const thisComponent of zsd1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd1.stopped', globalClock.getTime());
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
    // the Routine "zsd1" was not non-slip safe, so reset the non-slip timer
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
    
    for (const thisComponent of zj1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of zj1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of zj1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of trail1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


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
      countdown.setText(util.round((14 - t), 1), false);
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
    for (const thisComponent of trail1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of trail1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of recall1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
        t1_recall_resp.keys = _t1_recall_resp_allKeys[0].name;  // just the first key pressed
        t1_recall_resp.rt = _t1_recall_resp_allKeys[0].rt;
        t1_recall_resp.duration = _t1_recall_resp_allKeys[0].duration;
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
    for (const thisComponent of recall1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of recall1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    // Run 'Begin Routine' code from code1
    if (t1_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui1.setText(feedback);
    // keep track of which components have finished
    feedback1Components = [];
    feedback1Components.push(fankui1);
    
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *fankui1* updates
    if (t >= 0.0 && fankui1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui1.tStart = t;  // (not accounting for frame time here)
      fankui1.frameNStart = frameN;  // exact frame index
      
      fankui1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui1.setAutoDraw(false);
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
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of feedback1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of ss1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of ss1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of ss1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of sspsg1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of sspsg1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of sspsg1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var _t2_load_resp_allKeys;
var zsd2Components;
function zsd2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd2' ---
    t = 0;
    zsd2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd2.started', globalClock.getTime());
    t2_load_resp.keys = undefined;
    t2_load_resp.rt = undefined;
    _t2_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd2Components = [];
    zsd2Components.push(zsd1_2);
    zsd2Components.push(t2_load);
    zsd2Components.push(t2_load_resp);
    
    for (const thisComponent of zsd2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd2' ---
    // get current time
    t = zsd2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_2* updates
    if (t >= 0.0 && zsd1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_2.tStart = t;  // (not accounting for frame time here)
      zsd1_2.frameNStart = frameN;  // exact frame index
      
      zsd1_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_2.setAutoDraw(false);
    }
    
    
    // *t2_load* updates
    if (t >= 0.5 && t2_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_load.tStart = t;  // (not accounting for frame time here)
      t2_load.frameNStart = frameN;  // exact frame index
      
      t2_load.setAutoDraw(true);
    }
    
    
    // *t2_load_resp* updates
    if (t >= 0.5 && t2_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_load_resp.tStart = t;  // (not accounting for frame time here)
      t2_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t2_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t2_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t2_load_resp.clearEvents(); });
    }
    
    if (t2_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t2_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t2_load_resp_allKeys = _t2_load_resp_allKeys.concat(theseKeys);
      if (_t2_load_resp_allKeys.length > 0) {
        t2_load_resp.keys = _t2_load_resp_allKeys[_t2_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t2_load_resp.rt = _t2_load_resp_allKeys[_t2_load_resp_allKeys.length - 1].rt;
        t2_load_resp.duration = _t2_load_resp_allKeys[_t2_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd2' ---
    for (const thisComponent of zsd2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t2_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t2_load_resp.keys', t2_load_resp.keys);
    if (typeof t2_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t2_load_resp.rt', t2_load_resp.rt);
        psychoJS.experiment.addData('t2_load_resp.duration', t2_load_resp.duration);
        routineTimer.reset();
        }
    
    t2_load_resp.stop();
    // the Routine "zsd2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t2_zj_resp_allKeys;
var zj2Components;
function zj2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj2' ---
    t = 0;
    zj2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj2.started', globalClock.getTime());
    t2_zj_resp.keys = undefined;
    t2_zj_resp.rt = undefined;
    _t2_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj2Components = [];
    zj2Components.push(t2_zj);
    zj2Components.push(t2_zj_resp);
    
    for (const thisComponent of zj2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj2' ---
    // get current time
    t = zj2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t2_zj* updates
    if (t >= 0 && t2_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_zj.tStart = t;  // (not accounting for frame time here)
      t2_zj.frameNStart = frameN;  // exact frame index
      
      t2_zj.setAutoDraw(true);
    }
    
    
    // *t2_zj_resp* updates
    if (t >= 0 && t2_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_zj_resp.tStart = t;  // (not accounting for frame time here)
      t2_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t2_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t2_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t2_zj_resp.clearEvents(); });
    }
    
    if (t2_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t2_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t2_zj_resp_allKeys = _t2_zj_resp_allKeys.concat(theseKeys);
      if (_t2_zj_resp_allKeys.length > 0) {
        t2_zj_resp.keys = _t2_zj_resp_allKeys[_t2_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t2_zj_resp.rt = _t2_zj_resp_allKeys[_t2_zj_resp_allKeys.length - 1].rt;
        t2_zj_resp.duration = _t2_zj_resp_allKeys[_t2_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj2' ---
    for (const thisComponent of zj2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t2_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t2_zj_resp.keys', t2_zj_resp.keys);
    if (typeof t2_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t2_zj_resp.rt', t2_zj_resp.rt);
        psychoJS.experiment.addData('t2_zj_resp.duration', t2_zj_resp.duration);
        routineTimer.reset();
        }
    
    t2_zj_resp.stop();
    // the Routine "zj2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t2_psg1_resp_allKeys;
var trail2Components;
function trail2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail2' ---
    t = 0;
    trail2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail2.started', globalClock.getTime());
    t2_psg1_resp.keys = undefined;
    t2_psg1_resp.rt = undefined;
    _t2_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail2Components = [];
    trail2Components.push(t2_psg1);
    trail2Components.push(time_2);
    trail2Components.push(countdown_2);
    trail2Components.push(t2_psg1_resp);
    
    for (const thisComponent of trail2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail2' ---
    // get current time
    t = trail2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t2_psg1* updates
    if (t >= 0.0 && t2_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_psg1.tStart = t;  // (not accounting for frame time here)
      t2_psg1.frameNStart = frameN;  // exact frame index
      
      t2_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t2_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t2_psg1.setAutoDraw(false);
    }
    
    
    // *time_2* updates
    if (t >= 0.0 && time_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_2.tStart = t;  // (not accounting for frame time here)
      time_2.frameNStart = frameN;  // exact frame index
      
      time_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_2.setAutoDraw(false);
    }
    
    
    if (countdown_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_2.setText(util.round((5 - t), 1), false);
    }
    
    // *countdown_2* updates
    if (t >= 0.0 && countdown_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_2.tStart = t;  // (not accounting for frame time here)
      countdown_2.frameNStart = frameN;  // exact frame index
      
      countdown_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_2.setAutoDraw(false);
    }
    
    
    // *t2_psg1_resp* updates
    if (t >= 0.0 && t2_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t2_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t2_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t2_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t2_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t2_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t2_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t2_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t2_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t2_psg1_resp_allKeys = _t2_psg1_resp_allKeys.concat(theseKeys);
      if (_t2_psg1_resp_allKeys.length > 0) {
        t2_psg1_resp.keys = _t2_psg1_resp_allKeys[_t2_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t2_psg1_resp.rt = _t2_psg1_resp_allKeys[_t2_psg1_resp_allKeys.length - 1].rt;
        t2_psg1_resp.duration = _t2_psg1_resp_allKeys[_t2_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail2' ---
    for (const thisComponent of trail2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t2_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t2_psg1_resp.keys', t2_psg1_resp.keys);
    if (typeof t2_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t2_psg1_resp.rt', t2_psg1_resp.rt);
        psychoJS.experiment.addData('t2_psg1_resp.duration', t2_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t2_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t2_recall_resp_allKeys;
var recall2Components;
function recall2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall2' ---
    t = 0;
    recall2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall2.started', globalClock.getTime());
    t2_recall_resp.keys = undefined;
    t2_recall_resp.rt = undefined;
    _t2_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall2Components = [];
    recall2Components.push(t2_recall);
    recall2Components.push(t2_recall_resp);
    
    for (const thisComponent of recall2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall2' ---
    // get current time
    t = recall2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t2_recall* updates
    if (t >= 0 && t2_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_recall.tStart = t;  // (not accounting for frame time here)
      t2_recall.frameNStart = frameN;  // exact frame index
      
      t2_recall.setAutoDraw(true);
    }
    
    
    // *t2_recall_resp* updates
    if (t >= 0 && t2_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_recall_resp.tStart = t;  // (not accounting for frame time here)
      t2_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t2_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t2_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t2_recall_resp.clearEvents(); });
    }
    
    if (t2_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t2_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t2_recall_resp_allKeys = _t2_recall_resp_allKeys.concat(theseKeys);
      if (_t2_recall_resp_allKeys.length > 0) {
        t2_recall_resp.keys = _t2_recall_resp_allKeys[_t2_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t2_recall_resp.rt = _t2_recall_resp_allKeys[_t2_recall_resp_allKeys.length - 1].rt;
        t2_recall_resp.duration = _t2_recall_resp_allKeys[_t2_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t2_recall_resp.keys == 'b') {
            t2_recall_resp.corr = 1;
        } else {
            t2_recall_resp.corr = 0;
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
    for (const thisComponent of recall2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall2' ---
    for (const thisComponent of recall2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t2_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('b')) {
         t2_recall_resp.corr = 1;  // correct non-response
      } else {
         t2_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t2_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t2_recall_resp.keys', t2_recall_resp.keys);
    psychoJS.experiment.addData('t2_recall_resp.corr', t2_recall_resp.corr);
    if (typeof t2_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t2_recall_resp.rt', t2_recall_resp.rt);
        psychoJS.experiment.addData('t2_recall_resp.duration', t2_recall_resp.duration);
        routineTimer.reset();
        }
    
    t2_recall_resp.stop();
    // the Routine "recall2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback2Components;
function feedback2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback2' ---
    t = 0;
    feedback2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    if (t2_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_2.setText(feedback);
    // keep track of which components have finished
    feedback2Components = [];
    feedback2Components.push(fankui_2);
    
    for (const thisComponent of feedback2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback2' ---
    // get current time
    t = feedback2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_2* updates
    if (t >= 0.0 && fankui_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_2.tStart = t;  // (not accounting for frame time here)
      fankui_2.frameNStart = frameN;  // exact frame index
      
      fankui_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_2.setAutoDraw(false);
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
    for (const thisComponent of feedback2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback2' ---
    for (const thisComponent of feedback2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t2_ss_resp_allKeys;
var ss2Components;
function ss2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss2' ---
    t = 0;
    ss2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss2.started', globalClock.getTime());
    t2_ss_resp.keys = undefined;
    t2_ss_resp.rt = undefined;
    _t2_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss2Components = [];
    ss2Components.push(t2_ss);
    ss2Components.push(t2_ss_resp);
    
    for (const thisComponent of ss2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss2' ---
    // get current time
    t = ss2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t2_ss* updates
    if (t >= 0.0 && t2_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_ss.tStart = t;  // (not accounting for frame time here)
      t2_ss.frameNStart = frameN;  // exact frame index
      
      t2_ss.setAutoDraw(true);
    }
    
    
    // *t2_ss_resp* updates
    if (t >= 0.0 && t2_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_ss_resp.tStart = t;  // (not accounting for frame time here)
      t2_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t2_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t2_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t2_ss_resp.clearEvents(); });
    }
    
    if (t2_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t2_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t2_ss_resp_allKeys = _t2_ss_resp_allKeys.concat(theseKeys);
      if (_t2_ss_resp_allKeys.length > 0) {
        t2_ss_resp.keys = _t2_ss_resp_allKeys[_t2_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t2_ss_resp.rt = _t2_ss_resp_allKeys[_t2_ss_resp_allKeys.length - 1].rt;
        t2_ss_resp.duration = _t2_ss_resp_allKeys[_t2_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss2' ---
    for (const thisComponent of ss2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t2_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t2_ss_resp.keys', t2_ss_resp.keys);
    if (typeof t2_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t2_ss_resp.rt', t2_ss_resp.rt);
        psychoJS.experiment.addData('t2_ss_resp.duration', t2_ss_resp.duration);
        routineTimer.reset();
        }
    
    t2_ss_resp.stop();
    // the Routine "ss2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t2_psg2_resp_allKeys;
var sspsg2Components;
function sspsg2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg2' ---
    t = 0;
    sspsg2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg2.started', globalClock.getTime());
    t2_psg2_resp.keys = undefined;
    t2_psg2_resp.rt = undefined;
    _t2_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg2Components = [];
    sspsg2Components.push(t2_psg2);
    sspsg2Components.push(clock2_2);
    sspsg2Components.push(t2_psg2_choice);
    sspsg2Components.push(t2_psg2_resp);
    
    for (const thisComponent of sspsg2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg2' ---
    // get current time
    t = sspsg2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t2_psg2* updates
    if (t >= 0.0 && t2_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_psg2.tStart = t;  // (not accounting for frame time here)
      t2_psg2.frameNStart = frameN;  // exact frame index
      
      t2_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t2_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t2_psg2.setAutoDraw(false);
    }
    
    
    if (clock2_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock2_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock2_2* updates
    if (t >= 0.0 && clock2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock2_2.tStart = t;  // (not accounting for frame time here)
      clock2_2.frameNStart = frameN;  // exact frame index
      
      clock2_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock2_2.setAutoDraw(false);
    }
    
    
    // *t2_psg2_choice* updates
    if (t >= 10 && t2_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t2_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t2_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t2_psg2_resp* updates
    if (t >= 10 && t2_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t2_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t2_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t2_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t2_psg2_resp.clearEvents(); });
    }
    
    if (t2_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t2_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t2_psg2_resp_allKeys = _t2_psg2_resp_allKeys.concat(theseKeys);
      if (_t2_psg2_resp_allKeys.length > 0) {
        t2_psg2_resp.keys = _t2_psg2_resp_allKeys[_t2_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t2_psg2_resp.rt = _t2_psg2_resp_allKeys[_t2_psg2_resp_allKeys.length - 1].rt;
        t2_psg2_resp.duration = _t2_psg2_resp_allKeys[_t2_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg2' ---
    for (const thisComponent of sspsg2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t2_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t2_psg2_resp.keys', t2_psg2_resp.keys);
    if (typeof t2_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t2_psg2_resp.rt', t2_psg2_resp.rt);
        psychoJS.experiment.addData('t2_psg2_resp.duration', t2_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t2_psg2_resp.stop();
    // the Routine "sspsg2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t3_load_resp_allKeys;
var zsd3Components;
function zsd3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd3' ---
    t = 0;
    zsd3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd3.started', globalClock.getTime());
    t3_load_resp.keys = undefined;
    t3_load_resp.rt = undefined;
    _t3_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd3Components = [];
    zsd3Components.push(zsd1_3);
    zsd3Components.push(t3_load);
    zsd3Components.push(t3_load_resp);
    
    for (const thisComponent of zsd3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd3' ---
    // get current time
    t = zsd3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_3* updates
    if (t >= 0.0 && zsd1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_3.tStart = t;  // (not accounting for frame time here)
      zsd1_3.frameNStart = frameN;  // exact frame index
      
      zsd1_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_3.setAutoDraw(false);
    }
    
    
    // *t3_load* updates
    if (t >= 0.5 && t3_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_load.tStart = t;  // (not accounting for frame time here)
      t3_load.frameNStart = frameN;  // exact frame index
      
      t3_load.setAutoDraw(true);
    }
    
    
    // *t3_load_resp* updates
    if (t >= 0.5 && t3_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_load_resp.tStart = t;  // (not accounting for frame time here)
      t3_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t3_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t3_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t3_load_resp.clearEvents(); });
    }
    
    if (t3_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t3_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t3_load_resp_allKeys = _t3_load_resp_allKeys.concat(theseKeys);
      if (_t3_load_resp_allKeys.length > 0) {
        t3_load_resp.keys = _t3_load_resp_allKeys[_t3_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t3_load_resp.rt = _t3_load_resp_allKeys[_t3_load_resp_allKeys.length - 1].rt;
        t3_load_resp.duration = _t3_load_resp_allKeys[_t3_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd3' ---
    for (const thisComponent of zsd3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t3_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t3_load_resp.keys', t3_load_resp.keys);
    if (typeof t3_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t3_load_resp.rt', t3_load_resp.rt);
        psychoJS.experiment.addData('t3_load_resp.duration', t3_load_resp.duration);
        routineTimer.reset();
        }
    
    t3_load_resp.stop();
    // the Routine "zsd3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t3_zj_resp_allKeys;
var zj3Components;
function zj3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj3' ---
    t = 0;
    zj3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj3.started', globalClock.getTime());
    t3_zj_resp.keys = undefined;
    t3_zj_resp.rt = undefined;
    _t3_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj3Components = [];
    zj3Components.push(t3_zj);
    zj3Components.push(t3_zj_resp);
    
    for (const thisComponent of zj3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj3' ---
    // get current time
    t = zj3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t3_zj* updates
    if (t >= 0 && t3_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_zj.tStart = t;  // (not accounting for frame time here)
      t3_zj.frameNStart = frameN;  // exact frame index
      
      t3_zj.setAutoDraw(true);
    }
    
    
    // *t3_zj_resp* updates
    if (t >= 0 && t3_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_zj_resp.tStart = t;  // (not accounting for frame time here)
      t3_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t3_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t3_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t3_zj_resp.clearEvents(); });
    }
    
    if (t3_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t3_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t3_zj_resp_allKeys = _t3_zj_resp_allKeys.concat(theseKeys);
      if (_t3_zj_resp_allKeys.length > 0) {
        t3_zj_resp.keys = _t3_zj_resp_allKeys[_t3_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t3_zj_resp.rt = _t3_zj_resp_allKeys[_t3_zj_resp_allKeys.length - 1].rt;
        t3_zj_resp.duration = _t3_zj_resp_allKeys[_t3_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj3' ---
    for (const thisComponent of zj3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t3_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t3_zj_resp.keys', t3_zj_resp.keys);
    if (typeof t3_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t3_zj_resp.rt', t3_zj_resp.rt);
        psychoJS.experiment.addData('t3_zj_resp.duration', t3_zj_resp.duration);
        routineTimer.reset();
        }
    
    t3_zj_resp.stop();
    // the Routine "zj3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t3_psg1_resp_allKeys;
var trail3Components;
function trail3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail3' ---
    t = 0;
    trail3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail3.started', globalClock.getTime());
    t3_psg1_resp.keys = undefined;
    t3_psg1_resp.rt = undefined;
    _t3_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail3Components = [];
    trail3Components.push(t3_psg1);
    trail3Components.push(time_3);
    trail3Components.push(countdown_3);
    trail3Components.push(t3_psg1_resp);
    
    for (const thisComponent of trail3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail3' ---
    // get current time
    t = trail3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t3_psg1* updates
    if (t >= 0.0 && t3_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_psg1.tStart = t;  // (not accounting for frame time here)
      t3_psg1.frameNStart = frameN;  // exact frame index
      
      t3_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t3_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t3_psg1.setAutoDraw(false);
    }
    
    
    // *time_3* updates
    if (t >= 0.0 && time_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_3.tStart = t;  // (not accounting for frame time here)
      time_3.frameNStart = frameN;  // exact frame index
      
      time_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_3.setAutoDraw(false);
    }
    
    
    if (countdown_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_3.setText(util.round((4 - t), 1), false);
    }
    
    // *countdown_3* updates
    if (t >= 0.0 && countdown_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_3.tStart = t;  // (not accounting for frame time here)
      countdown_3.frameNStart = frameN;  // exact frame index
      
      countdown_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_3.setAutoDraw(false);
    }
    
    
    // *t3_psg1_resp* updates
    if (t >= 0.0 && t3_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t3_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t3_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t3_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t3_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t3_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t3_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t3_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t3_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t3_psg1_resp_allKeys = _t3_psg1_resp_allKeys.concat(theseKeys);
      if (_t3_psg1_resp_allKeys.length > 0) {
        t3_psg1_resp.keys = _t3_psg1_resp_allKeys[_t3_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t3_psg1_resp.rt = _t3_psg1_resp_allKeys[_t3_psg1_resp_allKeys.length - 1].rt;
        t3_psg1_resp.duration = _t3_psg1_resp_allKeys[_t3_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail3' ---
    for (const thisComponent of trail3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t3_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t3_psg1_resp.keys', t3_psg1_resp.keys);
    if (typeof t3_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t3_psg1_resp.rt', t3_psg1_resp.rt);
        psychoJS.experiment.addData('t3_psg1_resp.duration', t3_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t3_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t3_recall_resp_allKeys;
var recall3Components;
function recall3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall3' ---
    t = 0;
    recall3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall3.started', globalClock.getTime());
    t3_recall_resp.keys = undefined;
    t3_recall_resp.rt = undefined;
    _t3_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall3Components = [];
    recall3Components.push(t3_recall);
    recall3Components.push(t3_recall_resp);
    
    for (const thisComponent of recall3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall3' ---
    // get current time
    t = recall3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t3_recall* updates
    if (t >= 0 && t3_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_recall.tStart = t;  // (not accounting for frame time here)
      t3_recall.frameNStart = frameN;  // exact frame index
      
      t3_recall.setAutoDraw(true);
    }
    
    
    // *t3_recall_resp* updates
    if (t >= 0 && t3_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_recall_resp.tStart = t;  // (not accounting for frame time here)
      t3_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t3_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t3_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t3_recall_resp.clearEvents(); });
    }
    
    if (t3_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t3_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t3_recall_resp_allKeys = _t3_recall_resp_allKeys.concat(theseKeys);
      if (_t3_recall_resp_allKeys.length > 0) {
        t3_recall_resp.keys = _t3_recall_resp_allKeys[_t3_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t3_recall_resp.rt = _t3_recall_resp_allKeys[_t3_recall_resp_allKeys.length - 1].rt;
        t3_recall_resp.duration = _t3_recall_resp_allKeys[_t3_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t3_recall_resp.keys == 'a') {
            t3_recall_resp.corr = 1;
        } else {
            t3_recall_resp.corr = 0;
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
    for (const thisComponent of recall3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall3' ---
    for (const thisComponent of recall3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall3.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t3_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('a')) {
         t3_recall_resp.corr = 1;  // correct non-response
      } else {
         t3_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t3_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t3_recall_resp.keys', t3_recall_resp.keys);
    psychoJS.experiment.addData('t3_recall_resp.corr', t3_recall_resp.corr);
    if (typeof t3_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t3_recall_resp.rt', t3_recall_resp.rt);
        psychoJS.experiment.addData('t3_recall_resp.duration', t3_recall_resp.duration);
        routineTimer.reset();
        }
    
    t3_recall_resp.stop();
    // the Routine "recall3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback3Components;
function feedback3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback3' ---
    t = 0;
    feedback3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback3.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    if (t3_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_3.setText(feedback);
    // keep track of which components have finished
    feedback3Components = [];
    feedback3Components.push(fankui_3);
    
    for (const thisComponent of feedback3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback3' ---
    // get current time
    t = feedback3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_3* updates
    if (t >= 0.0 && fankui_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_3.tStart = t;  // (not accounting for frame time here)
      fankui_3.frameNStart = frameN;  // exact frame index
      
      fankui_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_3.setAutoDraw(false);
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
    for (const thisComponent of feedback3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback3' ---
    for (const thisComponent of feedback3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback3.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t3_ss_resp_allKeys;
var ss3Components;
function ss3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss3' ---
    t = 0;
    ss3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss3.started', globalClock.getTime());
    t3_ss_resp.keys = undefined;
    t3_ss_resp.rt = undefined;
    _t3_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss3Components = [];
    ss3Components.push(t3_ss);
    ss3Components.push(t3_ss_resp);
    
    for (const thisComponent of ss3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss3' ---
    // get current time
    t = ss3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t3_ss* updates
    if (t >= 0.0 && t3_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_ss.tStart = t;  // (not accounting for frame time here)
      t3_ss.frameNStart = frameN;  // exact frame index
      
      t3_ss.setAutoDraw(true);
    }
    
    
    // *t3_ss_resp* updates
    if (t >= 0.0 && t3_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_ss_resp.tStart = t;  // (not accounting for frame time here)
      t3_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t3_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t3_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t3_ss_resp.clearEvents(); });
    }
    
    if (t3_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t3_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t3_ss_resp_allKeys = _t3_ss_resp_allKeys.concat(theseKeys);
      if (_t3_ss_resp_allKeys.length > 0) {
        t3_ss_resp.keys = _t3_ss_resp_allKeys[_t3_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t3_ss_resp.rt = _t3_ss_resp_allKeys[_t3_ss_resp_allKeys.length - 1].rt;
        t3_ss_resp.duration = _t3_ss_resp_allKeys[_t3_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss3' ---
    for (const thisComponent of ss3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t3_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t3_ss_resp.keys', t3_ss_resp.keys);
    if (typeof t3_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t3_ss_resp.rt', t3_ss_resp.rt);
        psychoJS.experiment.addData('t3_ss_resp.duration', t3_ss_resp.duration);
        routineTimer.reset();
        }
    
    t3_ss_resp.stop();
    // the Routine "ss3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t3_psg2_resp_allKeys;
var sspsg3Components;
function sspsg3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg3' ---
    t = 0;
    sspsg3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg3.started', globalClock.getTime());
    t3_psg2_resp.keys = undefined;
    t3_psg2_resp.rt = undefined;
    _t3_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg3Components = [];
    sspsg3Components.push(t3_psg2);
    sspsg3Components.push(clock3_2);
    sspsg3Components.push(t3_psg2_choice);
    sspsg3Components.push(t3_psg2_resp);
    
    for (const thisComponent of sspsg3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg3' ---
    // get current time
    t = sspsg3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t3_psg2* updates
    if (t >= 0.0 && t3_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_psg2.tStart = t;  // (not accounting for frame time here)
      t3_psg2.frameNStart = frameN;  // exact frame index
      
      t3_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t3_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t3_psg2.setAutoDraw(false);
    }
    
    
    if (clock3_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock3_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock3_2* updates
    if (t >= 0.0 && clock3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock3_2.tStart = t;  // (not accounting for frame time here)
      clock3_2.frameNStart = frameN;  // exact frame index
      
      clock3_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock3_2.setAutoDraw(false);
    }
    
    
    // *t3_psg2_choice* updates
    if (t >= 10 && t3_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t3_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t3_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t3_psg2_resp* updates
    if (t >= 10 && t3_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t3_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t3_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t3_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t3_psg2_resp.clearEvents(); });
    }
    
    if (t3_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t3_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t3_psg2_resp_allKeys = _t3_psg2_resp_allKeys.concat(theseKeys);
      if (_t3_psg2_resp_allKeys.length > 0) {
        t3_psg2_resp.keys = _t3_psg2_resp_allKeys[_t3_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t3_psg2_resp.rt = _t3_psg2_resp_allKeys[_t3_psg2_resp_allKeys.length - 1].rt;
        t3_psg2_resp.duration = _t3_psg2_resp_allKeys[_t3_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg3' ---
    for (const thisComponent of sspsg3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t3_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t3_psg2_resp.keys', t3_psg2_resp.keys);
    if (typeof t3_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t3_psg2_resp.rt', t3_psg2_resp.rt);
        psychoJS.experiment.addData('t3_psg2_resp.duration', t3_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t3_psg2_resp.stop();
    // the Routine "sspsg3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t4_load_resp_allKeys;
var zsd4Components;
function zsd4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd4' ---
    t = 0;
    zsd4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd4.started', globalClock.getTime());
    t4_load_resp.keys = undefined;
    t4_load_resp.rt = undefined;
    _t4_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd4Components = [];
    zsd4Components.push(zsd1_4);
    zsd4Components.push(t4_load);
    zsd4Components.push(t4_load_resp);
    
    for (const thisComponent of zsd4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd4' ---
    // get current time
    t = zsd4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_4* updates
    if (t >= 0.0 && zsd1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_4.tStart = t;  // (not accounting for frame time here)
      zsd1_4.frameNStart = frameN;  // exact frame index
      
      zsd1_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_4.setAutoDraw(false);
    }
    
    
    // *t4_load* updates
    if (t >= 0.5 && t4_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_load.tStart = t;  // (not accounting for frame time here)
      t4_load.frameNStart = frameN;  // exact frame index
      
      t4_load.setAutoDraw(true);
    }
    
    
    // *t4_load_resp* updates
    if (t >= 0.5 && t4_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_load_resp.tStart = t;  // (not accounting for frame time here)
      t4_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t4_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t4_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t4_load_resp.clearEvents(); });
    }
    
    if (t4_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t4_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t4_load_resp_allKeys = _t4_load_resp_allKeys.concat(theseKeys);
      if (_t4_load_resp_allKeys.length > 0) {
        t4_load_resp.keys = _t4_load_resp_allKeys[_t4_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t4_load_resp.rt = _t4_load_resp_allKeys[_t4_load_resp_allKeys.length - 1].rt;
        t4_load_resp.duration = _t4_load_resp_allKeys[_t4_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd4' ---
    for (const thisComponent of zsd4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t4_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t4_load_resp.keys', t4_load_resp.keys);
    if (typeof t4_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t4_load_resp.rt', t4_load_resp.rt);
        psychoJS.experiment.addData('t4_load_resp.duration', t4_load_resp.duration);
        routineTimer.reset();
        }
    
    t4_load_resp.stop();
    // the Routine "zsd4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t4_zj_resp_allKeys;
var zj4Components;
function zj4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj4' ---
    t = 0;
    zj4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj4.started', globalClock.getTime());
    t4_zj_resp.keys = undefined;
    t4_zj_resp.rt = undefined;
    _t4_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj4Components = [];
    zj4Components.push(t4_zj);
    zj4Components.push(t4_zj_resp);
    
    for (const thisComponent of zj4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj4' ---
    // get current time
    t = zj4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t4_zj* updates
    if (t >= 0 && t4_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_zj.tStart = t;  // (not accounting for frame time here)
      t4_zj.frameNStart = frameN;  // exact frame index
      
      t4_zj.setAutoDraw(true);
    }
    
    
    // *t4_zj_resp* updates
    if (t >= 0 && t4_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_zj_resp.tStart = t;  // (not accounting for frame time here)
      t4_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t4_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t4_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t4_zj_resp.clearEvents(); });
    }
    
    if (t4_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t4_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t4_zj_resp_allKeys = _t4_zj_resp_allKeys.concat(theseKeys);
      if (_t4_zj_resp_allKeys.length > 0) {
        t4_zj_resp.keys = _t4_zj_resp_allKeys[_t4_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t4_zj_resp.rt = _t4_zj_resp_allKeys[_t4_zj_resp_allKeys.length - 1].rt;
        t4_zj_resp.duration = _t4_zj_resp_allKeys[_t4_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj4' ---
    for (const thisComponent of zj4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t4_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t4_zj_resp.keys', t4_zj_resp.keys);
    if (typeof t4_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t4_zj_resp.rt', t4_zj_resp.rt);
        psychoJS.experiment.addData('t4_zj_resp.duration', t4_zj_resp.duration);
        routineTimer.reset();
        }
    
    t4_zj_resp.stop();
    // the Routine "zj4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t4_psg1_resp_allKeys;
var trail4Components;
function trail4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail4' ---
    t = 0;
    trail4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail4.started', globalClock.getTime());
    t4_psg1_resp.keys = undefined;
    t4_psg1_resp.rt = undefined;
    _t4_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail4Components = [];
    trail4Components.push(t4_psg1);
    trail4Components.push(time_4);
    trail4Components.push(countdown_4);
    trail4Components.push(t4_psg1_resp);
    
    for (const thisComponent of trail4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail4' ---
    // get current time
    t = trail4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t4_psg1* updates
    if (t >= 0.0 && t4_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_psg1.tStart = t;  // (not accounting for frame time here)
      t4_psg1.frameNStart = frameN;  // exact frame index
      
      t4_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t4_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t4_psg1.setAutoDraw(false);
    }
    
    
    // *time_4* updates
    if (t >= 0.0 && time_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_4.tStart = t;  // (not accounting for frame time here)
      time_4.frameNStart = frameN;  // exact frame index
      
      time_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_4.setAutoDraw(false);
    }
    
    
    if (countdown_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_4.setText(util.round((3 - t), 1), false);
    }
    
    // *countdown_4* updates
    if (t >= 0.0 && countdown_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_4.tStart = t;  // (not accounting for frame time here)
      countdown_4.frameNStart = frameN;  // exact frame index
      
      countdown_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_4.setAutoDraw(false);
    }
    
    
    // *t4_psg1_resp* updates
    if (t >= 0.0 && t4_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t4_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t4_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t4_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t4_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t4_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t4_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t4_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t4_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t4_psg1_resp_allKeys = _t4_psg1_resp_allKeys.concat(theseKeys);
      if (_t4_psg1_resp_allKeys.length > 0) {
        t4_psg1_resp.keys = _t4_psg1_resp_allKeys[_t4_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t4_psg1_resp.rt = _t4_psg1_resp_allKeys[_t4_psg1_resp_allKeys.length - 1].rt;
        t4_psg1_resp.duration = _t4_psg1_resp_allKeys[_t4_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail4' ---
    for (const thisComponent of trail4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t4_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t4_psg1_resp.keys', t4_psg1_resp.keys);
    if (typeof t4_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t4_psg1_resp.rt', t4_psg1_resp.rt);
        psychoJS.experiment.addData('t4_psg1_resp.duration', t4_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t4_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t4_recall_resp_allKeys;
var recall4Components;
function recall4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall4' ---
    t = 0;
    recall4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall4.started', globalClock.getTime());
    t4_recall_resp.keys = undefined;
    t4_recall_resp.rt = undefined;
    _t4_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall4Components = [];
    recall4Components.push(t4_recall);
    recall4Components.push(t4_recall_resp);
    
    for (const thisComponent of recall4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall4' ---
    // get current time
    t = recall4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t4_recall* updates
    if (t >= 0 && t4_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_recall.tStart = t;  // (not accounting for frame time here)
      t4_recall.frameNStart = frameN;  // exact frame index
      
      t4_recall.setAutoDraw(true);
    }
    
    
    // *t4_recall_resp* updates
    if (t >= 0 && t4_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_recall_resp.tStart = t;  // (not accounting for frame time here)
      t4_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t4_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t4_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t4_recall_resp.clearEvents(); });
    }
    
    if (t4_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t4_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t4_recall_resp_allKeys = _t4_recall_resp_allKeys.concat(theseKeys);
      if (_t4_recall_resp_allKeys.length > 0) {
        t4_recall_resp.keys = _t4_recall_resp_allKeys[_t4_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t4_recall_resp.rt = _t4_recall_resp_allKeys[_t4_recall_resp_allKeys.length - 1].rt;
        t4_recall_resp.duration = _t4_recall_resp_allKeys[_t4_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t4_recall_resp.keys == 'd') {
            t4_recall_resp.corr = 1;
        } else {
            t4_recall_resp.corr = 0;
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
    for (const thisComponent of recall4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall4' ---
    for (const thisComponent of recall4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall4.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t4_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('d')) {
         t4_recall_resp.corr = 1;  // correct non-response
      } else {
         t4_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t4_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t4_recall_resp.keys', t4_recall_resp.keys);
    psychoJS.experiment.addData('t4_recall_resp.corr', t4_recall_resp.corr);
    if (typeof t4_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t4_recall_resp.rt', t4_recall_resp.rt);
        psychoJS.experiment.addData('t4_recall_resp.duration', t4_recall_resp.duration);
        routineTimer.reset();
        }
    
    t4_recall_resp.stop();
    // the Routine "recall4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback4Components;
function feedback4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback4' ---
    t = 0;
    feedback4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback4.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    if (t4_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_4.setText(feedback);
    // keep track of which components have finished
    feedback4Components = [];
    feedback4Components.push(fankui_4);
    
    for (const thisComponent of feedback4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback4' ---
    // get current time
    t = feedback4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_4* updates
    if (t >= 0.0 && fankui_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_4.tStart = t;  // (not accounting for frame time here)
      fankui_4.frameNStart = frameN;  // exact frame index
      
      fankui_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_4.setAutoDraw(false);
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
    for (const thisComponent of feedback4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback4' ---
    for (const thisComponent of feedback4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback4.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t4_ss_resp_allKeys;
var ss4Components;
function ss4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss4' ---
    t = 0;
    ss4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss4.started', globalClock.getTime());
    t4_ss_resp.keys = undefined;
    t4_ss_resp.rt = undefined;
    _t4_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss4Components = [];
    ss4Components.push(t4_ss);
    ss4Components.push(t4_ss_resp);
    
    for (const thisComponent of ss4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss4' ---
    // get current time
    t = ss4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t4_ss* updates
    if (t >= 0.0 && t4_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_ss.tStart = t;  // (not accounting for frame time here)
      t4_ss.frameNStart = frameN;  // exact frame index
      
      t4_ss.setAutoDraw(true);
    }
    
    
    // *t4_ss_resp* updates
    if (t >= 0.0 && t4_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_ss_resp.tStart = t;  // (not accounting for frame time here)
      t4_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t4_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t4_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t4_ss_resp.clearEvents(); });
    }
    
    if (t4_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t4_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t4_ss_resp_allKeys = _t4_ss_resp_allKeys.concat(theseKeys);
      if (_t4_ss_resp_allKeys.length > 0) {
        t4_ss_resp.keys = _t4_ss_resp_allKeys[_t4_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t4_ss_resp.rt = _t4_ss_resp_allKeys[_t4_ss_resp_allKeys.length - 1].rt;
        t4_ss_resp.duration = _t4_ss_resp_allKeys[_t4_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss4' ---
    for (const thisComponent of ss4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t4_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t4_ss_resp.keys', t4_ss_resp.keys);
    if (typeof t4_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t4_ss_resp.rt', t4_ss_resp.rt);
        psychoJS.experiment.addData('t4_ss_resp.duration', t4_ss_resp.duration);
        routineTimer.reset();
        }
    
    t4_ss_resp.stop();
    // the Routine "ss4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t4_psg2_resp_allKeys;
var sspsg4Components;
function sspsg4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg4' ---
    t = 0;
    sspsg4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg4.started', globalClock.getTime());
    t4_psg2_resp.keys = undefined;
    t4_psg2_resp.rt = undefined;
    _t4_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg4Components = [];
    sspsg4Components.push(t4_psg2);
    sspsg4Components.push(clock4_2);
    sspsg4Components.push(t4_psg2_choice);
    sspsg4Components.push(t4_psg2_resp);
    
    for (const thisComponent of sspsg4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg4' ---
    // get current time
    t = sspsg4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t4_psg2* updates
    if (t >= 0.0 && t4_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_psg2.tStart = t;  // (not accounting for frame time here)
      t4_psg2.frameNStart = frameN;  // exact frame index
      
      t4_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t4_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t4_psg2.setAutoDraw(false);
    }
    
    
    if (clock4_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock4_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock4_2* updates
    if (t >= 0.0 && clock4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock4_2.tStart = t;  // (not accounting for frame time here)
      clock4_2.frameNStart = frameN;  // exact frame index
      
      clock4_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock4_2.setAutoDraw(false);
    }
    
    
    // *t4_psg2_choice* updates
    if (t >= 10 && t4_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t4_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t4_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t4_psg2_resp* updates
    if (t >= 10 && t4_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t4_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t4_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t4_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t4_psg2_resp.clearEvents(); });
    }
    
    if (t4_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t4_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t4_psg2_resp_allKeys = _t4_psg2_resp_allKeys.concat(theseKeys);
      if (_t4_psg2_resp_allKeys.length > 0) {
        t4_psg2_resp.keys = _t4_psg2_resp_allKeys[_t4_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t4_psg2_resp.rt = _t4_psg2_resp_allKeys[_t4_psg2_resp_allKeys.length - 1].rt;
        t4_psg2_resp.duration = _t4_psg2_resp_allKeys[_t4_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg4' ---
    for (const thisComponent of sspsg4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t4_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t4_psg2_resp.keys', t4_psg2_resp.keys);
    if (typeof t4_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t4_psg2_resp.rt', t4_psg2_resp.rt);
        psychoJS.experiment.addData('t4_psg2_resp.duration', t4_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t4_psg2_resp.stop();
    // the Routine "sspsg4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t5_load_resp_allKeys;
var zsd5Components;
function zsd5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd5' ---
    t = 0;
    zsd5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd5.started', globalClock.getTime());
    t5_load_resp.keys = undefined;
    t5_load_resp.rt = undefined;
    _t5_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd5Components = [];
    zsd5Components.push(zsd1_5);
    zsd5Components.push(t5_load);
    zsd5Components.push(t5_load_resp);
    
    for (const thisComponent of zsd5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd5' ---
    // get current time
    t = zsd5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_5* updates
    if (t >= 0.0 && zsd1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_5.tStart = t;  // (not accounting for frame time here)
      zsd1_5.frameNStart = frameN;  // exact frame index
      
      zsd1_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_5.setAutoDraw(false);
    }
    
    
    // *t5_load* updates
    if (t >= 0.5 && t5_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_load.tStart = t;  // (not accounting for frame time here)
      t5_load.frameNStart = frameN;  // exact frame index
      
      t5_load.setAutoDraw(true);
    }
    
    
    // *t5_load_resp* updates
    if (t >= 0.5 && t5_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_load_resp.tStart = t;  // (not accounting for frame time here)
      t5_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t5_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t5_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t5_load_resp.clearEvents(); });
    }
    
    if (t5_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t5_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t5_load_resp_allKeys = _t5_load_resp_allKeys.concat(theseKeys);
      if (_t5_load_resp_allKeys.length > 0) {
        t5_load_resp.keys = _t5_load_resp_allKeys[_t5_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t5_load_resp.rt = _t5_load_resp_allKeys[_t5_load_resp_allKeys.length - 1].rt;
        t5_load_resp.duration = _t5_load_resp_allKeys[_t5_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd5' ---
    for (const thisComponent of zsd5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t5_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t5_load_resp.keys', t5_load_resp.keys);
    if (typeof t5_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t5_load_resp.rt', t5_load_resp.rt);
        psychoJS.experiment.addData('t5_load_resp.duration', t5_load_resp.duration);
        routineTimer.reset();
        }
    
    t5_load_resp.stop();
    // the Routine "zsd5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t5_zj_resp_allKeys;
var zj5Components;
function zj5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj5' ---
    t = 0;
    zj5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj5.started', globalClock.getTime());
    t5_zj_resp.keys = undefined;
    t5_zj_resp.rt = undefined;
    _t5_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj5Components = [];
    zj5Components.push(t5_zj);
    zj5Components.push(t5_zj_resp);
    
    for (const thisComponent of zj5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj5' ---
    // get current time
    t = zj5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t5_zj* updates
    if (t >= 0 && t5_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_zj.tStart = t;  // (not accounting for frame time here)
      t5_zj.frameNStart = frameN;  // exact frame index
      
      t5_zj.setAutoDraw(true);
    }
    
    
    // *t5_zj_resp* updates
    if (t >= 0 && t5_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_zj_resp.tStart = t;  // (not accounting for frame time here)
      t5_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t5_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t5_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t5_zj_resp.clearEvents(); });
    }
    
    if (t5_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t5_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t5_zj_resp_allKeys = _t5_zj_resp_allKeys.concat(theseKeys);
      if (_t5_zj_resp_allKeys.length > 0) {
        t5_zj_resp.keys = _t5_zj_resp_allKeys[_t5_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t5_zj_resp.rt = _t5_zj_resp_allKeys[_t5_zj_resp_allKeys.length - 1].rt;
        t5_zj_resp.duration = _t5_zj_resp_allKeys[_t5_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj5' ---
    for (const thisComponent of zj5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t5_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t5_zj_resp.keys', t5_zj_resp.keys);
    if (typeof t5_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t5_zj_resp.rt', t5_zj_resp.rt);
        psychoJS.experiment.addData('t5_zj_resp.duration', t5_zj_resp.duration);
        routineTimer.reset();
        }
    
    t5_zj_resp.stop();
    // the Routine "zj5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t5_psg1_resp_allKeys;
var trail5Components;
function trail5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail5' ---
    t = 0;
    trail5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail5.started', globalClock.getTime());
    t5_psg1_resp.keys = undefined;
    t5_psg1_resp.rt = undefined;
    _t5_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail5Components = [];
    trail5Components.push(t5_psg1);
    trail5Components.push(time_5);
    trail5Components.push(countdown_5);
    trail5Components.push(t5_psg1_resp);
    
    for (const thisComponent of trail5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail5' ---
    // get current time
    t = trail5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t5_psg1* updates
    if (t >= 0.0 && t5_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_psg1.tStart = t;  // (not accounting for frame time here)
      t5_psg1.frameNStart = frameN;  // exact frame index
      
      t5_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t5_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t5_psg1.setAutoDraw(false);
    }
    
    
    // *time_5* updates
    if (t >= 0.0 && time_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_5.tStart = t;  // (not accounting for frame time here)
      time_5.frameNStart = frameN;  // exact frame index
      
      time_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_5.setAutoDraw(false);
    }
    
    
    if (countdown_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_5.setText(util.round((3 - t), 1), false);
    }
    
    // *countdown_5* updates
    if (t >= 0.0 && countdown_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_5.tStart = t;  // (not accounting for frame time here)
      countdown_5.frameNStart = frameN;  // exact frame index
      
      countdown_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_5.setAutoDraw(false);
    }
    
    
    // *t5_psg1_resp* updates
    if (t >= 0.0 && t5_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t5_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t5_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t5_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t5_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t5_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t5_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t5_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t5_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t5_psg1_resp_allKeys = _t5_psg1_resp_allKeys.concat(theseKeys);
      if (_t5_psg1_resp_allKeys.length > 0) {
        t5_psg1_resp.keys = _t5_psg1_resp_allKeys[_t5_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t5_psg1_resp.rt = _t5_psg1_resp_allKeys[_t5_psg1_resp_allKeys.length - 1].rt;
        t5_psg1_resp.duration = _t5_psg1_resp_allKeys[_t5_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail5' ---
    for (const thisComponent of trail5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t5_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t5_psg1_resp.keys', t5_psg1_resp.keys);
    if (typeof t5_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t5_psg1_resp.rt', t5_psg1_resp.rt);
        psychoJS.experiment.addData('t5_psg1_resp.duration', t5_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t5_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t5_recall_resp_allKeys;
var recall5Components;
function recall5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall5' ---
    t = 0;
    recall5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall5.started', globalClock.getTime());
    t5_recall_resp.keys = undefined;
    t5_recall_resp.rt = undefined;
    _t5_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall5Components = [];
    recall5Components.push(t5_recall);
    recall5Components.push(t5_recall_resp);
    
    for (const thisComponent of recall5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall5' ---
    // get current time
    t = recall5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t5_recall* updates
    if (t >= 0 && t5_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_recall.tStart = t;  // (not accounting for frame time here)
      t5_recall.frameNStart = frameN;  // exact frame index
      
      t5_recall.setAutoDraw(true);
    }
    
    
    // *t5_recall_resp* updates
    if (t >= 0 && t5_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_recall_resp.tStart = t;  // (not accounting for frame time here)
      t5_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t5_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t5_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t5_recall_resp.clearEvents(); });
    }
    
    if (t5_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t5_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t5_recall_resp_allKeys = _t5_recall_resp_allKeys.concat(theseKeys);
      if (_t5_recall_resp_allKeys.length > 0) {
        t5_recall_resp.keys = _t5_recall_resp_allKeys[_t5_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t5_recall_resp.rt = _t5_recall_resp_allKeys[_t5_recall_resp_allKeys.length - 1].rt;
        t5_recall_resp.duration = _t5_recall_resp_allKeys[_t5_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t5_recall_resp.keys == 'c') {
            t5_recall_resp.corr = 1;
        } else {
            t5_recall_resp.corr = 0;
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
    for (const thisComponent of recall5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall5' ---
    for (const thisComponent of recall5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall5.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t5_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('c')) {
         t5_recall_resp.corr = 1;  // correct non-response
      } else {
         t5_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t5_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t5_recall_resp.keys', t5_recall_resp.keys);
    psychoJS.experiment.addData('t5_recall_resp.corr', t5_recall_resp.corr);
    if (typeof t5_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t5_recall_resp.rt', t5_recall_resp.rt);
        psychoJS.experiment.addData('t5_recall_resp.duration', t5_recall_resp.duration);
        routineTimer.reset();
        }
    
    t5_recall_resp.stop();
    // the Routine "recall5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback5Components;
function feedback5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback5' ---
    t = 0;
    feedback5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback5.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    if (t5_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_5.setText(feedback);
    // keep track of which components have finished
    feedback5Components = [];
    feedback5Components.push(fankui_5);
    
    for (const thisComponent of feedback5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback5' ---
    // get current time
    t = feedback5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_5* updates
    if (t >= 0.0 && fankui_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_5.tStart = t;  // (not accounting for frame time here)
      fankui_5.frameNStart = frameN;  // exact frame index
      
      fankui_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_5.setAutoDraw(false);
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
    for (const thisComponent of feedback5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback5' ---
    for (const thisComponent of feedback5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback5.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t5_ss_resp_allKeys;
var ss5Components;
function ss5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss5' ---
    t = 0;
    ss5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss5.started', globalClock.getTime());
    t5_ss_resp.keys = undefined;
    t5_ss_resp.rt = undefined;
    _t5_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss5Components = [];
    ss5Components.push(t5_ss);
    ss5Components.push(t5_ss_resp);
    
    for (const thisComponent of ss5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss5' ---
    // get current time
    t = ss5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t5_ss* updates
    if (t >= 0.0 && t5_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_ss.tStart = t;  // (not accounting for frame time here)
      t5_ss.frameNStart = frameN;  // exact frame index
      
      t5_ss.setAutoDraw(true);
    }
    
    
    // *t5_ss_resp* updates
    if (t >= 0.0 && t5_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_ss_resp.tStart = t;  // (not accounting for frame time here)
      t5_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t5_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t5_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t5_ss_resp.clearEvents(); });
    }
    
    if (t5_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t5_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t5_ss_resp_allKeys = _t5_ss_resp_allKeys.concat(theseKeys);
      if (_t5_ss_resp_allKeys.length > 0) {
        t5_ss_resp.keys = _t5_ss_resp_allKeys[_t5_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t5_ss_resp.rt = _t5_ss_resp_allKeys[_t5_ss_resp_allKeys.length - 1].rt;
        t5_ss_resp.duration = _t5_ss_resp_allKeys[_t5_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss5' ---
    for (const thisComponent of ss5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t5_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t5_ss_resp.keys', t5_ss_resp.keys);
    if (typeof t5_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t5_ss_resp.rt', t5_ss_resp.rt);
        psychoJS.experiment.addData('t5_ss_resp.duration', t5_ss_resp.duration);
        routineTimer.reset();
        }
    
    t5_ss_resp.stop();
    // the Routine "ss5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t5_psg2_resp_allKeys;
var sspsg5Components;
function sspsg5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg5' ---
    t = 0;
    sspsg5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg5.started', globalClock.getTime());
    t5_psg2_resp.keys = undefined;
    t5_psg2_resp.rt = undefined;
    _t5_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg5Components = [];
    sspsg5Components.push(t5_psg2);
    sspsg5Components.push(clock5_2);
    sspsg5Components.push(t5_psg2_choice);
    sspsg5Components.push(t5_psg2_resp);
    
    for (const thisComponent of sspsg5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg5' ---
    // get current time
    t = sspsg5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t5_psg2* updates
    if (t >= 0.0 && t5_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_psg2.tStart = t;  // (not accounting for frame time here)
      t5_psg2.frameNStart = frameN;  // exact frame index
      
      t5_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t5_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t5_psg2.setAutoDraw(false);
    }
    
    
    if (clock5_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock5_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock5_2* updates
    if (t >= 0.0 && clock5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock5_2.tStart = t;  // (not accounting for frame time here)
      clock5_2.frameNStart = frameN;  // exact frame index
      
      clock5_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock5_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock5_2.setAutoDraw(false);
    }
    
    
    // *t5_psg2_choice* updates
    if (t >= 10 && t5_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t5_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t5_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t5_psg2_resp* updates
    if (t >= 10 && t5_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t5_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t5_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t5_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t5_psg2_resp.clearEvents(); });
    }
    
    if (t5_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t5_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t5_psg2_resp_allKeys = _t5_psg2_resp_allKeys.concat(theseKeys);
      if (_t5_psg2_resp_allKeys.length > 0) {
        t5_psg2_resp.keys = _t5_psg2_resp_allKeys[_t5_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t5_psg2_resp.rt = _t5_psg2_resp_allKeys[_t5_psg2_resp_allKeys.length - 1].rt;
        t5_psg2_resp.duration = _t5_psg2_resp_allKeys[_t5_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg5' ---
    for (const thisComponent of sspsg5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t5_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t5_psg2_resp.keys', t5_psg2_resp.keys);
    if (typeof t5_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t5_psg2_resp.rt', t5_psg2_resp.rt);
        psychoJS.experiment.addData('t5_psg2_resp.duration', t5_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t5_psg2_resp.stop();
    // the Routine "sspsg5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t6_load_resp_allKeys;
var zsd6Components;
function zsd6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd6' ---
    t = 0;
    zsd6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd6.started', globalClock.getTime());
    t6_load_resp.keys = undefined;
    t6_load_resp.rt = undefined;
    _t6_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd6Components = [];
    zsd6Components.push(zsd1_6);
    zsd6Components.push(t6_load);
    zsd6Components.push(t6_load_resp);
    
    for (const thisComponent of zsd6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd6' ---
    // get current time
    t = zsd6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_6* updates
    if (t >= 0.0 && zsd1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_6.tStart = t;  // (not accounting for frame time here)
      zsd1_6.frameNStart = frameN;  // exact frame index
      
      zsd1_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_6.setAutoDraw(false);
    }
    
    
    // *t6_load* updates
    if (t >= 0.5 && t6_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_load.tStart = t;  // (not accounting for frame time here)
      t6_load.frameNStart = frameN;  // exact frame index
      
      t6_load.setAutoDraw(true);
    }
    
    
    // *t6_load_resp* updates
    if (t >= 0.5 && t6_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_load_resp.tStart = t;  // (not accounting for frame time here)
      t6_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t6_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t6_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t6_load_resp.clearEvents(); });
    }
    
    if (t6_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t6_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t6_load_resp_allKeys = _t6_load_resp_allKeys.concat(theseKeys);
      if (_t6_load_resp_allKeys.length > 0) {
        t6_load_resp.keys = _t6_load_resp_allKeys[_t6_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t6_load_resp.rt = _t6_load_resp_allKeys[_t6_load_resp_allKeys.length - 1].rt;
        t6_load_resp.duration = _t6_load_resp_allKeys[_t6_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd6' ---
    for (const thisComponent of zsd6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t6_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t6_load_resp.keys', t6_load_resp.keys);
    if (typeof t6_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t6_load_resp.rt', t6_load_resp.rt);
        psychoJS.experiment.addData('t6_load_resp.duration', t6_load_resp.duration);
        routineTimer.reset();
        }
    
    t6_load_resp.stop();
    // the Routine "zsd6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t6_zj_resp_allKeys;
var zj6Components;
function zj6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj6' ---
    t = 0;
    zj6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj6.started', globalClock.getTime());
    t6_zj_resp.keys = undefined;
    t6_zj_resp.rt = undefined;
    _t6_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj6Components = [];
    zj6Components.push(t6_zj);
    zj6Components.push(t6_zj_resp);
    
    for (const thisComponent of zj6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj6' ---
    // get current time
    t = zj6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t6_zj* updates
    if (t >= 0 && t6_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_zj.tStart = t;  // (not accounting for frame time here)
      t6_zj.frameNStart = frameN;  // exact frame index
      
      t6_zj.setAutoDraw(true);
    }
    
    
    // *t6_zj_resp* updates
    if (t >= 0 && t6_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_zj_resp.tStart = t;  // (not accounting for frame time here)
      t6_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t6_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t6_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t6_zj_resp.clearEvents(); });
    }
    
    if (t6_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t6_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t6_zj_resp_allKeys = _t6_zj_resp_allKeys.concat(theseKeys);
      if (_t6_zj_resp_allKeys.length > 0) {
        t6_zj_resp.keys = _t6_zj_resp_allKeys[_t6_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t6_zj_resp.rt = _t6_zj_resp_allKeys[_t6_zj_resp_allKeys.length - 1].rt;
        t6_zj_resp.duration = _t6_zj_resp_allKeys[_t6_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj6' ---
    for (const thisComponent of zj6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t6_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t6_zj_resp.keys', t6_zj_resp.keys);
    if (typeof t6_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t6_zj_resp.rt', t6_zj_resp.rt);
        psychoJS.experiment.addData('t6_zj_resp.duration', t6_zj_resp.duration);
        routineTimer.reset();
        }
    
    t6_zj_resp.stop();
    // the Routine "zj6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t6_psg1_resp_allKeys;
var trail6Components;
function trail6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail6' ---
    t = 0;
    trail6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail6.started', globalClock.getTime());
    t6_psg1_resp.keys = undefined;
    t6_psg1_resp.rt = undefined;
    _t6_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail6Components = [];
    trail6Components.push(t6_psg1);
    trail6Components.push(time_6);
    trail6Components.push(countdown_6);
    trail6Components.push(t6_psg1_resp);
    
    for (const thisComponent of trail6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail6' ---
    // get current time
    t = trail6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t6_psg1* updates
    if (t >= 0.0 && t6_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_psg1.tStart = t;  // (not accounting for frame time here)
      t6_psg1.frameNStart = frameN;  // exact frame index
      
      t6_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t6_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t6_psg1.setAutoDraw(false);
    }
    
    
    // *time_6* updates
    if (t >= 0.0 && time_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_6.tStart = t;  // (not accounting for frame time here)
      time_6.frameNStart = frameN;  // exact frame index
      
      time_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_6.setAutoDraw(false);
    }
    
    
    if (countdown_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_6.setText(util.round((3 - t), 1), false);
    }
    
    // *countdown_6* updates
    if (t >= 0.0 && countdown_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_6.tStart = t;  // (not accounting for frame time here)
      countdown_6.frameNStart = frameN;  // exact frame index
      
      countdown_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_6.setAutoDraw(false);
    }
    
    
    // *t6_psg1_resp* updates
    if (t >= 0.0 && t6_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t6_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t6_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t6_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t6_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t6_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t6_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t6_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t6_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t6_psg1_resp_allKeys = _t6_psg1_resp_allKeys.concat(theseKeys);
      if (_t6_psg1_resp_allKeys.length > 0) {
        t6_psg1_resp.keys = _t6_psg1_resp_allKeys[_t6_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t6_psg1_resp.rt = _t6_psg1_resp_allKeys[_t6_psg1_resp_allKeys.length - 1].rt;
        t6_psg1_resp.duration = _t6_psg1_resp_allKeys[_t6_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail6' ---
    for (const thisComponent of trail6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t6_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t6_psg1_resp.keys', t6_psg1_resp.keys);
    if (typeof t6_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t6_psg1_resp.rt', t6_psg1_resp.rt);
        psychoJS.experiment.addData('t6_psg1_resp.duration', t6_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t6_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t6_recall_resp_allKeys;
var recall6Components;
function recall6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall6' ---
    t = 0;
    recall6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall6.started', globalClock.getTime());
    t6_recall_resp.keys = undefined;
    t6_recall_resp.rt = undefined;
    _t6_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall6Components = [];
    recall6Components.push(t6_recall);
    recall6Components.push(t6_recall_resp);
    
    for (const thisComponent of recall6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall6' ---
    // get current time
    t = recall6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t6_recall* updates
    if (t >= 0 && t6_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_recall.tStart = t;  // (not accounting for frame time here)
      t6_recall.frameNStart = frameN;  // exact frame index
      
      t6_recall.setAutoDraw(true);
    }
    
    
    // *t6_recall_resp* updates
    if (t >= 0 && t6_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_recall_resp.tStart = t;  // (not accounting for frame time here)
      t6_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t6_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t6_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t6_recall_resp.clearEvents(); });
    }
    
    if (t6_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t6_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t6_recall_resp_allKeys = _t6_recall_resp_allKeys.concat(theseKeys);
      if (_t6_recall_resp_allKeys.length > 0) {
        t6_recall_resp.keys = _t6_recall_resp_allKeys[_t6_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t6_recall_resp.rt = _t6_recall_resp_allKeys[_t6_recall_resp_allKeys.length - 1].rt;
        t6_recall_resp.duration = _t6_recall_resp_allKeys[_t6_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t6_recall_resp.keys == 'a') {
            t6_recall_resp.corr = 1;
        } else {
            t6_recall_resp.corr = 0;
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
    for (const thisComponent of recall6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall6' ---
    for (const thisComponent of recall6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall6.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t6_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('a')) {
         t6_recall_resp.corr = 1;  // correct non-response
      } else {
         t6_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t6_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t6_recall_resp.keys', t6_recall_resp.keys);
    psychoJS.experiment.addData('t6_recall_resp.corr', t6_recall_resp.corr);
    if (typeof t6_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t6_recall_resp.rt', t6_recall_resp.rt);
        psychoJS.experiment.addData('t6_recall_resp.duration', t6_recall_resp.duration);
        routineTimer.reset();
        }
    
    t6_recall_resp.stop();
    // the Routine "recall6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback6Components;
function feedback6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback6' ---
    t = 0;
    feedback6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback6.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    if (t6_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_6.setText(feedback);
    // keep track of which components have finished
    feedback6Components = [];
    feedback6Components.push(fankui_6);
    
    for (const thisComponent of feedback6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback6' ---
    // get current time
    t = feedback6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_6* updates
    if (t >= 0.0 && fankui_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_6.tStart = t;  // (not accounting for frame time here)
      fankui_6.frameNStart = frameN;  // exact frame index
      
      fankui_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_6.setAutoDraw(false);
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
    for (const thisComponent of feedback6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback6' ---
    for (const thisComponent of feedback6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback6.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t6_ss_resp_allKeys;
var ss6Components;
function ss6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss6' ---
    t = 0;
    ss6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss6.started', globalClock.getTime());
    t6_ss_resp.keys = undefined;
    t6_ss_resp.rt = undefined;
    _t6_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss6Components = [];
    ss6Components.push(t6_ss);
    ss6Components.push(t6_ss_resp);
    
    for (const thisComponent of ss6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss6' ---
    // get current time
    t = ss6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t6_ss* updates
    if (t >= 0.0 && t6_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_ss.tStart = t;  // (not accounting for frame time here)
      t6_ss.frameNStart = frameN;  // exact frame index
      
      t6_ss.setAutoDraw(true);
    }
    
    
    // *t6_ss_resp* updates
    if (t >= 0.0 && t6_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_ss_resp.tStart = t;  // (not accounting for frame time here)
      t6_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t6_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t6_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t6_ss_resp.clearEvents(); });
    }
    
    if (t6_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t6_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t6_ss_resp_allKeys = _t6_ss_resp_allKeys.concat(theseKeys);
      if (_t6_ss_resp_allKeys.length > 0) {
        t6_ss_resp.keys = _t6_ss_resp_allKeys[_t6_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t6_ss_resp.rt = _t6_ss_resp_allKeys[_t6_ss_resp_allKeys.length - 1].rt;
        t6_ss_resp.duration = _t6_ss_resp_allKeys[_t6_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss6' ---
    for (const thisComponent of ss6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t6_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t6_ss_resp.keys', t6_ss_resp.keys);
    if (typeof t6_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t6_ss_resp.rt', t6_ss_resp.rt);
        psychoJS.experiment.addData('t6_ss_resp.duration', t6_ss_resp.duration);
        routineTimer.reset();
        }
    
    t6_ss_resp.stop();
    // the Routine "ss6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t6_psg2_resp_allKeys;
var sspsg6Components;
function sspsg6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg6' ---
    t = 0;
    sspsg6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg6.started', globalClock.getTime());
    t6_psg2_resp.keys = undefined;
    t6_psg2_resp.rt = undefined;
    _t6_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg6Components = [];
    sspsg6Components.push(t6_psg2);
    sspsg6Components.push(clock6_2);
    sspsg6Components.push(t6_psg2_choice);
    sspsg6Components.push(t6_psg2_resp);
    
    for (const thisComponent of sspsg6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg6' ---
    // get current time
    t = sspsg6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t6_psg2* updates
    if (t >= 0.0 && t6_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_psg2.tStart = t;  // (not accounting for frame time here)
      t6_psg2.frameNStart = frameN;  // exact frame index
      
      t6_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t6_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t6_psg2.setAutoDraw(false);
    }
    
    
    if (clock6_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock6_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock6_2* updates
    if (t >= 0.0 && clock6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock6_2.tStart = t;  // (not accounting for frame time here)
      clock6_2.frameNStart = frameN;  // exact frame index
      
      clock6_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock6_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock6_2.setAutoDraw(false);
    }
    
    
    // *t6_psg2_choice* updates
    if (t >= 10 && t6_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t6_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t6_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t6_psg2_resp* updates
    if (t >= 10 && t6_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t6_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t6_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t6_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t6_psg2_resp.clearEvents(); });
    }
    
    if (t6_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t6_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t6_psg2_resp_allKeys = _t6_psg2_resp_allKeys.concat(theseKeys);
      if (_t6_psg2_resp_allKeys.length > 0) {
        t6_psg2_resp.keys = _t6_psg2_resp_allKeys[_t6_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t6_psg2_resp.rt = _t6_psg2_resp_allKeys[_t6_psg2_resp_allKeys.length - 1].rt;
        t6_psg2_resp.duration = _t6_psg2_resp_allKeys[_t6_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg6' ---
    for (const thisComponent of sspsg6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t6_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t6_psg2_resp.keys', t6_psg2_resp.keys);
    if (typeof t6_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t6_psg2_resp.rt', t6_psg2_resp.rt);
        psychoJS.experiment.addData('t6_psg2_resp.duration', t6_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t6_psg2_resp.stop();
    // the Routine "sspsg6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t7_load_resp_allKeys;
var zsd7Components;
function zsd7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd7' ---
    t = 0;
    zsd7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd7.started', globalClock.getTime());
    t7_load_resp.keys = undefined;
    t7_load_resp.rt = undefined;
    _t7_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd7Components = [];
    zsd7Components.push(zsd1_7);
    zsd7Components.push(t7_load);
    zsd7Components.push(t7_load_resp);
    
    for (const thisComponent of zsd7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd7' ---
    // get current time
    t = zsd7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_7* updates
    if (t >= 0.0 && zsd1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_7.tStart = t;  // (not accounting for frame time here)
      zsd1_7.frameNStart = frameN;  // exact frame index
      
      zsd1_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_7.setAutoDraw(false);
    }
    
    
    // *t7_load* updates
    if (t >= 0.5 && t7_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_load.tStart = t;  // (not accounting for frame time here)
      t7_load.frameNStart = frameN;  // exact frame index
      
      t7_load.setAutoDraw(true);
    }
    
    
    // *t7_load_resp* updates
    if (t >= 0.5 && t7_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_load_resp.tStart = t;  // (not accounting for frame time here)
      t7_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t7_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t7_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t7_load_resp.clearEvents(); });
    }
    
    if (t7_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t7_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t7_load_resp_allKeys = _t7_load_resp_allKeys.concat(theseKeys);
      if (_t7_load_resp_allKeys.length > 0) {
        t7_load_resp.keys = _t7_load_resp_allKeys[_t7_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t7_load_resp.rt = _t7_load_resp_allKeys[_t7_load_resp_allKeys.length - 1].rt;
        t7_load_resp.duration = _t7_load_resp_allKeys[_t7_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd7' ---
    for (const thisComponent of zsd7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t7_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t7_load_resp.keys', t7_load_resp.keys);
    if (typeof t7_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t7_load_resp.rt', t7_load_resp.rt);
        psychoJS.experiment.addData('t7_load_resp.duration', t7_load_resp.duration);
        routineTimer.reset();
        }
    
    t7_load_resp.stop();
    // the Routine "zsd7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t7_zj_resp_allKeys;
var zj7Components;
function zj7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj7' ---
    t = 0;
    zj7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj7.started', globalClock.getTime());
    t7_zj_resp.keys = undefined;
    t7_zj_resp.rt = undefined;
    _t7_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj7Components = [];
    zj7Components.push(t7_zj);
    zj7Components.push(t7_zj_resp);
    
    for (const thisComponent of zj7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj7' ---
    // get current time
    t = zj7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t7_zj* updates
    if (t >= 0 && t7_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_zj.tStart = t;  // (not accounting for frame time here)
      t7_zj.frameNStart = frameN;  // exact frame index
      
      t7_zj.setAutoDraw(true);
    }
    
    
    // *t7_zj_resp* updates
    if (t >= 0 && t7_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_zj_resp.tStart = t;  // (not accounting for frame time here)
      t7_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t7_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t7_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t7_zj_resp.clearEvents(); });
    }
    
    if (t7_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t7_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t7_zj_resp_allKeys = _t7_zj_resp_allKeys.concat(theseKeys);
      if (_t7_zj_resp_allKeys.length > 0) {
        t7_zj_resp.keys = _t7_zj_resp_allKeys[_t7_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t7_zj_resp.rt = _t7_zj_resp_allKeys[_t7_zj_resp_allKeys.length - 1].rt;
        t7_zj_resp.duration = _t7_zj_resp_allKeys[_t7_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj7' ---
    for (const thisComponent of zj7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t7_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t7_zj_resp.keys', t7_zj_resp.keys);
    if (typeof t7_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t7_zj_resp.rt', t7_zj_resp.rt);
        psychoJS.experiment.addData('t7_zj_resp.duration', t7_zj_resp.duration);
        routineTimer.reset();
        }
    
    t7_zj_resp.stop();
    // the Routine "zj7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t7_psg1_resp_allKeys;
var trail7Components;
function trail7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail7' ---
    t = 0;
    trail7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail7.started', globalClock.getTime());
    t7_psg1_resp.keys = undefined;
    t7_psg1_resp.rt = undefined;
    _t7_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail7Components = [];
    trail7Components.push(t7_psg1);
    trail7Components.push(time_7);
    trail7Components.push(countdown_7);
    trail7Components.push(t7_psg1_resp);
    
    for (const thisComponent of trail7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail7' ---
    // get current time
    t = trail7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t7_psg1* updates
    if (t >= 0.0 && t7_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_psg1.tStart = t;  // (not accounting for frame time here)
      t7_psg1.frameNStart = frameN;  // exact frame index
      
      t7_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t7_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t7_psg1.setAutoDraw(false);
    }
    
    
    // *time_7* updates
    if (t >= 0.0 && time_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_7.tStart = t;  // (not accounting for frame time here)
      time_7.frameNStart = frameN;  // exact frame index
      
      time_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_7.setAutoDraw(false);
    }
    
    
    if (countdown_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_7.setText(util.round((3 - t), 1), false);
    }
    
    // *countdown_7* updates
    if (t >= 0.0 && countdown_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_7.tStart = t;  // (not accounting for frame time here)
      countdown_7.frameNStart = frameN;  // exact frame index
      
      countdown_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_7.setAutoDraw(false);
    }
    
    
    // *t7_psg1_resp* updates
    if (t >= 0.0 && t7_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t7_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t7_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t7_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t7_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t7_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t7_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t7_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t7_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t7_psg1_resp_allKeys = _t7_psg1_resp_allKeys.concat(theseKeys);
      if (_t7_psg1_resp_allKeys.length > 0) {
        t7_psg1_resp.keys = _t7_psg1_resp_allKeys[_t7_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t7_psg1_resp.rt = _t7_psg1_resp_allKeys[_t7_psg1_resp_allKeys.length - 1].rt;
        t7_psg1_resp.duration = _t7_psg1_resp_allKeys[_t7_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail7' ---
    for (const thisComponent of trail7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t7_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t7_psg1_resp.keys', t7_psg1_resp.keys);
    if (typeof t7_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t7_psg1_resp.rt', t7_psg1_resp.rt);
        psychoJS.experiment.addData('t7_psg1_resp.duration', t7_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t7_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t7_recall_resp_allKeys;
var recall7Components;
function recall7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall7' ---
    t = 0;
    recall7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall7.started', globalClock.getTime());
    t7_recall_resp.keys = undefined;
    t7_recall_resp.rt = undefined;
    _t7_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall7Components = [];
    recall7Components.push(t7_recall);
    recall7Components.push(t7_recall_resp);
    
    for (const thisComponent of recall7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall7' ---
    // get current time
    t = recall7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t7_recall* updates
    if (t >= 0 && t7_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_recall.tStart = t;  // (not accounting for frame time here)
      t7_recall.frameNStart = frameN;  // exact frame index
      
      t7_recall.setAutoDraw(true);
    }
    
    
    // *t7_recall_resp* updates
    if (t >= 0 && t7_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_recall_resp.tStart = t;  // (not accounting for frame time here)
      t7_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t7_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t7_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t7_recall_resp.clearEvents(); });
    }
    
    if (t7_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t7_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t7_recall_resp_allKeys = _t7_recall_resp_allKeys.concat(theseKeys);
      if (_t7_recall_resp_allKeys.length > 0) {
        t7_recall_resp.keys = _t7_recall_resp_allKeys[_t7_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t7_recall_resp.rt = _t7_recall_resp_allKeys[_t7_recall_resp_allKeys.length - 1].rt;
        t7_recall_resp.duration = _t7_recall_resp_allKeys[_t7_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t7_recall_resp.keys == 'd') {
            t7_recall_resp.corr = 1;
        } else {
            t7_recall_resp.corr = 0;
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
    for (const thisComponent of recall7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall7' ---
    for (const thisComponent of recall7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall7.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t7_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('d')) {
         t7_recall_resp.corr = 1;  // correct non-response
      } else {
         t7_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t7_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t7_recall_resp.keys', t7_recall_resp.keys);
    psychoJS.experiment.addData('t7_recall_resp.corr', t7_recall_resp.corr);
    if (typeof t7_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t7_recall_resp.rt', t7_recall_resp.rt);
        psychoJS.experiment.addData('t7_recall_resp.duration', t7_recall_resp.duration);
        routineTimer.reset();
        }
    
    t7_recall_resp.stop();
    // the Routine "recall7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback7Components;
function feedback7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback7' ---
    t = 0;
    feedback7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback7.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_7
    if (t7_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_7.setText(feedback);
    // keep track of which components have finished
    feedback7Components = [];
    feedback7Components.push(fankui_7);
    
    for (const thisComponent of feedback7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback7' ---
    // get current time
    t = feedback7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_7* updates
    if (t >= 0.0 && fankui_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_7.tStart = t;  // (not accounting for frame time here)
      fankui_7.frameNStart = frameN;  // exact frame index
      
      fankui_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_7.setAutoDraw(false);
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
    for (const thisComponent of feedback7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback7' ---
    for (const thisComponent of feedback7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback7.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t7_ss_resp_allKeys;
var ss7Components;
function ss7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss7' ---
    t = 0;
    ss7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss7.started', globalClock.getTime());
    t7_ss_resp.keys = undefined;
    t7_ss_resp.rt = undefined;
    _t7_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss7Components = [];
    ss7Components.push(t7_ss);
    ss7Components.push(t7_ss_resp);
    
    for (const thisComponent of ss7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss7' ---
    // get current time
    t = ss7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t7_ss* updates
    if (t >= 0.0 && t7_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_ss.tStart = t;  // (not accounting for frame time here)
      t7_ss.frameNStart = frameN;  // exact frame index
      
      t7_ss.setAutoDraw(true);
    }
    
    
    // *t7_ss_resp* updates
    if (t >= 0.0 && t7_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_ss_resp.tStart = t;  // (not accounting for frame time here)
      t7_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t7_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t7_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t7_ss_resp.clearEvents(); });
    }
    
    if (t7_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t7_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t7_ss_resp_allKeys = _t7_ss_resp_allKeys.concat(theseKeys);
      if (_t7_ss_resp_allKeys.length > 0) {
        t7_ss_resp.keys = _t7_ss_resp_allKeys[_t7_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t7_ss_resp.rt = _t7_ss_resp_allKeys[_t7_ss_resp_allKeys.length - 1].rt;
        t7_ss_resp.duration = _t7_ss_resp_allKeys[_t7_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss7' ---
    for (const thisComponent of ss7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t7_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t7_ss_resp.keys', t7_ss_resp.keys);
    if (typeof t7_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t7_ss_resp.rt', t7_ss_resp.rt);
        psychoJS.experiment.addData('t7_ss_resp.duration', t7_ss_resp.duration);
        routineTimer.reset();
        }
    
    t7_ss_resp.stop();
    // the Routine "ss7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t7_psg2_resp_allKeys;
var sspsg7Components;
function sspsg7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg7' ---
    t = 0;
    sspsg7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg7.started', globalClock.getTime());
    t7_psg2_resp.keys = undefined;
    t7_psg2_resp.rt = undefined;
    _t7_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg7Components = [];
    sspsg7Components.push(t7_psg2);
    sspsg7Components.push(clock7_2);
    sspsg7Components.push(t7_psg2_choice);
    sspsg7Components.push(t7_psg2_resp);
    
    for (const thisComponent of sspsg7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg7' ---
    // get current time
    t = sspsg7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t7_psg2* updates
    if (t >= 0.0 && t7_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_psg2.tStart = t;  // (not accounting for frame time here)
      t7_psg2.frameNStart = frameN;  // exact frame index
      
      t7_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t7_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t7_psg2.setAutoDraw(false);
    }
    
    
    if (clock7_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock7_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock7_2* updates
    if (t >= 0.0 && clock7_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock7_2.tStart = t;  // (not accounting for frame time here)
      clock7_2.frameNStart = frameN;  // exact frame index
      
      clock7_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock7_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock7_2.setAutoDraw(false);
    }
    
    
    // *t7_psg2_choice* updates
    if (t >= 10 && t7_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t7_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t7_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t7_psg2_resp* updates
    if (t >= 10 && t7_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t7_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t7_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t7_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t7_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t7_psg2_resp.clearEvents(); });
    }
    
    if (t7_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t7_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t7_psg2_resp_allKeys = _t7_psg2_resp_allKeys.concat(theseKeys);
      if (_t7_psg2_resp_allKeys.length > 0) {
        t7_psg2_resp.keys = _t7_psg2_resp_allKeys[_t7_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t7_psg2_resp.rt = _t7_psg2_resp_allKeys[_t7_psg2_resp_allKeys.length - 1].rt;
        t7_psg2_resp.duration = _t7_psg2_resp_allKeys[_t7_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg7' ---
    for (const thisComponent of sspsg7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t7_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t7_psg2_resp.keys', t7_psg2_resp.keys);
    if (typeof t7_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t7_psg2_resp.rt', t7_psg2_resp.rt);
        psychoJS.experiment.addData('t7_psg2_resp.duration', t7_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t7_psg2_resp.stop();
    // the Routine "sspsg7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t8_load_resp_allKeys;
var zsd8Components;
function zsd8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd8' ---
    t = 0;
    zsd8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd8.started', globalClock.getTime());
    t8_load_resp.keys = undefined;
    t8_load_resp.rt = undefined;
    _t8_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd8Components = [];
    zsd8Components.push(zsd1_8);
    zsd8Components.push(t8_load);
    zsd8Components.push(t8_load_resp);
    
    for (const thisComponent of zsd8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd8' ---
    // get current time
    t = zsd8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_8* updates
    if (t >= 0.0 && zsd1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_8.tStart = t;  // (not accounting for frame time here)
      zsd1_8.frameNStart = frameN;  // exact frame index
      
      zsd1_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_8.setAutoDraw(false);
    }
    
    
    // *t8_load* updates
    if (t >= 0.5 && t8_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_load.tStart = t;  // (not accounting for frame time here)
      t8_load.frameNStart = frameN;  // exact frame index
      
      t8_load.setAutoDraw(true);
    }
    
    
    // *t8_load_resp* updates
    if (t >= 0.5 && t8_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_load_resp.tStart = t;  // (not accounting for frame time here)
      t8_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t8_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t8_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t8_load_resp.clearEvents(); });
    }
    
    if (t8_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t8_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t8_load_resp_allKeys = _t8_load_resp_allKeys.concat(theseKeys);
      if (_t8_load_resp_allKeys.length > 0) {
        t8_load_resp.keys = _t8_load_resp_allKeys[_t8_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t8_load_resp.rt = _t8_load_resp_allKeys[_t8_load_resp_allKeys.length - 1].rt;
        t8_load_resp.duration = _t8_load_resp_allKeys[_t8_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd8' ---
    for (const thisComponent of zsd8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t8_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t8_load_resp.keys', t8_load_resp.keys);
    if (typeof t8_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t8_load_resp.rt', t8_load_resp.rt);
        psychoJS.experiment.addData('t8_load_resp.duration', t8_load_resp.duration);
        routineTimer.reset();
        }
    
    t8_load_resp.stop();
    // the Routine "zsd8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t8_zj_resp_allKeys;
var zj8Components;
function zj8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj8' ---
    t = 0;
    zj8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj8.started', globalClock.getTime());
    t8_zj_resp.keys = undefined;
    t8_zj_resp.rt = undefined;
    _t8_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj8Components = [];
    zj8Components.push(t8_zj);
    zj8Components.push(t8_zj_resp);
    
    for (const thisComponent of zj8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj8' ---
    // get current time
    t = zj8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t8_zj* updates
    if (t >= 0 && t8_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_zj.tStart = t;  // (not accounting for frame time here)
      t8_zj.frameNStart = frameN;  // exact frame index
      
      t8_zj.setAutoDraw(true);
    }
    
    
    // *t8_zj_resp* updates
    if (t >= 0 && t8_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_zj_resp.tStart = t;  // (not accounting for frame time here)
      t8_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t8_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t8_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t8_zj_resp.clearEvents(); });
    }
    
    if (t8_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t8_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t8_zj_resp_allKeys = _t8_zj_resp_allKeys.concat(theseKeys);
      if (_t8_zj_resp_allKeys.length > 0) {
        t8_zj_resp.keys = _t8_zj_resp_allKeys[_t8_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t8_zj_resp.rt = _t8_zj_resp_allKeys[_t8_zj_resp_allKeys.length - 1].rt;
        t8_zj_resp.duration = _t8_zj_resp_allKeys[_t8_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj8' ---
    for (const thisComponent of zj8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t8_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t8_zj_resp.keys', t8_zj_resp.keys);
    if (typeof t8_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t8_zj_resp.rt', t8_zj_resp.rt);
        psychoJS.experiment.addData('t8_zj_resp.duration', t8_zj_resp.duration);
        routineTimer.reset();
        }
    
    t8_zj_resp.stop();
    // the Routine "zj8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t8_psg1_resp_allKeys;
var trail8Components;
function trail8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail8' ---
    t = 0;
    trail8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail8.started', globalClock.getTime());
    t8_psg1_resp.keys = undefined;
    t8_psg1_resp.rt = undefined;
    _t8_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail8Components = [];
    trail8Components.push(t8_psg1);
    trail8Components.push(time_8);
    trail8Components.push(countdown_8);
    trail8Components.push(t8_psg1_resp);
    
    for (const thisComponent of trail8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail8' ---
    // get current time
    t = trail8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t8_psg1* updates
    if (t >= 0.0 && t8_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_psg1.tStart = t;  // (not accounting for frame time here)
      t8_psg1.frameNStart = frameN;  // exact frame index
      
      t8_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t8_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t8_psg1.setAutoDraw(false);
    }
    
    
    // *time_8* updates
    if (t >= 0.0 && time_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_8.tStart = t;  // (not accounting for frame time here)
      time_8.frameNStart = frameN;  // exact frame index
      
      time_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_8.setAutoDraw(false);
    }
    
    
    if (countdown_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_8.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_8* updates
    if (t >= 0.0 && countdown_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_8.tStart = t;  // (not accounting for frame time here)
      countdown_8.frameNStart = frameN;  // exact frame index
      
      countdown_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_8.setAutoDraw(false);
    }
    
    
    // *t8_psg1_resp* updates
    if (t >= 0.0 && t8_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t8_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t8_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t8_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t8_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t8_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t8_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t8_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t8_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t8_psg1_resp_allKeys = _t8_psg1_resp_allKeys.concat(theseKeys);
      if (_t8_psg1_resp_allKeys.length > 0) {
        t8_psg1_resp.keys = _t8_psg1_resp_allKeys[_t8_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t8_psg1_resp.rt = _t8_psg1_resp_allKeys[_t8_psg1_resp_allKeys.length - 1].rt;
        t8_psg1_resp.duration = _t8_psg1_resp_allKeys[_t8_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail8' ---
    for (const thisComponent of trail8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t8_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t8_psg1_resp.keys', t8_psg1_resp.keys);
    if (typeof t8_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t8_psg1_resp.rt', t8_psg1_resp.rt);
        psychoJS.experiment.addData('t8_psg1_resp.duration', t8_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t8_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t8_recall_resp_allKeys;
var recall8Components;
function recall8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall8' ---
    t = 0;
    recall8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall8.started', globalClock.getTime());
    t8_recall_resp.keys = undefined;
    t8_recall_resp.rt = undefined;
    _t8_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall8Components = [];
    recall8Components.push(t8_recall);
    recall8Components.push(t8_recall_resp);
    
    for (const thisComponent of recall8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall8' ---
    // get current time
    t = recall8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t8_recall* updates
    if (t >= 0 && t8_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_recall.tStart = t;  // (not accounting for frame time here)
      t8_recall.frameNStart = frameN;  // exact frame index
      
      t8_recall.setAutoDraw(true);
    }
    
    
    // *t8_recall_resp* updates
    if (t >= 0 && t8_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_recall_resp.tStart = t;  // (not accounting for frame time here)
      t8_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t8_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t8_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t8_recall_resp.clearEvents(); });
    }
    
    if (t8_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t8_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t8_recall_resp_allKeys = _t8_recall_resp_allKeys.concat(theseKeys);
      if (_t8_recall_resp_allKeys.length > 0) {
        t8_recall_resp.keys = _t8_recall_resp_allKeys[_t8_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t8_recall_resp.rt = _t8_recall_resp_allKeys[_t8_recall_resp_allKeys.length - 1].rt;
        t8_recall_resp.duration = _t8_recall_resp_allKeys[_t8_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t8_recall_resp.keys == 'b') {
            t8_recall_resp.corr = 1;
        } else {
            t8_recall_resp.corr = 0;
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
    for (const thisComponent of recall8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall8' ---
    for (const thisComponent of recall8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall8.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t8_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('b')) {
         t8_recall_resp.corr = 1;  // correct non-response
      } else {
         t8_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t8_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t8_recall_resp.keys', t8_recall_resp.keys);
    psychoJS.experiment.addData('t8_recall_resp.corr', t8_recall_resp.corr);
    if (typeof t8_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t8_recall_resp.rt', t8_recall_resp.rt);
        psychoJS.experiment.addData('t8_recall_resp.duration', t8_recall_resp.duration);
        routineTimer.reset();
        }
    
    t8_recall_resp.stop();
    // the Routine "recall8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback8Components;
function feedback8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback8' ---
    t = 0;
    feedback8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback8.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_8
    if (t8_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_8.setText(feedback);
    // keep track of which components have finished
    feedback8Components = [];
    feedback8Components.push(fankui_8);
    
    for (const thisComponent of feedback8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback8' ---
    // get current time
    t = feedback8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_8* updates
    if (t >= 0.0 && fankui_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_8.tStart = t;  // (not accounting for frame time here)
      fankui_8.frameNStart = frameN;  // exact frame index
      
      fankui_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_8.setAutoDraw(false);
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
    for (const thisComponent of feedback8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback8' ---
    for (const thisComponent of feedback8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback8.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t8_ss_resp_allKeys;
var ss8Components;
function ss8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss8' ---
    t = 0;
    ss8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss8.started', globalClock.getTime());
    t8_ss_resp.keys = undefined;
    t8_ss_resp.rt = undefined;
    _t8_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss8Components = [];
    ss8Components.push(t8_ss);
    ss8Components.push(t8_ss_resp);
    
    for (const thisComponent of ss8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss8' ---
    // get current time
    t = ss8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t8_ss* updates
    if (t >= 0.0 && t8_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_ss.tStart = t;  // (not accounting for frame time here)
      t8_ss.frameNStart = frameN;  // exact frame index
      
      t8_ss.setAutoDraw(true);
    }
    
    
    // *t8_ss_resp* updates
    if (t >= 0.0 && t8_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_ss_resp.tStart = t;  // (not accounting for frame time here)
      t8_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t8_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t8_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t8_ss_resp.clearEvents(); });
    }
    
    if (t8_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t8_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t8_ss_resp_allKeys = _t8_ss_resp_allKeys.concat(theseKeys);
      if (_t8_ss_resp_allKeys.length > 0) {
        t8_ss_resp.keys = _t8_ss_resp_allKeys[_t8_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t8_ss_resp.rt = _t8_ss_resp_allKeys[_t8_ss_resp_allKeys.length - 1].rt;
        t8_ss_resp.duration = _t8_ss_resp_allKeys[_t8_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss8' ---
    for (const thisComponent of ss8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t8_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t8_ss_resp.keys', t8_ss_resp.keys);
    if (typeof t8_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t8_ss_resp.rt', t8_ss_resp.rt);
        psychoJS.experiment.addData('t8_ss_resp.duration', t8_ss_resp.duration);
        routineTimer.reset();
        }
    
    t8_ss_resp.stop();
    // the Routine "ss8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t8_psg2_resp_allKeys;
var sspsg8Components;
function sspsg8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg8' ---
    t = 0;
    sspsg8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg8.started', globalClock.getTime());
    t8_psg2_resp.keys = undefined;
    t8_psg2_resp.rt = undefined;
    _t8_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg8Components = [];
    sspsg8Components.push(t8_psg2);
    sspsg8Components.push(clock8_2);
    sspsg8Components.push(t8_psg2_choice);
    sspsg8Components.push(t8_psg2_resp);
    
    for (const thisComponent of sspsg8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg8' ---
    // get current time
    t = sspsg8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t8_psg2* updates
    if (t >= 0.0 && t8_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_psg2.tStart = t;  // (not accounting for frame time here)
      t8_psg2.frameNStart = frameN;  // exact frame index
      
      t8_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t8_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t8_psg2.setAutoDraw(false);
    }
    
    
    if (clock8_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock8_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock8_2* updates
    if (t >= 0.0 && clock8_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock8_2.tStart = t;  // (not accounting for frame time here)
      clock8_2.frameNStart = frameN;  // exact frame index
      
      clock8_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock8_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock8_2.setAutoDraw(false);
    }
    
    
    // *t8_psg2_choice* updates
    if (t >= 10 && t8_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t8_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t8_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t8_psg2_resp* updates
    if (t >= 10 && t8_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t8_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t8_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t8_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t8_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t8_psg2_resp.clearEvents(); });
    }
    
    if (t8_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t8_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t8_psg2_resp_allKeys = _t8_psg2_resp_allKeys.concat(theseKeys);
      if (_t8_psg2_resp_allKeys.length > 0) {
        t8_psg2_resp.keys = _t8_psg2_resp_allKeys[_t8_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t8_psg2_resp.rt = _t8_psg2_resp_allKeys[_t8_psg2_resp_allKeys.length - 1].rt;
        t8_psg2_resp.duration = _t8_psg2_resp_allKeys[_t8_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg8' ---
    for (const thisComponent of sspsg8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t8_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t8_psg2_resp.keys', t8_psg2_resp.keys);
    if (typeof t8_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t8_psg2_resp.rt', t8_psg2_resp.rt);
        psychoJS.experiment.addData('t8_psg2_resp.duration', t8_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t8_psg2_resp.stop();
    // the Routine "sspsg8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t9_load_resp_allKeys;
var zsd9Components;
function zsd9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd9' ---
    t = 0;
    zsd9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd9.started', globalClock.getTime());
    t9_load_resp.keys = undefined;
    t9_load_resp.rt = undefined;
    _t9_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd9Components = [];
    zsd9Components.push(zsd1_9);
    zsd9Components.push(t9_load);
    zsd9Components.push(t9_load_resp);
    
    for (const thisComponent of zsd9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd9' ---
    // get current time
    t = zsd9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_9* updates
    if (t >= 0.0 && zsd1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_9.tStart = t;  // (not accounting for frame time here)
      zsd1_9.frameNStart = frameN;  // exact frame index
      
      zsd1_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_9.setAutoDraw(false);
    }
    
    
    // *t9_load* updates
    if (t >= 0.5 && t9_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_load.tStart = t;  // (not accounting for frame time here)
      t9_load.frameNStart = frameN;  // exact frame index
      
      t9_load.setAutoDraw(true);
    }
    
    
    // *t9_load_resp* updates
    if (t >= 0.5 && t9_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_load_resp.tStart = t;  // (not accounting for frame time here)
      t9_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t9_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t9_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t9_load_resp.clearEvents(); });
    }
    
    if (t9_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t9_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t9_load_resp_allKeys = _t9_load_resp_allKeys.concat(theseKeys);
      if (_t9_load_resp_allKeys.length > 0) {
        t9_load_resp.keys = _t9_load_resp_allKeys[_t9_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t9_load_resp.rt = _t9_load_resp_allKeys[_t9_load_resp_allKeys.length - 1].rt;
        t9_load_resp.duration = _t9_load_resp_allKeys[_t9_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd9' ---
    for (const thisComponent of zsd9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t9_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t9_load_resp.keys', t9_load_resp.keys);
    if (typeof t9_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t9_load_resp.rt', t9_load_resp.rt);
        psychoJS.experiment.addData('t9_load_resp.duration', t9_load_resp.duration);
        routineTimer.reset();
        }
    
    t9_load_resp.stop();
    // the Routine "zsd9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t9_zj_resp_allKeys;
var zj9Components;
function zj9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj9' ---
    t = 0;
    zj9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj9.started', globalClock.getTime());
    t9_zj_resp.keys = undefined;
    t9_zj_resp.rt = undefined;
    _t9_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj9Components = [];
    zj9Components.push(t9_zj);
    zj9Components.push(t9_zj_resp);
    
    for (const thisComponent of zj9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj9' ---
    // get current time
    t = zj9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t9_zj* updates
    if (t >= 0 && t9_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_zj.tStart = t;  // (not accounting for frame time here)
      t9_zj.frameNStart = frameN;  // exact frame index
      
      t9_zj.setAutoDraw(true);
    }
    
    
    // *t9_zj_resp* updates
    if (t >= 0 && t9_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_zj_resp.tStart = t;  // (not accounting for frame time here)
      t9_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t9_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t9_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t9_zj_resp.clearEvents(); });
    }
    
    if (t9_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t9_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t9_zj_resp_allKeys = _t9_zj_resp_allKeys.concat(theseKeys);
      if (_t9_zj_resp_allKeys.length > 0) {
        t9_zj_resp.keys = _t9_zj_resp_allKeys[_t9_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t9_zj_resp.rt = _t9_zj_resp_allKeys[_t9_zj_resp_allKeys.length - 1].rt;
        t9_zj_resp.duration = _t9_zj_resp_allKeys[_t9_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj9' ---
    for (const thisComponent of zj9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t9_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t9_zj_resp.keys', t9_zj_resp.keys);
    if (typeof t9_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t9_zj_resp.rt', t9_zj_resp.rt);
        psychoJS.experiment.addData('t9_zj_resp.duration', t9_zj_resp.duration);
        routineTimer.reset();
        }
    
    t9_zj_resp.stop();
    // the Routine "zj9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t9_psg1_resp_allKeys;
var trail9Components;
function trail9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail9' ---
    t = 0;
    trail9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail9.started', globalClock.getTime());
    t9_psg1_resp.keys = undefined;
    t9_psg1_resp.rt = undefined;
    _t9_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail9Components = [];
    trail9Components.push(t9_psg1);
    trail9Components.push(time_9);
    trail9Components.push(countdown_9);
    trail9Components.push(t9_psg1_resp);
    
    for (const thisComponent of trail9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail9' ---
    // get current time
    t = trail9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t9_psg1* updates
    if (t >= 0.0 && t9_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_psg1.tStart = t;  // (not accounting for frame time here)
      t9_psg1.frameNStart = frameN;  // exact frame index
      
      t9_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t9_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t9_psg1.setAutoDraw(false);
    }
    
    
    // *time_9* updates
    if (t >= 0.0 && time_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_9.tStart = t;  // (not accounting for frame time here)
      time_9.frameNStart = frameN;  // exact frame index
      
      time_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_9.setAutoDraw(false);
    }
    
    
    if (countdown_9.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_9.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_9* updates
    if (t >= 0.0 && countdown_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_9.tStart = t;  // (not accounting for frame time here)
      countdown_9.frameNStart = frameN;  // exact frame index
      
      countdown_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_9.setAutoDraw(false);
    }
    
    
    // *t9_psg1_resp* updates
    if (t >= 0.0 && t9_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t9_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t9_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t9_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t9_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t9_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t9_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t9_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t9_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t9_psg1_resp_allKeys = _t9_psg1_resp_allKeys.concat(theseKeys);
      if (_t9_psg1_resp_allKeys.length > 0) {
        t9_psg1_resp.keys = _t9_psg1_resp_allKeys[_t9_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t9_psg1_resp.rt = _t9_psg1_resp_allKeys[_t9_psg1_resp_allKeys.length - 1].rt;
        t9_psg1_resp.duration = _t9_psg1_resp_allKeys[_t9_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail9' ---
    for (const thisComponent of trail9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t9_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t9_psg1_resp.keys', t9_psg1_resp.keys);
    if (typeof t9_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t9_psg1_resp.rt', t9_psg1_resp.rt);
        psychoJS.experiment.addData('t9_psg1_resp.duration', t9_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t9_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t9_recall_resp_allKeys;
var recall9Components;
function recall9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall9' ---
    t = 0;
    recall9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall9.started', globalClock.getTime());
    t9_recall_resp.keys = undefined;
    t9_recall_resp.rt = undefined;
    _t9_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall9Components = [];
    recall9Components.push(t9_recall);
    recall9Components.push(t9_recall_resp);
    
    for (const thisComponent of recall9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall9' ---
    // get current time
    t = recall9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t9_recall* updates
    if (t >= 0 && t9_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_recall.tStart = t;  // (not accounting for frame time here)
      t9_recall.frameNStart = frameN;  // exact frame index
      
      t9_recall.setAutoDraw(true);
    }
    
    
    // *t9_recall_resp* updates
    if (t >= 0 && t9_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_recall_resp.tStart = t;  // (not accounting for frame time here)
      t9_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t9_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t9_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t9_recall_resp.clearEvents(); });
    }
    
    if (t9_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t9_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t9_recall_resp_allKeys = _t9_recall_resp_allKeys.concat(theseKeys);
      if (_t9_recall_resp_allKeys.length > 0) {
        t9_recall_resp.keys = _t9_recall_resp_allKeys[_t9_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t9_recall_resp.rt = _t9_recall_resp_allKeys[_t9_recall_resp_allKeys.length - 1].rt;
        t9_recall_resp.duration = _t9_recall_resp_allKeys[_t9_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t9_recall_resp.keys == 'b') {
            t9_recall_resp.corr = 1;
        } else {
            t9_recall_resp.corr = 0;
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
    for (const thisComponent of recall9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall9' ---
    for (const thisComponent of recall9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall9.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t9_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('b')) {
         t9_recall_resp.corr = 1;  // correct non-response
      } else {
         t9_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t9_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t9_recall_resp.keys', t9_recall_resp.keys);
    psychoJS.experiment.addData('t9_recall_resp.corr', t9_recall_resp.corr);
    if (typeof t9_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t9_recall_resp.rt', t9_recall_resp.rt);
        psychoJS.experiment.addData('t9_recall_resp.duration', t9_recall_resp.duration);
        routineTimer.reset();
        }
    
    t9_recall_resp.stop();
    // the Routine "recall9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback9Components;
function feedback9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback9' ---
    t = 0;
    feedback9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback9.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_9
    if (t9_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_9.setText(feedback);
    // keep track of which components have finished
    feedback9Components = [];
    feedback9Components.push(fankui_9);
    
    for (const thisComponent of feedback9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback9' ---
    // get current time
    t = feedback9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_9* updates
    if (t >= 0.0 && fankui_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_9.tStart = t;  // (not accounting for frame time here)
      fankui_9.frameNStart = frameN;  // exact frame index
      
      fankui_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_9.setAutoDraw(false);
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
    for (const thisComponent of feedback9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback9' ---
    for (const thisComponent of feedback9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback9.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t9_ss_resp_allKeys;
var ss9Components;
function ss9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss9' ---
    t = 0;
    ss9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss9.started', globalClock.getTime());
    t9_ss_resp.keys = undefined;
    t9_ss_resp.rt = undefined;
    _t9_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss9Components = [];
    ss9Components.push(t9_ss);
    ss9Components.push(t9_ss_resp);
    
    for (const thisComponent of ss9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss9' ---
    // get current time
    t = ss9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t9_ss* updates
    if (t >= 0.0 && t9_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_ss.tStart = t;  // (not accounting for frame time here)
      t9_ss.frameNStart = frameN;  // exact frame index
      
      t9_ss.setAutoDraw(true);
    }
    
    
    // *t9_ss_resp* updates
    if (t >= 0.0 && t9_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_ss_resp.tStart = t;  // (not accounting for frame time here)
      t9_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t9_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t9_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t9_ss_resp.clearEvents(); });
    }
    
    if (t9_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t9_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t9_ss_resp_allKeys = _t9_ss_resp_allKeys.concat(theseKeys);
      if (_t9_ss_resp_allKeys.length > 0) {
        t9_ss_resp.keys = _t9_ss_resp_allKeys[_t9_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t9_ss_resp.rt = _t9_ss_resp_allKeys[_t9_ss_resp_allKeys.length - 1].rt;
        t9_ss_resp.duration = _t9_ss_resp_allKeys[_t9_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss9' ---
    for (const thisComponent of ss9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t9_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t9_ss_resp.keys', t9_ss_resp.keys);
    if (typeof t9_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t9_ss_resp.rt', t9_ss_resp.rt);
        psychoJS.experiment.addData('t9_ss_resp.duration', t9_ss_resp.duration);
        routineTimer.reset();
        }
    
    t9_ss_resp.stop();
    // the Routine "ss9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t9_psg2_resp_allKeys;
var sspsg9Components;
function sspsg9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg9' ---
    t = 0;
    sspsg9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg9.started', globalClock.getTime());
    t9_psg2_resp.keys = undefined;
    t9_psg2_resp.rt = undefined;
    _t9_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg9Components = [];
    sspsg9Components.push(t9_psg2);
    sspsg9Components.push(clock9_2);
    sspsg9Components.push(t9_psg2_choice);
    sspsg9Components.push(t9_psg2_resp);
    
    for (const thisComponent of sspsg9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg9' ---
    // get current time
    t = sspsg9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t9_psg2* updates
    if (t >= 0.0 && t9_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_psg2.tStart = t;  // (not accounting for frame time here)
      t9_psg2.frameNStart = frameN;  // exact frame index
      
      t9_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t9_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t9_psg2.setAutoDraw(false);
    }
    
    
    if (clock9_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock9_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock9_2* updates
    if (t >= 0.0 && clock9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock9_2.tStart = t;  // (not accounting for frame time here)
      clock9_2.frameNStart = frameN;  // exact frame index
      
      clock9_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock9_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock9_2.setAutoDraw(false);
    }
    
    
    // *t9_psg2_choice* updates
    if (t >= 10 && t9_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t9_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t9_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t9_psg2_resp* updates
    if (t >= 10 && t9_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t9_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t9_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t9_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t9_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t9_psg2_resp.clearEvents(); });
    }
    
    if (t9_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t9_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t9_psg2_resp_allKeys = _t9_psg2_resp_allKeys.concat(theseKeys);
      if (_t9_psg2_resp_allKeys.length > 0) {
        t9_psg2_resp.keys = _t9_psg2_resp_allKeys[_t9_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t9_psg2_resp.rt = _t9_psg2_resp_allKeys[_t9_psg2_resp_allKeys.length - 1].rt;
        t9_psg2_resp.duration = _t9_psg2_resp_allKeys[_t9_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg9' ---
    for (const thisComponent of sspsg9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t9_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t9_psg2_resp.keys', t9_psg2_resp.keys);
    if (typeof t9_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t9_psg2_resp.rt', t9_psg2_resp.rt);
        psychoJS.experiment.addData('t9_psg2_resp.duration', t9_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t9_psg2_resp.stop();
    // the Routine "sspsg9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t10_load_resp_allKeys;
var zsd10Components;
function zsd10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd10' ---
    t = 0;
    zsd10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd10.started', globalClock.getTime());
    t10_load_resp.keys = undefined;
    t10_load_resp.rt = undefined;
    _t10_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd10Components = [];
    zsd10Components.push(zsd1_10);
    zsd10Components.push(t10_load);
    zsd10Components.push(t10_load_resp);
    
    for (const thisComponent of zsd10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd10' ---
    // get current time
    t = zsd10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_10* updates
    if (t >= 0.0 && zsd1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_10.tStart = t;  // (not accounting for frame time here)
      zsd1_10.frameNStart = frameN;  // exact frame index
      
      zsd1_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_10.setAutoDraw(false);
    }
    
    
    // *t10_load* updates
    if (t >= 0.5 && t10_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_load.tStart = t;  // (not accounting for frame time here)
      t10_load.frameNStart = frameN;  // exact frame index
      
      t10_load.setAutoDraw(true);
    }
    
    
    // *t10_load_resp* updates
    if (t >= 0.5 && t10_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_load_resp.tStart = t;  // (not accounting for frame time here)
      t10_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t10_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t10_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t10_load_resp.clearEvents(); });
    }
    
    if (t10_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t10_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t10_load_resp_allKeys = _t10_load_resp_allKeys.concat(theseKeys);
      if (_t10_load_resp_allKeys.length > 0) {
        t10_load_resp.keys = _t10_load_resp_allKeys[_t10_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t10_load_resp.rt = _t10_load_resp_allKeys[_t10_load_resp_allKeys.length - 1].rt;
        t10_load_resp.duration = _t10_load_resp_allKeys[_t10_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd10' ---
    for (const thisComponent of zsd10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t10_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t10_load_resp.keys', t10_load_resp.keys);
    if (typeof t10_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t10_load_resp.rt', t10_load_resp.rt);
        psychoJS.experiment.addData('t10_load_resp.duration', t10_load_resp.duration);
        routineTimer.reset();
        }
    
    t10_load_resp.stop();
    // the Routine "zsd10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t10_zj_resp_allKeys;
var zj10Components;
function zj10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj10' ---
    t = 0;
    zj10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj10.started', globalClock.getTime());
    t10_zj_resp.keys = undefined;
    t10_zj_resp.rt = undefined;
    _t10_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj10Components = [];
    zj10Components.push(t10_zj);
    zj10Components.push(t10_zj_resp);
    
    for (const thisComponent of zj10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj10' ---
    // get current time
    t = zj10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t10_zj* updates
    if (t >= 0 && t10_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_zj.tStart = t;  // (not accounting for frame time here)
      t10_zj.frameNStart = frameN;  // exact frame index
      
      t10_zj.setAutoDraw(true);
    }
    
    
    // *t10_zj_resp* updates
    if (t >= 0 && t10_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_zj_resp.tStart = t;  // (not accounting for frame time here)
      t10_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t10_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t10_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t10_zj_resp.clearEvents(); });
    }
    
    if (t10_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t10_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t10_zj_resp_allKeys = _t10_zj_resp_allKeys.concat(theseKeys);
      if (_t10_zj_resp_allKeys.length > 0) {
        t10_zj_resp.keys = _t10_zj_resp_allKeys[_t10_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t10_zj_resp.rt = _t10_zj_resp_allKeys[_t10_zj_resp_allKeys.length - 1].rt;
        t10_zj_resp.duration = _t10_zj_resp_allKeys[_t10_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj10' ---
    for (const thisComponent of zj10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t10_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t10_zj_resp.keys', t10_zj_resp.keys);
    if (typeof t10_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t10_zj_resp.rt', t10_zj_resp.rt);
        psychoJS.experiment.addData('t10_zj_resp.duration', t10_zj_resp.duration);
        routineTimer.reset();
        }
    
    t10_zj_resp.stop();
    // the Routine "zj10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t10_psg1_resp_allKeys;
var trail10Components;
function trail10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail10' ---
    t = 0;
    trail10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail10.started', globalClock.getTime());
    t10_psg1_resp.keys = undefined;
    t10_psg1_resp.rt = undefined;
    _t10_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail10Components = [];
    trail10Components.push(t10_psg1);
    trail10Components.push(time_10);
    trail10Components.push(countdown_10);
    trail10Components.push(t10_psg1_resp);
    
    for (const thisComponent of trail10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail10' ---
    // get current time
    t = trail10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t10_psg1* updates
    if (t >= 0.0 && t10_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_psg1.tStart = t;  // (not accounting for frame time here)
      t10_psg1.frameNStart = frameN;  // exact frame index
      
      t10_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t10_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t10_psg1.setAutoDraw(false);
    }
    
    
    // *time_10* updates
    if (t >= 0.0 && time_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_10.tStart = t;  // (not accounting for frame time here)
      time_10.frameNStart = frameN;  // exact frame index
      
      time_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_10.setAutoDraw(false);
    }
    
    
    if (countdown_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_10.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_10* updates
    if (t >= 0.0 && countdown_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_10.tStart = t;  // (not accounting for frame time here)
      countdown_10.frameNStart = frameN;  // exact frame index
      
      countdown_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_10.setAutoDraw(false);
    }
    
    
    // *t10_psg1_resp* updates
    if (t >= 0.0 && t10_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t10_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t10_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t10_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t10_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t10_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t10_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t10_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t10_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t10_psg1_resp_allKeys = _t10_psg1_resp_allKeys.concat(theseKeys);
      if (_t10_psg1_resp_allKeys.length > 0) {
        t10_psg1_resp.keys = _t10_psg1_resp_allKeys[_t10_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t10_psg1_resp.rt = _t10_psg1_resp_allKeys[_t10_psg1_resp_allKeys.length - 1].rt;
        t10_psg1_resp.duration = _t10_psg1_resp_allKeys[_t10_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail10' ---
    for (const thisComponent of trail10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t10_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t10_psg1_resp.keys', t10_psg1_resp.keys);
    if (typeof t10_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t10_psg1_resp.rt', t10_psg1_resp.rt);
        psychoJS.experiment.addData('t10_psg1_resp.duration', t10_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t10_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t10_recall_resp_allKeys;
var recall10Components;
function recall10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall10' ---
    t = 0;
    recall10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall10.started', globalClock.getTime());
    t10_recall_resp.keys = undefined;
    t10_recall_resp.rt = undefined;
    _t10_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall10Components = [];
    recall10Components.push(t10_recall);
    recall10Components.push(t10_recall_resp);
    
    for (const thisComponent of recall10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall10' ---
    // get current time
    t = recall10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t10_recall* updates
    if (t >= 0 && t10_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_recall.tStart = t;  // (not accounting for frame time here)
      t10_recall.frameNStart = frameN;  // exact frame index
      
      t10_recall.setAutoDraw(true);
    }
    
    
    // *t10_recall_resp* updates
    if (t >= 0 && t10_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_recall_resp.tStart = t;  // (not accounting for frame time here)
      t10_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t10_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t10_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t10_recall_resp.clearEvents(); });
    }
    
    if (t10_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t10_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t10_recall_resp_allKeys = _t10_recall_resp_allKeys.concat(theseKeys);
      if (_t10_recall_resp_allKeys.length > 0) {
        t10_recall_resp.keys = _t10_recall_resp_allKeys[_t10_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t10_recall_resp.rt = _t10_recall_resp_allKeys[_t10_recall_resp_allKeys.length - 1].rt;
        t10_recall_resp.duration = _t10_recall_resp_allKeys[_t10_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t10_recall_resp.keys == 'c') {
            t10_recall_resp.corr = 1;
        } else {
            t10_recall_resp.corr = 0;
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
    for (const thisComponent of recall10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall10' ---
    for (const thisComponent of recall10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall10.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t10_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('c')) {
         t10_recall_resp.corr = 1;  // correct non-response
      } else {
         t10_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t10_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t10_recall_resp.keys', t10_recall_resp.keys);
    psychoJS.experiment.addData('t10_recall_resp.corr', t10_recall_resp.corr);
    if (typeof t10_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t10_recall_resp.rt', t10_recall_resp.rt);
        psychoJS.experiment.addData('t10_recall_resp.duration', t10_recall_resp.duration);
        routineTimer.reset();
        }
    
    t10_recall_resp.stop();
    // the Routine "recall10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback10Components;
function feedback10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback10' ---
    t = 0;
    feedback10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback10.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_10
    if (t10_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_10.setText(feedback);
    // keep track of which components have finished
    feedback10Components = [];
    feedback10Components.push(fankui_10);
    
    for (const thisComponent of feedback10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback10' ---
    // get current time
    t = feedback10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_10* updates
    if (t >= 0.0 && fankui_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_10.tStart = t;  // (not accounting for frame time here)
      fankui_10.frameNStart = frameN;  // exact frame index
      
      fankui_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_10.setAutoDraw(false);
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
    for (const thisComponent of feedback10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback10' ---
    for (const thisComponent of feedback10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback10.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t10_ss_resp_allKeys;
var ss10Components;
function ss10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss10' ---
    t = 0;
    ss10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss10.started', globalClock.getTime());
    t10_ss_resp.keys = undefined;
    t10_ss_resp.rt = undefined;
    _t10_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss10Components = [];
    ss10Components.push(t10_ss);
    ss10Components.push(t10_ss_resp);
    
    for (const thisComponent of ss10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss10' ---
    // get current time
    t = ss10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t10_ss* updates
    if (t >= 0.0 && t10_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_ss.tStart = t;  // (not accounting for frame time here)
      t10_ss.frameNStart = frameN;  // exact frame index
      
      t10_ss.setAutoDraw(true);
    }
    
    
    // *t10_ss_resp* updates
    if (t >= 0.0 && t10_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_ss_resp.tStart = t;  // (not accounting for frame time here)
      t10_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t10_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t10_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t10_ss_resp.clearEvents(); });
    }
    
    if (t10_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t10_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t10_ss_resp_allKeys = _t10_ss_resp_allKeys.concat(theseKeys);
      if (_t10_ss_resp_allKeys.length > 0) {
        t10_ss_resp.keys = _t10_ss_resp_allKeys[_t10_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t10_ss_resp.rt = _t10_ss_resp_allKeys[_t10_ss_resp_allKeys.length - 1].rt;
        t10_ss_resp.duration = _t10_ss_resp_allKeys[_t10_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss10' ---
    for (const thisComponent of ss10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t10_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t10_ss_resp.keys', t10_ss_resp.keys);
    if (typeof t10_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t10_ss_resp.rt', t10_ss_resp.rt);
        psychoJS.experiment.addData('t10_ss_resp.duration', t10_ss_resp.duration);
        routineTimer.reset();
        }
    
    t10_ss_resp.stop();
    // the Routine "ss10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t10_psg2_resp_allKeys;
var sspsg10Components;
function sspsg10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg10' ---
    t = 0;
    sspsg10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg10.started', globalClock.getTime());
    t10_psg2_resp.keys = undefined;
    t10_psg2_resp.rt = undefined;
    _t10_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg10Components = [];
    sspsg10Components.push(t10_psg2);
    sspsg10Components.push(clock10_2);
    sspsg10Components.push(t10_psg2_choice);
    sspsg10Components.push(t10_psg2_resp);
    
    for (const thisComponent of sspsg10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg10' ---
    // get current time
    t = sspsg10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t10_psg2* updates
    if (t >= 0.0 && t10_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_psg2.tStart = t;  // (not accounting for frame time here)
      t10_psg2.frameNStart = frameN;  // exact frame index
      
      t10_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t10_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t10_psg2.setAutoDraw(false);
    }
    
    
    if (clock10_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock10_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock10_2* updates
    if (t >= 0.0 && clock10_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock10_2.tStart = t;  // (not accounting for frame time here)
      clock10_2.frameNStart = frameN;  // exact frame index
      
      clock10_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock10_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock10_2.setAutoDraw(false);
    }
    
    
    // *t10_psg2_choice* updates
    if (t >= 10 && t10_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t10_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t10_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t10_psg2_resp* updates
    if (t >= 10 && t10_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t10_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t10_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t10_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t10_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t10_psg2_resp.clearEvents(); });
    }
    
    if (t10_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t10_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t10_psg2_resp_allKeys = _t10_psg2_resp_allKeys.concat(theseKeys);
      if (_t10_psg2_resp_allKeys.length > 0) {
        t10_psg2_resp.keys = _t10_psg2_resp_allKeys[_t10_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t10_psg2_resp.rt = _t10_psg2_resp_allKeys[_t10_psg2_resp_allKeys.length - 1].rt;
        t10_psg2_resp.duration = _t10_psg2_resp_allKeys[_t10_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg10' ---
    for (const thisComponent of sspsg10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t10_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t10_psg2_resp.keys', t10_psg2_resp.keys);
    if (typeof t10_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t10_psg2_resp.rt', t10_psg2_resp.rt);
        psychoJS.experiment.addData('t10_psg2_resp.duration', t10_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t10_psg2_resp.stop();
    // the Routine "sspsg10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t11_load_resp_allKeys;
var zsd11Components;
function zsd11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd11' ---
    t = 0;
    zsd11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd11.started', globalClock.getTime());
    t11_load_resp.keys = undefined;
    t11_load_resp.rt = undefined;
    _t11_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd11Components = [];
    zsd11Components.push(zsd1_11);
    zsd11Components.push(t11_load);
    zsd11Components.push(t11_load_resp);
    
    for (const thisComponent of zsd11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd11' ---
    // get current time
    t = zsd11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_11* updates
    if (t >= 0.0 && zsd1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_11.tStart = t;  // (not accounting for frame time here)
      zsd1_11.frameNStart = frameN;  // exact frame index
      
      zsd1_11.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_11.setAutoDraw(false);
    }
    
    
    // *t11_load* updates
    if (t >= 0.5 && t11_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_load.tStart = t;  // (not accounting for frame time here)
      t11_load.frameNStart = frameN;  // exact frame index
      
      t11_load.setAutoDraw(true);
    }
    
    
    // *t11_load_resp* updates
    if (t >= 0.5 && t11_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_load_resp.tStart = t;  // (not accounting for frame time here)
      t11_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t11_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t11_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t11_load_resp.clearEvents(); });
    }
    
    if (t11_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t11_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t11_load_resp_allKeys = _t11_load_resp_allKeys.concat(theseKeys);
      if (_t11_load_resp_allKeys.length > 0) {
        t11_load_resp.keys = _t11_load_resp_allKeys[_t11_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t11_load_resp.rt = _t11_load_resp_allKeys[_t11_load_resp_allKeys.length - 1].rt;
        t11_load_resp.duration = _t11_load_resp_allKeys[_t11_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd11' ---
    for (const thisComponent of zsd11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd11.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t11_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t11_load_resp.keys', t11_load_resp.keys);
    if (typeof t11_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t11_load_resp.rt', t11_load_resp.rt);
        psychoJS.experiment.addData('t11_load_resp.duration', t11_load_resp.duration);
        routineTimer.reset();
        }
    
    t11_load_resp.stop();
    // the Routine "zsd11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t11_zj_resp_allKeys;
var zj11Components;
function zj11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj11' ---
    t = 0;
    zj11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj11.started', globalClock.getTime());
    t11_zj_resp.keys = undefined;
    t11_zj_resp.rt = undefined;
    _t11_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj11Components = [];
    zj11Components.push(t11_zj);
    zj11Components.push(t11_zj_resp);
    
    for (const thisComponent of zj11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj11' ---
    // get current time
    t = zj11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t11_zj* updates
    if (t >= 0 && t11_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_zj.tStart = t;  // (not accounting for frame time here)
      t11_zj.frameNStart = frameN;  // exact frame index
      
      t11_zj.setAutoDraw(true);
    }
    
    
    // *t11_zj_resp* updates
    if (t >= 0 && t11_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_zj_resp.tStart = t;  // (not accounting for frame time here)
      t11_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t11_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t11_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t11_zj_resp.clearEvents(); });
    }
    
    if (t11_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t11_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t11_zj_resp_allKeys = _t11_zj_resp_allKeys.concat(theseKeys);
      if (_t11_zj_resp_allKeys.length > 0) {
        t11_zj_resp.keys = _t11_zj_resp_allKeys[_t11_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t11_zj_resp.rt = _t11_zj_resp_allKeys[_t11_zj_resp_allKeys.length - 1].rt;
        t11_zj_resp.duration = _t11_zj_resp_allKeys[_t11_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj11' ---
    for (const thisComponent of zj11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj11.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t11_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t11_zj_resp.keys', t11_zj_resp.keys);
    if (typeof t11_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t11_zj_resp.rt', t11_zj_resp.rt);
        psychoJS.experiment.addData('t11_zj_resp.duration', t11_zj_resp.duration);
        routineTimer.reset();
        }
    
    t11_zj_resp.stop();
    // the Routine "zj11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t11_psg1_resp_allKeys;
var trail11Components;
function trail11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail11' ---
    t = 0;
    trail11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail11.started', globalClock.getTime());
    t11_psg1_resp.keys = undefined;
    t11_psg1_resp.rt = undefined;
    _t11_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail11Components = [];
    trail11Components.push(t11_psg1);
    trail11Components.push(time_11);
    trail11Components.push(countdown_11);
    trail11Components.push(t11_psg1_resp);
    
    for (const thisComponent of trail11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail11' ---
    // get current time
    t = trail11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t11_psg1* updates
    if (t >= 0.0 && t11_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_psg1.tStart = t;  // (not accounting for frame time here)
      t11_psg1.frameNStart = frameN;  // exact frame index
      
      t11_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t11_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t11_psg1.setAutoDraw(false);
    }
    
    
    // *time_11* updates
    if (t >= 0.0 && time_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_11.tStart = t;  // (not accounting for frame time here)
      time_11.frameNStart = frameN;  // exact frame index
      
      time_11.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_11.setAutoDraw(false);
    }
    
    
    if (countdown_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_11.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_11* updates
    if (t >= 0.0 && countdown_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_11.tStart = t;  // (not accounting for frame time here)
      countdown_11.frameNStart = frameN;  // exact frame index
      
      countdown_11.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_11.setAutoDraw(false);
    }
    
    
    // *t11_psg1_resp* updates
    if (t >= 0.0 && t11_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t11_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t11_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t11_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t11_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t11_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t11_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t11_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t11_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t11_psg1_resp_allKeys = _t11_psg1_resp_allKeys.concat(theseKeys);
      if (_t11_psg1_resp_allKeys.length > 0) {
        t11_psg1_resp.keys = _t11_psg1_resp_allKeys[_t11_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t11_psg1_resp.rt = _t11_psg1_resp_allKeys[_t11_psg1_resp_allKeys.length - 1].rt;
        t11_psg1_resp.duration = _t11_psg1_resp_allKeys[_t11_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail11' ---
    for (const thisComponent of trail11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail11.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t11_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t11_psg1_resp.keys', t11_psg1_resp.keys);
    if (typeof t11_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t11_psg1_resp.rt', t11_psg1_resp.rt);
        psychoJS.experiment.addData('t11_psg1_resp.duration', t11_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t11_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t11_recall_resp_allKeys;
var recall11Components;
function recall11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall11' ---
    t = 0;
    recall11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall11.started', globalClock.getTime());
    t11_recall_resp.keys = undefined;
    t11_recall_resp.rt = undefined;
    _t11_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall11Components = [];
    recall11Components.push(t11_recall);
    recall11Components.push(t11_recall_resp);
    
    for (const thisComponent of recall11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall11' ---
    // get current time
    t = recall11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t11_recall* updates
    if (t >= 0 && t11_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_recall.tStart = t;  // (not accounting for frame time here)
      t11_recall.frameNStart = frameN;  // exact frame index
      
      t11_recall.setAutoDraw(true);
    }
    
    
    // *t11_recall_resp* updates
    if (t >= 0 && t11_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_recall_resp.tStart = t;  // (not accounting for frame time here)
      t11_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t11_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t11_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t11_recall_resp.clearEvents(); });
    }
    
    if (t11_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t11_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t11_recall_resp_allKeys = _t11_recall_resp_allKeys.concat(theseKeys);
      if (_t11_recall_resp_allKeys.length > 0) {
        t11_recall_resp.keys = _t11_recall_resp_allKeys[_t11_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t11_recall_resp.rt = _t11_recall_resp_allKeys[_t11_recall_resp_allKeys.length - 1].rt;
        t11_recall_resp.duration = _t11_recall_resp_allKeys[_t11_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t11_recall_resp.keys == 'a') {
            t11_recall_resp.corr = 1;
        } else {
            t11_recall_resp.corr = 0;
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
    for (const thisComponent of recall11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall11' ---
    for (const thisComponent of recall11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall11.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t11_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('a')) {
         t11_recall_resp.corr = 1;  // correct non-response
      } else {
         t11_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t11_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t11_recall_resp.keys', t11_recall_resp.keys);
    psychoJS.experiment.addData('t11_recall_resp.corr', t11_recall_resp.corr);
    if (typeof t11_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t11_recall_resp.rt', t11_recall_resp.rt);
        psychoJS.experiment.addData('t11_recall_resp.duration', t11_recall_resp.duration);
        routineTimer.reset();
        }
    
    t11_recall_resp.stop();
    // the Routine "recall11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback11Components;
function feedback11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback11' ---
    t = 0;
    feedback11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback11.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_11
    if (t11_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_11.setText(feedback);
    // keep track of which components have finished
    feedback11Components = [];
    feedback11Components.push(fankui_11);
    
    for (const thisComponent of feedback11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback11' ---
    // get current time
    t = feedback11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_11* updates
    if (t >= 0.0 && fankui_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_11.tStart = t;  // (not accounting for frame time here)
      fankui_11.frameNStart = frameN;  // exact frame index
      
      fankui_11.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_11.setAutoDraw(false);
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
    for (const thisComponent of feedback11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback11' ---
    for (const thisComponent of feedback11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback11.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t11_ss_resp_allKeys;
var ss11Components;
function ss11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss11' ---
    t = 0;
    ss11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss11.started', globalClock.getTime());
    t11_ss_resp.keys = undefined;
    t11_ss_resp.rt = undefined;
    _t11_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss11Components = [];
    ss11Components.push(t11_ss);
    ss11Components.push(t11_ss_resp);
    
    for (const thisComponent of ss11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss11' ---
    // get current time
    t = ss11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t11_ss* updates
    if (t >= 0.0 && t11_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_ss.tStart = t;  // (not accounting for frame time here)
      t11_ss.frameNStart = frameN;  // exact frame index
      
      t11_ss.setAutoDraw(true);
    }
    
    
    // *t11_ss_resp* updates
    if (t >= 0.0 && t11_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_ss_resp.tStart = t;  // (not accounting for frame time here)
      t11_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t11_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t11_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t11_ss_resp.clearEvents(); });
    }
    
    if (t11_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t11_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t11_ss_resp_allKeys = _t11_ss_resp_allKeys.concat(theseKeys);
      if (_t11_ss_resp_allKeys.length > 0) {
        t11_ss_resp.keys = _t11_ss_resp_allKeys[_t11_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t11_ss_resp.rt = _t11_ss_resp_allKeys[_t11_ss_resp_allKeys.length - 1].rt;
        t11_ss_resp.duration = _t11_ss_resp_allKeys[_t11_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss11' ---
    for (const thisComponent of ss11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss11.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t11_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t11_ss_resp.keys', t11_ss_resp.keys);
    if (typeof t11_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t11_ss_resp.rt', t11_ss_resp.rt);
        psychoJS.experiment.addData('t11_ss_resp.duration', t11_ss_resp.duration);
        routineTimer.reset();
        }
    
    t11_ss_resp.stop();
    // the Routine "ss11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t11_psg2_resp_allKeys;
var sspsg11Components;
function sspsg11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg11' ---
    t = 0;
    sspsg11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg11.started', globalClock.getTime());
    t11_psg2_resp.keys = undefined;
    t11_psg2_resp.rt = undefined;
    _t11_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg11Components = [];
    sspsg11Components.push(t11_psg2);
    sspsg11Components.push(clock11_2);
    sspsg11Components.push(t11_psg2_choice);
    sspsg11Components.push(t11_psg2_resp);
    
    for (const thisComponent of sspsg11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg11' ---
    // get current time
    t = sspsg11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t11_psg2* updates
    if (t >= 0.0 && t11_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_psg2.tStart = t;  // (not accounting for frame time here)
      t11_psg2.frameNStart = frameN;  // exact frame index
      
      t11_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t11_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t11_psg2.setAutoDraw(false);
    }
    
    
    if (clock11_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock11_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock11_2* updates
    if (t >= 0.0 && clock11_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock11_2.tStart = t;  // (not accounting for frame time here)
      clock11_2.frameNStart = frameN;  // exact frame index
      
      clock11_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock11_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock11_2.setAutoDraw(false);
    }
    
    
    // *t11_psg2_choice* updates
    if (t >= 10 && t11_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t11_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t11_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t11_psg2_resp* updates
    if (t >= 10 && t11_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t11_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t11_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t11_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t11_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t11_psg2_resp.clearEvents(); });
    }
    
    if (t11_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t11_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t11_psg2_resp_allKeys = _t11_psg2_resp_allKeys.concat(theseKeys);
      if (_t11_psg2_resp_allKeys.length > 0) {
        t11_psg2_resp.keys = _t11_psg2_resp_allKeys[_t11_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t11_psg2_resp.rt = _t11_psg2_resp_allKeys[_t11_psg2_resp_allKeys.length - 1].rt;
        t11_psg2_resp.duration = _t11_psg2_resp_allKeys[_t11_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg11' ---
    for (const thisComponent of sspsg11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg11.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t11_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t11_psg2_resp.keys', t11_psg2_resp.keys);
    if (typeof t11_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t11_psg2_resp.rt', t11_psg2_resp.rt);
        psychoJS.experiment.addData('t11_psg2_resp.duration', t11_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t11_psg2_resp.stop();
    // the Routine "sspsg11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t12_load_resp_allKeys;
var zsd12Components;
function zsd12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd12' ---
    t = 0;
    zsd12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd12.started', globalClock.getTime());
    t12_load_resp.keys = undefined;
    t12_load_resp.rt = undefined;
    _t12_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd12Components = [];
    zsd12Components.push(zsd1_12);
    zsd12Components.push(t12_load);
    zsd12Components.push(t12_load_resp);
    
    for (const thisComponent of zsd12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd12' ---
    // get current time
    t = zsd12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_12* updates
    if (t >= 0.0 && zsd1_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_12.tStart = t;  // (not accounting for frame time here)
      zsd1_12.frameNStart = frameN;  // exact frame index
      
      zsd1_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_12.setAutoDraw(false);
    }
    
    
    // *t12_load* updates
    if (t >= 0.5 && t12_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_load.tStart = t;  // (not accounting for frame time here)
      t12_load.frameNStart = frameN;  // exact frame index
      
      t12_load.setAutoDraw(true);
    }
    
    
    // *t12_load_resp* updates
    if (t >= 0.5 && t12_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_load_resp.tStart = t;  // (not accounting for frame time here)
      t12_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t12_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t12_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t12_load_resp.clearEvents(); });
    }
    
    if (t12_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t12_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t12_load_resp_allKeys = _t12_load_resp_allKeys.concat(theseKeys);
      if (_t12_load_resp_allKeys.length > 0) {
        t12_load_resp.keys = _t12_load_resp_allKeys[_t12_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t12_load_resp.rt = _t12_load_resp_allKeys[_t12_load_resp_allKeys.length - 1].rt;
        t12_load_resp.duration = _t12_load_resp_allKeys[_t12_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd12' ---
    for (const thisComponent of zsd12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd12.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t12_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t12_load_resp.keys', t12_load_resp.keys);
    if (typeof t12_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t12_load_resp.rt', t12_load_resp.rt);
        psychoJS.experiment.addData('t12_load_resp.duration', t12_load_resp.duration);
        routineTimer.reset();
        }
    
    t12_load_resp.stop();
    // the Routine "zsd12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t12_zj_resp_allKeys;
var zj12Components;
function zj12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj12' ---
    t = 0;
    zj12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj12.started', globalClock.getTime());
    t12_zj_resp.keys = undefined;
    t12_zj_resp.rt = undefined;
    _t12_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj12Components = [];
    zj12Components.push(t12_zj);
    zj12Components.push(t12_zj_resp);
    
    for (const thisComponent of zj12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj12' ---
    // get current time
    t = zj12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t12_zj* updates
    if (t >= 0 && t12_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_zj.tStart = t;  // (not accounting for frame time here)
      t12_zj.frameNStart = frameN;  // exact frame index
      
      t12_zj.setAutoDraw(true);
    }
    
    
    // *t12_zj_resp* updates
    if (t >= 0 && t12_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_zj_resp.tStart = t;  // (not accounting for frame time here)
      t12_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t12_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t12_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t12_zj_resp.clearEvents(); });
    }
    
    if (t12_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t12_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t12_zj_resp_allKeys = _t12_zj_resp_allKeys.concat(theseKeys);
      if (_t12_zj_resp_allKeys.length > 0) {
        t12_zj_resp.keys = _t12_zj_resp_allKeys[_t12_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t12_zj_resp.rt = _t12_zj_resp_allKeys[_t12_zj_resp_allKeys.length - 1].rt;
        t12_zj_resp.duration = _t12_zj_resp_allKeys[_t12_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj12' ---
    for (const thisComponent of zj12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj12.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t12_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t12_zj_resp.keys', t12_zj_resp.keys);
    if (typeof t12_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t12_zj_resp.rt', t12_zj_resp.rt);
        psychoJS.experiment.addData('t12_zj_resp.duration', t12_zj_resp.duration);
        routineTimer.reset();
        }
    
    t12_zj_resp.stop();
    // the Routine "zj12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t12_psg1_resp_allKeys;
var trail12Components;
function trail12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail12' ---
    t = 0;
    trail12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail12.started', globalClock.getTime());
    t12_psg1_resp.keys = undefined;
    t12_psg1_resp.rt = undefined;
    _t12_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail12Components = [];
    trail12Components.push(t12_psg1);
    trail12Components.push(time_12);
    trail12Components.push(countdown_12);
    trail12Components.push(t12_psg1_resp);
    
    for (const thisComponent of trail12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail12' ---
    // get current time
    t = trail12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t12_psg1* updates
    if (t >= 0.0 && t12_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_psg1.tStart = t;  // (not accounting for frame time here)
      t12_psg1.frameNStart = frameN;  // exact frame index
      
      t12_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t12_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t12_psg1.setAutoDraw(false);
    }
    
    
    // *time_12* updates
    if (t >= 0.0 && time_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_12.tStart = t;  // (not accounting for frame time here)
      time_12.frameNStart = frameN;  // exact frame index
      
      time_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_12.setAutoDraw(false);
    }
    
    
    if (countdown_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_12.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_12* updates
    if (t >= 0.0 && countdown_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_12.tStart = t;  // (not accounting for frame time here)
      countdown_12.frameNStart = frameN;  // exact frame index
      
      countdown_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_12.setAutoDraw(false);
    }
    
    
    // *t12_psg1_resp* updates
    if (t >= 0.0 && t12_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t12_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t12_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t12_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t12_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t12_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t12_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t12_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t12_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t12_psg1_resp_allKeys = _t12_psg1_resp_allKeys.concat(theseKeys);
      if (_t12_psg1_resp_allKeys.length > 0) {
        t12_psg1_resp.keys = _t12_psg1_resp_allKeys[_t12_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t12_psg1_resp.rt = _t12_psg1_resp_allKeys[_t12_psg1_resp_allKeys.length - 1].rt;
        t12_psg1_resp.duration = _t12_psg1_resp_allKeys[_t12_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail12' ---
    for (const thisComponent of trail12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail12.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t12_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t12_psg1_resp.keys', t12_psg1_resp.keys);
    if (typeof t12_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t12_psg1_resp.rt', t12_psg1_resp.rt);
        psychoJS.experiment.addData('t12_psg1_resp.duration', t12_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t12_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t12_recall_resp_allKeys;
var recall12Components;
function recall12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall12' ---
    t = 0;
    recall12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall12.started', globalClock.getTime());
    t12_recall_resp.keys = undefined;
    t12_recall_resp.rt = undefined;
    _t12_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall12Components = [];
    recall12Components.push(t12_recall);
    recall12Components.push(t12_recall_resp);
    
    for (const thisComponent of recall12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall12' ---
    // get current time
    t = recall12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t12_recall* updates
    if (t >= 0 && t12_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_recall.tStart = t;  // (not accounting for frame time here)
      t12_recall.frameNStart = frameN;  // exact frame index
      
      t12_recall.setAutoDraw(true);
    }
    
    
    // *t12_recall_resp* updates
    if (t >= 0 && t12_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_recall_resp.tStart = t;  // (not accounting for frame time here)
      t12_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t12_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t12_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t12_recall_resp.clearEvents(); });
    }
    
    if (t12_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t12_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t12_recall_resp_allKeys = _t12_recall_resp_allKeys.concat(theseKeys);
      if (_t12_recall_resp_allKeys.length > 0) {
        t12_recall_resp.keys = _t12_recall_resp_allKeys[_t12_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t12_recall_resp.rt = _t12_recall_resp_allKeys[_t12_recall_resp_allKeys.length - 1].rt;
        t12_recall_resp.duration = _t12_recall_resp_allKeys[_t12_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t12_recall_resp.keys == 'd') {
            t12_recall_resp.corr = 1;
        } else {
            t12_recall_resp.corr = 0;
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
    for (const thisComponent of recall12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall12' ---
    for (const thisComponent of recall12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall12.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t12_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('d')) {
         t12_recall_resp.corr = 1;  // correct non-response
      } else {
         t12_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t12_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t12_recall_resp.keys', t12_recall_resp.keys);
    psychoJS.experiment.addData('t12_recall_resp.corr', t12_recall_resp.corr);
    if (typeof t12_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t12_recall_resp.rt', t12_recall_resp.rt);
        psychoJS.experiment.addData('t12_recall_resp.duration', t12_recall_resp.duration);
        routineTimer.reset();
        }
    
    t12_recall_resp.stop();
    // the Routine "recall12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback12Components;
function feedback12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback12' ---
    t = 0;
    feedback12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback12.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_12
    if (t12_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_12.setText(feedback);
    // keep track of which components have finished
    feedback12Components = [];
    feedback12Components.push(fankui_12);
    
    for (const thisComponent of feedback12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback12' ---
    // get current time
    t = feedback12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_12* updates
    if (t >= 0.0 && fankui_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_12.tStart = t;  // (not accounting for frame time here)
      fankui_12.frameNStart = frameN;  // exact frame index
      
      fankui_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_12.setAutoDraw(false);
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
    for (const thisComponent of feedback12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback12' ---
    for (const thisComponent of feedback12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback12.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t12_ss_resp_allKeys;
var ss12Components;
function ss12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss12' ---
    t = 0;
    ss12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss12.started', globalClock.getTime());
    t12_ss_resp.keys = undefined;
    t12_ss_resp.rt = undefined;
    _t12_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss12Components = [];
    ss12Components.push(t12_ss);
    ss12Components.push(t12_ss_resp);
    
    for (const thisComponent of ss12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss12' ---
    // get current time
    t = ss12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t12_ss* updates
    if (t >= 0.0 && t12_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_ss.tStart = t;  // (not accounting for frame time here)
      t12_ss.frameNStart = frameN;  // exact frame index
      
      t12_ss.setAutoDraw(true);
    }
    
    
    // *t12_ss_resp* updates
    if (t >= 0.0 && t12_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_ss_resp.tStart = t;  // (not accounting for frame time here)
      t12_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t12_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t12_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t12_ss_resp.clearEvents(); });
    }
    
    if (t12_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t12_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t12_ss_resp_allKeys = _t12_ss_resp_allKeys.concat(theseKeys);
      if (_t12_ss_resp_allKeys.length > 0) {
        t12_ss_resp.keys = _t12_ss_resp_allKeys[_t12_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t12_ss_resp.rt = _t12_ss_resp_allKeys[_t12_ss_resp_allKeys.length - 1].rt;
        t12_ss_resp.duration = _t12_ss_resp_allKeys[_t12_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss12' ---
    for (const thisComponent of ss12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss12.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t12_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t12_ss_resp.keys', t12_ss_resp.keys);
    if (typeof t12_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t12_ss_resp.rt', t12_ss_resp.rt);
        psychoJS.experiment.addData('t12_ss_resp.duration', t12_ss_resp.duration);
        routineTimer.reset();
        }
    
    t12_ss_resp.stop();
    // the Routine "ss12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t12_psg2_resp_allKeys;
var sspsg12Components;
function sspsg12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg12' ---
    t = 0;
    sspsg12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg12.started', globalClock.getTime());
    t12_psg2_resp.keys = undefined;
    t12_psg2_resp.rt = undefined;
    _t12_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg12Components = [];
    sspsg12Components.push(t12_psg2);
    sspsg12Components.push(clock12_2);
    sspsg12Components.push(t12_psg2_choice);
    sspsg12Components.push(t12_psg2_resp);
    
    for (const thisComponent of sspsg12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg12' ---
    // get current time
    t = sspsg12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t12_psg2* updates
    if (t >= 0.0 && t12_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_psg2.tStart = t;  // (not accounting for frame time here)
      t12_psg2.frameNStart = frameN;  // exact frame index
      
      t12_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t12_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t12_psg2.setAutoDraw(false);
    }
    
    
    if (clock12_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock12_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock12_2* updates
    if (t >= 0.0 && clock12_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock12_2.tStart = t;  // (not accounting for frame time here)
      clock12_2.frameNStart = frameN;  // exact frame index
      
      clock12_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock12_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock12_2.setAutoDraw(false);
    }
    
    
    // *t12_psg2_choice* updates
    if (t >= 10 && t12_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t12_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t12_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t12_psg2_resp* updates
    if (t >= 10 && t12_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t12_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t12_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t12_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t12_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t12_psg2_resp.clearEvents(); });
    }
    
    if (t12_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t12_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t12_psg2_resp_allKeys = _t12_psg2_resp_allKeys.concat(theseKeys);
      if (_t12_psg2_resp_allKeys.length > 0) {
        t12_psg2_resp.keys = _t12_psg2_resp_allKeys[_t12_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t12_psg2_resp.rt = _t12_psg2_resp_allKeys[_t12_psg2_resp_allKeys.length - 1].rt;
        t12_psg2_resp.duration = _t12_psg2_resp_allKeys[_t12_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg12' ---
    for (const thisComponent of sspsg12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg12.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t12_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t12_psg2_resp.keys', t12_psg2_resp.keys);
    if (typeof t12_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t12_psg2_resp.rt', t12_psg2_resp.rt);
        psychoJS.experiment.addData('t12_psg2_resp.duration', t12_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t12_psg2_resp.stop();
    // the Routine "sspsg12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t13_load_resp_allKeys;
var zsd13Components;
function zsd13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd13' ---
    t = 0;
    zsd13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd13.started', globalClock.getTime());
    t13_load_resp.keys = undefined;
    t13_load_resp.rt = undefined;
    _t13_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd13Components = [];
    zsd13Components.push(zsd1_13);
    zsd13Components.push(t13_load);
    zsd13Components.push(t13_load_resp);
    
    for (const thisComponent of zsd13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd13' ---
    // get current time
    t = zsd13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_13* updates
    if (t >= 0.0 && zsd1_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_13.tStart = t;  // (not accounting for frame time here)
      zsd1_13.frameNStart = frameN;  // exact frame index
      
      zsd1_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_13.setAutoDraw(false);
    }
    
    
    // *t13_load* updates
    if (t >= 0.5 && t13_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_load.tStart = t;  // (not accounting for frame time here)
      t13_load.frameNStart = frameN;  // exact frame index
      
      t13_load.setAutoDraw(true);
    }
    
    
    // *t13_load_resp* updates
    if (t >= 0.5 && t13_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_load_resp.tStart = t;  // (not accounting for frame time here)
      t13_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t13_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t13_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t13_load_resp.clearEvents(); });
    }
    
    if (t13_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t13_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t13_load_resp_allKeys = _t13_load_resp_allKeys.concat(theseKeys);
      if (_t13_load_resp_allKeys.length > 0) {
        t13_load_resp.keys = _t13_load_resp_allKeys[_t13_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t13_load_resp.rt = _t13_load_resp_allKeys[_t13_load_resp_allKeys.length - 1].rt;
        t13_load_resp.duration = _t13_load_resp_allKeys[_t13_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd13' ---
    for (const thisComponent of zsd13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd13.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t13_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t13_load_resp.keys', t13_load_resp.keys);
    if (typeof t13_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t13_load_resp.rt', t13_load_resp.rt);
        psychoJS.experiment.addData('t13_load_resp.duration', t13_load_resp.duration);
        routineTimer.reset();
        }
    
    t13_load_resp.stop();
    // the Routine "zsd13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t13_zj_resp_allKeys;
var zj13Components;
function zj13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj13' ---
    t = 0;
    zj13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj13.started', globalClock.getTime());
    t13_zj_resp.keys = undefined;
    t13_zj_resp.rt = undefined;
    _t13_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj13Components = [];
    zj13Components.push(t13_zj);
    zj13Components.push(t13_zj_resp);
    
    for (const thisComponent of zj13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj13' ---
    // get current time
    t = zj13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t13_zj* updates
    if (t >= 0 && t13_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_zj.tStart = t;  // (not accounting for frame time here)
      t13_zj.frameNStart = frameN;  // exact frame index
      
      t13_zj.setAutoDraw(true);
    }
    
    
    // *t13_zj_resp* updates
    if (t >= 0 && t13_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_zj_resp.tStart = t;  // (not accounting for frame time here)
      t13_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t13_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t13_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t13_zj_resp.clearEvents(); });
    }
    
    if (t13_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t13_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t13_zj_resp_allKeys = _t13_zj_resp_allKeys.concat(theseKeys);
      if (_t13_zj_resp_allKeys.length > 0) {
        t13_zj_resp.keys = _t13_zj_resp_allKeys[_t13_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t13_zj_resp.rt = _t13_zj_resp_allKeys[_t13_zj_resp_allKeys.length - 1].rt;
        t13_zj_resp.duration = _t13_zj_resp_allKeys[_t13_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj13' ---
    for (const thisComponent of zj13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj13.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t13_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t13_zj_resp.keys', t13_zj_resp.keys);
    if (typeof t13_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t13_zj_resp.rt', t13_zj_resp.rt);
        psychoJS.experiment.addData('t13_zj_resp.duration', t13_zj_resp.duration);
        routineTimer.reset();
        }
    
    t13_zj_resp.stop();
    // the Routine "zj13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t13_psg1_resp_allKeys;
var trail13Components;
function trail13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail13' ---
    t = 0;
    trail13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail13.started', globalClock.getTime());
    t13_psg1_resp.keys = undefined;
    t13_psg1_resp.rt = undefined;
    _t13_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail13Components = [];
    trail13Components.push(t13_psg1);
    trail13Components.push(time_13);
    trail13Components.push(countdown_13);
    trail13Components.push(t13_psg1_resp);
    
    for (const thisComponent of trail13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail13' ---
    // get current time
    t = trail13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t13_psg1* updates
    if (t >= 0.0 && t13_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_psg1.tStart = t;  // (not accounting for frame time here)
      t13_psg1.frameNStart = frameN;  // exact frame index
      
      t13_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t13_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t13_psg1.setAutoDraw(false);
    }
    
    
    // *time_13* updates
    if (t >= 0.0 && time_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_13.tStart = t;  // (not accounting for frame time here)
      time_13.frameNStart = frameN;  // exact frame index
      
      time_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_13.setAutoDraw(false);
    }
    
    
    if (countdown_13.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_13.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_13* updates
    if (t >= 0.0 && countdown_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_13.tStart = t;  // (not accounting for frame time here)
      countdown_13.frameNStart = frameN;  // exact frame index
      
      countdown_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_13.setAutoDraw(false);
    }
    
    
    // *t13_psg1_resp* updates
    if (t >= 0.0 && t13_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t13_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t13_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t13_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t13_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t13_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t13_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t13_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t13_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t13_psg1_resp_allKeys = _t13_psg1_resp_allKeys.concat(theseKeys);
      if (_t13_psg1_resp_allKeys.length > 0) {
        t13_psg1_resp.keys = _t13_psg1_resp_allKeys[_t13_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t13_psg1_resp.rt = _t13_psg1_resp_allKeys[_t13_psg1_resp_allKeys.length - 1].rt;
        t13_psg1_resp.duration = _t13_psg1_resp_allKeys[_t13_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail13' ---
    for (const thisComponent of trail13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail13.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t13_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t13_psg1_resp.keys', t13_psg1_resp.keys);
    if (typeof t13_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t13_psg1_resp.rt', t13_psg1_resp.rt);
        psychoJS.experiment.addData('t13_psg1_resp.duration', t13_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t13_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t13_recall_resp_allKeys;
var recall13Components;
function recall13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall13' ---
    t = 0;
    recall13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall13.started', globalClock.getTime());
    t13_recall_resp.keys = undefined;
    t13_recall_resp.rt = undefined;
    _t13_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall13Components = [];
    recall13Components.push(t13_recall);
    recall13Components.push(t13_recall_resp);
    
    for (const thisComponent of recall13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall13' ---
    // get current time
    t = recall13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t13_recall* updates
    if (t >= 0 && t13_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_recall.tStart = t;  // (not accounting for frame time here)
      t13_recall.frameNStart = frameN;  // exact frame index
      
      t13_recall.setAutoDraw(true);
    }
    
    
    // *t13_recall_resp* updates
    if (t >= 0 && t13_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_recall_resp.tStart = t;  // (not accounting for frame time here)
      t13_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t13_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t13_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t13_recall_resp.clearEvents(); });
    }
    
    if (t13_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t13_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t13_recall_resp_allKeys = _t13_recall_resp_allKeys.concat(theseKeys);
      if (_t13_recall_resp_allKeys.length > 0) {
        t13_recall_resp.keys = _t13_recall_resp_allKeys[_t13_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t13_recall_resp.rt = _t13_recall_resp_allKeys[_t13_recall_resp_allKeys.length - 1].rt;
        t13_recall_resp.duration = _t13_recall_resp_allKeys[_t13_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t13_recall_resp.keys == 'b') {
            t13_recall_resp.corr = 1;
        } else {
            t13_recall_resp.corr = 0;
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
    for (const thisComponent of recall13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall13' ---
    for (const thisComponent of recall13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall13.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t13_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('b')) {
         t13_recall_resp.corr = 1;  // correct non-response
      } else {
         t13_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t13_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t13_recall_resp.keys', t13_recall_resp.keys);
    psychoJS.experiment.addData('t13_recall_resp.corr', t13_recall_resp.corr);
    if (typeof t13_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t13_recall_resp.rt', t13_recall_resp.rt);
        psychoJS.experiment.addData('t13_recall_resp.duration', t13_recall_resp.duration);
        routineTimer.reset();
        }
    
    t13_recall_resp.stop();
    // the Routine "recall13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback13Components;
function feedback13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback13' ---
    t = 0;
    feedback13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback13.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_13
    if (t13_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_13.setText(feedback);
    // keep track of which components have finished
    feedback13Components = [];
    feedback13Components.push(fankui_13);
    
    for (const thisComponent of feedback13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback13' ---
    // get current time
    t = feedback13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_13* updates
    if (t >= 0.0 && fankui_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_13.tStart = t;  // (not accounting for frame time here)
      fankui_13.frameNStart = frameN;  // exact frame index
      
      fankui_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_13.setAutoDraw(false);
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
    for (const thisComponent of feedback13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback13' ---
    for (const thisComponent of feedback13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback13.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t13_ss_resp_allKeys;
var ss13Components;
function ss13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss13' ---
    t = 0;
    ss13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss13.started', globalClock.getTime());
    t13_ss_resp.keys = undefined;
    t13_ss_resp.rt = undefined;
    _t13_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss13Components = [];
    ss13Components.push(t13_ss);
    ss13Components.push(t13_ss_resp);
    
    for (const thisComponent of ss13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss13' ---
    // get current time
    t = ss13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t13_ss* updates
    if (t >= 0.0 && t13_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_ss.tStart = t;  // (not accounting for frame time here)
      t13_ss.frameNStart = frameN;  // exact frame index
      
      t13_ss.setAutoDraw(true);
    }
    
    
    // *t13_ss_resp* updates
    if (t >= 0.0 && t13_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_ss_resp.tStart = t;  // (not accounting for frame time here)
      t13_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t13_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t13_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t13_ss_resp.clearEvents(); });
    }
    
    if (t13_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t13_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t13_ss_resp_allKeys = _t13_ss_resp_allKeys.concat(theseKeys);
      if (_t13_ss_resp_allKeys.length > 0) {
        t13_ss_resp.keys = _t13_ss_resp_allKeys[_t13_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t13_ss_resp.rt = _t13_ss_resp_allKeys[_t13_ss_resp_allKeys.length - 1].rt;
        t13_ss_resp.duration = _t13_ss_resp_allKeys[_t13_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss13' ---
    for (const thisComponent of ss13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss13.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t13_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t13_ss_resp.keys', t13_ss_resp.keys);
    if (typeof t13_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t13_ss_resp.rt', t13_ss_resp.rt);
        psychoJS.experiment.addData('t13_ss_resp.duration', t13_ss_resp.duration);
        routineTimer.reset();
        }
    
    t13_ss_resp.stop();
    // the Routine "ss13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t13_psg2_resp_allKeys;
var sspsg13Components;
function sspsg13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg13' ---
    t = 0;
    sspsg13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg13.started', globalClock.getTime());
    t13_psg2_resp.keys = undefined;
    t13_psg2_resp.rt = undefined;
    _t13_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg13Components = [];
    sspsg13Components.push(t13_psg2);
    sspsg13Components.push(clock13_2);
    sspsg13Components.push(t13_psg2_choice);
    sspsg13Components.push(t13_psg2_resp);
    
    for (const thisComponent of sspsg13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg13' ---
    // get current time
    t = sspsg13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t13_psg2* updates
    if (t >= 0.0 && t13_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_psg2.tStart = t;  // (not accounting for frame time here)
      t13_psg2.frameNStart = frameN;  // exact frame index
      
      t13_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t13_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t13_psg2.setAutoDraw(false);
    }
    
    
    if (clock13_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock13_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock13_2* updates
    if (t >= 0.0 && clock13_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock13_2.tStart = t;  // (not accounting for frame time here)
      clock13_2.frameNStart = frameN;  // exact frame index
      
      clock13_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock13_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock13_2.setAutoDraw(false);
    }
    
    
    // *t13_psg2_choice* updates
    if (t >= 10 && t13_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t13_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t13_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t13_psg2_resp* updates
    if (t >= 10 && t13_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t13_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t13_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t13_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t13_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t13_psg2_resp.clearEvents(); });
    }
    
    if (t13_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t13_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t13_psg2_resp_allKeys = _t13_psg2_resp_allKeys.concat(theseKeys);
      if (_t13_psg2_resp_allKeys.length > 0) {
        t13_psg2_resp.keys = _t13_psg2_resp_allKeys[_t13_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t13_psg2_resp.rt = _t13_psg2_resp_allKeys[_t13_psg2_resp_allKeys.length - 1].rt;
        t13_psg2_resp.duration = _t13_psg2_resp_allKeys[_t13_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg13' ---
    for (const thisComponent of sspsg13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg13.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t13_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t13_psg2_resp.keys', t13_psg2_resp.keys);
    if (typeof t13_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t13_psg2_resp.rt', t13_psg2_resp.rt);
        psychoJS.experiment.addData('t13_psg2_resp.duration', t13_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t13_psg2_resp.stop();
    // the Routine "sspsg13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t14_load_resp_allKeys;
var zsd14Components;
function zsd14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zsd14' ---
    t = 0;
    zsd14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zsd14.started', globalClock.getTime());
    t14_load_resp.keys = undefined;
    t14_load_resp.rt = undefined;
    _t14_load_resp_allKeys = [];
    // keep track of which components have finished
    zsd14Components = [];
    zsd14Components.push(zsd1_14);
    zsd14Components.push(t14_load);
    zsd14Components.push(t14_load_resp);
    
    for (const thisComponent of zsd14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zsd14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zsd14' ---
    // get current time
    t = zsd14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zsd1_14* updates
    if (t >= 0.0 && zsd1_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zsd1_14.tStart = t;  // (not accounting for frame time here)
      zsd1_14.frameNStart = frameN;  // exact frame index
      
      zsd1_14.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (zsd1_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      zsd1_14.setAutoDraw(false);
    }
    
    
    // *t14_load* updates
    if (t >= 0.5 && t14_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_load.tStart = t;  // (not accounting for frame time here)
      t14_load.frameNStart = frameN;  // exact frame index
      
      t14_load.setAutoDraw(true);
    }
    
    
    // *t14_load_resp* updates
    if (t >= 0.5 && t14_load_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_load_resp.tStart = t;  // (not accounting for frame time here)
      t14_load_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t14_load_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t14_load_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t14_load_resp.clearEvents(); });
    }
    
    if (t14_load_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t14_load_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t14_load_resp_allKeys = _t14_load_resp_allKeys.concat(theseKeys);
      if (_t14_load_resp_allKeys.length > 0) {
        t14_load_resp.keys = _t14_load_resp_allKeys[_t14_load_resp_allKeys.length - 1].name;  // just the last key pressed
        t14_load_resp.rt = _t14_load_resp_allKeys[_t14_load_resp_allKeys.length - 1].rt;
        t14_load_resp.duration = _t14_load_resp_allKeys[_t14_load_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zsd14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zsd14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zsd14' ---
    for (const thisComponent of zsd14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zsd14.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t14_load_resp.corr, level);
    }
    psychoJS.experiment.addData('t14_load_resp.keys', t14_load_resp.keys);
    if (typeof t14_load_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t14_load_resp.rt', t14_load_resp.rt);
        psychoJS.experiment.addData('t14_load_resp.duration', t14_load_resp.duration);
        routineTimer.reset();
        }
    
    t14_load_resp.stop();
    // the Routine "zsd14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t14_zj_resp_allKeys;
var zj14Components;
function zj14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'zj14' ---
    t = 0;
    zj14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('zj14.started', globalClock.getTime());
    t14_zj_resp.keys = undefined;
    t14_zj_resp.rt = undefined;
    _t14_zj_resp_allKeys = [];
    // keep track of which components have finished
    zj14Components = [];
    zj14Components.push(t14_zj);
    zj14Components.push(t14_zj_resp);
    
    for (const thisComponent of zj14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zj14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'zj14' ---
    // get current time
    t = zj14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t14_zj* updates
    if (t >= 0 && t14_zj.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_zj.tStart = t;  // (not accounting for frame time here)
      t14_zj.frameNStart = frameN;  // exact frame index
      
      t14_zj.setAutoDraw(true);
    }
    
    
    // *t14_zj_resp* updates
    if (t >= 0 && t14_zj_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_zj_resp.tStart = t;  // (not accounting for frame time here)
      t14_zj_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t14_zj_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t14_zj_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t14_zj_resp.clearEvents(); });
    }
    
    if (t14_zj_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t14_zj_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t14_zj_resp_allKeys = _t14_zj_resp_allKeys.concat(theseKeys);
      if (_t14_zj_resp_allKeys.length > 0) {
        t14_zj_resp.keys = _t14_zj_resp_allKeys[_t14_zj_resp_allKeys.length - 1].name;  // just the last key pressed
        t14_zj_resp.rt = _t14_zj_resp_allKeys[_t14_zj_resp_allKeys.length - 1].rt;
        t14_zj_resp.duration = _t14_zj_resp_allKeys[_t14_zj_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of zj14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zj14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'zj14' ---
    for (const thisComponent of zj14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('zj14.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t14_zj_resp.corr, level);
    }
    psychoJS.experiment.addData('t14_zj_resp.keys', t14_zj_resp.keys);
    if (typeof t14_zj_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t14_zj_resp.rt', t14_zj_resp.rt);
        psychoJS.experiment.addData('t14_zj_resp.duration', t14_zj_resp.duration);
        routineTimer.reset();
        }
    
    t14_zj_resp.stop();
    // the Routine "zj14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t14_psg1_resp_allKeys;
var trail14Components;
function trail14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail14' ---
    t = 0;
    trail14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trail14.started', globalClock.getTime());
    t14_psg1_resp.keys = undefined;
    t14_psg1_resp.rt = undefined;
    _t14_psg1_resp_allKeys = [];
    // keep track of which components have finished
    trail14Components = [];
    trail14Components.push(t14_psg1);
    trail14Components.push(time_14);
    trail14Components.push(countdown_14);
    trail14Components.push(t14_psg1_resp);
    
    for (const thisComponent of trail14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail14' ---
    // get current time
    t = trail14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t14_psg1* updates
    if (t >= 0.0 && t14_psg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_psg1.tStart = t;  // (not accounting for frame time here)
      t14_psg1.frameNStart = frameN;  // exact frame index
      
      t14_psg1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t14_psg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t14_psg1.setAutoDraw(false);
    }
    
    
    // *time_14* updates
    if (t >= 0.0 && time_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_14.tStart = t;  // (not accounting for frame time here)
      time_14.frameNStart = frameN;  // exact frame index
      
      time_14.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (time_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_14.setAutoDraw(false);
    }
    
    
    if (countdown_14.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdown_14.setText(util.round((2 - t), 1), false);
    }
    
    // *countdown_14* updates
    if (t >= 0.0 && countdown_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdown_14.tStart = t;  // (not accounting for frame time here)
      countdown_14.frameNStart = frameN;  // exact frame index
      
      countdown_14.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdown_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdown_14.setAutoDraw(false);
    }
    
    
    // *t14_psg1_resp* updates
    if (t >= 0.0 && t14_psg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_psg1_resp.tStart = t;  // (not accounting for frame time here)
      t14_psg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t14_psg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t14_psg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t14_psg1_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t14_psg1_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t14_psg1_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (t14_psg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t14_psg1_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t14_psg1_resp_allKeys = _t14_psg1_resp_allKeys.concat(theseKeys);
      if (_t14_psg1_resp_allKeys.length > 0) {
        t14_psg1_resp.keys = _t14_psg1_resp_allKeys[_t14_psg1_resp_allKeys.length - 1].name;  // just the last key pressed
        t14_psg1_resp.rt = _t14_psg1_resp_allKeys[_t14_psg1_resp_allKeys.length - 1].rt;
        t14_psg1_resp.duration = _t14_psg1_resp_allKeys[_t14_psg1_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of trail14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trail14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail14' ---
    for (const thisComponent of trail14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail14.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t14_psg1_resp.corr, level);
    }
    psychoJS.experiment.addData('t14_psg1_resp.keys', t14_psg1_resp.keys);
    if (typeof t14_psg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t14_psg1_resp.rt', t14_psg1_resp.rt);
        psychoJS.experiment.addData('t14_psg1_resp.duration', t14_psg1_resp.duration);
        routineTimer.reset();
        }
    
    t14_psg1_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t14_recall_resp_allKeys;
var recall14Components;
function recall14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall14' ---
    t = 0;
    recall14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('recall14.started', globalClock.getTime());
    t14_recall_resp.keys = undefined;
    t14_recall_resp.rt = undefined;
    _t14_recall_resp_allKeys = [];
    // keep track of which components have finished
    recall14Components = [];
    recall14Components.push(t14_recall);
    recall14Components.push(t14_recall_resp);
    
    for (const thisComponent of recall14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recall14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall14' ---
    // get current time
    t = recall14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t14_recall* updates
    if (t >= 0 && t14_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_recall.tStart = t;  // (not accounting for frame time here)
      t14_recall.frameNStart = frameN;  // exact frame index
      
      t14_recall.setAutoDraw(true);
    }
    
    
    // *t14_recall_resp* updates
    if (t >= 0 && t14_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_recall_resp.tStart = t;  // (not accounting for frame time here)
      t14_recall_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t14_recall_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t14_recall_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t14_recall_resp.clearEvents(); });
    }
    
    if (t14_recall_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t14_recall_resp.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _t14_recall_resp_allKeys = _t14_recall_resp_allKeys.concat(theseKeys);
      if (_t14_recall_resp_allKeys.length > 0) {
        t14_recall_resp.keys = _t14_recall_resp_allKeys[_t14_recall_resp_allKeys.length - 1].name;  // just the last key pressed
        t14_recall_resp.rt = _t14_recall_resp_allKeys[_t14_recall_resp_allKeys.length - 1].rt;
        t14_recall_resp.duration = _t14_recall_resp_allKeys[_t14_recall_resp_allKeys.length - 1].duration;
        // was this correct?
        if (t14_recall_resp.keys == 'c') {
            t14_recall_resp.corr = 1;
        } else {
            t14_recall_resp.corr = 0;
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
    for (const thisComponent of recall14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall14' ---
    for (const thisComponent of recall14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recall14.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (t14_recall_resp.keys === undefined) {
      if (['None','none',undefined].includes('c')) {
         t14_recall_resp.corr = 1;  // correct non-response
      } else {
         t14_recall_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t14_recall_resp.corr, level);
    }
    psychoJS.experiment.addData('t14_recall_resp.keys', t14_recall_resp.keys);
    psychoJS.experiment.addData('t14_recall_resp.corr', t14_recall_resp.corr);
    if (typeof t14_recall_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t14_recall_resp.rt', t14_recall_resp.rt);
        psychoJS.experiment.addData('t14_recall_resp.duration', t14_recall_resp.duration);
        routineTimer.reset();
        }
    
    t14_recall_resp.stop();
    // the Routine "recall14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback14Components;
function feedback14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback14' ---
    t = 0;
    feedback14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback14.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_14
    if (t14_recall_resp.corr) {
        feedback = "\u606d\u559c\uff01\u60a8\u7684\u56de\u7b54\u6b63\u786e\uff01";
    } else {
        feedback = "\u5f88\u9057\u61be\uff01\u60a8\u7684\u56de\u7b54\u9519\u8bef\uff01";
    }
    
    fankui_14.setText(feedback);
    // keep track of which components have finished
    feedback14Components = [];
    feedback14Components.push(fankui_14);
    
    for (const thisComponent of feedback14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback14' ---
    // get current time
    t = feedback14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fankui_14* updates
    if (t >= 0.0 && fankui_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fankui_14.tStart = t;  // (not accounting for frame time here)
      fankui_14.frameNStart = frameN;  // exact frame index
      
      fankui_14.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fankui_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fankui_14.setAutoDraw(false);
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
    for (const thisComponent of feedback14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback14' ---
    for (const thisComponent of feedback14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback14.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t14_ss_resp_allKeys;
var ss14Components;
function ss14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ss14' ---
    t = 0;
    ss14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ss14.started', globalClock.getTime());
    t14_ss_resp.keys = undefined;
    t14_ss_resp.rt = undefined;
    _t14_ss_resp_allKeys = [];
    // keep track of which components have finished
    ss14Components = [];
    ss14Components.push(t14_ss);
    ss14Components.push(t14_ss_resp);
    
    for (const thisComponent of ss14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ss14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ss14' ---
    // get current time
    t = ss14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t14_ss* updates
    if (t >= 0.0 && t14_ss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_ss.tStart = t;  // (not accounting for frame time here)
      t14_ss.frameNStart = frameN;  // exact frame index
      
      t14_ss.setAutoDraw(true);
    }
    
    
    // *t14_ss_resp* updates
    if (t >= 0.0 && t14_ss_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_ss_resp.tStart = t;  // (not accounting for frame time here)
      t14_ss_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t14_ss_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t14_ss_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t14_ss_resp.clearEvents(); });
    }
    
    if (t14_ss_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t14_ss_resp.getKeys({keyList: ['space'], waitRelease: false});
      _t14_ss_resp_allKeys = _t14_ss_resp_allKeys.concat(theseKeys);
      if (_t14_ss_resp_allKeys.length > 0) {
        t14_ss_resp.keys = _t14_ss_resp_allKeys[_t14_ss_resp_allKeys.length - 1].name;  // just the last key pressed
        t14_ss_resp.rt = _t14_ss_resp_allKeys[_t14_ss_resp_allKeys.length - 1].rt;
        t14_ss_resp.duration = _t14_ss_resp_allKeys[_t14_ss_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of ss14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ss14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ss14' ---
    for (const thisComponent of ss14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ss14.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t14_ss_resp.corr, level);
    }
    psychoJS.experiment.addData('t14_ss_resp.keys', t14_ss_resp.keys);
    if (typeof t14_ss_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t14_ss_resp.rt', t14_ss_resp.rt);
        psychoJS.experiment.addData('t14_ss_resp.duration', t14_ss_resp.duration);
        routineTimer.reset();
        }
    
    t14_ss_resp.stop();
    // the Routine "ss14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _t14_psg2_resp_allKeys;
var sspsg14Components;
function sspsg14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sspsg14' ---
    t = 0;
    sspsg14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('sspsg14.started', globalClock.getTime());
    t14_psg2_resp.keys = undefined;
    t14_psg2_resp.rt = undefined;
    _t14_psg2_resp_allKeys = [];
    // keep track of which components have finished
    sspsg14Components = [];
    sspsg14Components.push(t14_psg2);
    sspsg14Components.push(clock14_2);
    sspsg14Components.push(t14_psg2_choice);
    sspsg14Components.push(t14_psg2_resp);
    
    for (const thisComponent of sspsg14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sspsg14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sspsg14' ---
    // get current time
    t = sspsg14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t14_psg2* updates
    if (t >= 0.0 && t14_psg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_psg2.tStart = t;  // (not accounting for frame time here)
      t14_psg2.frameNStart = frameN;  // exact frame index
      
      t14_psg2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t14_psg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      t14_psg2.setAutoDraw(false);
    }
    
    
    if (clock14_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock14_2.setText(util.round(t, 0).toString(), false);
    }
    
    // *clock14_2* updates
    if (t >= 0.0 && clock14_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock14_2.tStart = t;  // (not accounting for frame time here)
      clock14_2.frameNStart = frameN;  // exact frame index
      
      clock14_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock14_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock14_2.setAutoDraw(false);
    }
    
    
    // *t14_psg2_choice* updates
    if (t >= 10 && t14_psg2_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_psg2_choice.tStart = t;  // (not accounting for frame time here)
      t14_psg2_choice.frameNStart = frameN;  // exact frame index
      
      t14_psg2_choice.setAutoDraw(true);
    }
    
    
    // *t14_psg2_resp* updates
    if (t >= 10 && t14_psg2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t14_psg2_resp.tStart = t;  // (not accounting for frame time here)
      t14_psg2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { t14_psg2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { t14_psg2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { t14_psg2_resp.clearEvents(); });
    }
    
    if (t14_psg2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = t14_psg2_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _t14_psg2_resp_allKeys = _t14_psg2_resp_allKeys.concat(theseKeys);
      if (_t14_psg2_resp_allKeys.length > 0) {
        t14_psg2_resp.keys = _t14_psg2_resp_allKeys[_t14_psg2_resp_allKeys.length - 1].name;  // just the last key pressed
        t14_psg2_resp.rt = _t14_psg2_resp_allKeys[_t14_psg2_resp_allKeys.length - 1].rt;
        t14_psg2_resp.duration = _t14_psg2_resp_allKeys[_t14_psg2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of sspsg14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sspsg14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sspsg14' ---
    for (const thisComponent of sspsg14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sspsg14.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(t14_psg2_resp.corr, level);
    }
    psychoJS.experiment.addData('t14_psg2_resp.keys', t14_psg2_resp.keys);
    if (typeof t14_psg2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('t14_psg2_resp.rt', t14_psg2_resp.rt);
        psychoJS.experiment.addData('t14_psg2_resp.duration', t14_psg2_resp.duration);
        routineTimer.reset();
        }
    
    t14_psg2_resp.stop();
    // the Routine "sspsg14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_key_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    end_key.keys = undefined;
    end_key.rt = undefined;
    _end_key_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_image);
    endComponents.push(end_key);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_image* updates
    if (t >= 0.0 && end_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_image.tStart = t;  // (not accounting for frame time here)
      end_image.frameNStart = frameN;  // exact frame index
      
      end_image.setAutoDraw(true);
    }
    
    
    // *end_key* updates
    if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key.tStart = t;  // (not accounting for frame time here)
      end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
    }
    
    if (end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
      if (_end_key_allKeys.length > 0) {
        end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
        end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
        end_key.duration = _end_key_allKeys[_end_key_allKeys.length - 1].duration;
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
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_key.corr, level);
    }
    psychoJS.experiment.addData('end_key.keys', end_key.keys);
    if (typeof end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key.rt', end_key.rt);
        psychoJS.experiment.addData('end_key.duration', end_key.duration);
        routineTimer.reset();
        }
    
    end_key.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
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
