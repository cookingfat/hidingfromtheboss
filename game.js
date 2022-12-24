//#region Chapters
const startScene = {
  title: "Your day begins...",
  text: "Another day at the office..... You sit at your desk contemplating life and trying to think of a way to skive off work. You've had an awful day and Tony is coming to check on you. What do you do?",
  typed: "yes",
  choices: [
    {
      text: "Hide under the desk",
      nextScene: "underdesk",
      action: incrementWrapLow,
      update: "yes",

    },
    {
      text: "Pretend you are on a call",
      nextScene: 'pretend',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Walk off and pretend you are on a break",
      nextScene: 'onbreak',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go and talk to your mate",
      nextScene: 'mate',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};




const desk2Scene = {
  title: "Back at your desk...", // THIS SETS THE GAME SCENE TITLE
  text: "You sheepishly go back to your chair and sit down. You really need a vape,  but Tony is still on the prowl.  What do you do next?",  // this shows the text in the scene
  choices: [
    {
      text: "Hide under the desk",        // this is the button text
      nextScene: "underdesk",             // this is the id of the next scene
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Pretend you are on a call",
      nextScene: 'pretend',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Walk off and pretend you are on a break",
      nextScene: 'onbreak',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go and talk to your mate",
      nextScene: 'mate',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const underdeskScene = {
  title: "Under the desk",
  text: "Thinking that no one can see you, you casually get off your chair, and crawl under the desk and hide.  Tony walks right up to you and sees you under the desk. Do you really think he is that stupid?",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'start',
      action: NoAction,
      update: "yes"

    }
  ]
};

const onbreakScene = {
  title: "Nice try....",
  text: "Tony wonders where you are going, goes back to his desk and checks Verint and realises your break is not due for another 45 minutes!",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};

const mateScene = {
  title: "They're busy",
  text: "You walk over to speak to your mate.  They've just come off a call, so you talk about your day so far and what you're up to this weekend.  You should really get some work done, but you really don't feel up to it.  Do you...",
  choices: [
    {
      text: "Carry on talking to your mate",
      nextScene: 'mate2',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};

const mate2Scene = {
  title: "having a chat",
  text: "You continue to chat to your mate.  You talk about the new God of War game and how you can't wait to get home and play it.  You should really get some work done, but you really don't feel up to it.  Do you...",
  choices: [
    {
      text: "Chat a little more",
      nextScene: 'mate3',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};

const mate3Scene = {
  title: "still chatting...",
  text: "You chat to your mate for a bit longer.  You talk about the world cup, about how good a player Lionel Messi is.  Your wrap is going up and up.  Do you...",
  choices: [
    {
      text: "Talk even more",
      nextScene: 'mate4',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};

const mate4Scene = {
  title: "dragging it out...",
  text: "You talk about work for a bit and the astronomical price increase in 2023. Your wrap is continuing to increase and you should really, really get some work done,  Do you...",
  choices: [
    {
      text: "Keep Chatting",
      nextScene: 'mate5',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};

const mate5Scene = {
  title: "A kind gesture",
  text: "You continue to chat to your mate.......   Suddenly, they remember they owe you some money for that pint you bought at the pub last week.  They reach into their pocket and pull out £2.50 and hand it to you.  Your mate has a meeting in 5 minutes, so they say they need to go.",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'moneyitem',
      action: NoAction,
      update: "yes"

    }
  ]
};
const pretendScene = {
  title: "On a call?",
  text: `You quickly pull up an account in iCare and say to absolutely no one, "I am sorry to hear that Mrs Collins, you will have this amount refunded from your next bill...." Tony thinks you are working so walks off into the break room instead to warm up his salmon and asparagus. You are feeling cocky and try and sneak off for a quick vape, what do you do next?`,
  choices: [
    {
      text: "Make your way outside",
      nextScene: 'walkoff',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go to the toilet and have a vape",
      nextScene: 'toilet',
      action: incrementWrapMed,
      update: "yes"
    },

    {
      text: "Go to the break room and have a vape",
      nextScene: 'breakroom',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};
const walkoffScene = {
  title: "Which way?",
  text: "As you get up from your desk, you wonder which way to go. Do you take the stairs or the lift?",
  choices: [
    {
      text: "Take the stairs",
      nextScene: 'stairs',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Take the lift",
      nextScene: 'lift',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};
const toiletScene = {
  title: "In the toilet",
  text: "You go into personal and walk to the toilet. nobody else is here, so you pull out your mod and take a huge vape. Clouds of vapour come out through the door and fill the call centre.  Everyone thinks there is a fire and Tony comes in and finds you. You do the walk of shame back to your desk and get a sneaky feeling you are going to get another file note for this",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const breakroomScene = {
  title: "The Break Room",
  text: "You walk in the break room and start vaping.  WHAT ARE YOU DOING VAPING INSIDE?  And you walked right into the break room where you I literally just told you Tony went to.   Omg you suck at this.",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};

const endScene = {
  title: "YOU FACKING DID IT",
  text: "You have reached the end of the game. Thanks for playing!",
  choices: []
};


const stairsScene = {
  title: "In the stairwell?",
  text: "As the stairwell is closest to your desk, you figure that will be the best escape route.  You sneak off and start walking down the stairs and wonder if you could risk it and use the fire exit for an even quicker escape. What do you do?",
  choices: [
    {
      text: "Go through the fire exit",
      nextScene: 'fireexit',
      action: incrementWrapMed,
      update: "yes"

    },
    {
      text: "Go through the door",
      nextScene: 'floor1alt2',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const fireexitScene = {
  title: "You're free!",
  text: "You push the bar on the fire exit door and it opens. As you begin to walk up to the shelter, you remember that the fire doors are alarmed and you will set off the alarm.  What do you do?",
  choices: [
    {
      text: "B",
      nextScene: "desk2",
      action: NoAction,
      update: "yes"
    },

  ]
};

const liftScene = {
  title: "In the lift",
  text: "You step into the lift, press the button for the first floor and wait for the doors to close. It looks like no one noticed and you let out a sigh of relief. As you descend in the lift, suddenly you hear a groan from the lift shaft and an awful sound of metal on metal.  The lift grinds to a halt and a wave of panic washes over you. What do you do?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait1',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const alarmScene = {
  title: "You press the emergency button....",
  text: `"... and hear a loud "Dring".  You wait for what seems like eternity and just as you are about to give it another press, you suddenly hear a voice saying "hello?" You recognise Steve's voice and feel relieved that he is there.  He asks you what is wrong and you tell him that the lift has stopped.  He says he will be right there and you wait for him to arrive.`,
  choices: [
    {
      text: "Wait for Steve",
      nextScene: 'waitsteve',
      action: incrementWrapLow,
      update: "yes"

    },
  ]
};
const waitsteveScene = {
  title: "You wait.....",
  text: "After what seems like forever, Steve finally arrives with a crew of Firemen. They use their power tools to open the lift doors and you are finally free. You've been in the lift for so long that your shift has ended and you go home. You'll probably get another file note for this, but you don't care.  Due to your poor decision making, you lose the game.  Better luck next time!",
  choices: [
    {
      text: "Try again?",
      nextScene: 'start',
      action: reload,
      update: "yes"
    },

  ]
};

const wait1Scene = {
  title: "Still in the lift",
  text: "You wait and wait, but the lift doesn't start moving again.  You start to panic and wonder what to do.  You could press the emergency button, but you don't want to waste the Fire Brigade's time.  What do you do?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait2',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const wait2Scene = {
  title: "You wait longer..",
  text: "You carry on waiting and waiting, but the lift doesn't start moving again.  You really want to get out of here.  What do you do?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait3',
      action: incrementWrapMed,
      update: "yes"
    }
  ]
};

const wait3Scene = {
  title: "still waiting......",
  text: "You carry on waiting and waiting, and waiting, but the lift is not budging.  You start to feel a bit claustrophobic and you can't help but think that you should have taken the stairs.  Do you press the emergency button?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait4',
      action: incrementWrapMed,
      update: "yes"

    }
  ]
};

const wait4Scene = {
  title: "still waiting......",
  text: "You carry on waiting and waiting, and waiting, and waiting, but the lift is STILL not budging.  You are really worried now.  the claustrophobia is getting worse and your wrap is just increasing.  Do you press the emergency button?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'floor1',
      action: incrementWrapMed,
      update: "yes"
    }
  ]
};

const floor1Scene = {
  title: "still waiting......",
  text: "Sat on the floor of the lift, you almost fall asleep when suddenly you hear a loud bang and the lift starts moving again.  It creaks and groans until you hit the bottom with a thud and miraculously, the doors open.  You are so relieved that you almost cry.  You get out of the lift and you're on the first floor.  Mick the cleaner is coming towards you and looks like he wants to tell you something. What do you do next?",
  choices: [
    {
      text: "Talk to Mick",
      nextScene: 'mick',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Go into the canteen",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Hide in the cinema room",
      nextScene: 'cinema',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Head outside",
      nextScene: 'maindoor',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const floor1alt2Scene = {
  title: "Into Sitel territory...",
  text: "You were tempted to sneak off through the fire exit, but you carry on through the stairwell, through the door and onto the first floor. Mick the cleaner is coming towards you and looks like he wants to tell you something. What do you do next?",
  choices: [
    {
      text: "Talk to Mick",
      nextScene: 'mick',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Go into the canteen",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Hide in the cinema room",
      nextScene: 'cinema',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Head outside",
      nextScene: 'maindoor',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const mickScene = {
  title: "You talk to Mick, the cleaner",
  text: "conversation with Mick.......",
  choices: [
    {
      text: "carry on talking to Mick",
      nextScene: 'mick2',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "carry on what you were doing",
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};

const mick2Scene = {
  title: "You carry on talking to Mick...",
  text: "further conversation with Mick.......",
  choices: [
    {
      text: "carry on talking to Mick",
      nextScene: 'mick3',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "carry on what you were doing",
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};

const mick3Scene = {
  title: "You carry on talking to Mick...",
  text: "3rd conversation with Mick.......",
  choices: [
    {
      text: "carry on what you were doing",
      nextScene: 'floor1alt',
      action: incrementWrapHigh,
      update: "yes"
    },
  ]
};


const floor1altScene = {
  title: "still waiting......",
  text: "Feeling exhausted after your conversation with Mick, You realise you wrap has gone up massively and you still haven't been out for a vape.  What do you do next?",
  choices: [
    {
      text: "Go into the canteen",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Hide in the cinema room",
      nextScene: 'cinema',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Head outside",
      nextScene: 'maindoor',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};

const canteenScene = {
  title: "In the canteen",
  text: "You walk into the canteen, you see the vending machines and Lindsay smiles and says hello to you. Some of your mates sat at a table.  What now?",
  choices: [
    {
      text: "Talk to Lindsay",
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Talk to your mates",
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Buy a coffee from the vending machine",  // if you have money
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};

const cinemaScene = {
  title: "In the cinema room",
  text: "You decide to duck into the cinema room and sit down. You put your feet up and chill in the darkness and the next thing you know, you're fast asleep.............",
  choices: [
    {
      text: "Zzzzzzz",
      nextScene: 'zzz',
      action: incrementWrapHigh,
      update: "yes"
    },
  ]
};

const zzzScene = {
  title: "Dreaming....",
  text: "Suddenly, you wake up to the sound of the cinema room door opening and you open your eyes and see Tony stood in the doorway with his arms folded.  He doesn't look happy as he tells you you've been gone for 4 hours!!  You've really gone and done it this time...",
  choices: [
    {
      text: "Zzzzzzz",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"
    },
  ]
};

const CMUS = {
  title: "Pick an aid",
  text: "Pick carefully. You only get one. This will take you back to the start but all items and progress are saved",
  choices: [
    {
      text: "Reset Wrap",
      nextScene: "desk2",
      action: resetWrap,
      update: "yes"

    },
    {
      text: "Remove 1 File Note",
      nextScene: "desk2",
      action: RemoveFileNote,
      update: "yes"

    },
  ]
};


const maindoorScene = {
  title: "You head towards the exit",
  text: "You put your head down and walk past the canteen and towards the main exit.  As you turn the corner you bump into Tony.  He asks what you've been doing....",
  choices: [
    {
      text: "Tell him you've been trying to skive off",
      nextScene: 'skive',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Make up another excuse",
      nextScene: 'excuse',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Tell him you went to buy him a coffee",  // need to only show this option if you have the coffee
      nextScene: 'coffee',
      action: NoAction,
      update: "yes"
    },
  ]
};

const skiveScene = {
  title: "The confession",
  text: "You be honest and tell Tony you've been trying to skive off.  He's not happy, but appreciates your honesty and sends you back to your desk and decides not to give you a file note this time.",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"
    }
  ]
};

const excuseScene = {
  title: "The excuse",
  text: "You tell Tony that you've been doing an errand for Hazel. You try and make something up about a first aid kit, but you fumble your words and Tony sees right through your lie.  Lying to Tony is a big no no.  As you walk back to your desk, you're pretty sure Tony will be giving you a file note for this one.",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"
    }
  ]
};

const coffeeScene = {
  title: "The bribe",
  text: `As you look at Tony, you feel the hot coffee in your hand and have a genius plan. "Just went to get you a coffee, Boss..." you proudly say as you thrust out your hand and pass Tony the coffee that you just bought from the canteen. `,
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"
    }
  ]
};


const TakeACallScene = {
  title: "Agent : Hello , how can i help?",
  text: "going to the exit.....",
  choices: [
    {
      text: "not sure yet",
      nextScene: 'notdefinedyet',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};

const filenoteScene = {
  title: "YOU GOT A FILE NOTE!!!",
  text: "Tony gives you a file note for being such an idiot. You silly sausage.  You can now go back to your desk and get on with your work.",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};


const ITIssueItemScene = {
  title: "YOU GOT A NEW ITEM!!!",
  text: "You have got a an IT issue item. You can use this to persuade a TM that the high wrap was becuase of IT issues and they will magically remove your wrap! Use this carefully as you can only use it once",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'start',
      action: ITIssuesItem,
      update: "yes"

    }
  ]
};

const MoneyItemScene = {
  title: "YOU GOT A NEW ITEM!!!",
  text: "Your mate gives you £2.50!",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'start',
      action: AddMoneyItem,
      update: "yes"

    }
  ]
};
//#endregion
//#region Dev Menu
const testScene = {
  title: "DEV MENU ",
  text: "-------- Dev Configuration Utility --------",
  choices: [
    {
      text: "Start Scene",
      nextScene: "start",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Pretend Scene",
      nextScene: "pretend",
      action: NoAction,
      update: "yes"
    },
    {
      text: "On Break Scene",
      nextScene: "onbreak",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Underdesk Scene ",
      nextScene: "underdesk",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Off To See A Mate",
      nextScene: "mate",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 2 scene",
      nextScene: "mate2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 3 scene",
      nextScene: "mate3",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 4 scene",
      nextScene: "mate4",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 5 scene",
      nextScene: "mate5",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go To Desk2 Scene",
      nextScene: "desk2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Walkoff Scene",
      nextScene: "walkoff",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Toilet Scene",
      nextScene: "toilet",
      action: NoAction,
      update: "yes"
    }, {
      text: "Breakroom Scene",
      nextScene: "breakroom",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Stairs Scene",
      nextScene: "stairs",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go In Lift Scene",
      nextScene: "lift",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait1 Scene",
      nextScene: "wait1",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait2 Scene",
      nextScene: "wait1",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait3 Scene",
      nextScene: "wait3",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait4 Scene",
      nextScene: "wait4",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Pressing the emergency button Scene",
      nextScene: "alarm",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Waiting for Steve Scene",
      nextScene: "waitsteve",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Fire Exit Scene",
      nextScene: "fireexit",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Floor 1 Scene",
      nextScene: "floor1",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Floor 1 alternative Scene",
      nextScene: "floor1alt",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mick Scene",
      nextScene: "mick",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mick2 Scene",
      nextScene: "mick2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mick3 Scene",
      nextScene: "mick3",
      action: NoAction,
      update: "yes"
    },
    {
      text: "canteen Scene",
      nextScene: "canteen",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Cinema room Scene",
      nextScene: "cinema",
      action: NoAction,
      update: "yes"
    },

    {
      text: "Add Wrap",
      nextScene: "dev",
      action: incrementWrapLow,
      update: "no"

    },
    {
      text: "Reset Wrap",
      nextScene: "dev",
      action: resetWrap,
      update: "no"

    },
    {
      text: "Add File Note",
      nextScene: "dev",
      action: addFilenote,
      update: "no"

    },
    {
      text: "Remove File Note",
      nextScene: "dev",
      action: RemoveFileNote,
      update: "no"

    },
    {
      text: "Reset File Notes",
      nextScene: "dev",
      action: ResetFileNotes,
      update: "no"
    },
    {
      text: "IT Issues",
      nextScene: "dev",
      action: ITIssuesItem,
      update: "yes"
    },

    {
      text: "Take Money",
      nextScene: 'dev',
      action: AddMoneyItem,
      update: "yes"
    },
    {
      text: "Add Coffee Item",
      nextScene: 'dev',
      action: AddCoffeeItem,
      update: "yes"
    },
    {
      text: "Pay For Coffee",
      nextScene: 'dev',
      action: RemoveMoney,
      update: "yes"
    },
    {
      text: "Generate Pin",
      nextScene: 'dev',
      action: createBlackoutPage,
      update: "yes"
    }
  ]
};


createBlackoutPage
//#endregion

const scenes = {
  start: startScene,
  pretend: pretendScene,
  end: endScene,
  dev: testScene,
  onbreak: onbreakScene,
  underdesk: underdeskScene,
  mate: mateScene,
  walkoff: walkoffScene,
  toilet: toiletScene,
  breakroom: breakroomScene,
  stairs: stairsScene,
  lift: liftScene,
  desk2: desk2Scene,
  fireexit: fireexitScene,
  alarm: alarmScene,
  waitsteve: waitsteveScene,
  wait1: wait1Scene,
  wait2: wait2Scene,
  wait3: wait3Scene,
  wait4: wait4Scene,
  mick: mickScene,
  mick2: mick2Scene,
  mick3: mick3Scene,
  floor1: floor1Scene,
  floor1alt: floor1altScene,
  floor1alt2 : floor1alt2Scene,
  canteen: canteenScene,
  maindoor: maindoorScene,
  cinema: cinemaScene,
  TakeACall: TakeACallScene,
  filenote: filenoteScene,
  zzz: zzzScene,
  ITissueItem: ITIssueItemScene,
  mate2: mate2Scene,
  mate3: mate3Scene,
  mate4: mate4Scene,
  mate5: mate5Scene,
  moneyitem: MoneyItemScene,
  CMU: CMUS,
  skive : skiveScene,
  excuse : excuseScene,








};





// Game Setings
window.onload = function () {
  displaySessionId();
};


var currentScene = "start";
var Filenotes = 0;
var WrapCounter = 0;
let ITIssuesUsed = false;
var Hasmoney = false;
var HasUsedMoney = false;
var HasCoffeeItem = false;
var CP = false;
let sessionIdDisplayed = false;

const gameElem = document.getElementById("game");
const sceneElem = document.getElementById("scene");
const WrapCounterElem = document.getElementById("Wrap");
const WrapStyling = document.getElementById("Wrap-Container");
const filesNotesElem = document.getElementById("file-notes-container");
const FileNoteElem = document.getElementById("file-notes");
const titleElement = document.createElement("div");



function render() {

  if (CP) {
    currentScene = "CMU";
    CP = false;
  }

  const scene = scenes[currentScene];
  sceneElem.innerHTML = "";

  // set the colouring for the wrap box
  //#region wrap styling
  if (WrapCounter == null) {
    WrapStyling.style.backgroundColor = "green";
  } else if (WrapCounter < 600) {
    WrapStyling.style.backgroundColor = "green";
  } else if (WrapCounter < 1200) {
    WrapStyling.style.backgroundColor = "orange";
  } else {
    WrapStyling.style.backgroundColor = "red";
  }
  //#endregion


  //#region Filenotes Styling
  // set the colouring for the file note box
  if (Filenotes <= 1 || Filenotes == null) {
    filesNotesElem.style.backgroundColor = "green";
  } else if (Filenotes == 2) {
    filesNotesElem.style.backgroundColor = "orange";
  } else {
    filesNotesElem.style.backgroundColor = "red";
  }
  //#endregion




  // Update the title
  const titleBox = document.querySelector("#title-box");
  titleBox.innerHTML = scene.title;

  const outputElement = document.createElement("div");
  outputElement.id = "output";
  sceneElem.appendChild(outputElement);
  const delay = 1;
  let index = 0;

  const intervalId = setInterval(printCharacter, delay);
  function printCharacter() {

    outputElement.innerHTML += scene.text[index];
    index++;
    if (index >= scene.text.length) {
      clearInterval(intervalId);
      sceneElem.innerHTML += `<div id="choices">`;

      checkAction();

      // check if items have been used and to hide buttons if not. 
      scene.choices = scene.choices.filter(choice => {
        console.log(HasCoffeeItem);
        return (choice.text !== "IT Issues" || !ITIssuesUsed) && (choice.text !== "Take Money" || !Hasmoney) && (choice.text !== "Keep Chatting" || !Hasmoney) && (choice.text !== "Pay For Coffee" || !HasUsedMoney) && (choice.text !== "Tell him you went to buy him a coffee" || HasCoffeeItem);
      });




      scene.choices.forEach(choice => {
        const button = document.createElement("button");  // dev button thing
        button.textContent = choice.text;
        button.classList.add("choice");
        if (currentScene === "dev") {
          button.classList.add("dev-button");
        }

  
        button.addEventListener("click", () => { // this does the action of yes or no. 
          if (choice.update === "yes") {
            choice.action();
            currentScene = choice.nextScene;
            render();
          } else if (choice.update === "no") {
            choice.action();
          }
        });
        sceneElem.appendChild(button);
      });
    }
  }
}



render();



// END OF MAIN GAME 


// GAME FUNDAMENTAL THINGYS.



function checkAction() {
  if (currentScene.hasOwnProperty('action')) {
    eval(currentScene.action);
  }
}

function NoAction() {
}

function reload() {
  location.reload();
}



// INVENTORY!
function ITIssuesItem() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "#";  // Set the href attribute of the link element to "#"
  a.textContent = "IT Issues";  // Set the text content of the link element
  a.addEventListener("click", resetWrap);  // Add a click event listener to the link element that calls the resetWrap function
  li.appendChild(a);  // Add the link element to the list item element
  ITIssuesUsed = true;

  function removeITissues(event) {
    const item = event.target;
    if (item.tagName === "A") {
      const li = item.parentElement;
      li.removeChild(item);
      const inventoryList = document.getElementById("inventory-box");
      inventoryList.removeChild(li);
    }
  }
  a.addEventListener("click", removeITissues);  // Add a click event listener to the link element that calls the removeItem function
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
}




function displaySessionId() {
  let sessionIdDisplayed = false; // 

  if (!sessionIdDisplayed) {
    const sessionId = Math.floor(Math.random() * 10000000000000000);
    const sessionIdElement = document.createElement("div");
    var TrueID = Math.round(sessionId)
    sessionIdElement.style.position = "fixed";
    sessionIdElement.style.bottom = "0";
    sessionIdElement.style.left = "0";
    document.body.appendChild(sessionIdElement);
    if (TrueID % 2 == 0) {
      sessionIdElement.innerHTML = "Session ID: " + TrueID;
    } else {
      TrueID++
      sessionIdElement.innerHTML = "Session ID: " + TrueID;
    }
    sessionIdDisplayed = true;
    let UPI = Math.floor(TrueID / 100000000);
    let IPU = Math.floor(UPI / 60)
    document.getElementById("ConfirmPin").addEventListener("click", function () {
      var conf = document.getElementsByName("pb"); // Get the text input field
      console.log(IPU);
      let pinInput = document.getElementById("pin");
      if (pinInput.value == IPU) {
        var helpPage = document.getElementById("helpButton");
        document.getElementById("helpButton").style.visibility = "hidden";
        var helpPage = document.getElementById("helpPage");
        helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";
        // true statement
        CP = true;
        render();
      } else {
        //false statement. i.e incorrect pin.

      }
    });
  }
}
document.getElementById("helpButton").addEventListener("click", function () {
  var helpPage = document.getElementById("helpPage");
  helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";
});
document.getElementById("closeButton").addEventListener("click", function () {
  var helpPage = document.getElementById("helpPage");
  helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";
});



function AddMoneyItem() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "Money £2.50";  // Set the href attribute of the link element to "Money £2.50"
  a.textContent = "Money £2.50";  // Set the text content of the link element
  a.style.pointerEvents = "none";
  li.appendChild(a);  // Add the link element to the list item element
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
  Hasmoney = true
  mateScene.text = 'Hey, I cant talk right now! I have a meeting ! Sorry..';
  mateScene.title = 'Your friend seems annoyed'
 

  mate2Scene.text = 'Your friend seems annoyed Do you talk or go back to your desk?';
  mate2Scene.title = 'Annoyed Friend'

  mate3Scene.text = 'Your friend has ignored you. What do you do now?';
  mate3Scene.title = 'You are ignored'

  mate4Scene.text = 'You wait for your friend to reply but they are too busy. Whilst waiting you realise your wrap has gone even higher! You best go back!';
  mate4Scene.title = 'You are blanked...'

}

function RemoveMoney() {
  const item = document.querySelector("#inventory-box li a[href='Money £2.50']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove();
    HasUsedMoney = true;
    AddCoffeeItem()
  }
}

function AddCoffeeItem() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "#";  // Set the href attribute of the link element to "Money £2.50"
  a.textContent = "Large Coffee";  // Set the text content of the link element
  a.style.pointerEvents = "none";
  li.appendChild(a);  // Add the link element to the list item element
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
  HasCoffeeItem = true;
}

function RemoveCoffee() {
  const item = document.querySelector("#inventory-box li a[href='Money £2.50']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove();
    HasCoffeeItem = false;
  }
}



// --------- WRAP


function resetWrap() {
  WrapCounter = 0;
  console.log("Incrementing wrap counter");
  WrapCounterElem.innerHTML = WrapCounter;
}

function incrementWrapLow() {
  console.log("Incrementing wrap counter");
  WrapCounter += Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  WrapCounterElem.innerHTML = WrapCounter;
}

function incrementWrapMed() {
  console.log("Incrementing wrap counter");
  WrapCounter += Math.floor(Math.random() * (75 - 25 + 1)) + 25;
  WrapCounterElem.innerHTML = WrapCounter;
}
function incrementWrapHigh() {
  console.log("Incrementing wrap counter");
  WrapCounter += Math.floor(Math.random() * (180 - 75 + 1)) + 75;
  WrapCounterElem.innerHTML = WrapCounter;
}





// -------- FILE NOTES 
function addFilenote() {
  Filenotes++; //increment the filenotes by 1
  FileNoteElem.innerHTML = Filenotes;
}

function RemoveFileNote() {
  Filenotes -= 1; //reduces the filenotes by 1
  FileNoteElem.innerHTML = Filenotes;
}


function ResetFileNotes() {
  Filenotes = 0;
  FileNoteElem.innerHTML = Filenotes;
}




const popup = document.getElementById("popup");
const inputField = document.getElementById("inputField");
const devMenu = document.getElementById("devMenu");

document.addEventListener("mousedown", event => {
  if (event.ctrlKey) {
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
  }
});

inputField.addEventListener("input", event => {
  if (event.target.value === "dev") {
    devMenu.style.display = "block";
  } else {
    devMenu.style.display = "none";
  }
});

// Dev stuff only

const devMenuLink = document.getElementById("devMenuLink");
devMenuLink.addEventListener("click", event => {
  event.preventDefault(); // prevent the link from navigating to a new page
  currentScene = "dev";
  updateButtonStyle();
});

function updateButtonStyle() {
  if (currentScene === "dev") {
    render();
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.add("button-grid");

    });
  }
}

function createBlackoutPage() {
  let blackout = document.createElement("div");
  blackout.style.position = "absolute";
  blackout.style.top = "0";
  blackout.style.left = "0";
  blackout.style.width = "100%";
  blackout.style.height = "100%";
  blackout.style.backgroundColor = "black";
  blackout.style.opacity = "0.5";
  blackout.style.zIndex = "1000";
  document.body.appendChild(blackout);
  let inputContainer = document.createElement("div");
  inputContainer.style.position = "fixed";
  inputContainer.style.top = "50%";
  inputContainer.style.left = "50%";
  inputContainer.style.transform = "translate(-50%, -50%)";
  inputContainer.style.backgroundColor = "white";
  inputContainer.style.padding = "20px";
  inputContainer.style.borderRadius = "5px";
  inputContainer.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  inputContainer.style.zIndex = "1001";
  document.body.appendChild(inputContainer);
  let inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "pin-input";
  inputField.placeholder = "Enter Session ID";
  inputContainer.appendChild(inputField);
  let button = document.createElement("button");
  button.id = "get-pin-button";
  button.textContent = "Get PIN";
  inputContainer.appendChild(button);


  document.getElementById("get-pin-button").addEventListener("click", function() {
    // Get the value of the input field
    let SID = document.getElementById("pin-input").value;
    let R1 = Math.floor(SID / 100000000);
    let R2 = Math.floor(R1 / 60)
    alert("Generated Pin: " + R2)
  });
}


// END OF DEV STUFF






