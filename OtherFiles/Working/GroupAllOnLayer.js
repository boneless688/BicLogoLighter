var group = app.activeDocument.layers.getByName("Art - A").groupItems.add();
//add all path items to group


for (i = 0; i < activeDocument.pathItems.length; i++) {
     app.activeDocument.layers.getByName("Art - A").pathItems[i].moveToEnd(group);
}