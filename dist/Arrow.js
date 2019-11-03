import React from "react";
import { View } from "react-native";
import styles from "./styles";
export var INVERSE_DIRECTION;
(function (INVERSE_DIRECTION) {
    INVERSE_DIRECTION["left"] = "right";
    INVERSE_DIRECTION["right"] = "left";
    INVERSE_DIRECTION["top"] = "bottom";
    INVERSE_DIRECTION["bottom"] = "top";
})(INVERSE_DIRECTION || (INVERSE_DIRECTION = {}));
export var BORDER_COLOR_PROP;
(function (BORDER_COLOR_PROP) {
    BORDER_COLOR_PROP["left"] = "borderLeftColor";
    BORDER_COLOR_PROP["right"] = "borderRightColor";
    BORDER_COLOR_PROP["top"] = "borderTopColor";
    BORDER_COLOR_PROP["bottom"] = "borderBottomColor";
})(BORDER_COLOR_PROP || (BORDER_COLOR_PROP = {}));
export default function (_a) {
    var _b;
    var size = _a.size, color = _a.color, direction = _a.direction;
    return (<View style={[
        styles.arrow,
        (_b = {
                borderWidth: size * 0.5
            },
            _b[BORDER_COLOR_PROP[INVERSE_DIRECTION[direction]]] = color,
            _b[INVERSE_DIRECTION[direction]] = "100%",
            _b)
    ]}/>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJyb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUU5QixNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLG1DQUFjLENBQUE7SUFDZCxtQ0FBYyxDQUFBO0lBQ2QsbUNBQWMsQ0FBQTtJQUNkLG1DQUFjLENBQUE7QUFDaEIsQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLDZDQUF3QixDQUFBO0lBQ3hCLCtDQUEwQixDQUFBO0lBQzFCLDJDQUFzQixDQUFBO0lBQ3RCLGlEQUE0QixDQUFBO0FBQzlCLENBQUMsRUFMVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSzVCO0FBUUQsTUFBTSxDQUFDLE9BQU8sV0FBVSxFQUF1Qzs7UUFBckMsY0FBSSxFQUFFLGdCQUFLLEVBQUUsd0JBQVM7SUFDOUMsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDO1FBQ0wsTUFBTSxDQUFDLEtBQUs7O2dCQUVWLFdBQVcsRUFBRSxJQUFJLEdBQUcsR0FBRzs7WUFDdkIsR0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFHLEtBQUs7WUFDeEQsR0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBRyxNQUFNOztLQUV6QyxDQUFDLEVBQ0YsQ0FDSCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIElOVkVSU0VfRElSRUNUSU9OIHtcclxuICBsZWZ0ID0gXCJyaWdodFwiLFxyXG4gIHJpZ2h0ID0gXCJsZWZ0XCIsXHJcbiAgdG9wID0gXCJib3R0b21cIixcclxuICBib3R0b20gPSBcInRvcFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJPUkRFUl9DT0xPUl9QUk9QIHtcclxuICBsZWZ0ID0gXCJib3JkZXJMZWZ0Q29sb3JcIixcclxuICByaWdodCA9IFwiYm9yZGVyUmlnaHRDb2xvclwiLFxyXG4gIHRvcCA9IFwiYm9yZGVyVG9wQ29sb3JcIixcclxuICBib3R0b20gPSBcImJvcmRlckJvdHRvbUNvbG9yXCJcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFycm93c1Byb3BzIHtcclxuICBzaXplOiBudW1iZXI7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBkaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHsgc2l6ZSwgY29sb3IsIGRpcmVjdGlvbiB9OiBBcnJvd3NQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Vmlld1xyXG4gICAgICBzdHlsZT17W1xyXG4gICAgICAgIHN0eWxlcy5hcnJvdyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogc2l6ZSAqIDAuNSxcclxuICAgICAgICAgIFtCT1JERVJfQ09MT1JfUFJPUFtJTlZFUlNFX0RJUkVDVElPTltkaXJlY3Rpb25dXV06IGNvbG9yLFxyXG4gICAgICAgICAgW0lOVkVSU0VfRElSRUNUSU9OW2RpcmVjdGlvbl1dOiBcIjEwMCVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXX0=