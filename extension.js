const St = imports.gi.St; //For UI Elements such as button
const Main = imports.ui.main; //For UI Elements such as panel

let panelButton, panelButtonText;

function init() {
    panelButton = new St.Bin({
        style_class : "panel-button"
    });
    panelButtonText = new St.Label({
        style_class : "examplePanelText",
        text : "Starting..."
    });
    panelButton.set_child(panelButtonText);
}

function enable() {
    Main.panel._leftBox.insert_child_at_index(panelButton, 1);
}

function disable() {
    Main.panel._leftBox.remove_child(panelButton);
}

