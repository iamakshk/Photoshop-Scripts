#target photoshop
app.bringToFront();

// Check if document is open
if (app.documents.length === 0) {
    alert("No open document found. Please open a document with text layers.");
    exit();
}

// Create Dialog Box
var dlg = new Window("dialog", "Change Text Case");
dlg.orientation = "column";
dlg.alignChildren = "fill";

// Dropdown for case options
dlg.add("statictext", undefined, "Select Case:");
var caseDropdown = dlg.add("dropdownlist", undefined, ["UPPERCASE", "lowercase", "Title Case", "Sentence case"]);
caseDropdown.selection = 0;

// Search text input
dlg.add("statictext", undefined, "Search text (leave empty for all):");
var searchInput = dlg.add("edittext", undefined, "");
searchInput.characters = 25;

// Apply to which layers
dlg.add("statictext", undefined, "Apply to:");
var radioGroup = dlg.add("group");
radioGroup.orientation = "row";
var currentLayerBtn = radioGroup.add("radiobutton", undefined, "Current Layer");
var allLayersBtn = radioGroup.add("radiobutton", undefined, "All Text Layers");
currentLayerBtn.value = true;

// OK & Cancel buttons
var btnGroup = dlg.add("group");
btnGroup.orientation = "row";
var okBtn = btnGroup.add("button", undefined, "OK");
var cancelBtn = btnGroup.add("button", undefined, "Cancel");

// Case conversion functions
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function changeCase(text, type) {
    switch(type) {
        case "UPPERCASE": return text.toUpperCase();
        case "lowercase": return text.toLowerCase();
        case "Title Case": return toTitleCase(text);
        case "Sentence case": return toSentenceCase(text);
    }
    return text;
}

// Apply case to a text layer
function applyCaseToLayer(layer, searchText, caseType) {
    if (layer.kind === LayerKind.TEXT) {
        var textItem = layer.textItem;
        var content = textItem.contents;

        if (searchText && searchText.length > 0) {
            var regex = new RegExp(searchText, "gi");
            content = content.replace(regex, function(match) {
                return changeCase(match, caseType);
            });
        } else {
            content = changeCase(content, caseType);
        }

        textItem.contents = content;
    }
}

// OK button action
okBtn.onClick = function() {
    var caseType = caseDropdown.selection.text;
    var searchText = searchInput.text;
    var applyAll = allLayersBtn.value;

    if (applyAll) {
        for (var i = 0; i < app.activeDocument.layers.length; i++) {
            var layer = app.activeDocument.layers[i];
            try {
                applyCaseToLayer(layer, searchText, caseType);
            } catch(e) {}
        }
    } else {
        var layer = app.activeDocument.activeLayer;
        if (layer.kind === LayerKind.TEXT) {
            applyCaseToLayer(layer, searchText, caseType);
        } else {
            alert("Selected layer is not a text layer.");
        }
    }

    dlg.close();
};

// Cancel button action
cancelBtn.onClick = function() {
    dlg.close();
};

// Show dialog
dlg.show();
