var sc_AnSceneNodehall3_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door2.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("hall2");
});
}


{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door4.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("hall4");
});
}

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.artifact.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("creds");
});
}

};
var sc_AnSceneNodehall2_0_0_fn = function() {



{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.button.addEventListener(AnEvent.CLICK, function() {

//Makes the specified object visible or invisible
_this.fake_wall.visible = false;
_this.nextDoor.visible = true;
_this.fake_wall.y = -1000;
});
}

{
var _this = this;

//Makes the specified object visible or invisible
_this.tip.visible = false;
_this.nextDoor.visible = false;
}


{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.fake_wall.addEventListener(AnEvent.CLICK, function() {

//Makes the specified object visible or invisible
_this.tip.visible = true;
});
}


{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.nextDoor.addEventListener(AnEvent.CLICK, function() {

//Go to next scene and play
anWebgl.nextScene();
});
}
{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door1.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("hall1");
});
}

};
var sc_AnSceneNodehall1_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door2.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("hall2");
});
}


{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.stairsDoor.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("stairs");
});
}

};
var sc_AnSceneNodestairs_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.stairs.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("hall1");
});
}

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.outside.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("entrance");
});
}

};
var sc_AnSceneNodeentrance_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.entrance.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("stairs");
});
}

};
