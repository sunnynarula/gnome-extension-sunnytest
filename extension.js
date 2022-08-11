const St = imports.gi.St; //For UI Elements such as button
const Main = imports.ui.main; //For UI Elements such as panel
const MainLoop = imports.mainloop;

let panelButton, panelButtonText;
let timeout; //Source reference for installing a timeout.
let counter = 0; // An integer for counting stuff

function setButtonText() {
    counter++; //Count
    panelButtonText.set_text( counter.toString() );//Change text of label
    return true; //If we return void or false loop will stop
}

function init() {
    //A new button
    panelButton = new St.Bin({
        style_class : "panel-button"
    });
    //A Label
    panelButtonText = new St.Label({
        style_class : "examplePanelText",
        text : "Starting..."
    });
    //Add label to button
    panelButton.set_child(panelButtonText);
}

function enable() {
    //Add button to in Main panel's left box
    Main.panel._leftBox.insert_child_at_index(panelButton, 1);
    timeout = MainLoop.timeout_add_seconds(1.0, setButtonText); //Launch timeout source code every 1 second which points to setButtonText
}

function disable() {
    MainLoop.source_remove(timeout); //Uninstall timeout source code
    //Remove button from Main panel's left box
    Main.panel._leftBox.remove_child(panelButton);
}

