/************************ 
 * MSAT Experiment *
 ************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

var myfriendname;
var myname;
var mydictionary;

// store info about the experiment session:
let expName = 'msat_sussex';  // from the Builder filename that created this script
let expInfo = {'participant': 'ID', 'your name': '', 'your best friend': '', 'session': ''};

// Start code blocks for 'Before Experiment'
// properties marker slider
var col_marker = new util.Color('white');
var markerSize = 43;

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


flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(relationRoutineBegin());
flowScheduler.add(relationRoutineEachFrame());
flowScheduler.add(relationRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
      {'name': 'MSAT_conditions.xls', 'path': 'resources/MSAT_conditions.xls'}
  ]
});

var myname = " " + expInfo["你的名字"] + " "
var myfriendname = " " + expInfo["你关系最好的朋友"] + " "


psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

var frameDur;

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  return Scheduler.Event.NEXT;
}

// instructions
var instructionsClock;
var instrText;
var mouse_instr;
var contTextInstr;
var contInstr;
var shuffle;
var random;

// relation
var relationClock;
var text_relation;
var slider_relation;
var mouse_relation;
var contTextRelation;
var contRelation;
var slider_relation_label_1;
var slider_relation_label_2;

var trialCount; 

// blame
var text_stimulus;
var blame_Clock;
var progressBlame;
var mouse_blame;
var contTextBlame;
var contBlame;
var box_stimulus;

// self blame specific
var instrBlameSA;
var slider_blame_SA;
var slider_blame_SA_label_1;
var slider_blame_SA_label_2;

// other blame specific
var instrBlameOA;
var slider_blame_OA;
var slider_blame_OA_label_1;
var slider_blame_OA_label_2;

// feelings
var box_stimulus_3;
var text_stimulus_3;
var feelingsClock;
var text_feelings;
var guilt;
var shame;
var anger_self; //added
var contempt_self;
var contempt_friend;
var anger_friend;
var no_feeling;
var text_guilt;
var text_shame;
var text_anger_self; //added
var text_contempt_self;
var text_contempt_friend;
var text_anger_friend;
var text_no_feeling;
var mouse_feeling;
var contTextFeelings;
var contFeelings;
var progressFeelings;

// action
var box_stimulus_4;
var text_stimulus_4;
var actionsClock;
var text_actions;
var distance_self;
var attack_self;
var hiding;
var apologising;
var distance_friend;
var verbal_friend;
var no_action;
var text_distance_self;
var text_attack_self;
var text_hiding;
var text_apologising;
var text_distance_friend;
var text_verbal_friend;
var text_no_action;
var mouse_action;
var contTextActions;
var contAction;
var progressActions;

// thanks
var thanksClock;
var thanksText;
var globalClock;
var routineTimer;


function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  myname = " " + expInfo["你的名字"] + " "
 myfriendname = " " + expInfo["你关系最好的朋友"] + " "

mydictionary = {
  "is apathetic towards":[myname + "冷漠地对待" + myfriendname,myfriendname + "冷漠地对待"+ myname],
  "is boastful towards":[myname + "在" + myfriendname + "面前自吹自擂",myfriendname + "在" + myname + "面前自吹自擂"],
'is bossy with':[myname + "对" + myfriendname + '颐指气使',
myfriendname + "对" + myname + '颐指气使'],
'is careless towards':[  myname + "随意地对待" + myfriendname,
myfriendname + "随意地对待" + myname],
'is cruel towards':[myname + '残酷无情地对待' + myfriendname,
myfriendname + '残酷无情地对待' + myname],
'is deceitful towards':[myname + '撒谎欺骗' + myfriendname,
myfriendname + '撒谎欺骗' + myname],
'is disagreeable towards':[myname + "对" + myfriendname + "不友好",
myfriendname + "对" + myname + "不友好"],
'is dishonest with':[myname + "对" + myfriendname + "不诚实",
myfriendname + "对" + myname + "不诚实"],
'is greedy towards':[myname + "对" + myfriendname + "贪婪",
myfriendname + "对" + myname + "贪婪"],
'is helpless towards':[myname + "对" + myfriendname + "没有帮助",
myfriendname + "对" + myname + "没有帮助"],
'is ignorant towards':[myname + "忽视" + myfriendname,
myfriendname + "忽视" + myname],
'is impatient with':[myname + "对" + myfriendname + "不耐烦",
myfriendname + "对" + myname + "不耐烦"],
'is jealous towards':[myname + "嫉妒" + myfriendname,
myfriendname + "嫉妒" + myname],
'is possessive towards':[myname + myfriendname + "有占有欲",
myfriendname + myname + "有占有欲"],
'is prejudiced towards':[myname + "对"+ myfriendname+ "有偏见",
myfriendname + "对"+ myname+ "有偏见"],
'is quarrelsome with':[myname + "对" + myfriendname + "发起争吵",
myfriendname + "对" + myname + "发起争吵"],
'is rebellious towards':[myname + "对" + myfriendname + "逆反",
myfriendname + "对" + myname + "逆反"],
'is rough towards':[myname + "粗鲁地对待"+ myfriendname,
myfriendname + "粗鲁地对待"+ myname],
'is selfish towards':[myname + "自私地对待"+ myfriendname,
myfriendname + "自私地对待"+ myname],
'is stingy towards':[myname + "小气吝啬地对待"+ myfriendname,
myfriendname + "小气吝啬地对待"+ myname],
'is temperamental with':[myname + "对"+ myfriendname+ "喜怒无常",
myfriendname + "对"+ myname+ "喜怒无常"],
'is touchy with':[myname + "对"+ myfriendname+ "敏感易怒",
myfriendname + "对"+ myname+ "敏感易怒"],
'is tough towards':[myname + "对"+ myfriendname+ "要求严格",
myfriendname + "对"+ myname+ "要求严格"],
'is vain towards':[myname + "对"+ myfriendname+ "虚荣",
myfriendname + "对"+ myname+ "虚荣"],
'is competitive with':[myname + "对"+ myfriendname+ "好胜心强",
myfriendname + "对"+ myname+ "好胜心强"],
'is firm with':[myname + "严厉地对待" + myfriendname,
myfriendname+ "严厉地对待" + myname],
'is romantic towards':[myname + "对"+ myfriendname+ "有不切实际的幻想",
myfriendname + "对"+ myname+ "有不切实际的幻想"],
}

  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'The first screen will ask a general question. \n\nThen, you will see short statements describing your social behaviour towards your best friend, or describing social behaviour of your best friend towards you.  \n\nPlease indicate how you would feel about the described behaviour.\n    ',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // shuffle
  shuffle = util.shuffle;
  
  // .append
  Array.prototype.append = [].push;
  
  // random()
  random = Math.random();
  
  mouse_instr = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instr.mouseClock = new util.Clock();
  
  contTextInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'contTextInstr',
    text: 'continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0.6, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  contInstr = new visual.Rect ({
    win: psychoJS.window, name: 'contInstr', units : 'norm', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.6, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 0.3, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "relation"
  relationClock = new util.Clock();
  text_relation = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_relation',
    text: 'Relative to what you know about other relationships, please rate how close you feel to your best friend',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  slider_relation = new visual.Slider({
    win: psychoJS.window, name: 'slider_relation',
    size: [1.1, 0.08], pos: [0, 0.0], units: 'norm',
    labels: ["1", "2", "3", "4", "5", "6", "7"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: false, italic: false, depth: -2, 
    flip: false, fontSize: 0.05
  });
  
  slider_relation_label_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_relation_label_1',
    text: 'not at all close',
    font: 'Arial',
    units: 'norm', 
    pos: [(-0.55), (-0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('LightGray'),  opacity: 1,
    depth: -6.0 
  });

  slider_relation_label_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_relation_label_2',
    text: 'extremely',
    font: 'Arial',
    units: 'norm', 
    pos: [0.55, (-0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('LightGray'),  opacity: 1,
    depth: -7.0 
  });
  
  mouse_relation = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_relation.mouseClock = new util.Clock();
  
  contTextRelation = new visual.TextStim({
    win: psychoJS.window,
    name: 'contTextRelation',
    text: 'continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0.6, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  contRelation = new visual.Rect ({
    win: psychoJS.window, name: 'contRelation', units : 'norm', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.6, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 0.3, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "Blame"
  blame_Clock = new util.Clock();
  text_stimulus = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_stimulus',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 0.8,
    depth: -1.0 
  });
  
  box_stimulus = new visual.Rect ({
    win: psychoJS.window, name: 'box_stimulus', units : 'norm', 
    width: [1.2, 0.3][0], height: [0.6, 0.3][1],
    ori: 0, pos: [0, 0.8],
    lineWidth: 1, lineColor: new util.Color('LightGray'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  instrBlameSA = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrBlameSA',
    text: 'How strongly would you blame yourself?',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
trialCount = 0;
  
  progressBlame = new visual.TextStim({
    win: psychoJS.window,
    name: 'progressBlameSA',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0.75, (- 0.75)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  slider_blame_SA = new visual.Slider({
    win: psychoJS.window, name: 'slider_blame_SA',
    size: [1.1, 0.08], pos: [0, 0.25], units: 'norm',
    labels: ["1", "2", "3", "4", "5", "6", "7"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: false, italic: false, depth: -4, 
    flip: false, fontSize: 0.05
  });
  
  slider_blame_SA_label_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_blame_SA_label_1',
    text: 'not at all',
    font: 'Arial',
    units: 'norm', 
    pos: [(-0.55), 0.05], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('LightGray'),  opacity: 1,
    depth: -10.0 
  });

  slider_blame_SA_label_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_blame_SA_label_2',
    text: 'very much',
    font: 'Arial',
    units: 'norm', 
    pos: [0.55, 0.05], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('LightGray'),  opacity: 1,
    depth: -11.0 
  });
  
  mouse_blame = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_blame.mouseClock = new util.Clock();
  contTextBlame = new visual.TextStim({
    win: psychoJS.window,
    name: 'contTextBlameSA',
    text: 'continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0.6, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  contBlame = new visual.Rect ({
    win: psychoJS.window, name: 'contBlameSA', units : 'norm', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.6, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 0.3, depth: -7, interpolate: true,
  });
  
  instrBlameOA = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrBlameOA',
    text: 'How strongly would you blame your friend?',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (-0.15)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  slider_blame_OA = new visual.Slider({
    win: psychoJS.window, name: 'slider_blame_OA',
    size: [1.1, 0.08], pos: [0, -0.4], units: 'norm',
    labels: ["1", "2", "3", "4", "5", "6", "7"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: false, italic: false, depth: -9, 
    flip: false, fontSizet: 0.05
  });
  
  slider_blame_OA_label_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_blame_OA_label_1',
    text: 'not at all',
    font: 'Arial',
    units: 'norm', 
    pos: [(-0.55), (-0.6)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('LightGray'),  opacity: 1,
    depth: -12.0 
  });

  slider_blame_OA_label_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_blame_OA_label_2',
    text: 'very much',
    font: 'Arial',
    units: 'norm', 
    pos: [0.55, (-0.6)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('LightGray'),  opacity: 1,
    depth: -13.0 
  });

  // Initialize components for Routine "feelings"
  feelingsClock = new util.Clock();
  text_stimulus_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_stimulus_3',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 0.8,
    depth: -1.0 
  });
  
  box_stimulus_3 = new visual.Rect ({
    win: psychoJS.window, name: 'box_stimulus_3', units : 'norm', 
    width: [1.2, 0.3][0], height: [0.6, 0.3][1],
    ori: 0, pos: [0, 0.8],
    lineWidth: 1, lineColor: new util.Color('LightGray'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -19, interpolate: true,
  });
  
  text_feelings = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feelings',
    text: 'Please select the feeling that you would experience most strongly (select only one):',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.05,  wrapWidth: 500, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  guilt = new visual.Rect ({
    win: psychoJS.window, name: 'guilt', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), 0.3],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  shame = new visual.Rect ({
    win: psychoJS.window, name: 'shame', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), 0.15],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  anger_self = new visual.Rect ({
    win: psychoJS.window, name: 'anger_self', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  contempt_self = new visual.Rect ({
    win: psychoJS.window, name: 'contempt_self', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.15)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  contempt_friend = new visual.Rect ({
    win: psychoJS.window, name: 'contempt_friend', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });

  anger_friend = new visual.Rect ({
    win: psychoJS.window, name: 'anger_friend', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.45)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  no_feeling = new visual.Rect ({
    win: psychoJS.window, name: 'no_feeling', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.60)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  text_guilt = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_guilt',
    text: 'guilt',
    font: 'Arial',
    units: 'norm',
    alignHoriz: 'left',
    pos: [(- 0.4), 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_shame = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_shame',
    text: 'shame',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_anger_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_anger_self',
    text: 'indignation / anger towards self',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_contempt_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_contempt_self',
    text: 'contempt / disgust towards self',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_contempt_friend = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_contempt_friend',
    text: 'contempt / disgust towards friend',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });

  text_anger_friend = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_anger_friend',
    text: 'indignation / anger towards friend',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.45)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_no_feeling = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_no_feeling',
    text: 'no feeling / other feeling',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.60)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  mouse_feeling = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_feeling.mouseClock = new util.Clock();
  contTextFeelings = new visual.TextStim({
    win: psychoJS.window,
    name: 'contTextFeelings',
    text: 'continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0.6, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  contFeelings = new visual.Rect ({
    win: psychoJS.window, name: 'contFeelings', units : 'norm', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.6, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 0.3, depth: -18, interpolate: true,
  });
  
  progressFeelings = new visual.TextStim({
    win: psychoJS.window,
    name: 'progressFeelings',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0.75, (- 0.75)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });

  // Initialize components for Routine "actions"
  actionsClock = new util.Clock();
  text_stimulus_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_stimulus_4',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 0.8,
    depth: -1.0 
  });
  
  box_stimulus_4 = new visual.Rect ({
    win: psychoJS.window, name: 'box_stimulus_4', units : 'norm', 
    width: [1.2, 0.3][0], height: [0.6, 0.3][1],
    ori: 0, pos: [0, 0.8],
    lineWidth: 1, lineColor: new util.Color('LightGray'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -19, interpolate: true,
  });

  text_actions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_actions',
    text: 'Please select the action that you would most strongly feel like doing (select only one):',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.5], height: 0.05,  wrapWidth: 500, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  distance_self = new visual.Rect ({
    win: psychoJS.window, name: 'distance_self', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), 0.3],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  attack_self = new visual.Rect ({
    win: psychoJS.window, name: 'attack_self', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), 0.15],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  hiding = new visual.Rect ({
    win: psychoJS.window, name: 'hiding', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  apologising = new visual.Rect ({
    win: psychoJS.window, name: 'apologising', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.15)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  distance_friend = new visual.Rect ({
    win: psychoJS.window, name: 'distance_friend', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });

  verbal_friend = new visual.Rect ({
    win: psychoJS.window, name: 'verbal_friend', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.45)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  no_action = new visual.Rect ({
    win: psychoJS.window, name: 'no_action', units : 'norm', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0, pos: [(- 0.5), (- 0.60)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  text_distance_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_distance_self',
    text: 'feel like creating distance from yourself',
    font: 'Arial',
    units: 'norm',
    alignHoriz: 'left',
    pos: [(- 0.4), 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_attack_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_attack_self',
    text: 'feel like verbally or physically attacking / punishing yourself',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_hiding = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hiding',
    text: 'feel like hiding',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_apologising = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_apologising',
    text: 'feel like apologising / fixing what you have done',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_distance_friend = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_distance_friend',
    text: 'feel like creating a distance from your friend',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });

  text_verbal_friend = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_verbal_friend',
    text: 'feel like verbally or physically attacking / punishing your friend',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.45)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_no_action = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_no_action',
    text: 'no action / other action',
    font: 'Arial',
    units: 'norm', 
    alignHoriz: 'left',
    pos: [(- 0.4), (- 0.60)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  mouse_action = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_action.mouseClock = new util.Clock();
  contTextActions = new visual.TextStim({
    win: psychoJS.window,
    name: 'contTextActions',
    text: 'continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0.6, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  contAction = new visual.Rect ({
    win: psychoJS.window, name: 'contAction', units : 'norm', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0, pos: [0.6, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 0.3, depth: -18, interpolate: true,
  });
  
  progressActions = new visual.TextStim({
    win: psychoJS.window,
    name: 'progressActions',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0.75, (- 0.75)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });
  
    // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanksText = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanksText',
    text: 'The task has finished - thank you!\n\n Please do not close your browser until you see a green message!',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var continueRoutine;
var checkbox;
var clicked;
var mouseDown;
var gotValidClick;
var instructionsComponents;

function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    
    // update component parameters for each repeat
    checkbox = [contInstr];
    clicked = [];
    mouseDown = false;
    
    // setup some python lists for storing info about the mouse_instr
    mouse_instr.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instrText);
    instructionsComponents.push(mouse_instr);
    instructionsComponents.push(contTextInstr);
    instructionsComponents.push(contInstr);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

var prevButtonState;
var _mouseButtons;

function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    continueRoutine = true; // until we're told otherwise
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    // *mouse_instr* updates
    if (t >= 0.0 && mouse_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instr.tStart = t;  // (not accounting for frame time here)
      mouse_instr.frameNStart = frameN;  // exact frame index
      
      mouse_instr.status = PsychoJS.Status.STARTED;
      mouse_instr.mouseClock.reset();
      prevButtonState = mouse_instr.getPressed();  // if button is down already this ISN'T a new click
      }
      
    if (mouse_instr.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instr.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contInstr]) {
            if (obj.contains(mouse_instr)) {
              gotValidClick = true;
              mouse_instr.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *contTextInstr* updates
    if (t >= 0.0 && contTextInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contTextInstr.tStart = t;  // (not accounting for frame time here)
      contTextInstr.frameNStart = frameN;  // exact frame index
      
      contTextInstr.setAutoDraw(true);
    }

    
    // *contInstr* updates
    if (t >= 0.0 && contInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contInstr.tStart = t;  // (not accounting for frame time here)
      contInstr.frameNStart = frameN;  // exact frame index
      
      contInstr.setAutoDraw(true);
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
    instructionsComponents.forEach( function(thisComponent) {
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

function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var relationComponents;

function relationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'relation'-------
    t = 0;
    relationClock.reset(); // clock
    frameN = -1;
    
    // update component parameters for each repeat
    checkbox = [contRelation];
    clicked = [];
    mouseDown = false;
    
    slider_relation.reset()
    // setup some python lists for storing info about the mouse_relation
    mouse_relation.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    relationComponents = [];
    relationComponents.push(text_relation);
    relationComponents.push(slider_relation);
    relationComponents.push(slider_relation_label_1);
    relationComponents.push(slider_relation_label_2);
    relationComponents.push(mouse_relation);
    relationComponents.push(contTextRelation);
    relationComponents.push(contRelation);
    
    relationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function relationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'relation'-------
    // get current time
    t = relationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    continueRoutine = true; // until we're told otherwise
    // update/draw components on each frame
    // update slider properties
    try { 
        if (slider_relation._markerColor.int !== col_marker.int) {
            slider_relation._markerColor = col_marker;
            slider_relation._marker.lineStyle(1, col_marker.int, 1, 0.5);
            slider_relation._marker.beginFill(col_marker.int, 1);
            
            // triangle marker
            slider_relation._marker.moveTo(0,0);
            slider_relation._marker.lineTo(markerSize, -markerSize);
            slider_relation._marker.lineTo(-markerSize, -markerSize);
            slider_relation._marker.endFill();
        }
    } catch (err) {}
    
    // *text_relation* updates
    if (t >= 0.0 && text_relation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_relation.tStart = t;  // (not accounting for frame time here)
      text_relation.frameNStart = frameN;  // exact frame index
      
      text_relation.setAutoDraw(true);
    }

    
    // *slider_relation* updates
    if (t >= 0.0 && slider_relation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_relation.tStart = t;  // (not accounting for frame time here)
      slider_relation.frameNStart = frameN;  // exact frame index
      
      slider_relation.setAutoDraw(true);
    }
    
    // *slider_relation_label_1* updates
    if (t >= 0.0 && slider_relation_label_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_relation_label_1.tStart = t;  // (not accounting for frame time here)
      slider_relation_label_1.frameNStart = frameN;  // exact frame index
      
      slider_relation_label_1.setAutoDraw(true);
    }
    
    // *slider_relation_label_2* updates
    if (t >= 0.0 && slider_relation_label_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_relation_label_2.tStart = t;  // (not accounting for frame time here)
      slider_relation_label_2.frameNStart = frameN;  // exact frame index
      
      slider_relation_label_2.setAutoDraw(true);
    }


    // *mouse_relation* updates
    if (t >= 0.0 && mouse_relation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_relation.tStart = t;  // (not accounting for frame time here)
      mouse_relation.frameNStart = frameN;  // exact frame index
      
      mouse_relation.status = PsychoJS.Status.STARTED;
      mouse_relation.mouseClock.reset();
      prevButtonState = mouse_relation.getPressed();  // if button is down already this ISN'T a new click
      }
      
    if (mouse_relation.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_relation.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contRelation]) {
            if (obj.contains(mouse_relation)) {
              gotValidClick = true;
              mouse_relation.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true && slider_relation.getRating() !== undefined && slider_relation.status === PsychoJS.Status.STARTED) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *contTextRelation* updates
    if (t >= 0.0 && contTextRelation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contTextRelation.tStart = t;  // (not accounting for frame time here)
      contTextRelation.frameNStart = frameN;  // exact frame index
      
      contTextRelation.setAutoDraw(true);
    }

    
    // *contRelation* updates
    if (t >= 0.0 && contRelation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contRelation.tStart = t;  // (not accounting for frame time here)
      contRelation.frameNStart = frameN;  // exact frame index
      
      contRelation.setAutoDraw(true);
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
    relationComponents.forEach( function(thisComponent) {
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

function relationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'relation'-------
    relationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_relation.response', slider_relation.getRating());
    psychoJS.experiment.addData('slider_relation.rt', slider_relation.getRT());
    // store data for thisExp (ExperimentHandler)
    // the Routine "relation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var trials;
var currentLoop;
var msgProgress;

// initialising number of items on stimulus list
var num_items = 54;

function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'MSAT_conditions.xls',
    seed: undefined, name: 'trials'
  });
  
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(blameRoutineBegin(snapshot));
    trialsLoopScheduler.add(blameRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(blameRoutineEnd(snapshot));
    trialsLoopScheduler.add(feelingsRoutineBegin(snapshot));
    trialsLoopScheduler.add(feelingsRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(feelingsRoutineEnd(snapshot));
    trialsLoopScheduler.add(actionsRoutineBegin(snapshot));
    trialsLoopScheduler.add(actionsRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(actionsRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var blameComponents;

function blameRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blame'-------
    t = 0;
    blame_Clock.reset(); // clock
    frameN = -1;
    
    // show right order of agency based on agency_stimulus input
    if ((agency === "self")) {
        text_stimulus.setText(((((expInfo["your name"] + " ") + verb_stimulus) + " ") + expInfo["your best friend"]));
    } else {
        if ((agency === "other")) {
            text_stimulus.setText(((((expInfo["your best friend"] + " ") + verb_stimulus) + " ") + expInfo["your name"]));
        }
    }

    // update component parameters for each repeat
    trialCount += 1;
    msgProgress = ((trialCount.toString() + "/54"));
    progressBlame.text=msgProgress;
    
    slider_blame_SA.reset()
    slider_blame_OA.reset()

    // setup some python lists for storing info about the mouse_blame
    mouse_blame.clicked_name = [];
    gotValidClick = false; // until a click is received
    
    // keep track of which components have finished
    blameComponents = [];
    blameComponents.push(text_stimulus);
    blameComponents.push(box_stimulus);
    blameComponents.push(instrBlameSA);
    blameComponents.push(instrBlameOA);
    blameComponents.push(progressBlame);
    blameComponents.push(slider_blame_SA);
    blameComponents.push(slider_blame_OA);
    blameComponents.push(slider_blame_SA_label_1);
    blameComponents.push(slider_blame_OA_label_1);
    blameComponents.push(slider_blame_SA_label_2);
    blameComponents.push(slider_blame_OA_label_2);
    blameComponents.push(mouse_blame);
    blameComponents.push(contTextBlame);
    blameComponents.push(contBlame);

    blameComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function blameRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blame'-------
    continueRoutine = true; // until we're told otherwise
    // get current time
    t = blameClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    
    // update/draw components on each frame
    // update slider properties blame SA
    try { 
        if (slider_blame_SA._markerColor.int !== col_marker.int) {
            slider_blame_SA._markerColor = col_marker;
            slider_blame_SA._marker.lineStyle(1, col_marker.int, 1, 0.5);
            slider_blame_SA._marker.beginFill(col_marker.int, 1);
            
            // triangle marker
            slider_blame_SA._marker.moveTo(0,0);
            slider_blame_SA._marker.lineTo(markerSize, -markerSize);
            slider_blame_SA._marker.lineTo(-markerSize, -markerSize);
            slider_blame_SA._marker.endFill();
        }
    } catch (err) {}
    
    // update slider properties blame OA
     try { 
        if (slider_blame_OA._markerColor.int !== col_marker.int) {
            slider_blame_OA._markerColor = col_marker;
            slider_blame_OA._marker.lineStyle(1, col_marker.int, 1, 0.5);
            slider_blame_OA._marker.beginFill(col_marker.int, 1);
            
            // triangle marker
            slider_blame_OA._marker.moveTo(0,0);
            slider_blame_OA._marker.lineTo(markerSize, -markerSize);
            slider_blame_OA._marker.lineTo(-markerSize, -markerSize);
            slider_blame_OA._marker.endFill();
        }
    } catch (err) {}


    // *box_stimulus* updates
    if (t >= 0.0 && box_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_stimulus.tStart = t;  // (not accounting for frame time here)
      box_stimulus.frameNStart = frameN;  // exact frame index
      
      box_stimulus.setAutoDraw(true);
    }
    
    // *text_stimulus* updates
    if (t >= 0.0 && text_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_stimulus.tStart = t;  // (not accounting for frame time here)
      text_stimulus.frameNStart = frameN;  // exact frame index
      
      text_stimulus.setAutoDraw(true);
    }

    
    // *instrBlameSA* updates
    if (t >= 0.0 && instrBlameSA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrBlameSA.tStart = t;  // (not accounting for frame time here)
      instrBlameSA.frameNStart = frameN;  // exact frame index
      
      instrBlameSA.setAutoDraw(true);
    }

    // *instrBlameOA* updates
    if (t >= 0.0 && instrBlameOA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrBlameOA.tStart = t;  // (not accounting for frame time here)
      instrBlameOA.frameNStart = frameN;  // exact frame index
      
      instrBlameOA.setAutoDraw(true);
    }

    
    // *progressBlame* updates
    if (t >= 0.0 && progressBlame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressBlame.tStart = t;  // (not accounting for frame time here)
      progressBlame.frameNStart = frameN;  // exact frame index
      
      progressBlame.setAutoDraw(true);
    }

    // *slider_blame_SA* updates
    if (t >= 0.0 && slider_blame_SA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_blame_SA.tStart = t;  // (not accounting for frame time here)
      slider_blame_SA.frameNStart = frameN;  // exact frame index
      
      slider_blame_SA.setAutoDraw(true);
    }
    
    // *slider_blame_OA* updates
    if (t >= 0.0 && slider_blame_OA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_blame_OA.tStart = t;  // (not accounting for frame time here)
      slider_blame_OA.frameNStart = frameN;  // exact frame index
      
      slider_blame_OA.setAutoDraw(true);
    }

    // *slider_blame_SA_label_1* updates
    if (t >= 0.0 && slider_blame_SA_label_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_blame_SA_label_1.tStart = t;  // (not accounting for frame time here)
      slider_blame_SA_label_1.frameNStart = frameN;  // exact frame index
      
      slider_blame_SA_label_1.setAutoDraw(true);
    }
    
    // *slider_blame_OA_label_1* updates
    if (t >= 0.0 && slider_blame_OA_label_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_blame_OA_label_1.tStart = t;  // (not accounting for frame time here)
      slider_blame_OA_label_1.frameNStart = frameN;  // exact frame index
      
      slider_blame_OA_label_1.setAutoDraw(true);
    }

    // *slider_blame_SA_label_2* updates
    if (t >= 0.0 && slider_blame_SA_label_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_blame_SA_label_2.tStart = t;  // (not accounting for frame time here)
      slider_blame_SA_label_2.frameNStart = frameN;  // exact frame index
      
      slider_blame_SA_label_2.setAutoDraw(true);
    }
    
    // *slider_blame_OA_label_2* updates
    if (t >= 0.0 && slider_blame_OA_label_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_blame_OA_label_2.tStart = t;  // (not accounting for frame time here)
      slider_blame_OA_label_2.frameNStart = frameN;  // exact frame index
      
      slider_blame_OA_label_2.setAutoDraw(true);
    }

    // *mouse_blame* updates
    if (t >= 0.0 && mouse_blame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_blame.tStart = t;  // (not accounting for frame time here)
      mouse_blame.frameNStart = frameN;  // exact frame index
      
      mouse_blame.status = PsychoJS.Status.STARTED;
      mouse_blame.mouseClock.reset();
      prevButtonState = mouse_blame.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_blame.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_blame.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [contBlame]) {
            if (obj.contains(mouse_blame)) {
              gotValidClick = true;
              mouse_blame.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true && slider_blame_SA.getRating() !== undefined && slider_blame_SA.status == PsychoJS.Status.STARTED && slider_blame_OA.getRating() !== undefined && slider_blame_OA.status === PsychoJS.Status.STARTED) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }

    // *contTextBlame* updates
    if (t >= 0.0 && contTextBlame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contTextBlame.tStart = t;  // (not accounting for frame time here)
      contTextBlame.frameNStart = frameN;  // exact frame index
      
      contTextBlame.setAutoDraw(true);
    }

    
    // *contBlame* updates
    if (t >= 0.0 && contBlame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contBlame.tStart = t;  // (not accounting for frame time here)
      contBlame.frameNStart = frameN;  // exact frame index
      
      contBlame.setAutoDraw(true);
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
    blameComponents.forEach( function(thisComponent) {
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

function blameRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blame'-------
    blameComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_blame_SA.response', slider_blame_SA.getRating());
    psychoJS.experiment.addData('slider_blame_SA.rt', slider_blame_SA.getRT());
    psychoJS.experiment.addData('slider_blame_OA.response', slider_blame_OA.getRating());
    psychoJS.experiment.addData('slider_blame_OA.rt', slider_blame_OA.getRT());
    
    // store data for thisExp (ExperimentHandler)
    // the Routine "blame" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feelingsComponents;
var checkbox;
var box;
var blocks;
var bufferTime;
var clickClock;
var lastClickTime;
var thisClickTime;
var boxCount; 

function feelingsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feelings'-------
    t = 0;
    feelingsClock.reset(); // clock
    frameN = -1;
    
    // show right order of agency based on agency_stimulus input
    if ((agency === "self")) {
        text_stimulus_3.setText(((((expInfo["your name"] + " ") + verb_stimulus) + " ") + expInfo["your best friend"]));
    } else {
        if ((agency === "other")) {
            text_stimulus_3.setText(((((expInfo["your best friend"] + " ") + verb_stimulus) + " ") + expInfo["your name"]));
        }
    }
    
    // checkbox
    checkbox = [guilt, shame, anger_self, contempt_self, contempt_friend, anger_friend, no_feeling];
    clicked = [];
    mouseDown = false;

    bufferTime = 0.2;
    clickClock = new util.Clock();
    lastClickTime = 0;
    thisClickTime = 0; 
    boxCount = 0;
    
    // update component parameters for each repeat
    msgProgress = ((trialCount.toString() + "/54"));
    progressFeelings.text=msgProgress;
    
    // setup some python lists for storing info about the mouse_feeling
    // mouse input 
    mouse_feeling.time = [];
    mouse_feeling.clicked_name = [];
    gotValidClick = false; // until a click is received
   
    // store checkboxes as dictionary (to switch between name/object)
    blocks = {};
    blocks['anger_self']=anger_self;
    blocks['guilt']=guilt;
    blocks['shame']=shame;
    blocks['contempt_self']=contempt_self;
    blocks['contempt_friend']=contempt_friend;
    blocks['anger_friend']=anger_friend;
    blocks['no_feeling']=no_feeling;
    
    // give blocks color
    for (let items in blocks) {
        if (blocks[items].hasOwnProperty('fillColor')) {
            blocks[items].fillColor = new util.Color('white');
            blocks[items].lineColor = new util.Color('white');
        }
    }
    
    // keep track of which components have finished
    feelingsComponents = [];
    feelingsComponents.push(text_stimulus_3);
    feelingsComponents.push(box_stimulus_3);
    feelingsComponents.push(text_feelings);
    feelingsComponents.push(guilt);
    feelingsComponents.push(shame);
    feelingsComponents.push(anger_self);
    feelingsComponents.push(contempt_self);
    feelingsComponents.push(contempt_friend);
    feelingsComponents.push(anger_friend);
    feelingsComponents.push(no_feeling);
    feelingsComponents.push(text_guilt);
    feelingsComponents.push(text_shame);
    feelingsComponents.push(text_anger_self);
    feelingsComponents.push(text_contempt_self);
    feelingsComponents.push(text_contempt_friend);
    feelingsComponents.push(text_anger_friend);
    feelingsComponents.push(text_no_feeling);
    feelingsComponents.push(mouse_feeling);
    feelingsComponents.push(contTextFeelings);
    feelingsComponents.push(contFeelings);
    feelingsComponents.push(progressFeelings);
    
    feelingsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feelingsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feelings'-------
    continueRoutine = true; // until we're told otherwise
    // get current time
    t = feelingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    
    // update/draw components on each frame
    // mark selection with black, undo when selecting again
    for (var thisBox, _pj_c = 0, _pj_a = checkbox, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        thisBox = _pj_a[_pj_c];
        if (mouse_feeling.isPressedIn(thisBox)) {
            thisClickTime = clickClock.getTime();
            if (((thisClickTime - lastClickTime) > bufferTime)) {
                console.log(thisBox.fillColor)
                console.log(thisBox.fillColor['_rgb'])
                if ((thisBox.fillColor['_rgb'][2] !== 0)) {
                    thisBox.fillColor = new util.Color("black");
                    thisBox.lineColor = new util.Color("black");
                    ++boxCount;
                } else {
                    thisBox.fillColor = new util.Color("white");
                    thisBox.lineColor = new util.Color("white");
                    --boxCount;
                }
            }
            lastClickTime = thisClickTime;
        }
    }

    // *box_stimulus_3* updates
    if (t >= 0.0 && box_stimulus_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_stimulus_3.tStart = t;  // (not accounting for frame time here)
      box_stimulus_3.frameNStart = frameN;  // exact frame index
      
      box_stimulus_3.setAutoDraw(true);
    }
    
    // *text_stimulus_3* updates
    if (t >= 0.0 && text_stimulus_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_stimulus_3.tStart = t;  // (not accounting for frame time here)
      text_stimulus_3.frameNStart = frameN;  // exact frame index
      
      text_stimulus_3.setAutoDraw(true);
    }

    
    // *text_feelings* updates
    if (t >= 0.0 && text_feelings.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feelings.tStart = t;  // (not accounting for frame time here)
      text_feelings.frameNStart = frameN;  // exact frame index
      
      text_feelings.setAutoDraw(true);
    }

    
    // *guilt* updates
    if (t >= 0.0 && guilt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      guilt.tStart = t;  // (not accounting for frame time here)
      guilt.frameNStart = frameN;  // exact frame index
      
      guilt.setAutoDraw(true);
    }

    
    // *shame* updates
    if (t >= 0.0 && shame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shame.tStart = t;  // (not accounting for frame time here)
      shame.frameNStart = frameN;  // exact frame index
      
      shame.setAutoDraw(true);
    }

    // *anger_self* updates
    if (t >= 0.0 && anger_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anger_self.tStart = t;  // (not accounting for frame time here)
      anger_self.frameNStart = frameN;  // exact frame index
      
      anger_self.setAutoDraw(true);
    }
    
    // *contempt_self* updates
    if (t >= 0.0 && contempt_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contempt_self.tStart = t;  // (not accounting for frame time here)
      contempt_self.frameNStart = frameN;  // exact frame index
      
      contempt_self.setAutoDraw(true);
    }

    
    // *contempt_friend* updates
    if (t >= 0.0 && contempt_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contempt_friend.tStart = t;  // (not accounting for frame time here)
      contempt_friend.frameNStart = frameN;  // exact frame index
      
      contempt_friend.setAutoDraw(true);
    }

    
    // *anger_friend* updates
    if (t >= 0.0 && anger_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anger_friend.tStart = t;  // (not accounting for frame time here)
      anger_friend.frameNStart = frameN;  // exact frame index
      
      anger_friend.setAutoDraw(true);
    }

    
    // *no_feeling* updates
    if (t >= 0.0 && no_feeling.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_feeling.tStart = t;  // (not accounting for frame time here)
      no_feeling.frameNStart = frameN;  // exact frame index
      
      no_feeling.setAutoDraw(true);
    }

    
    // *text_guilt* updates
    if (t >= 0.0 && text_guilt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_guilt.tStart = t;  // (not accounting for frame time here)
      text_guilt.frameNStart = frameN;  // exact frame index
      
      text_guilt.setAutoDraw(true);
    }

    
    // *text_shame* updates
    if (t >= 0.0 && text_shame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_shame.tStart = t;  // (not accounting for frame time here)
      text_shame.frameNStart = frameN;  // exact frame index
      
      text_shame.setAutoDraw(true);
    }

    // *text_anger_self* updates
    if (t >= 0.0 && text_anger_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_anger_self.tStart = t;  // (not accounting for frame time here)
      text_anger_self.frameNStart = frameN;  // exact frame index
      
      text_anger_self.setAutoDraw(true);
    }
    
    // *text_contempt_self* updates
    if (t >= 0.0 && text_contempt_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_contempt_self.tStart = t;  // (not accounting for frame time here)
      text_contempt_self.frameNStart = frameN;  // exact frame index
      
      text_contempt_self.setAutoDraw(true);
    }

    
    // *text_contempt_friend* updates
    if (t >= 0.0 && text_contempt_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_contempt_friend.tStart = t;  // (not accounting for frame time here)
      text_contempt_friend.frameNStart = frameN;  // exact frame index
      
      text_contempt_friend.setAutoDraw(true);
    }

    
    // *text_anger_friend* updates
    if (t >= 0.0 && text_anger_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_anger_friend.tStart = t;  // (not accounting for frame time here)
      text_anger_friend.frameNStart = frameN;  // exact frame index
      
      text_anger_friend.setAutoDraw(true);
    }

    
    // *text_no_feeling* updates
    if (t >= 0.0 && text_no_feeling.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_no_feeling.tStart = t;  // (not accounting for frame time here)
      text_no_feeling.frameNStart = frameN;  // exact frame index
      
      text_no_feeling.setAutoDraw(true);
    }

    // *mouse_feeling* updates
    if (t >= 0.0 && mouse_feeling.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_feeling.tStart = t;  // (not accounting for frame time here)
      mouse_feeling.frameNStart = frameN;  // exact frame index
      
      mouse_feeling.status = PsychoJS.Status.STARTED;
      mouse_feeling.mouseClock.reset();
      prevButtonState = mouse_feeling.getPressed();  // if button is down already this ISN'T a new click
      }
      
    if (mouse_feeling.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_feeling.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          mouse_feeling.time.push(mouse_feeling.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [guilt, shame, anger_self, contempt_self, contempt_friend, anger_friend, no_feeling]) {
            if (obj.contains(mouse_feeling)) {
              mouse_feeling.clicked_name.push(obj.name)
            }
          }
 
          // check if selected continue button
          for (const cont_obj of [contFeelings]) {
            if (cont_obj.contains(mouse_feeling)) {
              gotValidClick = true
            }

          }
        }
      }
    }
    
    if (gotValidClick === true && boxCount === 1) { // abort routine on response
            continueRoutine = false;
    }
         
    // *contTextFeelings* updates
    if (t >= 0.0 && contTextFeelings.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contTextFeelings.tStart = t;  // (not accounting for frame time here)
      contTextFeelings.frameNStart = frameN;  // exact frame index
      
      contTextFeelings.setAutoDraw(true);
    }

    
    // *contFeelings* updates
    if (t >= 0.0 && contFeelings.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contFeelings.tStart = t;  // (not accounting for frame time here)
      contFeelings.frameNStart = frameN;  // exact frame index
      
      contFeelings.setAutoDraw(true);
    }

    
    // *progressFeelings* updates
    if (t >= 0.0 && progressFeelings.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressFeelings.tStart = t;  // (not accounting for frame time here)
      progressFeelings.frameNStart = frameN;  // exact frame index
      
      progressFeelings.setAutoDraw(true);
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
    feelingsComponents.forEach( function(thisComponent) {
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

function feelingsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feelings'-------
    feelingsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });

    // store data for thisExp (ExperimentHandler)
    _mouseButtons = mouse_feeling.getPressed();
    psychoJS.experiment.addData('verb_stimulus', verb_stimulus);
    psychoJS.experiment.addData('agency', agency);

    if (mouse_feeling.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_feeling.clicked_name', mouse_feeling.clicked_name);
      psychoJS.experiment.addData('mouse_feeling.time', mouse_feeling.mouseClock.getTime());  
    }
    // the Routine "feelings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var actionsComponents;

function actionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'actions'-------
    t = 0;
    actionsClock.reset(); // clock
    frameN = -1;
    
    // show right order of agency based on agency_stimulus input
    if ((agency === "self")) {
        text_stimulus_4.setText(((((expInfo["your name"] + " ") + verb_stimulus) + " ") + expInfo["your best friend"]));
    } else {
        if ((agency === "other")) {
            text_stimulus_4.setText(((((expInfo["your best friend"] + " ") + verb_stimulus) + " ") + expInfo["your name"]));
        }
    }
    
    // checkbox
    checkbox = [hiding, attack_self, apologising, distance_self, distance_friend, verbal_friend, no_action];
    clicked = [];
    mouseDown = false;
    
    bufferTime = 0.2;
    clickClock = new util.Clock();
    lastClickTime = 0;
    thisClickTime = 0;
    boxCount = 0;
    
    // update component parameters for each repeat
    msgProgress = ((trialCount.toString() + "/54"));
    progressActions.text=msgProgress;

    // setup some python lists for storing info about the mouse_action
    // mouse input 
    mouse_action.time = [];
    mouse_action.clicked_name = [];
    gotValidClick = false; // until a click is received
    
    // store checkboxes as dictionary (to switch between name/object)
    blocks = {};
    blocks['attack_self']=attack_self;
    blocks['distance_self']=distance_self;
    blocks['hiding']=hiding;
    blocks['apologising']=apologising;
    blocks['distance_friend']=distance_friend;
    blocks['verbal_friend']=verbal_friend;
    blocks['no_action']=no_action;
    
    // give blocks color
    for (let items in blocks) {
        if (blocks[items].hasOwnProperty('fillColor')) {
            blocks[items].fillColor = new util.Color('white');
            blocks[items].lineColor = new util.Color('white');
        }
    }
    

    // keep track of which components have finished
    actionsComponents = [];
    actionsComponents.push(text_stimulus_4);
    actionsComponents.push(box_stimulus_4);
    actionsComponents.push(text_actions);
    actionsComponents.push(distance_self);
    actionsComponents.push(attack_self);
    actionsComponents.push(hiding);
    actionsComponents.push(apologising);
    actionsComponents.push(distance_friend);
    actionsComponents.push(verbal_friend);
    actionsComponents.push(no_action);
    actionsComponents.push(text_distance_self);
    actionsComponents.push(text_attack_self);
    actionsComponents.push(text_hiding);
    actionsComponents.push(text_apologising);
    actionsComponents.push(text_distance_friend);
    actionsComponents.push(text_verbal_friend);
    actionsComponents.push(text_no_action);
    actionsComponents.push(mouse_action);
    actionsComponents.push(contTextActions);
    actionsComponents.push(contAction);
    actionsComponents.push(progressActions);
    
    actionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function actionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'actions'-------
    continueRoutine = true; // until we're told otherwise
    // get current time
    t = actionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
       
    // update checkboxes to change colour upon selection
    for (var thisBox, _pj_c = 0, _pj_a = checkbox, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        thisBox = _pj_a[_pj_c];
        if (mouse_action.isPressedIn(thisBox)) {
            thisClickTime = clickClock.getTime();
            if (((thisClickTime - lastClickTime) > bufferTime)) {
                console.log(thisBox.fillColor)
                console.log(thisBox.fillColor['_rgb'])
                if ((thisBox.fillColor['_rgb'][2] !== 0)) {
                    thisBox.fillColor = new util.Color("black");
                    thisBox.lineColor = new util.Color("black");
                    ++boxCount;
                } else {
                    thisBox.fillColor = new util.Color("white");
                    thisBox.lineColor = new util.Color("white");
                    --boxCount;
                }
            }
            lastClickTime = thisClickTime;
        }
    }
    
    // *box_stimulus_4* updates
    if (t >= 0.0 && box_stimulus_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_stimulus_4.tStart = t;  // (not accounting for frame time here)
      box_stimulus_4.frameNStart = frameN;  // exact frame index
      
      box_stimulus_4.setAutoDraw(true);
    }
  
    // *text_stimulus_4* updates
    if (t >= 0.0 && text_stimulus_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_stimulus_4.tStart = t;  // (not accounting for frame time here)
      text_stimulus_4.frameNStart = frameN;  // exact frame index
      
      text_stimulus_4.setAutoDraw(true);
    }

    
    // *text_actions* updates
    if (t >= 0.0 && text_actions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_actions.tStart = t;  // (not accounting for frame time here)
      text_actions.frameNStart = frameN;  // exact frame index
      
      text_actions.setAutoDraw(true);
    }

    
    // *distance_self* updates
    if (t >= 0.0 && distance_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distance_self.tStart = t;  // (not accounting for frame time here)
      distance_self.frameNStart = frameN;  // exact frame index
      
      distance_self.setAutoDraw(true);
    }
    
    // *attack_self* updates
    if (t >= 0.0 && attack_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attack_self.tStart = t;  // (not accounting for frame time here)
      attack_self.frameNStart = frameN;  // exact frame index
     
      attack_self.setAutoDraw(true);
    }

    // *hiding* updates
    if (t >= 0.0 && hiding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hiding.tStart = t;  // (not accounting for frame time here)
      hiding.frameNStart = frameN;  // exact frame index
      
      hiding.setAutoDraw(true);
    }

    
    // *apologising* updates
    if (t >= 0.0 && apologising.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      apologising.tStart = t;  // (not accounting for frame time here)
      apologising.frameNStart = frameN;  // exact frame index
      
      apologising.setAutoDraw(true);
    }

    
    // *distance_friend* updates
    if (t >= 0.0 && distance_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distance_friend.tStart = t;  // (not accounting for frame time here)
      distance_friend.frameNStart = frameN;  // exact frame index
      
      distance_friend.setAutoDraw(true);
    }

    
    // *verbal_friend* updates
    if (t >= 0.0 && verbal_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      verbal_friend.tStart = t;  // (not accounting for frame time here)
      verbal_friend.frameNStart = frameN;  // exact frame index
      
      verbal_friend.setAutoDraw(true);
    }

    
    // *no_action* updates
    if (t >= 0.0 && no_action.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_action.tStart = t;  // (not accounting for frame time here)
      no_action.frameNStart = frameN;  // exact frame index
      
      no_action.setAutoDraw(true);
    }

    
    // *text_distance_self* updates
    if (t >= 0.0 && text_distance_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_distance_self.tStart = t;  // (not accounting for frame time here)
      text_distance_self.frameNStart = frameN;  // exact frame index
      
      text_distance_self.setAutoDraw(true);
    }

    // *text_attack_self* updates
    if (t >= 0.0 && text_attack_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_attack_self.tStart = t;  // (not accounting for frame time here)
      text_attack_self.frameNStart = frameN;  // exact frame index
      
      text_attack_self.setAutoDraw(true);
    }

    // *text_hiding* updates
    if (t >= 0.0 && text_hiding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hiding.tStart = t;  // (not accounting for frame time here)
      text_hiding.frameNStart = frameN;  // exact frame index
      
      text_hiding.setAutoDraw(true);
    }

    
    // *text_apologising* updates
    if (t >= 0.0 && text_apologising.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_apologising.tStart = t;  // (not accounting for frame time here)
      text_apologising.frameNStart = frameN;  // exact frame index
      
      text_apologising.setAutoDraw(true);
    }

    
    // *text_distance_friend* updates
    if (t >= 0.0 && text_distance_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_distance_friend.tStart = t;  // (not accounting for frame time here)
      text_distance_friend.frameNStart = frameN;  // exact frame index
      
      text_distance_friend.setAutoDraw(true);
    }

    
    // *text_verbal_friend* updates
    if (t >= 0.0 && text_verbal_friend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_verbal_friend.tStart = t;  // (not accounting for frame time here)
      text_verbal_friend.frameNStart = frameN;  // exact frame index
      
      text_verbal_friend.setAutoDraw(true);
    }

    
    // *text_no_action* updates
    if (t >= 0.0 && text_no_action.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_no_action.tStart = t;  // (not accounting for frame time here)
      text_no_action.frameNStart = frameN;  // exact frame index
      
      text_no_action.setAutoDraw(true);
    }

    // *mouse_action* updates
    if (t >= 0.0 && mouse_action.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_action.tStart = t;  // (not accounting for frame time here)
      mouse_action.frameNStart = frameN;  // exact frame index
      
      mouse_action.status = PsychoJS.Status.STARTED;
      mouse_action.mouseClock.reset();
      prevButtonState = mouse_action.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_action.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_action.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          mouse_action.time.push(mouse_action.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [distance_self, attack_self, hiding, apologising, distance_friend, verbal_friend, no_action]) {
            if (obj.contains(mouse_action)) {
              mouse_action.clicked_name.push(obj.name)
            }
          }

        for (const cont_obj of [contAction]) {
            if (cont_obj.contains(mouse_action)) {
                gotValidClick = true;
              }

          }
        }
      }
    }
    
    if (gotValidClick === true && boxCount === 1) { // abort routine on response
            continueRoutine = false;
    }

    // *contTextActions* updates
    if (t >= 0.0 && contTextActions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contTextActions.tStart = t;  // (not accounting for frame time here)
      contTextActions.frameNStart = frameN;  // exact frame index
      
      contTextActions.setAutoDraw(true);
    }

    
    // *contAction* updates
    if (t >= 0.0 && contAction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contAction.tStart = t;  // (not accounting for frame time here)
      contAction.frameNStart = frameN;  // exact frame index
      
      contAction.setAutoDraw(true);
    }

    
    // *progressActions* updates
    if (t >= 0.0 && progressActions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressActions.tStart = t;  // (not accounting for frame time here)
      progressActions.frameNStart = frameN;  // exact frame index
      
      progressActions.setAutoDraw(true);
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
    actionsComponents.forEach( function(thisComponent) {
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

function actionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'actions'-------
    actionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseButtons = mouse_action.getPressed();
    
    if (mouse_action.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_action.clicked_name', mouse_action.clicked_name);
      psychoJS.experiment.addData('mouse_action.time', mouse_action.mouseClock.getTime());
    }
    // the Routine "actions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var thanksComponents;

function thanksRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;

    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanksText);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

var frameRemains;

function thanksRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanksText* updates
    if (t >= 0.0 && thanksText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanksText.tStart = t;  // (not accounting for frame time here)
      thanksText.frameNStart = frameN;  // exact frame index
      
      thanksText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((thanksText.status === PsychoJS.Status.STARTED || thanksText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      thanksText.setAutoDraw(false);
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
    thanksComponents.forEach( function(thisComponent) {
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

function thanksRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thanks'-------
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
