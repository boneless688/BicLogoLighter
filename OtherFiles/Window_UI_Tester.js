var master = new Window("dialog")
master.maximumSize.height = 800
master.maximumSize.width = 1500












var big = master.add("panel", undefined, "")
big.orientation = "row"






var topPart = big.add("group")
topPart.orientation = "column"

var alpha = topPart.add("panel")
alpha.preferredSize.width = 50
alpha.preferredSize.height = 20

var bravo = topPart.add("panel")
bravo.preferredSize.width = 50
bravo.preferredSize.height = 20

var charlie = topPart.add("panel")
charlie.preferredSize.width = 50
charlie.preferredSize.height = 20











var topPart2 = big.add("group")
topPart2.orientation = "row"

var alpha = topPart2.add("panel")
alpha.preferredSize.width = 40
alpha.preferredSize.height = 40

var bravo = topPart2.add("panel")
bravo.preferredSize.width = 40
bravo.preferredSize.height = 40

var charlie = topPart2.add("panel")
charlie.preferredSize.width = 40
charlie.preferredSize.height = 40





var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")


master.show()