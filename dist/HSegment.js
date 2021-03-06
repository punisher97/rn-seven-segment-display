import React from "react";
import { View } from "react-native";
import Arrow from "./Arrow";
import styles from "./styles";
export default function (_a) {
    var width = _a.width, height = _a.height, color = _a.color;
    return (<View style={[
        styles.hsegment,
        {
            width: width,
            height: height,
            backgroundColor: color
        }
    ]}>
      <Arrow size={height} color={color} direction="left"/>
      <Arrow size={height} color={color} direction="right"/>
    </View>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFNlZ21lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvSFNlZ21lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUM1QixPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFROUIsTUFBTSxDQUFDLE9BQU8sV0FBVSxFQUF1QztRQUFyQyxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsZ0JBQUs7SUFDNUMsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDO1FBQ0wsTUFBTSxDQUFDLFFBQVE7UUFDZjtZQUNFLEtBQUssT0FBQTtZQUNMLE1BQU0sUUFBQTtZQUNOLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCO0tBQ0YsQ0FBQyxDQUVGO01BQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDbkQ7TUFBQSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUN0RDtJQUFBLEVBQUUsSUFBSSxDQUFDLENBQ1IsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XHJcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi9BcnJvd1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEhTZWdtZW50UHJvcHMge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9OiBIU2VnbWVudFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxWaWV3XHJcbiAgICAgIHN0eWxlPXtbXHJcbiAgICAgICAgc3R5bGVzLmhzZWdtZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxyXG4gICAgICAgIH1cclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPEFycm93IHNpemU9e2hlaWdodH0gY29sb3I9e2NvbG9yfSBkaXJlY3Rpb249XCJsZWZ0XCIgLz5cclxuICAgICAgPEFycm93IHNpemU9e2hlaWdodH0gY29sb3I9e2NvbG9yfSBkaXJlY3Rpb249XCJyaWdodFwiIC8+XHJcbiAgICA8L1ZpZXc+XHJcbiAgKTtcclxufVxyXG4iXX0=