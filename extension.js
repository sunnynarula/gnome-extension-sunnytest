const St = imports.gi.St; //For UI Elements such as button
const Main = imports.ui.main; //For UI Elements such as panel

let panelButton, panelButtonText;

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
}

function disable() {
    //Remove button from Main panel's left box
    Main.panel._leftBox.remove_child(panelButton);
}

